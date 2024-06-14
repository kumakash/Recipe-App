import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;
  constructor(private slService: ShoppingListService) { }
  editMode = false;
  editedItemindex: number;
  subscription: Subscription;
  editedIngredient: Ingredient;

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemindex = index;
        this.editedIngredient = this.slService.getIngredient(index);
        this.editForm.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount
        });
      }
    );
  }

  onAddItem(control: NgForm) {
    const value = control.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.editIngredient(this.editedItemindex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    // this.editMode = false;
    // control.reset();
    this.OnClear();
  }

  OnClear() {
    this.editForm.setValue({
      name: '',
      amount: 0
    });
    this.editMode = false;
  }

  OnDelete() {
    this.slService.deleteIngredient(this.editedItemindex);
    this.OnClear();
  }

}

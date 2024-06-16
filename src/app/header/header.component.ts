import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService){}

  OnSaveData() {
    this.dataStorageService.storeRecipes();
  }

  OnFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}

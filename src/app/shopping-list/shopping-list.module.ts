import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthGurad } from "../auth/auth.guard";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        SharedModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '', component: ShoppingListComponent,
                canActivate: [AuthGurad]
            },
        ])
    ]
})

export class ShoppingListModule { }
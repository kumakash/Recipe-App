import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  sub: Subscription;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService){}

  ngOnInit() {
    this.sub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  OnLogOut() {
    this.authService.logout();
  }

  OnSaveData() {
    this.dataStorageService.storeRecipes();
  }

  OnFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}

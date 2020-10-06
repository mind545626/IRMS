import { Component, OnInit } from '@angular/core';
import { UserService } from "@app/core/services";
import { Observable } from 'rxjs/Observable';
import { User } from '@app/core/models';

@Component({

  selector: 'sa-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.componen.scss']
})

export class NavigationComponent implements OnInit {
  currentUser$: Observable<User>;

  constructor(private userService: UserService) {
    this.currentUser$ = this.userService.userDetails$;
  }

  ngOnInit() {
    // this.user$ = this.userService.getCurrentUser();
  }

  get isAdmin() {
    return this.currentUser$['_value']['Role'] === "Admin";
  }

  get isOfficer() {
    return this.currentUser$['_value']['Role'] == "Admin" || this.currentUser$['_value']['Role'] == "Officer";
  }


}

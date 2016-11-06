import {Component, OnInit, Input} from '@angular/core';
import {AccountApiService} from "./account-api.service";
import {Account} from "./model/account";

@Component({
  selector: 'core-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input("name") name:string;
  @Input("description") description:string;

  public account:Account;

  constructor(private accountService:AccountApiService) {
    this.account = new Account();
    this.name="";
    this.description="";
  }

  ngOnInit() {

  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ProfileComponent} from "./profile.component";
import {AccountApiService} from "./account-api.service";

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccountApiService],
  exports: [ProfileComponent]
})
export class ProfileModule { }

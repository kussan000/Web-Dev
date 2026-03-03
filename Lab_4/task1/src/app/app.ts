import {Component, input, output} from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Comments } from './comments';
import { NgOptimizedImage } from '@angular/common';
import { Image } from './image'
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.css'],
  template: `
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>

      <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
        <label> Name
            <input type="text" formControlName="name"/>
        </label>
        <label> Phone number
            <input type="phoneNumber" formControlName="phoneNumber"/>
        </label>
        <button type="submit" [disabled]="!profileForm.valid">Submit</button>
      </form>
      <br>
      <div>
        <h3>Profile Form</h3>
        <p>Name: {{profileForm.value.name}}</p>
        <p>Phone number: {{profileForm.value.phoneNumber}}</p>
      </div>


    <router-outlet></router-outlet>


  `,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule]
})

export class App {
  city = 'Almaty';
  isLoggedIn = true;
  isServerRunning = false;
  contributors = [{id: 'best', amount: 23000.0}, {id: 'mid', amount: 23223.0}, {id: 'worst', amount: 23221.0}];
  isEditable = false;
  message = 'hidden';
  likesCount = 0;

  likeEvent(amount: number) {
    this.likesCount += amount;
  }
  showSecretMessage() {
    this.message = "Never give up";
  }

  hideSecretMessage() {
    this.message = "hidden";
  }

  handleSubmit() {
    alert(
      this.profileForm.value.name +  ' | ' + this.profileForm.value.phoneNumber
    );
  }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required, Validators.email]),
  })

}



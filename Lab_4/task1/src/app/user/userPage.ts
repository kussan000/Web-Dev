import { Component } from '@angular/core';
import { User } from './user';
import { App } from '../app'

@Component({
  selector: 'app-user-page',
  template: `
  <h1>USER PAGE</h1>

  Hello, dear

  <section> <app-user occupation="Backend Dev"></app-user> </section>  of {{ city }} , {{ 1 + 1 }}


  <h3>The server is running</h3>
  `
  ,
  imports: [User]
})

export class UserPage {
  city = 'Almaty';
}

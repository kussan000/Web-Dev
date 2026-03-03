import { Component } from '@angular/core';
import {Comments} from '../comments';
import {Image} from '../image';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    Comments,
    Image
  ],
  template: `
    <h1>HOME PAGE</h1>
    <section
      (mouseover)="showSecretMessage()"
      (mouseleave)="hideSecretMessage()">
      hover here for a secret message <br>
      secret: {{ message }}
    </section>

    @defer (on viewport) {
      <section>
        <button (click)="like()" ></button>
        <h5>Likes Count: {{ likeCount }} </h5>
      </section>
    } @placeholder (minimum 2s) {
      <p>There will be a like count here</p>
    } @loading (minimum 2s) {
      <p> Loading a like count </p>
    }


    <app-images></app-images>


    <div>
      <h1>Angular feelings</h1>
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly be.
          The Angular community is also filled with amazing contributors and experts that create excellent
          content. The community is welcoming and friendly, and it really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and takes
          care to make us very happy. They genuinely want Angular to be the best framework it can be, and
          they're doing such an amazing job at it, too. This statement comes from my heart and is not at
          all copied and pasted. In fact, I think I'll say these exact same things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly be.
          The Angular community is also filled with amazing contributors and experts that create excellent
          content. The community is welcoming and friendly, and it really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and takes
          care to make us very happy. They genuinely want Angular to be the best framework it can be, and
          they're doing such an amazing job at it, too. This statement comes from my heart and is not at
          all copied and pasted. In fact, I think I'll say these exact same things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly be.
          The Angular community is also filled with amazing contributors and experts that create excellent
          content. The community is welcoming and friendly, and it really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and takes
          care to make us very happy. They genuinely want Angular to be the best framework it can be, and
          they're doing such an amazing job at it, too. This statement comes from my heart and is not at
          all copied and pasted.
        </p>
      </article>

      @defer (on viewport) {
        <app-comments/>
      } @placeholder {
        <p>new comments</p>
      } @loading (minimum 2s) {
        <p>loading comments</p>
      }

    </div>


  `
})

export class HomePage {
  message = 'THE SECRET';
  likeCount = 0;

  showSecretMessage() {
    this.message = 'THE SECRET IS NOW REVEALED';
  }

  hideSecretMessage() {
    this.message = 'THE SECRET';
  }

  like() {
    this.likeCount++;
  }
}

import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-images',
  imports: [NgOptimizedImage],
  template: `

    <li> Dynamic image:
      <img ngSrc="{{imageUrl}}" [alt]="imageAlt" height="100" width="100" priority />
    </li>


    `

})

export class Image {
  imageUrl = '/assets/images/genesis.png';
  imageAlt = 'nice car';
}

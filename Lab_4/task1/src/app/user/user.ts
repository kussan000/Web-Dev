import {Component, input} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  template: ` Username: {{ username }} <br>
              Occupation: {{ occupation() }} <br>
              Favorite club: {{ favoriteClub }} <br>

              <button (click)="showClub()">Show favorite club</button>

              <label  for="club">
                Favorite club:
                <input id="club" type="text" [(ngModel)]="favoriteClub"/>
              </label>



  `,
})

export class User {
  username = 'bigward1';
  favoriteClub = '';
  occupation = input<string>();

  showClub() {
    alert(this.favoriteClub);
  }
}

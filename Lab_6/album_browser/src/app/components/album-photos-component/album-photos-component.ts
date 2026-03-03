import {Component, inject, input, signal} from '@angular/core';
import {AlbumService} from '../../services/album-service';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-album-photos-component',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './album-photos-component.html',
  styleUrl: './album-photos-component.css',
})
export class AlbumPhotosComponent {
  albumService = inject(AlbumService);
  id = input<string | undefined>(undefined);

  albumPhotos = signal<string[]>([]);

  ngOnInit() {
   this.albumService.getAlbumPhotos(Number(this.id())).subscribe({
     next: data => {
       this.albumPhotos.set(data);
     },
     error: err => console.log(err)
   });
  }
}

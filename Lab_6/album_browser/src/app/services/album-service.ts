import {Injectable, inject, signal} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Album} from '../models/album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  http = inject(HttpClient);
  apiUrl = 'https://jsonplaceholder.typicode.com';


  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl + '/albums');
  }

  getAlbumById(id: number) {
    return this.http.get<Album>(this.apiUrl + '/albums/' + id);
  }

  getAlbumPhotos(id: number) {
    return this.http.get<any[]>(this.apiUrl + '/photos/', {
      params: {albumId: id}
    }).pipe(
      map(photos => photos.map(p => p.thumbnailUrl))
    );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Explorateur } from './explorateur';
// import { EXPLORATEURS } from './mock-explorateurs';
import { map, Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ExplorateurService {
  host = 'http://localhost:3000';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getRequestExplorateurs() {
    return this.http.get(`${this.host}/explorateur`).pipe(map((res) => res));
  }


  getRequestExplorateur(id: number) {
    return this.http.get(`${this.host}/explorateur/${id}`).pipe(map((res) => res));
  }

  getExplorateurs(): Observable<unknown> {
    const EXPLORATEURS = this.getRequestExplorateurs()
    const explorateurs = of(EXPLORATEURS)
    this.messageService.add('ExplorateurService: fetched explorateurs');
    return explorateurs;
  }

  getExplorateur(id: number): Observable<unknown> {
    const explorateur = this.getRequestExplorateur(id)
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    // const explorateur = EXPLORATEURS.find(e => e.id === id)!;
    this.messageService.add(`ExplorateurService: fetched explorateur id=${id}`);
    return explorateur;
  }
}

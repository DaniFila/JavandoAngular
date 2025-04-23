import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Stivale} from '../../model/stivale';

@Injectable({
  providedIn: 'root'
})
export class StivaleRepositoryService {

  constructor(private http: HttpClient) {
  }

  getAllStivali(): Observable<Stivale[]> {
    return this.http.get<Stivale[]>("/api/stivali");
  }

  insert(daInserire:Stivale)
  {
    return this.http.post("/api/stivali",daInserire);
  }
}

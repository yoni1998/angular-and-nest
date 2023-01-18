import { Basisgegevens } from './../../../api/src/lib/models/basisgegevens.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasisgegevensService {
  private basisgegevensUrl = 'http://localhost:3333/api/basisgegevens';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private http: HttpClient) {}

  getBasisgegevens(): Observable<Basisgegevens[]> {
    return this.http
      .get<Basisgegevens[]>(this.basisgegevensUrl)
      .pipe(tap((_) => console.log('fetched titles')));
  }

  addBasisgegeven(title: string): Observable<Basisgegevens> {
    return this.http
      .post<Basisgegevens>(this.basisgegevensUrl, title)
      .pipe(
        tap((newTitle: any) =>
          console.log(`added title w/ id=${newTitle.navTitle}`, title)
        )
      );
  }
  removeBasisgeven(id: number): Observable<Basisgegevens> {
    const url = `${this.basisgegevensUrl}/${id}`;

    return this.http
      .delete<Basisgegevens>(url)
      .pipe(tap((_) => console.log(`deleted title with id=${id}`)));
  }
}

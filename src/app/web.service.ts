import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './Produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebService {
  baseURL = 'https://banco-dados-teste.glitch.me/api';

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseURL + '/produtos');
  }

  cadastrarProduto(produto): Observable<any> {
    let body = new HttpParams();
    body = body.set('title', produto.title);
    body = body.set('price', String(produto.price));
    body = body.set('description', produto.description);

    return this.http.post(this.baseURL + '/produtos', body, {
      observe: 'response',
    });
  }

  atualizarProduto(produto): Observable<any> {
    let body = new HttpParams();
    let requestURL = this.baseURL + `/produtos/${produto._id}`;
    body = body.set('title', produto.title);
    body = body.set('price', String(produto.price));
    body = body.set('description', produto.description);

    return this.http.put(requestURL, body, {
      observe: 'response',
    });
  }

  deletarProduto(produto): Observable<any> {
    let requestURL = this.baseURL + `/produtos/${produto._id}`;

    return this.http.delete(requestURL, { observe: 'response' });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Product } from '../product/product';
// import { tap, catchEror } from 'rxjs/operators'


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path="http://localhost:3000"

  // getProduct(): Observable<Product>{
  //  return this.http.get<Product[]>(this.path).pipe
  //  tap(data=>console(JSON.stringify(data))),
  //  catchEror(this.handleError)
  //   }handleError(handleError: any) {
  //   throw new Error('Method not implemented.');
  // }
;


  }


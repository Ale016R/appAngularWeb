import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProducts() {
    this.http.get("https://reqres.in/api/products").subscribe(data => {
      console.log(data);
    });
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  date = new Date();

  addCart() {
    console.log('Añadiendo al carrito');
    this.productClicked.emit(this.product.id);
  }
}

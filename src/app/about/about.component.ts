import { Component } from '@angular/core';
import {CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
  amount: number;
  simgae: string
}
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  products: Product[] = [
    { id: 1, name: 'Product 1', quantity: 1, unitPrice: 1350, amount: 1350, simgae: './assets/images/shoes.jpeg' },
    { id: 2, name: 'Product 2', quantity: 1, unitPrice: 1500, amount: 1500, simgae: './assets/images/shoes1.jpeg' },
    { id: 3, name: 'Product 3', quantity: 1, unitPrice: 850, amount: 850, simgae: './assets/images/shoes2.jpeg' }
  ];
  
  updateQuantityAndAmount(id: number, newQuantity: number): void {
    const product = this.products.find(p => p.id === id);
    if (product && newQuantity >= 0) {
        product.quantity = newQuantity;
        product.amount = product.unitPrice * newQuantity;
        product.simgae = product.simgae;

        this.totalAmount = this.calculateTotalAmount();
    }
    // return 0; // Return a default value if the product is not found or newQuantity is negative
    }

    calculateTotalAmount(): number {
      let totalAmount = 0;
      for (const product of this.products) {
          totalAmount += product.amount;
      }
      return totalAmount;
    }
      totalAmount: number= 0;


   // products: { image: string, name: string, amount: number, quantity: number }[] = [
  //   {
  //     image: 'assets/product1.jpg',
  //     name: 'Product 1',
  //     amount: 10.99,
  //     quantity: 5
  //   },
  //   {
  //     image: 'assets/product2.jpg',
  //     name: 'Product 2',
  //     amount: 20.49,
  //     quantity: 3
  //   },
  //   {
  //     image: 'assets/product2.jpg',
  //     name: 'Product 3',
  //     amount: 20,
  //     quantity: 7
  //   },
  // ];

  // increment = 1;
  // price = 120;
  // public price1 : number = 0;

  // onIncrement(){
    
  //    this.increment = this.increment + 1;

  //    for (let product of this.products) {
  //     this.price1 = product.amount;
  //       if(this.increment == 1){
  //         this.price1 = product.amount;
  //       }else{
  //         this.price1=this.price1 + product.amount;
  //       }
  //     }
  // }
  // onDecrement(){
  //   for (let product of this.products) {
  //       if(this.increment == 1){
  //         this.price1 = product.amount;
  //       }else{
  //         this.increment= this.increment - 1; 
  //         this.price1=this.price1 - this.price;
  //       }
  //   }
  // }
}

import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
    selector:'app-products',
    templateUrl:'./products.component.html'
})
export class ProductsComponent {
    productName ="A Book";
    constructor(){
// setTimeout(() =>
//     {
//         this.productName = "A tree";
//     }, 3000);
    }
}

import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
    selector:'app-products',
    templateUrl:'./products.component.html'
})
export class ProductsComponent {
    productName ="A Book";
    isDisabled =true;
    products =['A book', 'A tree'];

onAdd(){
this.products.push(this.productName);
}

    constructor(){
setTimeout(() =>
    {
        this.productName = "A tree";
        this.isDisabled =false;
    }, 3000);
    }
}

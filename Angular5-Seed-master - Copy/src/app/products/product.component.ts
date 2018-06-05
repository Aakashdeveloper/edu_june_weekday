import {Component, OnInit} from '@angular/core';
import {IProduct} from './product.model';
import { ProductService } from './product.service'

@Component({
    selector:'prod-comp',
    templateUrl:'./product.component.html',
    //styles:['thead{color:red}','h3{color:green}']
    styleUrls:['./product.component.css']
})

export class ProductComponent implements OnInit{
    title:string = "@@@@Product List";
    showTable:boolean=true;
    showImage:boolean=true;
    imageWidth:number = 50;
    filterdata:string;
    errorMessage:string;
    products:IProduct[]

    constructor(private _productService:ProductService){

    }

    toggleImage():void{
        this.showImage = !this.showImage
    }

    ngOnInit():void{
       this._productService.getProducts()
        .subscribe((data) => this.products = data,
                (err) => this.errorMessage = err)
    }

    onDataRecive(message: string):void{
        this.title = "Product List >>>>>>"+message
    }
}


/*
One way
--Data {{}}
--Event ()
--Property []
Two Way [()]

string =""
number =23
boolean = true/false

a coding pattern in which a class receives the instance of object it needs
from external source rather than ceating it 

*/
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BookComponent} from './books.component'
import { ProductComponent } from "./products/product.component";
import { ProductUpperPipe } from "./products/ProductUpper.pipe";
import { AddValuePipe } from "./products/productAddValue.pipe";
import { ProductFilterPipe } from "./products/product-filter.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductService } from "./products/product.service";

@NgModule({
    //All Modules com here
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    //All component and pipe declare here
    declarations:[
        AppComponent,
        BookComponent,
        ProductComponent,
        ProductUpperPipe,
        AddValuePipe,
        ProductFilterPipe,
        StarComponent
    ],
    //One main component come here
    bootstrap:[
        AppComponent
    ],
    //All service come here
    providers:[
        ProductService
    ]
})

export class AppModule{

}


/*
function add(a,b){
    return a+b
}

var add = (a,b) => return a+b
*/
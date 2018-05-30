import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BookComponent} from './books.component'
import { ProductComponent } from "./products/product.component";

@NgModule({
    //All Modules com here
    imports:[
        BrowserModule
    ],
    //All component and pipe declare here
    declarations:[
        AppComponent,
        BookComponent,
        ProductComponent
    ],
    //One main component come here
    bootstrap:[
        AppComponent
    ],
    //All service come here
    providers:[]
})

export class AppModule{

}
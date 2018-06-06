import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router'

import {AppComponent} from './app.component';
import {BookComponent} from './books.component'
import { ProductComponent } from "./products/product.component";
import { ProductUpperPipe } from "./products/ProductUpper.pipe";
import { AddValuePipe } from "./products/productAddValue.pipe";
import { ProductFilterPipe } from "./products/product-filter.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductService } from "./products/product.service";
import { NotFoundComponent } from "./shared/notFound.component";
import { HomeComponent } from "./home/home.component";
import { OrderComponent } from "./orders/order.component";
import { ProductDetailComponent } from "./products/product-detail.component";

@NgModule({
    //All Modules com here
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path:'products', component:ProductComponent},
            {path:'products/:id', component:ProductDetailComponent},
            {path:'orders', component:OrderComponent},
            {path:'home',component:HomeComponent},
            {path:'', redirectTo:'home', pathMatch:'full'},
            {path:'**', component:NotFoundComponent}
        ])
    ],
    //All component and pipe declare here
    declarations:[
        AppComponent,
        BookComponent,
        ProductComponent,
        ProductUpperPipe,
        AddValuePipe,
        ProductFilterPipe,
        StarComponent,
        NotFoundComponent,
        OrderComponent,
        HomeComponent,
        ProductDetailComponent
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
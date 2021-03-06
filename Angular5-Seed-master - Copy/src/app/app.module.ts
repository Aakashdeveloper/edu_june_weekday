import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import { ProductService } from "./products/product.service";
import { NotFoundComponent } from "./shared/notFound.component";
import { HomeComponent } from "./home/home.component";
import { OrderComponent } from "./orders/order.component";
import { ProductModule } from "./products/product.module";

@NgModule({
    //All Modules com here
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductModule,
        RouterModule.forRoot([
            {path:'orders', component:OrderComponent},
            {path:'home',component:HomeComponent},
            {path:'', redirectTo:'home', pathMatch:'full'},
            {path:'**', component:NotFoundComponent}
        ])
    ],
    //All component and pipe declare here
    declarations:[
        AppComponent,
        NotFoundComponent,
        OrderComponent,
        HomeComponent
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


/*
function add(a,b){
    return a+b
}

var add = (a,b) => return a+b
*/
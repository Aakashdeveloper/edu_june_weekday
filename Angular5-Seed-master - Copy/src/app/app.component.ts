import {Component} from '@angular/core';

@Component({
    selector:'app-comp',
    template:` <div>
                   <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <a class="navbar-brand">Edureka</a>
                        <ul class="nav navbar-nav">
                            <li><a [routerLink]="['/home']">Home</a></li>
                            <li><a [routerLink]="['/products']">Products</a></li>
                            <li><a [routerLink]="['/orders']">Orders</a></li>
                        </ul>
                    </div>
                   </nav>
                </div>
                <router-outlet></router-outlet>`
})

export class AppComponent{

}
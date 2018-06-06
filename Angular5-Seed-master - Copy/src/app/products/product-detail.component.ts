import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl:'./product-detail.component.html'
})

export class ProductDetailComponent{

    title:string='Product Detail';
    constructor(private _route:ActivatedRoute){}

    ngOnInit():void{
        let id = +this._route.snapshot.params['id'];
        this.title += `:${id}`
    }
}
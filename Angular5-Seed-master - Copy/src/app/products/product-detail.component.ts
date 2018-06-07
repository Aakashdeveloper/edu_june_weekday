import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    templateUrl:'./product-detail.component.html'
})

export class ProductDetailComponent{

    title:string='Product Detail';
    constructor(private _route:ActivatedRoute,
                private _router:Router){}
    name:string;
    desc:string;
    image:string;

    ngOnInit():void{
        let id = +this._route.snapshot.params['id'];
        this.title += `:${id}`

        this._route
            .queryParams
            .subscribe((params)=>{
                this.name = params['name'];
                this.desc = params['description'];
                this.image = params['img']
            })
    }

    onBack():void{
        this._router.navigate(['/products'])
    }
}
import {Component} from '@angular/core';
import { Employee } from './models/employee.model'
import {FormPoster} from './service/form.poster';
import { NgForm } from '@angular/forms'

@Component({
  selector:'app-form',
  templateUrl:'./app.component.html'
})

export class AppComponent{
  languages=["NodeJs","ReactJs","AngularJS"]
  model = new Employee("John","Smith","a@a.com","abcdef",true,"male","NodeJs");
  hasCodeLang:boolean=false;

  constructor(private _formposter:FormPoster){}
  firstToUpper(value:string){
    if(value.length>0){
      this.model.fname = value.charAt(0).toUpperCase()+value.slice(1)
    }
    else{
      this.model.fname = value
    }
  }

  submitForm(form:NgForm){
    this._formposter.postEmployeeForm(this.model)
      .subscribe((data)=>console.log('success',data),
        (err)=> console.log('error', err))
  }
  validateCodeLang(event):void{
    if(this.model.codeLang === "default"){
      this.hasCodeLang = true;
    }else{
      this.hasCodeLang=false
    }
  }
}

/*ng-touched ng-dirty      ng-invalid
ng-untouched ng-pristine    ng-valid*/

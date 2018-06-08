import {Component} from '@angular/core';
import { Employee } from './models/employee.model'


@Component({
  selector:'app-form',
  templateUrl:'./app.component.html'
})

export class AppComponent{
  languages=["NodeJs","ReactJs","AngularJS"]
  model = new Employee("John","Smith",true,"male","NodeJs")

  firstToUpper(value:string){
    if(value.length>0){
      this.model.fname = value.charAt(0).toUpperCase()+value.slice(1)
    }
    else{
      this.model.fname = value
    }
  }
}

/*ng-touched ng-dirty      ng-invalid
ng-untouched ng-pristine    ng-valid*/

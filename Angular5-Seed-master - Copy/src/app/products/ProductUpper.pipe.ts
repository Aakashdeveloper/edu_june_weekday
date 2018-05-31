import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'EduUpper'
})

export class ProductUpperPipe implements PipeTransform{

    transform(value:string, typeReq:string):string{
      if(typeReq == "upper"){
        value = value.toUpperCase()
      }else{
          value = value.toLowerCase()
      }
       
       return value
    }
}

/*function add(a,b){
    return a+b
}

add(1,2)
*/
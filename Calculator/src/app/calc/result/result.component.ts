import { Component, OnInit } from '@angular/core';

const ops = ["+","-","*","/"]

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  operation:string = "";
  operationArray:number[] = [];
  result:number = 0;
  constructor() { }
  getResult(){
    if(this.operation.includes("+")){
      for(let item of this.operation.split("+")){
        this.operationArray.push(parseFloat(item))
      }
      console.log(this.operationArray)
      
    }
  }

  ngOnInit(): void {
  }

}

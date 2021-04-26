import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

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
  @Input()hero:any;
  @Output() flush:EventEmitter<any>=new EventEmitter();
  constructor() { }
  getResult(){
    if(this.operation.includes("+")){
      for(let item of this.operation.split("+")){
        this.operationArray.push(parseFloat(item))
      }
      console.log(this.operationArray)
      
    }
  }
  calcProces(){
    
  }

  ngOnInit(): void {
    
  }
  ngOnChanges():void{
    if(this.hero.includes('c')){
      this.hero=""
      this.flush.emit(true)
    }else if(this.hero.includes('<<')){
      this.hero.replace(this.hero.charAt(this.hero.indexOf("<<")-1),"");
      this.hero.replace(this.hero.charAt(this.hero.indexOf("<<")),"");
      this.flush.emit(false)
    }
  }

}

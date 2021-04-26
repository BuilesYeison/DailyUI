import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

const ops = ["+","-","*","/"]

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  operationArray:number[] = [];
  result:number = 0;
  @Input()hero:any;
  @Input()res:any;
  constructor() { }
  getResult(){

  }
  calcProces(){
    
  }

  ngOnInit(): void {
    
  }
  ngOnChanges():void{
    
  }

}

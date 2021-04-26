import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  buttons = ["c","<<","%","/","1","2","3","x","4","5","6","+","7","8","9","-","( )","0",","]
  arrN:number[]=[]
  auxResult:number = 0;
  result:number = 0;
  sentence:string[]=[]
  constructor() {

  }
  operation(i:any):void{
    if(i!="c" && i!="<<"){
      this.sentence.push(i);
    }else if(i=="c"){
      this.sentence = [];
      this.arrN = [];
      this.result=0;
    }else if(i==="<<"){
      this.sentence.pop()
    }
  }
  reset():void{
    this.arrN = []
    this.result=this.auxResult
    this.auxResult=0
  }
  equalTo():void{
    let str:string = this.sentence.join('');
    if(str.includes('+')){
      for(let i=0;i<str.split("+").length;i++){
        this.arrN.push(parseFloat(str.split("+")[i]));
      }
      for(let n of this.arrN){
        this.auxResult += n;
      }
      this.reset()
    }
    if(str.includes('x')){
      console.log("multi")
      this.auxResult=1;
      for(let i=0;i<str.split("x").length;i++){
        this.arrN.push(parseFloat(str.split("x")[i]));
      }
      console.log(this.arrN,this.auxResult)
      for(let n of this.arrN){
        console.log(n,this.auxResult)
        this.auxResult *= n;
      }
      this.reset()
    }
    if(str.includes('-')){
      console.log("resta")
      this.auxResult=0;
      for(let i=0;i<str.split("-").length;i++){
        this.arrN.push(parseFloat(str.split("-")[i]));
      }
      this.auxResult = this.arrN[0] - this.arrN[1]
      this.reset()
    }
    if(str.includes('/')){
      console.log("divi")
      this.auxResult=1;
      for(let i=0;i<str.split("/").length;i++){
        this.arrN.push(parseFloat(str.split("/")[i]));
      }
      this.auxResult = this.arrN[0] / this.arrN[1]
      this.reset()
    }
  }

  ngOnInit(): void {
  }

}

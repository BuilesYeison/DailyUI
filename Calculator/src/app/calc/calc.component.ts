import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  buttons = ["c","<<","%","/","1","2","3","x","4","5","6","+","7","8","9","-","( )","0",","]
  keys = ["a","a","a"]
  sentence:string[]=[]
  constructor() {

  }
  operation(i:any){
    if(i!="c" || i!="<<"){
      this.sentence.push(i)
    }else if(i==="c"){
      this.sentence = []
    }else if(i==="<<"){
      this.sentence.pop()
    }
  }
  flush(bool:boolean){
    if(bool){this.sentence=[]}else if(!bool){this.sentence.pop();this.sentence.pop()}
  }

  ngOnInit(): void {
  }

}

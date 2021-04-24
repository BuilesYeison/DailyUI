import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  buttons = ["c","<<","%","/","1","2","3","x","4","5","6","+","7","8","9","-","( )","0",","]
  keys = ["a","a","a"]
  constructor() {

  }

  ngOnInit(): void {
  }

}

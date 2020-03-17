import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() value =1;
 public arr=[1,2,3,4,5,6,7,8,9,10];
  constructor() { }

  ngOnInit(): void {
  }
 
}

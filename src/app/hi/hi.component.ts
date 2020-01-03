import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent implements OnInit {
  public emp;
  emp1;
  dataFilter={name:''}
  @Output() public  childEvent=new EventEmitter

  constructor(private cu:HelloService) { }

  ngOnInit() {
    this.cu.data().subscribe(data=>this.emp=data)
  }
  add(z){
    this.emp1=z;
    this.childEvent.emit(this.emp1)

  }

}

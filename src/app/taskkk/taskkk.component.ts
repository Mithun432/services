import { Component, OnInit } from '@angular/core';
import { TaskservicesService } from '../taskservices.service';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taskkk',
  standalone: true,
  imports: [CommonModule,FormsModule,KeyValuePipe],
  templateUrl: './taskkk.component.html',
  styleUrl: './taskkk.component.scss'
})
export class TaskkkComponent implements OnInit{
  dummy:any=[];
  tsk:any=[];
 public show=false;
 public disp=false;
 public updisp=false;
  constructor(private ts:TaskservicesService){}
 ngOnInit(): void {
    this.tsk=this.ts.getdata();
      }
  adds(){
this.show=true;  
}
  hide(){
    this.show=false;
  }
 addtsk(){
  // console.log(this.dummy);
  this.tsk.push(this.dummy);
  // console.log(this.tsk)
 }
 dels(){
  this.disp=true;  
  }
hides(){
this.disp=false;  
}
rmvtsk(rmv:string){
//   console.log(this.tsk);
// delete this.tsk[rmv];
// console.log(this.tsk)
  this.tsk=this.tsk.filter((obj: { Title: string; }) => obj.Title !== rmv);
}
upds(){
  this.updisp=true;
}
uphds(){
  this.updisp=false;
}
updttsk(oldttl:string,ttl:string,dsc:string)
{
// console.log(oldttl);
  for(let i=0;i<this.tsk.length;i++){
    // console.log(this.tsk[2])
    // break;
 if(this.tsk[i].Title==oldttl){
  this.tsk[i].Title=ttl;
  this.tsk[i].Desc=dsc;
 }
 else{
  console.log("bbbb")
 }
 }
}
}

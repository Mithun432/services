import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TaskservicesService {
  tasks = [{Title: "Analyze", Desc:"The most important phase is to analyze the problem before approaching to code the task"},
  {Title: "Discuss", Desc:"This task has to be done right after the analyze phase"},
  {Title: "Suggest", Desc:"This task is to suggest better way to approach the task"},
  {Title: "Code", Desc:"Coding task follows then will make all those ideas in a coded format"},
  {Title: "Test", Desc:"Then Testing follows to test the code for any bugs"},
  {Title: "Implement", Desc:"Implement the work after all the essential clarification"},
  ]
  constructor() { } 
  getdata(){
    return this.tasks;
  }
  adddata(ttl:string,dsc:string)
  {
    this.tasks.push({Title:ttl,Desc:dsc})
  }
}

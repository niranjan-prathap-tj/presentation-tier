import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { Message } from 'src/message.model';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  listOfMessages!:Message[]; 

  constructor(private demoService:DemoService) { 
    this.demoService.getGeneralMessages().subscribe(data=>{
      this.listOfMessages = data;
      console.log(this.listOfMessages.length);
    })
  }
  
  ngOnInit(): void {

  }

}

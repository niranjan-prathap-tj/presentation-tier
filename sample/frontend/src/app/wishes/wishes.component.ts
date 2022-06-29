import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { Message } from 'src/message.model';
import { Wish } from 'src/wish.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.scss']
})
export class WishesComponent implements OnInit {
  listOfMessages!:Wish[];
  
  constructor(private demoService:DemoService) {
    this.demoService.getWishes().subscribe(data=> {
      this.listOfMessages = data;
      console.log(this.listOfMessages.length);
    })
  }

  ngOnInit(): void {
  }

}

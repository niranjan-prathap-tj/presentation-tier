import { Component } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  health:any;
  constructor(demo:DemoService) {
   demo.getHealthStatus().subscribe(data=>{
      this.health = data;
      console.log(data);
    })
  }
  title = 'sample';
}

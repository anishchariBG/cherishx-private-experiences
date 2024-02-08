import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reference';
  constructor(private myService:MyServiceService){}
//     user = [
//       {
// "name":"aravind","id":1
//     },{
//       "name":"vignesh",
//       "id":2
//     }
    
  // ]
  
}

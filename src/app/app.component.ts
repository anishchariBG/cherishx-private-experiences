import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'reference';
  
  constructor(public myService:MyServiceService){
    
  }

  // emplydata:any;
  ngOnInit(){
  //   this.myService.getemploylist().subscribe(
  //     (data: any) => {
  //       this.emplydata = data;
  //     },
  //     (error: any) => {
  //       console.error(error);
  //     }
  //   );
  //  }
    
  }

//     user = [
//       {
// "name":"aravind","id":1
//     },{
//       "name":"vignesh",
//       "id":2
//     }
    
  // ]
  
  
}

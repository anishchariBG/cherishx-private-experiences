import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'reference';
  data:any;
  constructor(public myService:MyServiceService){
    
  }
 ngOnInit(){
    this.fetchData();
 }
fetchData(){
this.myService.getdata(
  (response)=>{
    this.data =response;
  },
  (error)=>{
    console.error('error fetching data:',error)
  }
);
}
  // emplydata:any;
  // ngOnInit(){
  //   this.myService.getemploylist().subscribe(
  //     (data: any) => {
  //       this.emplydata = data;
  //     },
  //     (error: any) => {
  //       console.error(error);
  //     }
  //   );
  //  }
    
  // }

//     user = [
//       {
// "name":"aravind","id":1
//     },{
//       "name":"vignesh",
//       "id":2
//     }
    
  // ]
  
  
}

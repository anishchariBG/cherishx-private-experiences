import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
//  emplydata=[
//   {
//     name:"anish",
//     age:"21"
//  },
//  {
//   name:"anish",
//   age:"21"
// },
// {
//   name:"anish",
//   age:"21"
// }
//  ]
  constructor(public http:HttpClient) {
    
   }
  //  getemploylist():Observable<any>{
  //   return of(this.emplydata);
  //  }
}





 // "id": 3206,
    // "task_name": "White Hexagon Anniversary Neon Backdrop",
    // "meta_title": "An elegant White Theme Neon Light Decor with Hexagon Backdrop designed for Birthdays, Anniversaries and more in Delhi NCR, Noida, Gurgaon, Bangalore and Hyderabad.",
    // "task_short_name": "elegant-white-hexagon-anniversary-backdrop-decoration",
    // "featured_image": "https://cdn.cherishx.com/uploads/1650449998_small.jpg",
    // "caption": null,
    // "featured_images": {
    //     "url": "https://cdn.cherishx.com/uploads/1650449998_original.jpg",
    //     "caption": "A Unique White theme decor with Hexagon Backdrop by CherishX!",
    //     "small": "https://cdn.cherishx.com/uploads/1650449998_small.jpg",
    //     "webp_small": "https://cdn.cherishx.com/uploads/1650449998_webp_small.webp",
    //     "thumbnail": "https://cdn.cherishx.com/uploads/1650449998_thumbnail.jpg",
    //     "original": "https://cdn.cherishx.com/uploads/1650449998_original.jpg",
    //     "webp_thumbnail": "https://cdn.cherishx.com/uploads/1650449998_webp_thumbnail.webp",
    //     "webp_original": "https://cdn.cherishx.com/uploads/1650449998_webp_original.webp"
    // },
    // "price": 5000,
    // "cost_price": 3240,
    // "type": "couple",
    // "is_wishlisted": false,
    // "ratings": {
    //     "id": 29832,
    //     "task_id": 3206,
    //     "score": "4.83",
    //     "count": 18
    // },
    // "locality": {
    //     "id": 59726,
    //     "task_id": 3206,
    //     "value": "At your location"
    // },
    // "attributes": {
    //     "price_subtext": [
    //         "setup"
    //     ],
    //     "locality": [
    //         "At your location"
    //     ],
    //     "caption": [
    //         "Book a Unique White Theme Decoration with Hexagon Backdrop for your Celebrations!"
    //     ]
    // }
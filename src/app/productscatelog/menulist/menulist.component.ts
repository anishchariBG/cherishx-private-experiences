import { Component } from '@angular/core';
//import { window } from 'ngx-bootstrap/utils';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID, OnInit, OnDestroy, HostListener } from '@angular/core';
import { MenuItem } from 'primeng/api';


/*interface CarouselItem {
  image: string;
  caption: string;
}*/
@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrl: './menulist.component.css'
})
export class MenulistComponent implements OnInit, OnDestroy{

  items: MenuItem[] = [];
  itemsPerSlide: number=1;
  isBrowser: boolean = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit(): void {
    this.items = [
      { image: "https://i.ibb.co/XFxyfgH/annivesary-decoration.png", caption: 'Slide 1' },
      { image: "https://i.ibb.co/s9sTC21/birthday-balloon-decor.png", caption: 'Slide 2' },
      { image: "https://i.ibb.co/NV2PH3g/icon-kids-birthday-min.png", caption: 'Slide 3' },
      { image: "https://i.ibb.co/wdBpF2R/icon-personalised-frames-min.png", caption: 'Slide 4' },
      { image: "https://i.ibb.co/dcHTMY8/icon-celebrity-min.png", caption: 'Slide 5' },
      { image: "https://i.ibb.co/txV0qT5/icon-diy-kit-min.png", caption: 'Slide 6' },
      { image: "https://i.ibb.co/ZYx8tnt/icon-balloon-decorations-min.png", caption: 'Slide 7' }
    ];

    if (this.isBrowser) {
      this.itemsPerSlide = this.calculateItemsPerSlide();
    }
  }

  ngOnDestroy(): void {
    // Clean up if necessary
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event): void {
    this.itemsPerSlide = this.calculateItemsPerSlide();
  }

  private calculateItemsPerSlide(): number {
    const windowWidth = this.isBrowser ? window.innerWidth : 0;

    if (windowWidth >= 1200) {
      return 7;
    } else if (windowWidth >= 992) {
      return 5;
    } else if (windowWidth >= 768) {
      return 3;
    } else {
      return 1;
    }
  }


  noWrapSlides:boolean = false;
   showIndicator:boolean = true;
 
  

 /* ngOnInit(): void {
    if (this.isBrowser) {
      window.addEventListener('resize', this.onResize);
      this.itemsPerSlide = this.calculateItemsPerSlide();
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      window.removeEventListener('resize', this.onResize);
    }
  }
*/
 
    

}

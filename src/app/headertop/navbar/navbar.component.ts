import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map ,shareReplay} from 'rxjs/operators';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  activeSection: String = '';

  scrollToSection(section:any){
    this.activeSection = section
    if(section === 'contact-us'){
      // do nothing
    }
    else{
      document.getElementById(section)?.scrollIntoView({behavior:"smooth"})
    }
  }
  openModel() {
    setTimeout(()=>{
      const modelDiv = document.getElementById('myModal');
      if(modelDiv!= null) {
        modelDiv.style.display = 'block';
      } 
    },500)
    }

    nav_variable = false;
    @HostListener("document:scroll")
    scrollfunction(){
      if( document.documentElement.scrollTop>0){
        this.nav_variable = true;
      }
      else{
        this.nav_variable = false;
      }
    }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  

constructor(private breakpointObserver:BreakpointObserver){}
  ngOnInit(): void {
    
  }
}

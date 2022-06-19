import { Component, OnInit,AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  public isCollapsed = true;
  public navOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.addclass();
  }

  navBarOpen(){
    this.navOpen = !this.navOpen
  }

  @HostListener('window:scroll', ['$event'])

  addclass(){
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 10) {
      document.querySelector('.navbar')?.classList.add('scroll-active');
      
    }else{
      document.querySelector('.navbar')?.classList.remove('scroll-active');
    }
  }
}

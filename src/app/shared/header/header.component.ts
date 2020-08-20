import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener("document:scroll")
  scrollFunction(){
    if(document.documentElement.scrollTop>=50){
      document.querySelector('.navbar').classList.add('nav-color');
    }
    if(document.documentElement.scrollTop<50){
      document.querySelector('.navbar').classList.remove('nav-color');
    }
  }

  toggleNav(){
    document.querySelector('.nav-links').classList.toggle('nav-active');
    document.querySelector('.bars').classList.toggle('toggleBars');
  }

}

import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
//import 'swiper/swiper-bundle.css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  mySwiper: Swiper;

  ngAfterViewInit() {
    this.mySwiper = new Swiper(".swiper-container");
  }

}

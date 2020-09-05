import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Title initialized in HomeComponent'; // feeds into home.component.html
  subtitle = 'Subtitle initialized in HomeComponent'; // feeds into home.component.html

  // one directional property binding with home.component.html
  imgSource = 'https://placekitten.com/600/400';
  altText = 'kittens';

  arrived: string;

  isAuth: boolean;

  money = '100'; // value for simple pipe

  donuts: string[] = ['old fashioned', 'bearclaw', 'cruller', 'jelly doughnut', 'glazed doughnut'];
  // simple array that will be looped in home.component.html

  cupcakes = [
    {
      type: 'chocolate',
      price: 10
    }, {
      type: 'vanilla',
      price: '20'
    }, {
      type: 'strawberry',
      price: 30
    }, {
      type: 'mango',
      price: '40'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.isAuth = true;
  }

  hasArrived(event: string) {
    this.arrived = event;
  }
  // listens to funtion in ngOnInit() in HeaderComponent

}

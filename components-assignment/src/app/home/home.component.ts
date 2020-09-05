import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAuth: boolean; // for *ngIf

  // displayed in header with @Input() and one-directional binding
  title = "Baked With Love";
  subtitle = "Gluten Free, Flavor Full"
  username = "Home User";

  cupcakePrice = '4.95';

  cupcakes = [
    {
      imgSrc: 'http://via.placeholder.com/900x900?text=chocolate+cupcake',
      altText: 'chocolate cupcake',
      type: 'Dark Chocolate Cupcake',
      price: this.cupcakePrice
    }, {
      imgSrc: 'http://via.placeholder.com/900x900?text=vanilla+cupcake',
      altText: 'vanilla cupcake',
      type: 'Vanilla Cupcake',
      price: this.cupcakePrice
    }, {
      imgSrc: 'http://via.placeholder.com/900x900?text=strawberry+cupcake',
      altText: 'strawberry cupcake',
      type: 'Strawberry Cupcake',
      price: this.cupcakePrice
    }, {
      imgSrc: 'http://via.placeholder.com/900x900?text=mango+cupcake',
      altText: 'mango cupcake',
      type: 'Mango Cupcake',
      price: this.cupcakePrice
    }
  ]

  donutPrice = 1.95;

  donuts = [
    {
      imgSrc: 'http://via.placeholder.com/900x900?text=chocolate+donut',
      altText: 'chocolate donut',
      type: 'Chocolate Cake Donut',
      price: this.donutPrice
    }, {
      imgSrc: 'http://via.placeholder.com/900x900?text=sprinkled+donut',
      altText: 'sprinked donut',
      type: 'Sprinkled Cake Donut',
      price: this.donutPrice
    }, {
      imgSrc: 'http://via.placeholder.com/900x900?text=crueller',
      altText: 'crueller',
      type: 'Crueller',
      price: this.donutPrice
    }, {
      imgSrc: 'http://via.placeholder.com/900x900?text=jelly+donut',
      altText: 'jelly donut',
      type: 'Jelly Dount',
      price: this.donutPrice
    }
  ]

  popup = false
  name = 'Angular';

  constructor() { }

  ngOnInit(): void {
    this.isAuth = true; // for *ngIf
  }


  // 'Your Featured Items' string
  arrived: string;

  hasArrived(event: string) {
    this.arrived = event;
  }

  phone = '303.721.7547';
  email = 'info@wavethegrain.com';

  copyright = '©2020, WavetheGRAIN';



}

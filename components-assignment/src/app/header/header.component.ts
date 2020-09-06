import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logoSrc = 'https://lh3.googleusercontent.com/g3ZGtJJkyZrWd6PuvbN5shT167DIARsbQz9YVPcPfry01CLQohYqMfcgVGWRHaOm2UXPFZzkmLbJ1EEmAJq5iQQ_bLGuIzYADHwAYfW8dsgRJ-8fDgtVvwBDgyRaxSqBoOSJEsMbCA=w2400';
  logoAltText = "wave the grain";

  heroSrc = 'http://via.placeholder.com/1200x400/F0F0F0/FFFFFF/?text=header+image';
  heroAltText = 'hero image';

  @Input() isAuth: boolean; // for *ngIf


  // variables defined in HomeComponent
  // pushed to header with interpolation
  // one-directional binding places in home DOM
  @Input() title: string; 
  @Input() subtitle: string;
  @Input() username: string;

  @Output() arrived: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.arrived.emit('Your featured items:');
  }

  navs: string[] = ['home', 'products', 'about', 'account']
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title2: string; // data retrieved from parent (Home)
  @Input() subtitle2: string; // data retrieved from parent (Home)
  @Input() isAuth: boolean; 

  @Output() arrived: EventEmitter<string> = new EventEmitter<string>(); //push data up to parent (Home)

  constructor() { }

  ngOnInit(): void {
    this.arrived.emit('Pushing display data from HeaderComponent to HomeComponent') //push data up to parent (Home)
  }

}

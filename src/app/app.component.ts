import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLodingIndicator = true;
  constructor(private _router: Router){
    this._router.events.subscribe((routerEvent:Event) => {
      if(routerEvent instanceof NavigationStart){
        this.showLodingIndicator = true
      }
      if(routerEvent instanceof NavigationEnd){
        this.showLodingIndicator = false
      }
    })
  }
}

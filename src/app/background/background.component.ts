import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  screen: number = 1;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => { //detectamos cambio de url
      if (event instanceof NavigationEnd) {
        if (event.url.includes('list')) {
          this.screen = 2;    // en la pantalla intermedia de la lista de una familia, mostramos 2 capas
        } else if (event.url.includes('item')) {
          this.screen = 1;  // en la pantalla de un item, mostramos 1 capa
        } else {
          this.screen = 3; // en la pantalla principal, mostramos las 3 capas
        }
         
      }
    });
   }

  ngOnInit(): void {
  }

  getBlur(px: number) { //adapta los píxeles al formato de blur
    return 'blur('+px+'px)';
  }

}

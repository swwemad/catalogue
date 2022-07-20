import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isHome: boolean = true;

  constructor(private router: Router ) {
    this.router.events.subscribe((event: Event) => { //detectamos cambio en la url de navegación
      if (event instanceof NavigationEnd) {
        //console.log(event.url)
        if (event.url === '/') {
          this.isHome = true; 
        } else {
          this.isHome = false;
        }
      }
    });
   }

  ngOnInit(): void { }

  //Al darle al botón de inicio, volvemos a la página inicial, tanto si estamos en la vista del objeto como en la de la lista
  navigateHome() {
    this.router.navigate(['']);
  }

}

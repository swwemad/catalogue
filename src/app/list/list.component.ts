import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Item {
  id: number;
  description: string;
  pictureUrl: string;
  price: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items: Item[] = []

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getItems(params['id']);
    });
  }

  getItems(familyId: number) {
    let options = {method: 'GET'}
    let fetchUrl='https://test.krama.es:8014/item/list/'+familyId;
    fetch(fetchUrl, options) //bajamos los datos de la lista de elementos desde la API en función del id de la familia
      .then(response => response.json())
      .then(response => {
        //console.log(response);
        let parsedItems = this.parseItems(response) ;
        if (parsedItems.length) { //comprobamos para que si introducimos en la url un id de familia no válido, redirija a home
          this.items = parsedItems
        } else {
          this.router.navigate(['/']);
        }
      
      }).catch(err => {
        //console.log(err);
      });
  }

  //Devuelve el array del objeto obtenido de la API formateado según la interfaz Item
  parseItems(items: any[]) {
    let parsedFamilies: Item[] = [];
    items.map(item => {
      parsedFamilies.push({
        id: item.id,
        description: item.description,
        pictureUrl: item.pictureUrl,
        price: item.price,
      });
    });
    return items;

  }

}

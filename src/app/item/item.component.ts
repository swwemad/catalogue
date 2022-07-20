import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Item {
  id: number;
  familyId: number;
  description: string;
  text: string;
  pictureUrl: string;
  price: number;
  stock: number;
  family: string;
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item: Item = {
    id:0,
    familyId:0,
    description: '',
    text: '',
    pictureUrl: '',
    price: 0,
    stock: 0,
    family: 'Portátiles'
  };


  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getItem(params['id']);
    });
  }

  getItem(itemId: number) {
    let options = {method: 'GET'}
    let fetchUrl='https://test.krama.es:8014/item/'+itemId;
    fetch(fetchUrl, options) //bajamos los datos del objeto la API en función de su id
      .then(response => response.json())
      .then(response => {
        //console.log(response);
        let parsedItem = this.parseItem(response) ;
        if (parsedItem.id) { //comprobamos para que si introducimos en la url un id de item no válido, redirija a home
          this.item = parsedItem
        } else {
          this.router.navigate(['/']);
        }
      
      }).catch(err => {
        //console.log(err);
      });
  }

  //Devuelve el array del objeto obtenido de la API formateado según la interfaz Item, 
  // a la que hemos añadido el campo de familia para indicar en una etiqueta a cuál pertenece
  parseItem(item: any) { 
    let itemFamilyId = item.familyId;
    return {
      id: item.id,
      familyId: itemFamilyId,
      description: item.description,
      text: item.text,
      pictureUrl: item.pictureUrl,
      price: item.price,
      stock: item.stock,
      family: itemFamilyId === 1 ? 'Portátiles' : itemFamilyId === 2 ? 'PC' : 'Monitores'
      };

  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Nota: copiamos las interfaces que necesita cada componente desde HomeComponent por legibilidad de código,
// aunque por reutilización del mismo podríamos sacar las 3 interfaces (Family, List, Item) a un archivo común desde el cual importarlas.
interface Family {
  id: number;
  description: string;
}

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss']
})
export class CardHomeComponent implements OnInit {

  @Input()
  family: Family = {
    id:0,
    description: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getImageSrc() { //tenemos guardadas en local tres imágenes, una para cada familia
    return '../../assets/images/catalogue/'+this.family.id+'.png'

  }

  navigateToList () { //navegamos a la vista de la lista de elementos de una familia según el id seleccionado
    this.router.navigate(['list/'+this.family.id]);
  }

}

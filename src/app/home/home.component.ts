import { Component, OnInit } from '@angular/core';

interface Family {
  id: number;
  description: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  families: Family[] = []

  constructor() { }

  ngOnInit(): void {
   this.getFamilies(); //para conseguir las tres familias del catálogo
  }

  getFamilies() {
    let options = {method: 'GET'}
    let fetchUrl='https://test.krama.es:8014/family/list'; //endpoint de la API REST
    fetch(fetchUrl, options)
      .then(response => response.json())
      .then(response => {
        // parseamos la respuesta (aunque en este caso y en el que baja los datos de la vista de 'list' los campos sean los mismos y no haya transformaciones, 
        // tiendo a hacer el parseo por darle uniformidad al código)
        this.families = this.parseFamilies(response) ; 
      
      }).catch(err => {
        //console.log(err);
      });
  }

  parseFamilies(families: any[]) { //devuelve el array de las familias obtenido de la API formateado según la interfaz Family
    let parsedFamilies: Family[] = [];
    families.map(family => {
      parsedFamilies.push({
        id: family.id,
        description: family.description
      });
    });
    return families;

  }

}

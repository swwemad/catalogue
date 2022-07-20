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
   this.getFamilies();
  }

  getFamilies() {
    console.log('response');
    let options = {method: 'GET'}
    let fetchUrl='https://test.krama.es:8014/family/list';
    fetch(fetchUrl, options)
      .then(response => response.json())
      .then(response => {
        //console.log(response);
        this.families = this.parseFamilies(response) ;
      
      }).catch(err => {
        //console.log(err);
      });
  }

  parseFamilies(families: any[]) {
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

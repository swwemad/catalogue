import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getItems(params['id']);
    });
  }

  getItems(familyId: number) {
    let options = {method: 'GET'}
    let fetchUrl='https://test.krama.es:8014/item/list/'+familyId;
    fetch(fetchUrl, options)
      .then(response => response.json())
      .then(response => {
        //console.log(response);
        this.items = this.parseItems(response) ;
      
      }).catch(err => {
        //console.log(err);
      });
  }

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

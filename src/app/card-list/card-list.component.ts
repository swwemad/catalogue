import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Item {
  id: number;
  description: string;
  pictureUrl: string;
  price: number;
}

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input()
  item: Item = {
    id:0,
    description: '',
    pictureUrl: '',
    price: 0
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  navigateToItem () {
    this.router.navigate(['item/'+this.item.id]);
  }

}

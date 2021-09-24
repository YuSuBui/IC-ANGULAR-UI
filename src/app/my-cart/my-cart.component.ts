import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  items: any = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= 3; i++) {
      const item = <any>{};
      item.id = i;
      item.title = "GeoScience " + i;
      item.content = "Built for independent professionals, the Geosciences Package offers a single-user cloud environment..";
      item.imageUrl = "GEO.svg";
      item.isAnnualContact = false;
      this.items.push(item);
    }
  }
  checkAnualContact(item: any): void {
    item.isAnnualContact = true;
  }
  uncheckAnualContact(item: any): void {
    item.isAnnualContact = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

declare var require: any

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  
  ngOnInit() {
    this.httpService.get('./assets/resultsData.json').subscribe(
      data => {
        this.pricesArr = data as string [];	 // FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  
  pricesArr = []
  lastOrderType = 'asc';
  selectedOrder = '';



  limits = {
    'oneRoom' : 50000,
    'twoRooms' : 70000,
    'three' : 90000,
  }

  sortByOneRoom(selector) {
    let asc;
    let desc;
    if (this.selectedOrder == selector) {
      asc = -1
      desc = 1
    } else {
      this.selectedOrder = selector
       asc = 1
       desc = -1
    }
    this.pricesArr = this.pricesArr.sort((a, b) => (a[selector] > b[selector]) ? asc : desc)
  }


}

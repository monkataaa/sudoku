import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

declare var require: any

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  
  ngOnInit() {
    this.httpService.get('./assets/resultsData.json').subscribe(
      data => {
        this.initialArr = data as string [];	 // FILL THE ARRAY WITH DATA.
        this.lastUpdate = Object.values(this.initialArr.pop())[0];
        this.clearSorting();
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  
  pricesArr = []
  initialArr = []
  isAsc = true;
  selectedOrder = '';
  lastUpdate 



  limits = {
    'oneRoom' : 50000,
    'twoRooms' : 70000,
    'three' : 90000,
  }

  clearSorting() {
    this.isAsc = true
    this.selectedOrder = '';
    this.pricesArr = this.initialArr;
  }

 
  sortByOneRoom(selector) {
    if (this.selectedOrder == selector) {
      this.isAsc = !this.isAsc
    } else {
      this.selectedOrder = selector
      this.isAsc = true
    }
    let orderType1 = this.isAsc ? 1 : -1
    let orderType2 = this.isAsc ? -1 : 1
    this.pricesArr = this.initialArr.filter(a => a[selector]).sort((a, b) => (a[selector] > b[selector]) ? orderType1 : orderType2)
  }


}

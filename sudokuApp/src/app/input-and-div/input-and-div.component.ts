import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'inputAndDiv',
  templateUrl: './input-and-div.component.html',
  styleUrls: ['./input-and-div.component.css']
})
export class InputAndDivComponent implements OnInit {

  constructor() { }

  @Input() openedId
  @Input() rowIndex
  @Input() col
  @Input() tableArr
  ngOnInit() {
  }


  getTdId(rowIndex, col) {

    return 'tdId' + this.getKeyValue(this.tableArr[this.getName(rowIndex)], col)
  }

  getTdValue(rowIndex, col) {
    return this.tableArr[this.getName(rowIndex)][this.getKeyValue(this.tableArr[this.getName(rowIndex)], col)]
  }
  getKeyValue(obj, index) {
    // console.log('ele is', Object.keys(obj)[4]);
    return Object.keys(obj)[index];
  }

  getName(index) {
    switch (index) {
      case 0: return 'a';
      case 1: return 'b';
      case 2: return 'c';
      case 3: return 'd';
      case 4: return 'e';
      case 5: return 'f';
      case 6: return 'g';
      case 7: return 'h';
      case 8: return 'i';
    }
  }
}

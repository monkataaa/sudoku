import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tdBox',
  templateUrl: './td-box.component.html',
  styleUrls: ['./td-box.component.css']
})
export class TdBoxComponent implements OnInit {

  constructor() { }

  @Input()tableArr
  @Input()col
  @Input()rowIndex

  public openedId: string = null
  
  ngOnInit() {
  }

  getKeyValue(obj, index){
    // console.log('ele is', Object.keys(obj)[4]);
    return Object.keys(obj)[index];
  }

  transferToArr(obj) {
      return Object.keys(obj);
  }

  checkRowIndex(rowIndex, check1, check2, check3) {
    if (rowIndex == check1 || rowIndex == check2 || rowIndex == check3) {
      return true;
    }
    return false;
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

  showInput(ev){
    console.log('el', ev)
    if (ev.target.localName == "input") {
      return
    }
    let incomingId
    if (ev.target.localName == "div") {
      incomingId = ev.target.parentNode.id
    } else {
      incomingId  = ev.target.id
    }

    if (this.openedId == incomingId) {
      return
    }
    this.openedId = incomingId
  }

  getTdId(rowIndex, col){

    return 'tdId' + this.getKeyValue(this.tableArr[this.getName(rowIndex)], col)
  }

  getTdValue(rowIndex, col){
    return this.tableArr[this.getName(rowIndex  )][this.getKeyValue(this.tableArr[this.getName(rowIndex )], col  )]
  }
}

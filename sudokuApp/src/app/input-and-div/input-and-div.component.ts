import { Component, Input } from '@angular/core';

@Component({
  selector: 'inputAndDiv',
  templateUrl: './input-and-div.component.html',
  styleUrls: ['./input-and-div.component.css']
})
export class InputAndDivComponent  {



  @Input() openedId: string = null
  @Input() elemId: string = null
  @Input() rowIndex: number = null
  @Input() col: number = null
  @Input() tableArr: any[][];

  setNumberValueToTablleArr(stringValue){
    if (!stringValue) {
      return this.tableArr[this.rowIndex][this.col] = "";
    }
    this.tableArr[this.rowIndex][this.col] = Number(stringValue)
  }
  
  
}

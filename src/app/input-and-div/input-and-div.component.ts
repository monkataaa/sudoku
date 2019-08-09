import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'inputAndDiv',
  templateUrl: './input-and-div.component.html',
  styleUrls: ['./input-and-div.component.css']
})
export class InputAndDivComponent {


  @Input() openedId: string = null
  @Input() elemId: string = null
  @Input() rowIndex: number = null
  @Input() col: number = null
  @Input() tableArr: any[][];


  @Output() updateOpenedId: EventEmitter<any> = new EventEmitter()

 
  placeholder

  


  // setNumberValueToTablleArr(stringValue){
  //   console.log('stringValue', stringValue);
  //   const regex: RegExp = new RegExp(/^[\d]$/g);
  //   let current: string = stringValue;
  //   // let next: string = current.concat(event.key);
  //   // if (current && !current.match(regex)) {
  //   //   stringValue.preventDefault();
  //   // }
  //   if (current && current.match(regex)) {
  //     console.log('current next', current);
  //       if (!stringValue) {
  //         return this.tableArr[this.rowIndex][this.col] = "";
  //       }
  //       this.tableArr[this.rowIndex][this.col] = Number(stringValue)
  //   }

    
  // }

  onPressedKey(e) {
    let newOpenedId
    if (e.shiftKey && (e.key === "Tab")) {
      newOpenedId = this.rowIndex + '_' + (this.col - 1)
      if (this.col == 0) {
        if (this.rowIndex == 0) {
          newOpenedId = null
        } else {
          newOpenedId = (this.rowIndex - 1) + '_' + 8
        }
      }

      this.updateOpenedId.emit(newOpenedId)
     
    } else if (e.key === "Tab") {
      newOpenedId = this.rowIndex + '_' + (this.col + 1)
      if (this.col == 8) {
        if (this.rowIndex == 8) {
          newOpenedId = null
        } else {
          newOpenedId = (this.rowIndex + 1) + '_' + 0
        }
      }

      this.updateOpenedId.emit(newOpenedId)
    }



  }
}

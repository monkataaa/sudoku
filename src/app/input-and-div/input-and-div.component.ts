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



  onPressedKey(e) {

    if (!Number(e.key)) {
      e.preventDefault()
    }

    let newValue = Number(e.key)

    if (newValue === 0) {
      this.tableArr[this.rowIndex][this.col] = ""
    }

    if (newValue) {
      this.tableArr[this.rowIndex][this.col] = Number(newValue)
      e.preventDefault()
    }


    let newOpenedId
    if (e.shiftKey && (e.key === "Tab")) {
      newOpenedId = this.rowIndex + '_' + (this.col - 1)
      if (this.col == 0) {
        if (this.rowIndex == 0) {
          newOpenedId = this.rowIndex + '_' + 0
        } else {
          newOpenedId = (this.rowIndex - 1) + '_' + 8
        }
      }

      this.updateOpenedId.emit(newOpenedId)

    } else if (e.key === "Tab") {
      newOpenedId = this.rowIndex + '_' + (this.col + 1)
      if (this.col == 8) {
        if (this.rowIndex == 8) {
          newOpenedId = this.rowIndex + '_' + 8
        } else {
          newOpenedId = (this.rowIndex + 1) + '_' + 0
        }
      }
      this.updateOpenedId.emit(newOpenedId)

    }


    switch (e.key) {
      case "ArrowUp": this.rowIndex == 0 ? null : this.updateOpenedId.emit((this.rowIndex - 1) + '_' + this.col); break;
      case "ArrowDown": this.rowIndex == 8 ? null : this.updateOpenedId.emit((this.rowIndex + 1) + '_' + this.col); break;
      case "ArrowLeft": this.col == 0 ? null : this.updateOpenedId.emit(this.rowIndex + '_' + (this.col - 1)); break;
      case "ArrowRight": this.col == 8 ? null : this.updateOpenedId.emit(this.rowIndex + '_' + (this.col + 1)); break;

      default: null
        break;
    }

  }
}

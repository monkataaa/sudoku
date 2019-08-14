import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'inputAndDiv',
  templateUrl: './input-and-div.component.html',
  styleUrls: ['./input-and-div.component.scss']
})
export class InputAndDivComponent {


  @Input() openedId: string = null
  @Input() level: number = null
  @Input() elemId: string = null
  @Input() rowIndex: number = null
  @Input() col: number = null
  @Input() tableArr: any[][];
  @Input() isGeneratedValue: boolean = false;


  @Output() updateOpenedId: EventEmitter<any> = new EventEmitter()



  private deleteKeys: string[] = ['Backspace', 'Delete'];
  onNewInput(e) {

    let newNumberValue = Number(e.target.value.slice(-1))
    if (!newNumberValue) {
      e.target.value = this.tableArr[this.rowIndex][this.col]
      return
    }

    if (newNumberValue == this.tableArr[this.rowIndex][this.col]) {
      e.target.value = newNumberValue
      e.preventDefault()
      return
    }

    this.tableArr[this.rowIndex][this.col] = newNumberValue
    this.updateOpenedId.emit(null);

  }
  onPressedKey(e) {

    if (this.deleteKeys.indexOf(e.key) !== -1) {
      this.tableArr[this.rowIndex][this.col] = ""
      return;
    }

    if (e.shiftKey && (e.key === "Tab") || e.key === "ArrowUp" || e.key === "ArrowLeft") {

      this.updateOpenedId.emit('previous')

    } else if (e.key === "Tab" || e.key === "ArrowDown" || e.key === "ArrowRight") {

      this.updateOpenedId.emit('next')
    } else if (e.key === "Enter" || e.key === "Escape" ) {
      this.updateOpenedId.emit(null)
    }

  
  }
}

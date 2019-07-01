import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public tableArr: Object = {}

  public tableValues: Object = {}

  ngOnInit() {
    this.fillUpArray()
    console.log('table is ', this.tableArr);
  }

  public openedId: string = null

  fillUpArray() {
    for (let objCube = 0; objCube < 9; objCube++) {
      this.tableArr[this.getName(objCube)] = {}
      for (let row = 0; row < 9; row++) {
        this.tableArr[this.getName(objCube)][this.getName(objCube) + (row + 1)] = ""
      }
    }

  }
  getKeyValue(obj, index) {
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

  tryWith1() {
    this.checkTable(1);
  }

  checkTable(numberToTry) {
    Object.keys(this.tableArr).map((e, index) => {
      if (index == 0) {
        this.checInkBox(e, numberToTry)
        this.checkInRow(5, numberToTry)
        this.checkInCol(5, numberToTry)
      }

      Object.keys(this.tableArr[e]).map(k => {

        if (this.tableArr[e][k]) {
          // console.log(this.tableArr[e][k]);
          // console.log(" k is what i need", k);
          if (!this.tableValues[e]) {
            this.tableValues[e] = {}
          }
          this.tableValues[e][k] = this.tableArr[e][k]
          // console.log(" now is", this.tableValues);
          // this.tableValues[e].push(this.tableArr[e][k])
        }
      })
    })
  }

  checInkBox(box, numberToTry) {
    let manyTimes = 0
    let result = ''
    Object.keys(this.tableArr[box]).filter(keyInBox => {
      if (this.tableArr[box][keyInBox] == numberToTry) {
        result = `I found ${++manyTimes}'times number:'${numberToTry}' in box: ${box}`;
      }

    })
    // return result ? console.log(result) : null;
  }

  checkInRow(rowIndex, numberToTry) {
    let result = '';
    let indexLevel = ''
    let startIndex = 0
    if (rowIndex > 2 && rowIndex < 6) {
      startIndex = 3
    }
    if (rowIndex > 6) {
      startIndex = 6
    }

    if (rowIndex % 3 == 0) {
      indexLevel = 'low'
    }
    if (rowIndex % 3 == 1) {
      indexLevel = "middle"
    }
    if (rowIndex % 3 == 2) {
      indexLevel = "high"
    }
    let manyTimes = 0
    for (let i = startIndex; i < startIndex + 3; i++) {
      let box = this.getName(i)
      Object.keys(this.tableArr[box]).filter((keyInBox, indexInBox) => {
        
        let currentIndexLevel = ''
        if (indexInBox < 3 ) {
           currentIndexLevel = 'low'
        } else if (indexInBox > 2 && indexInBox < 6) {
          currentIndexLevel = "middle"
        } else { currentIndexLevel = "high" }

        if (indexLevel === currentIndexLevel && this.tableArr[box][keyInBox] == numberToTry) {
            result = `I found ${++manyTimes}'times number:'${numberToTry}' in row: ${rowIndex}`;
        }
      })
    }
    // return result ? console.log(result) : null;
  }

  checkInCol(colIndex, numberToTry){
    let indexLevel = ''

    let result = '';
    let startIndex = 0
    // if (colIndex > 2 && colIndex < 6) {
    //   startIndex = 1
    // }
    // if (colIndex > 6) {
    //   startIndex = 2
    // }

    if (colIndex % 3 == 0) {
      startIndex = 0
      indexLevel = 'low'
    }
    if (colIndex % 3 == 1) {
      startIndex = 1
      indexLevel = "middle"
    }
    if (colIndex % 3 == 2) {
      startIndex = 2
      indexLevel = "high"
    }

    let manyTimes = 0
    //for loop for box 
    console.log('startIndex is', startIndex);
    for (let i = startIndex; i < 9; i+=3) {
      console.log('i =', i);
      let box = this.getName(i)
      Object.keys(this.tableArr[box]).filter((keyInBox, indexInBox) => {
        
        let currentIndexLevel = ''
        if (indexInBox % 3 == 0) {
           currentIndexLevel = 'low'
        } else if (indexInBox % 3 == 1) {
          currentIndexLevel = "middle"
        } else if (indexInBox % 3 == 2){
           currentIndexLevel = "high" 
        }

        if (indexLevel === currentIndexLevel && this.tableArr[box][keyInBox] == numberToTry) {
            result = `I found ${++manyTimes}'times number:'${numberToTry}' in col: ${colIndex}`;
        }
      })
    }
    return result ? console.log(result) : null;

  }

  showInput(ev) {
    if (ev.target.localName == "input") {
      return
    }
    let incomingId
    if (ev.target.localName == "div") {
      incomingId = ev.target.parentNode.id
    } else {
      incomingId = ev.target.id
    }

    if (this.openedId == incomingId) {
      return
    }
    this.openedId = incomingId
  }

  getTdId(rowIndex, col) {
    return 'tdId' + this.getKeyValue(this.tableArr[this.getName(rowIndex)], col)
  }

  getTdValue(rowIndex, col) {
    return this.tableArr[this.getName(rowIndex)][this.getKeyValue(this.tableArr[this.getName(rowIndex)], col)]
  }

  getBorderStyle(col, rowIndex) {
    let style = {}

    if (rowIndex == 0 || rowIndex + 2 == 5 || rowIndex + 2 == 8) {
      style['border-top'] = '3px solid #080808'
    }
    if (rowIndex == 8) {
      style['border-bottom'] = '3px solid #080808'
    }
    if (col == 0 || col + 2 == 5 || col + 2 == 8) {
      style['border-left'] = '3px solid #080808'

    }
    if (col == 8) {
      style['border-right'] = '3px solid #080808'

    }

    return style

  }


}

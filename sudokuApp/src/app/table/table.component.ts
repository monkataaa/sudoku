import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public table: Object = {}
  public preparedTableData: Object =
  {
    a: { a1: "6", a2: "", a3: "8", a4: "", a5: "4", a6: "", a7: "1", a8: "9", a9: "" },
    b: { b1: "3", b2: "", b3: "7", b4: "9", b5: "1", b6: "", b7: "4", b8: "", b9: "" },
    c: { c1: "4", c2: "", c3: "", c4: "", c5: "5", c6: "8", c7: "7", c8: "3", c9: "" },
    d: { d1: "", d2: "3", d3: "", d4: "5", d5: "", d6: "1", d7: "", d8: "6", d9: "9" },
    e: { e1: "", e2: "9", e3: "1", e4: "", e5: "2", e6: "", e7: "7", e8: "", e9: "3", },
    f: { f1: "", f2: "7", f3: "2", f4: "3", f5: "4", f6: "", f7: "8", f8: "", f9: "" },
    g: { g1: "4", g2: "", g3: "", g4: "3", g5: "5", g6: "7", g7: "", g8: "", g9: "6" },
    h: { h1: "1", h2: "7", h3: "5", h4: "", h5: "", h6: "9", h7: "", h8: "3", h9: "" },
    i: { i1: "", i2: "", i3: "3", i4: "", i5: "", i6: "4", i7: "5", i8: "2", i9: "7" }
  }

  ngOnInit() {
    this.fillUpArray()
    this.loadPreparedData()
    this.check()
    console.log('table is ', this.table);
    console.log('preparedTableData is ', this.preparedTableData);
  }

  public openedId: string = null

  fillUpArray() {
    for (let objCube = 0; objCube < 9; objCube++) {
      this.table[this.getName(objCube)] = {}
      for (let row = 0; row < 9; row++) {
        this.table[this.getName(objCube)][this.getName(objCube) + (row + 1)] = ""
      }
    }

  }
  getKeyValue(obj, index) {
    return Object.keys(obj)[index];
  }

  loadPreparedData(){
    this.table = JSON.parse(JSON.stringify(this.preparedTableData))
  }
  clearTable(){
    this.fillUpArray()
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
    this.checkTable(1, "a", 0, 0);
  }

  checkTable(numberToTry, box, row, col) {
    let checInBoxValue = this.checInBox(box, numberToTry)
    let checkInRowValue = this.checkInRow(row, numberToTry)
    let checkInColValue = this.checkInCol(col, numberToTry)

    if (checInBoxValue && checkInRowValue && checkInColValue) {
      return true
    }
    return false
  }

  check(){
    //tableBoxesArr is a,b,c,d...
    let tableBoxesArr = Object.keys(this.table)
    tableBoxesArr.filter(box => {
      //boxElementsArr is a1, a2, a3, a4....
      let boxElementsArr = Object.keys(this.table[box])
      let assignedNumbersArr = []
      let emptyPositions = {}
      let tableKeys = Object.keys(this.table[box])
      tableKeys.filter((key, index) => {
        if (this.table[box][key] !== "") {
          assignedNumbersArr.push(Number(this.table[box][key]))
        } else{
            //a4: {row: 1, col: 0}
          let [col, row] = this.defineCol(key, index) 
          emptyPositions[key] = {}
          emptyPositions[key]["box"] = box
          emptyPositions[key]["row"] = row
          emptyPositions[key]["col"] = col

        }} )
      for (let i = 1; i <= 9; i++) {
        let manyTimesInBox = 0
        if (!assignedNumbersArr.includes(i)) {
          Object.keys(emptyPositions).filter(emptyKey => {
            this.checkTable(i, emptyPositions[emptyKey]['box'], emptyPositions[emptyKey]['row'], emptyPositions[emptyKey]['col'])
            if (this.checkTable(i, emptyPositions[emptyKey]['box'], emptyPositions[emptyKey]['row'], emptyPositions[emptyKey]['col'])) {
              ++manyTimesInBox
              console.log(`i can put Number ${i} in key ${emptyKey}`);
            }
          })
        }
      }

    })
  }

  defineCol(key, index){
    let box = key.substring(0, 1)
    let col = index % 3
    let row = Math.floor(index / 3)
    switch (box) {
      case 'a': col += 0; break;
      case 'b': col += 3; break;
      case 'c': col += 6; break;
      case 'd': col += 0; row += 3; break;
      case 'e': col += 3; row += 3; break;
      case 'f': col += 6; row += 3; break;
      case 'g': col += 0; row += 6; break;
      case 'h': col += 3; row += 6; break;
      case 'i': col += 6; row += 6; break;
    
      default:
        break;
    }
    return [col, row]
  }

  checInBox(box, numberToTry) {
    let manyTimes = 0
    let result = ''
    let isEmptyBox: boolean = true
    Object.keys(this.table[box]).filter(keyInBox => {
      if (this.table[box][keyInBox] == numberToTry) {
        result = `I found ${++manyTimes}'times number:'${numberToTry}' in box: ${box}`;
        isEmptyBox = false
      }

    })
    // result ? console.log(result) : null;
    return isEmptyBox
  }

  checkInRow(rowIndex, numberToTry) {
    let result = '';
    let indexLevel = ''
    let startIndex = 0

    let isEmptyRow: boolean = true

    //you get the row index, 
    if (rowIndex > 2 && rowIndex < 6) {
      startIndex = 3
    }
    if (rowIndex > 5) {
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
    //..but the search should start from the index of the first box related to this row. 
    //if the rowIndex is 0-2 the search starts from a, if the row is between 3 and 5, the search should start with box d to f..
    for (let i = startIndex; i < startIndex + 3; i++) {
      let box = this.getName(i)
      Object.keys(this.table[box]).filter((keyInBox, indexInBox) => {
    //the search is allays in the box and should be determined in which  row from that box is the found number
        let currentIndexLevel = ''
        if (indexInBox < 3 ) {
           currentIndexLevel = 'low'
        } else if (indexInBox > 2 && indexInBox < 6) {
          currentIndexLevel = "middle"
        } else { currentIndexLevel = "high" }

        if (indexLevel === currentIndexLevel && this.table[box][keyInBox] == numberToTry) {
            isEmptyRow = false
            result = `I found ${++manyTimes}'times number:'${numberToTry}' in row: ${rowIndex}`;
        }
      })
    }
    // result ? console.log(result) : null;
    return isEmptyRow
  }

  checkInCol(colIndex, numberToTry){
    let indexLevel = ''

    let isEmptyCol: boolean = true

    let result = '';
    let startIndex = 0
    if (colIndex > 2 && colIndex < 6) {
      startIndex = 1
    }
    if (colIndex > 5) {
      startIndex = 2
    }

    //if the colIndex is between 0 to 2, the boxes that will be searched are a,d,g
    //if the colIndex is between 3 to 5, the boxes that will be searched are b,e,h
    //if the colIndex is between 6 to 8, the boxes that will be searched are c,f,i
    if (colIndex % 3 == 0) {
      indexLevel = 'low'
    }
    if (colIndex % 3 == 1) {
      indexLevel = "middle"
    }
    if (colIndex % 3 == 2) {
      indexLevel = "high"
    }

    let manyTimes = 0
    //for loop for searching firstly in the box 
    for (let i = startIndex; i < 9; i+=3) {
      let box = this.getName(i)
      Object.keys(this.table[box]).filter((keyInBox, indexInBox) => {
        //the search is allays in the box and should be determined in which  col from that box is the found number
        let currentIndexLevel = ''
        if (indexInBox % 3 == 0) {
           currentIndexLevel = 'low'
        } else if (indexInBox % 3 == 1) {
          currentIndexLevel = "middle"
        } else if (indexInBox % 3 == 2){
           currentIndexLevel = "high" 
        }

      // if the searched col is the same like the col in which the number is found - then we have a success
        if (indexLevel === currentIndexLevel && this.table[box][keyInBox] == numberToTry) {
            result = `I found ${++manyTimes}'times number:'${numberToTry}' in col: ${colIndex}`;
            isEmptyCol = false
        }
      })
    }
    // result ? console.log(result) : null;
    return isEmptyCol

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
    return 'tdId' + this.getKeyValue(this.table[this.getName(rowIndex)], col)
  }

  getTdValue(rowIndex, col) {
    return this.table[this.getName(rowIndex)][this.getKeyValue(this.table[this.getName(rowIndex)], col)]
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

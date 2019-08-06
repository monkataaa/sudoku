import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { async } from '@angular/core/testing';
import { ValueLimits } from '../utilities/valueLimits';
import { PreparedData } from '../utilities/preparedData';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private toastr: ToastrService, private apiService: ApiService) { }


  public isLoading: boolean = false;
  public table: Object = {}
  public PreparedData: PreparedData = new PreparedData();
  ngOnInit() {
    this.fillUpInitialTable()
    // this.loadPreparedData(1);
    // this.check()
  }

  public openedId: string = null

  

  fillUpInitialTable() {
    for (let col = 0; col < 9; col++) {
      let boxName = this.getBoxName(col)
      this.table[boxName] = {}
      for (let row = 0; row < 9; row++) {
        let fieldName = boxName + (row + 1);
        this.table[boxName][fieldName] = ""
      }
    }

  }

 

  loadPreparedData(level) {
    this.isLoading = true;
    // this.table = JSON.parse(JSON.stringify(this.PreparedData.preparedTable))
    this.fillUpInitialTable();
    this.apiService.getSudoku(level).subscribe(res => {
      res["squares"].map((data) => {
        let {x, y, value} = data
        let elem = document.getElementById(x + "_" +y).getAttribute('data-el');
        let box = elem.substring(0, 1)
        this.table[box][elem] = value
      })
      this.isLoading = false;
    })

  }
 

  transferToArr(obj) {
    return Object.keys(obj);
  }



  getBoxName(index) {
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



  checkTable(numberToTry, box, row, col) {
    let checInBoxValue = this.checInBox(box, numberToTry)
    let checkInRowValue = this.checkInRow(row, numberToTry)
    let checkInColValue = this.checkInCol(col, numberToTry)

    if (checInBoxValue && checkInRowValue && checkInColValue) {
      return true
    }
    return false
  }

  sumAllFilledPositions() {
    let sumAllPositions = Object.values(this.table).map(box => {
      let sumAllBoxPositions = Object.values(box).filter(value => { return value != "" }).length
      return sumAllBoxPositions
    }).reduce((a, b) => a + b)
    return sumAllPositions
  }


  check() {
    this.isLoading = true;
    let trials = 0;
    //hack:  used setTimeout cause the change of isLoading status is not detected 
    setTimeout(() => {
      while (this.sumAllFilledPositions() <= ValueLimits.maxFilledPositions && trials <= ValueLimits.maxTrials) {
        if (trials == ValueLimits.maxTrials) {
          this.toastr.error("We coudn't solve your Sudoku. Please check again your initial numbers input. Please note, that this Solver is only for Sudoku level: Easy.")
          this.isLoading = false
          break;
        }
        trials++;

        if (this.sumAllFilledPositions() == ValueLimits.maxFilledPositions) {
          this.isLoading = false
          this.toastr.success("We solved your Sudoku successfully !", "Success")
          break;
        }

        //tableBoxesArr is a,b,c,d...
        let tableBoxesArr = Object.keys(this.table)
        tableBoxesArr.filter(box => {

          let assignedNumbersArr = []
          let emptyPositions = {}
          let tableKeys = Object.keys(this.table[box])
          tableKeys.filter((key, index) => {
            if (this.table[box][key] !== "") {
              assignedNumbersArr.push(Number(this.table[box][key]))
            } else {
              //a4: {row: 1, col: 0}
              let [col, row] = this.defineCol(key, index)
              emptyPositions[key] = {}
              emptyPositions[key]["box"] = box
              emptyPositions[key]["row"] = row
              emptyPositions[key]["col"] = col
              emptyPositions[key]["key"] = key

            }
          })
          for (let i = 1; i <= 9; i++) {
            let matchedPossibilities: number = 0
            let matchedPositionObj: {} = {}
            if (!assignedNumbersArr.includes(i)) {
              Object.keys(emptyPositions).filter(emptyKey => {
                this.checkTable(i, emptyPositions[emptyKey]['box'], emptyPositions[emptyKey]['row'], emptyPositions[emptyKey]['col'])
                if (this.checkTable(i, emptyPositions[emptyKey]['box'], emptyPositions[emptyKey]['row'], emptyPositions[emptyKey]['col'])) {
                  ++matchedPossibilities
                  matchedPositionObj = emptyPositions[emptyKey]
                }
              })
            }
            if (matchedPossibilities == 1 && matchedPositionObj && Object.keys(matchedPositionObj).length !== 0) {
              let positionBox = matchedPositionObj["box"]
              let positionKey = matchedPositionObj["key"]
              this.table[positionBox][positionKey] = i
            }
          }

        })
      }
    }, 10);

  }

  defineCol(key, index) {
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
    let isEmptyBox: boolean = true
    Object.keys(this.table[box]).filter(keyInBox => {
      if (this.table[box][keyInBox] == numberToTry) {
        isEmptyBox = false
      }
    })
    return isEmptyBox
  }

  checkInRow(rowIndex, numberToTry) {
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
    //..but the search should start from the index of the first box related to this row. 
    //if the rowIndex is 0-2 the search starts from a, if the row is between 3 and 5, the search should start with box d to f..
    for (let i = startIndex; i < startIndex + 3; i++) {
      let box = this.getBoxName(i)
      Object.keys(this.table[box]).filter((keyInBox, indexInBox) => {
        //the search is allays in the box and should be determined in which  row from that box is the found number
        let currentIndexLevel = ''
        if (indexInBox < 3) {
          currentIndexLevel = 'low'
        } else if (indexInBox > 2 && indexInBox < 6) {
          currentIndexLevel = "middle"
        } else { currentIndexLevel = "high" }

        if (indexLevel === currentIndexLevel && this.table[box][keyInBox] == numberToTry) {
          isEmptyRow = false
        }
      })
    }
    return isEmptyRow
  }

  checkInCol(colIndex, numberToTry) {
    let indexLevel = ''

    let isEmptyCol: boolean = true

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

    //for loop for searching firstly in the box 
    for (let i = startIndex; i < 9; i += 3) {
      let box = this.getBoxName(i)
      Object.keys(this.table[box]).filter((keyInBox, indexInBox) => {
        //the search is allays in the box and should be determined in which  col from that box is the found number
        let currentIndexLevel = ''
        if (indexInBox % 3 == 0) {
          currentIndexLevel = 'low'
        } else if (indexInBox % 3 == 1) {
          currentIndexLevel = "middle"
        } else if (indexInBox % 3 == 2) {
          currentIndexLevel = "high"
        }

        // if the searched col is the same like the col in which the number is found - then we have a success
        if (indexLevel === currentIndexLevel && this.table[box][keyInBox] == numberToTry) {
          isEmptyCol = false
        }
      })
    }
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





}

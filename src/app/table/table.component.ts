import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';
import { ValueLimits } from '../utilities/valueLimits';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private toastr: ToastrService, private apiService: ApiService) { }


  public isLoading: boolean = false;
  public tableArr: any[][] = [];
  public solvedArr: any[][] = [];
  private emptyNineCellsArr: number[] = new Array(9)
  private emptyElement: string = '';
  private calledTimes: number = 0
  private hasError: boolean = false;
  private showSuccess: boolean = false;
  private hasGotPreparedGame: boolean = false;
  private isSolved: boolean = false;
  private openedId: string = null
  private isUserCheck: boolean = false;


  ngOnInit() {
    this.fillUpInitialTable()
    // this.loadPreparedData(1);
    // this.check()
  }



  
  fillUpInitialTable() {
    this.calledTimes = 0;
    this.hasError = false;
    this.showSuccess = false;
    this.isSolved = false;
    this.tableArr = [];
    for (let i = 0; i < 9; i++) {
      let currentarrArr = []
      for (let y = 0; y < 9; y++) {
        currentarrArr.push('')
      }
      this.tableArr.push(currentarrArr);
    }

    this.solvedArr = this.tableArr.map((currentArr) => {
      return currentArr.slice(0);
    })

  }


  checkUserSolution() {

    if (!this.hasGotPreparedGame && !this.isSolved){
      this.solvedArr = this.tableArr.map((currentArr) => {
        return currentArr.slice(0);
      })
      this.isUserCheck = true;
      this.solveSudoku(this.solvedArr);
    }


    for (let row = 0; row < this.tableArr.length; row++) {
      for (let col = 0; col < this.tableArr.length; col++) {
        if (this.tableArr[row][col]) {
          if (Number(this.tableArr[row][col]) !== Number(this.solvedArr[row][col])) {
            this.hasError = true
            this.toastr.error("We are sorry to say... your solution has errors !")
            setTimeout(() => {
              this.hasError = false
            }, 5000);
            return
          }
        }
      }
    }
    this.showSuccess = true;
    this.toastr.success("your solution has no errors")
    setTimeout(() => {
      this.showSuccess = false
    }, 2000);
    return

  }






  public loadPreparedData(level): void {
    this.hasGotPreparedGame = true;
    this.isLoading = true;
    this.fillUpInitialTable();
    this.apiService.getSudoku(level).subscribe(res => {
      let currentX = 0
      res["squares"].map((data) => {
        let { x, y, value } = data
        if (currentX == x) {
          this.tableArr[x][y] = value
        } else {
          currentX = x
          this.tableArr[x][y] = value
        }
      })
      this.solvedArr = this.tableArr.map((currentArr) => {
        return currentArr.slice(0);
      });
      this.isLoading = false;
      this.solveSudoku(this.solvedArr);
    })

  }


  showSolvedSudoku() {

    if (this.hasGotPreparedGame && this.isSolved) {
      this.tableArr = this.solvedArr.map((currentArr) => {
        return currentArr.slice(0);
      })
      this.toastr.success("We solved your Sudoku successfully !", "Success")

    } else {
      this.solveSudoku(this.tableArr);
      if (this.isSolved) {
        this.showSuccess = true;
        this.toastr.success("We successfully solved your Sudoku !", "Success")
      }
      setTimeout(() => {
        this.showSuccess = false
      }, 2000);
    }

  }


  public showInput(newOpenedId): void {
    this.openedId = newOpenedId;
  }



  //////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////


  /*
    Authorship: ALL credit for the code in this file goes to the authors of the
    book "Elements of Programming Interviews" by Adnan Aziz, Amit Prakash, and
    Tsung-Hsien Lee.
    
    I have just adapted the solution to pass on Leetcode, added explanatory
    comments, reformatted the code, & changed variable names for understanding.
    Sudoku Solver - LeetCode: https://leetcode.com/problems/sudoku-solver/
    This code passes all Leetcode test cases as of Jan. 8 2019 (12:18 am)
    Runtime: 11 ms*, faster than 73.28% of Java online submissions for Sudoku Solver.
    * Funny Note: Took me 30 minutes of unchecked code editing (no IDE) to get the code
    in working order before I first ran it. IT WORKED FIRST RUN IN LEETCODE. No syntax
    errors, no out of bounds exceptions. That is so impossible, but I'll take it.
    The video to explain this code is here: https://www.youtube.com/watch?v=JzONv5kaPJM
  */


  /*
    Driver function to kick off the recursion
  */
  public solveSudoku(table): void {
    return this.solveSudokuCell(0, 0, table);
  }

  /*
    This function chooses a placement for the cell at (row, col)
    and continues solving based on the rules we define.
    
    Our strategy:
    We will start at row 0.
    We will solve every column in that row.
    When we reach the last column we move to the next row.
    If this is past the last row (row == board.length) we are done.
    The whole board has been solved.
  */


  private solveSudokuCell(row, col, table) {
    
    this.isLoading = true
    ++this.calledTimes

    if (this.calledTimes >= ValueLimits.maxTrials) {
      this.hasError = true;
      this.isLoading = false;
      this.toastr.error("We coudn't solve your Sudoku. Please check again your initial numbers input !")
      setTimeout(() => {
        this.hasError = false
      }, 5000);
      return true;
    }

    /*
      Have we finished placements in all columns for
      the row we are working on?
    */

    if (col == table[row].length) {

      /*
        Yes. Reset to col 0 and advance the row by 1.
        We will work on the next row.
      */
      col = 0;
      row++;

      /*
        Have we completed placements in all rows? If so then we are done.
        If not, drop through to the logic below and keep solving things.
      */
      if (row == table.length) {
        // if (!this.hasGotPreparedGame) {
        // }
        this.isSolved = true
        this.isLoading = false;
        return true; // Entire board has been filled without conflict.
      }

    }

    // Skip non-empty entries. They already have a value in them.
    if (table[row][col] != this.emptyElement) {
      return this.solveSudokuCell(row, col + 1, table);
    }

    /*
      Try all values 1 through 9 in the cell at (row, col).
      Recurse on the placement if it doesn't break the constraints of Sudoku.
    */
    for (let value = 1; value <= table.length; value++) {

      let charToPlace = value; // convert int value to char

      /*
        Apply constraints. We will only add the value to the cell if
        adding it won't cause us to break sudoku rules.
      */
      if (this.canPlaceValue(table, row, col, charToPlace)) {
        table[row][col] = charToPlace;
        if (this.solveSudokuCell(row, col + 1, table)) { // recurse with our VALID placement
          return true;
        }
      }

    }

    /*
      Undo assignment to this cell. No values worked in it meaning that
      previous states put us in a position we cannot solve from. Hence,
      we backtrack by returning "false" to our caller.
    */
    table[row][col] = this.emptyElement;
    return false; // No valid placement was found, this path is faulty, return false
  }

  /*
    Will the placement at (row, col) break the Sudoku properties?
  */
  private canPlaceValue(board, row, col, charToPlace) {

    // Check column constraint. For each row, we do a check on column "col".
    for (let i = 0; i < board.length; i++) {
      if (charToPlace == board[i][col]) {
        return false;
      }

    }

    // Check row constraint. For each column in row "row", we do a check.
    for (let i = 0; i < board.length; i++) {
      if (charToPlace == board[row][i]) {
        return false;
      }
    }

    /*
      Check region constraints.
      
      In a 9 x 9 board, we will have 9 sub-boxes (3 rows of 3 sub-boxes).
      
      The "I" tells us that we are in the Ith sub-box row. (there are 3 sub-box rows)
      The "J" tells us that we are in the Jth sub-box column. (there are 3 sub-box columns)
      
      Integer properties will truncate the decimal place so we just know the sub-box number we are in.
      Each coordinate we touch will be found by an offset from topLeftOfSubBoxRow and topLeftOfSubBoxCol.
    */

    let regionSize = Number(Math.sqrt(board.length)); // gives us the size of a sub-box


    let I = Math.floor(row / regionSize);
    let J = Math.floor(col / regionSize);

    /*
      This multiplication takes us to the EXACT top left of the sub-box. We keep the (row, col)
      of these values because it is important. It lets us traverse the sub-box with our double for loop.
    */
    let topLeftOfSubBoxRow = regionSize * I; // the row of the top left of the block
    let topLeftOfSubBoxCol = regionSize * J; // the column of the tol left of the block

    // console.log('topLeftOfSubBoxRow', topLeftOfSubBoxRow);

    for (let i = 0; i < regionSize; i++) {
      for (let j = 0; j < regionSize; j++) {

        /*
          i and j just define our offsets from topLeftOfBlockRow
          and topLeftOfBlockCol respectively
        */
        //  console.log('stop', board[topLeftOfSubBoxRow + i]);
        if (!board[topLeftOfSubBoxRow + i]) {
          debugger
        }
        if (charToPlace == board[topLeftOfSubBoxRow + i][topLeftOfSubBoxCol + j]) {
          return false;
        }

      }
    }

    return true; // placement is valid
  }


}

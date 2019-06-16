import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public tableArr: Object = {}

  ngOnInit() {
    this.fillUpArray()
    console.log('table is', this.tableArr);
    
  }

  public elCoutner = 1
  // public currentNumber = 1
 
  fillUpArray(){
    for (let objCube = 0; objCube < 9; objCube++) {
      let arr =  []
      for (let row = 0; row < 3; row++) {
          
        for (let el = 0; el < 3; el++) {
          arr.push(this.getName(objCube) +  this.elCoutner)
          this.elCoutner++
        }
        this.tableArr[this.getName(objCube)] = arr
        if (row == 2) {
          this.elCoutner = 1
        }
      }
      
   
    }

  }

  checkRowIndex(rowIndex, check1, check2, check3 ){
    if (rowIndex == check1 || rowIndex == check2 || rowIndex == check3) {
      return true
    }
    return false
  }

  getName(index){
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

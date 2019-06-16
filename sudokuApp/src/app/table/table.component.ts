import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public tableArr: Object = {}
  public test = 'testing';

  ngOnInit() {
    this.fillUpArray()
    console.log('table is', this.tableArr);
    console.log('testarr is', this.testArr)
    console.log('ell is', this.testArr['f']['ll'])

    
  }
  public testArr = {"k": [{"q1": "pishkam"},{'z2':'achkam'}], "f": {"ll": 'asdasd', "qq" : "lll"}}

  public elCoutner = 1
  // public currentNumber = 1
 
  fillUpArray(){
    for (let objCube = 0; objCube < 9; objCube++) {
      let obj =  {}
      this.tableArr[this.getName(objCube)] = {}
      for (let row = 0; row < 9; row++) {
          
        // for (let el = 0; el < 3; el++) {
          let prop = {}
          //obj[this.getName(objCube) +  this.elCoutner] = 'kalkulate'
          //arr.push(obj)
          //this.tableArr[this.getName(objCube)] = this.getName(objCube) +  this.elCoutner = 'kalkulate'
          this.tableArr[this.getName(objCube)][this.getName(objCube) + (row + 1)] = "kokshka"
          this.elCoutner++
        // }
        // if (row == 2) {
        //   this.elCoutner = 1
        // }
      }
      
   
    }

  }
  getKeyValue(obj){
    // console.log(Object.keys(obj)[0])
    return Object.keys(obj)[0]
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

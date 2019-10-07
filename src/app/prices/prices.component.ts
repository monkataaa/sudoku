import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';

declare var require: any

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  lastOrderType = 'asc';
  selectedOrder = '';

  limits = {
    'oneRoom' : 50000,
    'twoRooms' : 70000,
    'three' : 90000,
  }

  sortByOneRoom(selector) {
    let asc;
    let desc;
    if (this.selectedOrder == selector) {
      asc = -1
      desc = 1
    } else {
      this.selectedOrder = selector
       asc = 1
       desc = -1
    }
    this.pricesArr = this.pricesArr.sort((a, b) => (a[selector] > b[selector]) ? asc : desc)
  }

  saveIt() {
    // let blob = new Blob(['Hello world!'], {
    //   type:  "{ type: 'text/plain;charset=utf-8' }"
    // });
    // FileSaver.saveAs(blob, 'newcontrol.txt');
  //   const fs = require('browserify-fs');

  //   fs.writeFileSync("myFile", "Hey there!", function(err) {
  //     if(err) {
  //         return console.log(err);
  //     }
  
  //     console.log("The file was saved!");
  // }); 


  // console.log("Going to create directory /tmp/test");
  // console.log('fs is ', fs);
  // fs.mkdir('/tmp/test',function(err){
  //    if (err) {
  //        return console.error(err);
  //    }
  //    console.log("Directory created successfully!");
  // });
  }


  pricesArr = [
    {
      district: 'Банишора',
      oneRoom: 44222,
      twoRooms: 64151,
      three: 91200
    },
    {
      district: 'Белите брези',
      oneRoom: 53190,
      twoRooms: 74100,
      three: 118512
    },
    {
      district: 'Бенковски',
      oneRoom: 37045,
      twoRooms: 42655,
      three: 71250
    },
    {
      district: 'Борово',
      oneRoom: 48070,
      twoRooms: 70585,
      three: 118750
    },
    {
      district: 'Ботунец',
      oneRoom: 18989,
      twoRooms: 21850,
      three: 34200
    },
    {
      district: 'Бояна',
      oneRoom: 58125,
      twoRooms: 81975,
      three: 141550
    },
    {
      district: 'Бъкстон',
      oneRoom: 48996,
      twoRooms: 71383,
      three: 104499
    },
    {
      district: 'Витоша',
      oneRoom: 42028,
      twoRooms: 68896,
      three: 110825
    }]


}

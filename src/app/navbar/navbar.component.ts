import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  @Output() getNewGameEmitter: EventEmitter<any> = new EventEmitter()

  loadPreparedData(level){
    this.getNewGameEmitter.emit(level)
  }
}

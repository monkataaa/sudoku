import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() getNewGameEmitter: EventEmitter<any> = new EventEmitter()
  @Output() openTableEmitter: EventEmitter<any> = new EventEmitter()
  public isOwnSudoku: boolean = false;

  loadPreparedData(level) {
    this.getNewGameEmitter.emit(level)
  }

  getOwnSudoku() {
    this.isOwnSudoku = true;
  }

  switchGames() {
    this.isOwnSudoku = !this.isOwnSudoku
    this.openTableEmitter.emit(this.isOwnSudoku)
  }
}

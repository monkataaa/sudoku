import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'https://cors-anywhere.herokuapp.com/http://www.cs.utep.edu/cheon/ws/sudoku/new/?size=9';

  constructor(private httpClient: HttpClient) { }

  public getSudoku(level?){
    if (!level) {
      level = 1
    }
    return this.httpClient.get(`${this.apiURL}/?level=${level}`);
}
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'http://www.cs.utep.edu/cheon/ws/sudoku/new/?size=9';

  constructor(private httpClient: HttpClient) { }

  public getSudoku(level?){
    if (!level) {
      level = 1
    }
    let header = new HttpHeaders({'content-type': 'text/plain'});
    console.log('url is ' , `${this.apiURL}/?level=${level}`);
    return this.httpClient.get(`${this.apiURL}/?level=${level}`, {headers : header});
}
}

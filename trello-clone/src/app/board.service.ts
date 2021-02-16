import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
 
@Injectable()
export class BoardService {

  email!: string; 
  password!: string;

  public setHeader(email: string, password: string){
    this.email = email;
    this.password = password;
  }

  constructor(private _rest: RestService) { }

  getBoards() {
    console.log([{ key: 'Authorization', value: `Basic ${btoa(this.email + ':' + this.password)}`}]);
    return this._rest.executeGet('/api/v1/boards', [{ key: 'Authorization', value: `Basic ${btoa(this.email + ':' + this.password)}`}]);
  }

  getBoardDetails(id: string) {
    console.log([{ key: 'Authorization', value: `Basic ${btoa(this.email + ':' + this.password)}`}]);
    return this._rest.executeGet(`/api/v1/boards/${id}`, [{ key: 'Authorization', value: `Basic ${btoa(this.email + ':' + this.password)}`}]);
  }

  createBoard(name: string) {
    console.log([{ key: 'Authorization', value: `Basic ${btoa(this.email + ':' + this.password)}`}]);
    return this._rest.executePost(`/api/v1/boards/`, { name }, [{ key: 'Authorization', value: `Basic ${btoa(this.email + ':' + this.password)}`}]);
  }

}

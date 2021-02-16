import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { BoardService } from '../board.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  header: any;

  constructor(private _rest: RestService, private _router: Router, private _boardService: BoardService) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    this.header = [{ key: 'Authorization', value: `Basic ${btoa(email + ':' + password)}`}];
    this._boardService.setHeader(email, password);
    this._rest.executeGet('/login', this.header).subscribe(() => {
        this._router.navigate(['/boards', this.header]);
      });
  }

}

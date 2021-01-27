import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  id!: string;
  board: any;

  constructor(private _activatedRoute: ActivatedRoute, private _board: BoardService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.id = <string><unknown>params.get('id');
      this.board = this._board.getBoardDetails(this.id);
    })
  }

}

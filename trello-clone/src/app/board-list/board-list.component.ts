import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {
  
  boards: any;
  
  constructor(private _router: Router, private _board: BoardService) { }

  ngOnInit(): void {
    this.boards = this._board.getBoards();
  }

  boardClicked(board: any){
    this._router.navigate(['boards', board.id]);
  }

}

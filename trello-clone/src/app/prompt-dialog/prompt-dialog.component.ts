import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-prompt-dialog',
  templateUrl: './prompt-dialog.component.html',
  styleUrls: ['./prompt-dialog.component.scss']
})
export class PromptDialogComponent implements OnInit {

  name: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, message: string }) { }

  ngOnInit(): void {
  }

}

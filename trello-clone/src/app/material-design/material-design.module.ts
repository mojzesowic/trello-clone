import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  imports: [MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatListModule,
    MatDialogModule, MatInputModule],
  exports: [MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatListModule,
    MatDialogModule, MatInputModule]
})
export class MaterialDesignModule { }

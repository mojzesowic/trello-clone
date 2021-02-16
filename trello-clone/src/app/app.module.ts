import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BoardListComponent } from './board-list/board-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialDesignModule } from './material-design/material-design.module'
import { BaseRouterModule } from './base-router/base-router.module';
import { DragulaModule } from 'ng2-dragula';
import { BoardService } from './board.service';
import { HomeComponent } from './home/home.component';
import { ListService } from './list.service';
import { RestService } from './rest.service';
import { DialogsModule } from './dialogs/dialogs.module';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardListComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialDesignModule,
    BaseRouterModule,
    DragulaModule,
    HttpModule,
    DialogsModule
  ],
  providers: [BoardService, RestService, ListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

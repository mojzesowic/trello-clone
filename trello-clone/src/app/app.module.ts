import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BoardListComponent } from './board-list/board-list.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MaterialDesignModule } from './material-design/material-design.module'
import { BaseRouterModule } from './base-router/base-router.module';
import { DragulaModule } from 'ng2-dragula';
import { BoardService } from './board.service';
import { HomeComponent } from './home/home.component';
import { ListService } from './list.service';
import { RestService } from './rest.service';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    BaseRouterModule,
    DragulaModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BoardService, RestService, ListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

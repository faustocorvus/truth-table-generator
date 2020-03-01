import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { TruthTableComponent } from './components/truth-table/truth-table.component';
import { SetComponent } from './components/truth-table/set/set.component';
import { MathematicalLogicComponent } from './components/truth-table/mathematical-logic/mathematical-logic.component';
import { BooleanAlgebraComponent } from './components/truth-table/boolean-algebra/boolean-algebra.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    TruthTableComponent,
    SetComponent,
    MathematicalLogicComponent,
    BooleanAlgebraComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

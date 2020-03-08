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
import { ReactiveFormsModule } from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PerformedComponent } from './components/truth-table/performed/performed.component';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';

import { ParserService } from './components/truth-table/parser.service';
import { SolveTruthTableService } from './components/truth-table/solve-truth-table.service';
import { ExpressionInputService } from './components/truth-table/expression-input.service';

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
    PageNotFoundComponent,
    PerformedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule,
    MatTableModule,
    MatSidenavModule,
  ],
  providers: [
    ParserService,
    SolveTruthTableService,
    ExpressionInputService
  ],
  entryComponents: [
    PerformedComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

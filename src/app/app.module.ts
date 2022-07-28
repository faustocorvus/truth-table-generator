import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { TruthTableComponent } from './components/truth-table/truth-table.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PerformedComponent } from './components/truth-table/performed/performed.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';

import { ParserService } from './components/truth-table/parser.service';
import { SolveTruthTableService } from './components/truth-table/solve-truth-table.service';
import { ExpressionInputService } from './components/truth-table/expression-input.service';
import { KeyboardComponent } from './components/truth-table/keyboard/keyboard.component';
import { InfoTableComponent } from './components/truth-table/info-table/info-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TruthTableComponent,
    PageNotFoundComponent,
    PerformedComponent,
    KeyboardComponent,
    InfoTableComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
    MatProgressSpinnerModule,
    MatRadioModule,
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

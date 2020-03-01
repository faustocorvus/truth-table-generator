import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TruthTableComponent } from './components/truth-table/truth-table.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SetComponent } from './components/truth-table/set/set.component';
import { MathematicalLogicComponent } from './components/truth-table/mathematical-logic/mathematical-logic.component';
import { BooleanAlgebraComponent } from './components/truth-table/boolean-algebra/boolean-algebra.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'truth-table-generator', component: TruthTableComponent, children: [
      { path: 'set', component: SetComponent },
      { path: 'mathematical-logic', component: MathematicalLogicComponent },
      { path: 'boolean-algebra', component: BooleanAlgebraComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

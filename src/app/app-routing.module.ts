import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './formation/formation.component';
import { GrandparentComponent } from './grandparent/grandparent.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'grandparent', component: GrandparentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'formation', component: FormationComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

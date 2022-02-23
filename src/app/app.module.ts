import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { GrandchildComponent } from './grandparent/grandchild/grandchild.component';
import { GrandparentComponent } from './grandparent/grandparent.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ChildComponent } from './parent/child/child.component';
import { ParentComponent } from './parent/parent.component';
import { RoutingComponent } from './routing/routing.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    GrandparentComponent,
    GrandchildComponent,
    RoutingComponent,
    HomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    FormationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

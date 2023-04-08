import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { RoutesRoutingModule } from "../app/routes/routes-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutesRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

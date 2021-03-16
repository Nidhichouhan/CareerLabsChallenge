import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchfilterPipe } from './searchfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    SearchfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

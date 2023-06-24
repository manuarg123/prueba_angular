import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DogJokeComponent } from './dog-joke/dog-joke.component';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: 'dogjoke', component: DogJokeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DogJokeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

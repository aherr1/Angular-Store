import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GemComponent } from './gem/gem.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartComponent } from './cart/cart.component';

//below your import statements but above your @ngModule:

const appRoutes: Routes = [
    {path: 'cart', component: CartComponent},
    {path: 'home', component: HomeComponent},
    {path: '**', component: NotFoundComponent}]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GemComponent,
    NavbarComponent,
    TabsComponent,
    ReviewsComponent,
    NotFoundComponent,
    CartComponent
  ],
    imports: [
    BrowserModule,
	  FormsModule,
	  HttpClientModule,
	  RouterModule.forRoot(
		  appRoutes,
      		{ enableTracing: true } // <-- debugging purposes only
	  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

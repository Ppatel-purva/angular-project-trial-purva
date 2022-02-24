import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { CoffeeshopeheaderComponent } from './coffeeshopeheader/coffeeshopeheader.component';
import { CoffeeshopelogoComponent } from './coffeeshopelogo/coffeeshopelogo.component';
import { CoffeeshopefooterComponent } from './coffeeshopefooter/coffeeshopefooter.component';
import { CoffeeshopecarausalComponent } from './coffeeshopecarausal/coffeeshopecarausal.component';
import { CoffeefooterComponent } from './coffeefooter/coffeefooter.component';
import { ProductsComponent } from './header/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    CoffeeshopeheaderComponent,
    CoffeeshopelogoComponent,
    CoffeeshopefooterComponent,
    CoffeeshopecarausalComponent,
    CoffeefooterComponent,
    ProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 

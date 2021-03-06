import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { ReactFormsComponent } from './react-forms/react-forms.component';
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
import { ProductsDiscriptionComponent } from './header/products-discription/products-discription.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AddtoproductdiscriptionComponent } from './addtoproductdiscription/addtoproductdiscription.component';
import {DatetimeService} from './datetime.service';
import { UserinfoService } from './userinfo.service';
import { ReactiveAddressFormComponent } from './reactive-address-form/reactive-address-form.component';


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
    ProductsDiscriptionComponent,
    AddtocartComponent,
    AddtoproductdiscriptionComponent,
    ReactFormsComponent,
    ReactiveAddressFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
 
  ],
  providers: [DatetimeService,UserinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 

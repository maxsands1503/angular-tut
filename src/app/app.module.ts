import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { StocksComponent } from './stocks.component'
import { HighlightDirective } from './highlight.directive';
import { StockDirectiveDirective } from './stock-directive.directive';
import {StockService} from './stock.service';
import { DateFormatterPipe } from './date-formatter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MutualfundsComponent,
    StockDirectiveDirective,
    HighlightDirective,
    StocksComponent,
    DateFormatterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

/* Module Dependencies */
import { ChatModule } from './modules/chat';

/* Containers */
import { AppComponent } from './app.component';

/* Components */

/* Services */

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,

    ChatModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Module Dependencies */
import { ChatModule } from './modules/chat';

/* Containers */
import { AppComponent } from './app.component';

/* Components */

/* Services */

@NgModule({
  imports: [
    BrowserModule,

    ChatModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}

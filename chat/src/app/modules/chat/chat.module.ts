import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

/* Module Dependencies */

/* Containers */
import { ChatComponent } from './containers/chat/chat.component';

/* Components */

/* Services */

/* Routes */

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChatComponent
  ],
  providers: [],
  exports: [
    ChatComponent
  ]
})

export class ChatModule {}

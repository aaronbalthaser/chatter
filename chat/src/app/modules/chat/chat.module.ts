import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

/* Module Dependencies */

/* Containers */
import { ChatComponent } from './containers/chat/chat.component';

/* Components */

/* Services */
import { ChatService } from './services/chat.service';

/* Routes */

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    ChatComponent
  ],
  providers: [
    ChatService
  ],
  exports: [
    ChatComponent
  ]
})

export class ChatModule {}

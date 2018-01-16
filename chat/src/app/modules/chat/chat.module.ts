import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/* Module Dependencies */

/* Containers */
import { ChatComponent } from './containers/chat/chat.component';

/* Components */
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { ChatBubbleComponent } from './components/chat-bubble/chat-bubble.component';

/* Services */
import { ChatService } from './services/chat.service';

/* Routes */

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ChatComponent,
    ChatFormComponent,
    ChatBubbleComponent
  ],
  providers: [
    ChatService
  ],
  exports: [
    ChatComponent
  ]
})

export class ChatModule {}

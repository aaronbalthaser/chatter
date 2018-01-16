import { Component, OnInit } from '@angular/core';

import io from 'socket.io-client';

import { ChatService } from '../../services/chat.service';

import { Constants } from '../../../../shared/constants';

@Component({
  selector: 'chat',
  styleUrls: ['chat.component.scss'],
  template: `
  <div class="chat">
    <section #chat class="chats">

    </section>
    <section class="chat-form">

    </section>
  </div>
  `
})

export class ChatComponent {
  private socket;
  public messages = [];

  constructor(
    private chatService: ChatService
  ) {

  }

  public getMessages() {
    this.chatService.get()
      .subscribe(
        _messages => {
          this.messages = _messages.map(message => {
            if (message['author'] === 'Sam') {
              message.cls = Constants.CSS_FLEX_END;
            } else {
              message.cls = Constants.CSS_FLEX_START;
            }

            return message;
          });
          console.log(this.messages);
        }
      );
  }

  ngOnInit() {
    this.getMessages();
  }
}

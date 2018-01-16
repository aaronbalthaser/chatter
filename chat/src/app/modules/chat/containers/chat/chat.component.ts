import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

import io from 'socket.io-client';

import { ChatService } from '../../services/chat.service';

import { Constants } from '../../../../shared/constants';

export interface Message {
  id: number;
  author: string;
  content: string;
  timestamp: number;
}

@Component({
  selector: 'chat',
  styleUrls: ['chat.component.scss'],
  template: `
  <div class="chat">
    <section #chat class="chats">
      <chat-bubble
          [ngStyle]="{'align-self': message.cls}"
          *ngFor="let message of messages"
          [data]="message">
      </chat-bubble>
    </section>
    <section class="chat-form">
      <chat-form
        (create)="onSendMessage($event)">
      </chat-form>
    </section>
  </div>
  `
})

export class ChatComponent {
  private socket;
  public messages = [];

  @ViewChild('chat') private scrollContainer: ElementRef;

  constructor(
    private chatService: ChatService
  ) {

  }

  public onSendMessage(event: Message) {
    console.log(event);
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
        }
      );
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop =
      this.scrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  ngOnInit() {
    this.getMessages();
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
}

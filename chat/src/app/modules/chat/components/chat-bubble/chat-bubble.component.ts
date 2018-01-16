import { Component, Input } from '@angular/core';

@Component({
  selector: 'chat-bubble',
  styleUrls: ['chat-bubble.component.scss'],
  template: `
    <div class="chat-bubble">
      {{ data.content }}
    </div>
  `
})

export class ChatBubbleComponent {
  @Input() data;
}

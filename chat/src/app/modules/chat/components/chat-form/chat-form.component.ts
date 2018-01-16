import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'chat-form',
  styleUrls: ['chat-form.component.scss'],
  template: `
    <form [formGroup]="form">
      <div class="cf-input-container">
        <input
            autocomplete="off"
            class="cf-input"
            type="text"
            placeholder="message..."
            formControlName="message"
            (keyup.enter)="sendMessage()">
        <button
            type="button"
            class="cf-button"
            (click)="sendMessage()">
            <i class="fas fa-comments"></i>
        </button>
      </div>
    </form>
  `
})

export class ChatFormComponent {
  @Output() create = new EventEmitter();

  form = this.fb.group({
    message: ['', Validators.required ]
  });

  constructor(
    private fb: FormBuilder
  ) {}

  get required() {
    return (
      this.form.get('message').hasError('required')
        &&
      this.form.get('message').touched
    );
  }

  public sendMessage() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
      this.form.reset();
    }
  }
}

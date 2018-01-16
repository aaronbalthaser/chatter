import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {
  private url = 'http://localhost:9000/';

  constructor(private http: Http) {}

  public get() {
    return this.http.get(this.url + 'messages')
      .map(response => response.json())
  }
}

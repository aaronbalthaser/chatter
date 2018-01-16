Title:
Chat Messages:

Description:
Gets the persisted chat messages from the server and posts the new messages to the server.

Url:
/messages

Method:
GET | POST

Data Model:
{
  id: number;
  author: string;
  content: string;
  timestamp: number;
}

Sample GET:
this.http.get('http://localhost:9000/' + 'messages');

Sample POST:
this.http.post('http://localhost:9000/' + 'messages', {
  id: 1516117218847;
  author: 'Sam';
  content: 'Hello';
  timestamp: 1516117218847;
})

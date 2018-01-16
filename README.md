# Chat Application Code Challenge

This is a basic chat application demo using Angular, Node and Socket IO.

## Getting Started

The project is comprised of a multi tier architecture with the api directory containing the server side code and the chat directory containing the front end code.

### Prerequisites

What things you need to install the software and how to install them

```
Angular CLI
Node JS
```

### Installing

Both api and chat directories are part of a multi tier architecture and contain independent servers for running the application.

In the api directory run:

```
yarn install
```

Then to start the backend server run:

```
yarn start
```

In the chat directory run

```
yarn install
```

Then to start the front end server run:

```
ng server
```

## Built With

* [Angular JS](https://angular.io/docs/) - The Javascript framework used
* [Node JS](https://nodejs.org/en/docs/) - Needs no description :)
* [Socket IO](https://socket.io/docs/) - Real time engine.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Aaron Balthaser** - *Developer* - [Profile](https://github.com/aaronbalthaser)

See also the list of [contributors](https://github.com/aaronbalthaser/chatter/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspiration: Code challenge

## Code Challenge Project Notes

1. I changed up the project structure since I’m using Angular CLI to avoid building out Webpack configurations for a scratch project.

2. SCSS is not located in a single file but is separated into files across the project per Angular best practices.

* Styles.scss - src/styles.scss: contains global styles, currently resets and minor styles for maintaining percent based dimensions.
* All other styles are bound to the related components that comprise the application.

3. Component architecture consists of the use of one module with three components:

* Chat Component - serves as a smart/container component.

* Chat Form Component - serves as a dumb/child component.

* Chat Bubble Component - serves as a dumb/child component.

## Min Requirments

* View previous messages, with the newest message nearest the box where new
  messages are entered (so, reverse chronological order if you have previous
  messages appearing below the chatbox, otherwise, chronological order).

* Write a message.

* Have the message you wrote appear with the other messages, with your message
  as the most recent.

## Walkthrough

When the application begins running there are no chats. I left the fake database array empty. You can start an initial conversation with a simulated response by saying hello or anything else. I created a small response generator that contains a small amount of responses which are triggered by sending messages via the user input. The conversation won’t last long, its only there to show that the front end supports the ui updates for a realtime chat scenario.

Anything that is said during the chat conversation is persisted to the backend by a fake database api.

I left the message for the server developer in the backend_design_spec.md

Thanks!

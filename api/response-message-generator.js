const messages = [
  {
    id: 500,
    author: 'Sandra',
    content: 'I\'m not interested.',
    timestamp: null
  },
  {
    id: 501,
    author: 'Sandra',
    content: 'I told you I\'m not interested!',
    timestamp: null
  },
  {
    id: 502,
    author: 'Sandra',
    content: 'Dang! How many time I gotta tell you?',
    timestamp: null
  },
  {
    id: 502,
    author: 'Sandra',
    content: 'Getting ready to just ignore you.',
    timestamp: null
  },
  {
    id: 503,
    author: 'Sandra',
    content: 'Ignoring you...',
    timestamp: null
  },
  {
    id: 504,
    author: 'Sandra',
    content: 'Bye!',
    timestamp: null
  }
];

const generate = (count) => {
  return new Promise((resolve, reject) => {
    messages.forEach((message, index) => {
      if (index == count) {
        message.timestamp = Date.now();
        resolve(message);
      }
    });
  });
};

module.exports = generate;

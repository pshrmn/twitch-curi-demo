import { sentence } from './loremIpsum';


export default function() {
  let chatLines = [];
  let timeout;
  function randomTimeout(fn) {
    fn();
    timeout = setTimeout(() => {
      randomTimeout(fn);
    }, 2000 + Math.floor(Math.random()*500));
  }

  return {
    chatLines,
    start() {
      randomTimeout(() => {
        chatLines.push({ username: 'Hal', text: sentence(), key: chatLines.length });
        if (chatLines.length > 50) {
          chatLines.shift();
        }
      });
    },
    stop() {
      clearTimeout(timeout);
      chatLines = [];
    }
  };
}

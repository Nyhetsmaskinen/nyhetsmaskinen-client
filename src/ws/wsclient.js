//console.log(window.location.hostname)

const connection = new WebSocket('ws://'+window.location.hostname+':8081');

connection.onopen = () => {
  console.log('connected');
};

connection.onclose = () => {
  console.error('disconnected');
};

connection.onerror = (error) => {
  console.error('failed to connect', error);
};

connection.onmessage = (event) => {
  console.log('received', event.data);
};

export {
  connection
}

/*document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  let message = document.querySelector('#message').value;
  connection.send(message);
  document.querySelector('#message').value = '';
});*/

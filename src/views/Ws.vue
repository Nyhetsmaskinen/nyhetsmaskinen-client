<template>
  <div class="ws">
    <CenterColumn>

      <h1>WebSockets test</h1>

      <input @change="socketUpdateUserName()" type="text" ref="name"/>
      <input @change="socketUpdateUserScore()" type="number" ref="score"/>

      <br />
      Highscore: {{highscore}}
      <br />
      Användare:
      <pre>
        {{users}}
      </pre>

      <br />


    </CenterColumn>

  </div>
</template>

<script>

//import { connection } from '@/ws/wsclient'
//import Gun from 'gun/gun'
//import { http } from 'http'
//import '@/ws/wsserver'
//import 'http://localhost:3000/socket.io/socket.io.js'

// @ is an alias to /src
//const io = require("socket.io");
//import io from 'socket.io'
//import io from 'socket.io-client'
//const socket = io('ws://localhost:3000')
//const socket = io('wss://dramafabriken.herokuapp.com')

import CenterColumn from '@/components/CenterColumn.vue'
//import WebSocket from 'ws';
//const WebSocket = require('ws');
//const webSocketServer = require('websocket').server;

export default {
  name: 'home',
  data: function () {
    return {
      gun: null,
      users: {},
      highscore: {},
      //connection: new WebSocket('ws://localhost:8081')
      //connection: new WebSocket('wss://dramafabriken.herokuapp.com'),
      //socket: null
    }
  },
  components: {
    CenterColumn,
  },
  computed: {
  },
  methods: {
    socketUpdateUser: function (){
      this.$socket.emit('user update', {name: this.$refs.name.value, score: parseInt(this.$refs.score.value)});
    },
    socketUpdateUserName: function (){
      this.$socket.emit('user update name', this.$refs.name.value);
    },
    socketUpdateUserScore: function (){
      this.$socket.emit('user update score', this.$refs.score.value)
    },
    /*onWsReceived: function () {
      let self = this;
      this.connection.onmessage = (event) => {
        self.val = event.data
        console.log('received', event.data);
      };
    },*/
    socketEvents: function (){

      let self = this;
      this.$socket.on('users update', function(users){
        self.users = users
      });

      this.$socket.on('highscore update', function(highscore){
        self.highscore = highscore
      });

    }
  },
  created: function () {
  },
  mounted: function () {

    //this.onWsReceived();
    this.socketEvents();

    //this.gun = Gun(['https://localhost:8080/gun'])
    //this.gun = Gun(['http://gunjs.herokuapp.com//gun'])

    //var server = http.createServer().listen(8080);
    //this.gun = Gun({web: server});

    /*console.log(WebSocket)
    const webSocketServer = new WebSocket.Server({ port: 8080 });
    console.log(webSocketServer)*/
    /*let self = this;
    this.gun.get('hello').on(function(data) {
      console.log("receive: " + data.name)
      self.val = data.name
    })*/

  }
}
</script>

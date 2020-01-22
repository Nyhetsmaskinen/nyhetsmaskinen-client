<template>
  <div class="ws">
    <CenterColumn>

      <h1>WebSockets test</h1>

      <input @change="sendToWS()" ref="input"/>
      Värde: {{val}}

    </CenterColumn>

  </div>
</template>

<script>

//import { connection } from '@/ws/wsclient'
//import Gun from 'gun/gun'
//import { http } from 'http'
//import '@/ws/wsserver'

// @ is an alias to /src
import CenterColumn from '@/components/CenterColumn.vue'
//import WebSocket from 'ws';
//const WebSocket = require('ws');
//const webSocketServer = require('websocket').server;

export default {
  name: 'home',
  data: function () {
    return {
      gun: null,
      val: "",
      connection: new WebSocket('wss://'+window.location.hostname+':8081')
    }
  },
  components: {
    CenterColumn,
  },
  computed: {
  },
  methods: {
    sendToWS: function (){
      this.connection.send(this.$refs.input.value)
      //this.gun.get('hello').put({ name: this.$refs.input.value });
      //console.log("send: " + this.$refs.input.value)

    },
    onWsReceived: function () {
      let self = this;
      this.connection.onmessage = (event) => {
        self.val = event.data
        //console.log('received', event.data);
      };
    }
  },
  created: function () {
  },
  mounted: function () {

    this.onWsReceived();

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

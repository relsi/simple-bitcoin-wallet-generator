<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="wallet">
      <fieldset class="input-box">
        <legend>Wallet data</legend>
        <input type="text" class="field-input" v-model="address" placeholder="Wallet Address">
        <input type="text" class="field-input" v-model="private_key" placeholder="Wallet Private Key">
        <textarea v-model="seed" class="field-textarea" id="seed" cols="30" rows="5" placeholder="Wallet Seed"></textarea>
      </fieldset>
    </div>
    <p>
      <button v-on:click="generateWallet" class="btn">Gerar Carteira</button>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'BitWallet',
  props: {
    msg: String
  },
  data() {
    return {
      address: '',
      private_key: '',
      seed: ''
    }
  },
  methods: {
    generateWallet() {
      //get wallet 
      axios.get('http://localhost:3000/create-wallet', { mode: 'cors', 'Cache-Control': 'no-cache' })
        .then(response => {
          console.log(response.data.address)
          this.address = response.data.address;
          this.private_key = response.data.private_key;
          this.seed = response.data.seed;
        }
        );
    }
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

.btn {
  padding: 15px 90px;
  font-size: 15px;
  font-weight: bold;
  background-color: #f79413;
  color: #fff;
  border: 1px solid #f79413;
  cursor: pointer;
  border-radius: 15px;
}

.btn:hover {
  border: 1px solid #2c3e50;
}

.input-box {
  display: flex;
  flex-direction: column;
  border: 1px solid #2c3e50;
}

.input-box legend {
  font-size: 20px;
}

.field-input {
  height: 40px;
  margin-bottom: 15px;
  border: 1px solid #f79413;
  border-radius: 5px;
}

.field-textarea {
  border: 1px solid #f79413;
  border-radius: 5px;
}
</style>

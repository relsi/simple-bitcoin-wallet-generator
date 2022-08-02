<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <BitWallet msg="Simple App to Bitcoin Wallet Generate"/>
</template>

<script>
import BitWallet from './components/BitWallet.vue'

export default {
  name: 'App',
  components: {
    BitWallet
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <button>Gerar Carteira</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'BitWallet',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

button {
  padding: 15px 90px;
  font-size: 15px;
  font-weight: bold;
  background-color: #41b883;
  color: #fff;
  border: 1px solid #41b883;
  cursor: pointer;
  border-radius: 15px;
}

button:hover {
  border: 1px solid #2c3e50;
}
</style>

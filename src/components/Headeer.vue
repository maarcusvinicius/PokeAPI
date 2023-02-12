<template>
    <div class="column is-half is-offset-one-quarter">
      <img src="../assets/logo.png" alt="Logo" width="100">
      <input type="text" placeholder="Digite o nome do Pokemon" class="input is-rounded">
      <button id="searchBtn" class="button is-fullwidth is-danger is-rounded" @click="">Buscar</button>
    </div>
    <div>
      <div id="pokemon-list">

      </div>
    </div>
</template>

<script>

export default {
  name: 'Headeer',
  data() {
    return {
      //
    }
  },
}
</script>

<style>
#searchBtn {
  margin-top: 2vh;
}
</style>
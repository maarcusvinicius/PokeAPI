<template>
  <div class="container">
    <img src="../assets/logo.png" alt="" width="50">

    <Buscar :apiUrl="apiUrl" @setPokemonUrl="setPokemonUrl" />
    <Card v-if="showDetail" :pokemonUrl="pokemonUrl" :imageUrl="imageUrl" @closeDetail="closeDetail" />

  </div>
</template>


<script>
  import Buscar from './Buscar.vue';
  import Card from './Card.vue';

  // import axiios from '../services/axios'

  export default {
    data: () => {
      return {
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
        apiUrl: 'https://pokeapi.co/api/v2/pokemon/',
        pokemonUrl: '',
        showDetail: false
      }
    },
    components: {
      Card,
      Buscar,
    },
    methods: {
      setPokemonUrl(url) {
        this.pokemonUrl = url;
        this.showDetail = true;
      },
      closeDetail() {
        this.pokemonUrl = '';
        this.showDetail = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  .container {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: normal;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    width: calc(100% - 20px);
    min-height: calc(100vh - 20px);
    background: linear-gradient(270deg, rgba(56,58,170,1) 0%, rgba(3,3,3,1) 100%, rgba(255,255,255,1) 100%);

    img {
      padding-bottom: 50px;
    }
  }


</style>
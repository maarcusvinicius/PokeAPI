<template>
  <div class="container">

  </div>
</template>


<script>
  import pokemon_List from './PokemonList.vue';
  import pokemon_Detail from './PokemonDetail.vue';
  import pokemon_Search from './PokemonSearch.vue';

  import axiios from '../services/axios'

  export default {
    data: () => {
      return {
        imageUrl: axiios.imageUrl,
        apiUrl: axiios.apiUrl
      }
    },
    components: {
      pokemon_List,
      pokemon_Detail,
      pokemon_Search,
    }
  }
</script>

<style lang="scss" scoped>
  .container {
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
  }


</style>
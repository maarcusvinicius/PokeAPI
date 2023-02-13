<template>
  <div class="center">
    <div class="card" v-if="show">
      <div class="additional">
        <div class="user-card">
          <button class="close" @click="closeDetail">
            <i class="fa fa-times"></i>
          </button>
          <div class="level center">{{ pokemon.base_experience }} XP</div>
          <div class="points center">
            <div class="types">
              <div
                class="type"
                v-for="(value, index) in pokemon.types"
                :key="'value' + index"
              >
                {{ value.type.name }}
              </div>
            </div>
          </div>
          <div
            class="center"
          >
            <div v-if="pokemon" class="image">
              <img :src="imageUrl + pokemon.id + '.png'" alt="" />
            </div> 
          </div>
        </div>
        <div class="more-info">
          <h1>{{ pokemon.name }}</h1>
          <div class="coords">
            <span>Altura</span>
            <span>{{ pokemon.height / 10 }} m</span>
          </div>
          <div class="coords">
            <span>Peso</span>
            <span>{{ pokemon.weight / 10 }} kg</span>
          </div>
          <div class="stats">
            <div>
              <div class="title">Habilidades</div>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <div class="coords">
                <span
                  class="coords"
                  v-for="(value, index) in pokemon.abilities"
                  :key="'value' + index"
                >
                  {{ value.ability.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="show" class="general">
        <h1>{{ pokemon.name }}</h1>

        <span class="more">Passe o mouse por cima para ver detalhes</span>
      </div>
    </div>

    <div v-else class="card">
      <button class="close" @click="closeDetail">
        <i class="fa fa-times"></i>
      </button>
      <!-- <i class="fas fa-spinner fa-spin"></i> -->
      <h2 class="error">Pokemom não encontrado,<br> tente novamente!</h2>
      <span class="more">Favor escrever com letras minúsculas</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pokemonUrl", "imageUrl"],
  data: () => {
    return {
      show: false,
      pokemon: {},
    };
  },
  methods: {
    fetchData() {
      let req = new Request(this.pokemonUrl);
      fetch(req)
        .then((resp) => {
          if (resp.status === 200) {
            return resp.json()
          } else {
            console.log(error)

          }
        })
        .then((data) => {
          this.pokemon = data;
          this.show = true;
        })
        .catch((error) => {
            console.log(error)
        });
    },
    closeDetail() {
      this.$emit("closeDetail");
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  width: 510px;
  height: 250px;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1.5rem;
}

.card h1 {
  text-align: center;
}

.card .additional {
  position: absolute;
  width: 150px;
  height: 100%;
  background: linear-gradient(270deg, rgba(3,3,3,1) 0%, rgba(56,58,170,1) 100%);
  transition: width 0.4s;
  overflow: hidden;
  z-index: 2;
}

.card:hover .additional {
  width: 100%;
  border-radius: 0 5px 5px 0;
}

.card .additional .user-card {
  width: 150px;
  height: 100%;
  position: relative;
  float: left;
}

.card .additional .user-card button.close {
  margin-left: 3px;
  border: none;
  background-color: transparent;
  border-radius: 100%;

  color: white;
  cursor: pointer;
}

.card button.close {
  margin-left: 3px;
  border: none;
  background-color: transparent;
  border-radius: 100%;

  color: black;
  cursor: pointer;
}

.card h2.error {
  display: flex;

  text-align: center;
  justify-content: center;

  margin-top: 70px;
}

.card .additional .user-card::after {
  content: "";
  display: block;
  position: absolute;
  top: 10%;
  right: -2px;
  height: 80%;
  border-left: 2px solid rgba(0, 0, 0, 0.025);
}

.card .additional .user-card .level,
.card .additional .user-card .points {
  top: 15%;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.15);
  padding: 0.125rem 0.75rem;
  border-radius: 100px;
  white-space: nowrap;
}

.card .additional .user-card .points {
  top: 85%;
}

.card .additional .more-info {
  width: 300px;
  float: left;
  position: absolute;
  left: 150px;
  height: 100%;
}

.card .additional .more-info h1 {
  color: #fff;
  margin-bottom: 0;
}


.card .additional .coords {
  margin: 0 1rem;
  color: #fff;
  font-size: 1rem;
}

.card .additional .coords span + span {
  float: right;
}

.card .additional .stats {
  font-size: 2rem;
  display: flex;
  position: absolute;
  bottom: 2rem;
  left: 1rem;
  right: 1rem;
  top: auto;
  color: #fff;
}

.card .additional .stats > div {
  flex: 1;
  text-align: center;
}

.card .additional .stats i {
  display: block;

  margin-top: 10px;
  margin-bottom: 10px;
}

.card .additional .stats div.title {
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
}

.card .general {
  width: 300px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 0;
}

.card .general .more {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.9em;
}

.card span.more {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.9em;
}

@media (max-width:  1024px) {
  * {
    max-height: max-content;
  }
  .card {
    width: 330px;
    height: 230px;
  }

  .card .general .more {
    font-size: 0.5em;
  }

  .card .additional .more-info h1 {
    text-align: center;
  }

  .card h1 {
    text-align: right;
  }
  
  .card .more-info {
    font-size: 0.5rem;
    margin-left: -35px;
  }

  .card .additional .more-info {
    width: 220px;
    font-size: 0.7rem;
  }

  .card .additional .more-info .stats span.coords {
    width: 150px;
    font-size: 1rem;
  }

  .card .additional .coords {
    margin: 0 3rem;
  }
  
  .card .additional .stats .coords {
    margin: 0 1rem;
  }
}
</style>

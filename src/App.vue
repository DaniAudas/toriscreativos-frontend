<script>
import { ref } from 'vue';
import Conteo from './components/Conteo.vue';
import Inicio from './components/Inicio.vue';
import CitaBiblica from './components/CitaBiblica.vue';
import NuestraHistoria from './components/NuestraHistoria.vue';
import Enlaces from './components/Enlaces.vue';
import DejaUnaDedicatoria from './components/DejaUnaDedicatoria.vue';
import Direcciones from './components/Direcciones.vue';

//const dias = ref(20);
/*export default {
  setup() {
    return { dias };
  },
  components: {
    Dedicatorias
  }
}*/

export default {
  name: "App",
  mounted() {
    this.playAudio();
  },
  methods: {
    playAudio() {
      const audio = new Audio("/cancion.mp3"); // Ruta relativa a tu archivo
      audio.play().catch((error) => {
        console.warn("La reproducción automática fue bloqueada:", error);
      });
    },
  }, 
  components: {
    Inicio,
    CitaBiblica,
    NuestraHistoria,
    Conteo,
    Enlaces,
    DejaUnaDedicatoria,
    Direcciones
  }
};
</script>

<template>
  <Inicio />
  <CitaBiblica />
  <NuestraHistoria />
  <Conteo />
  <Enlaces />
  <DejaUnaDedicatoria />
  <Direcciones />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>
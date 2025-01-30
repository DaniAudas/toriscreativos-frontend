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
  data() {
    return {
      audio: null, // Referencia al audio
      isPlaying: false, // Estado para controlar si el audio está en reproducción
    };
  },
  mounted() {
    // Inicializa el objeto Audio cuando el componente se monta
    this.audio = new Audio("/cancion.mp3"); // Ruta relativa al archivo de audio
    this.audio.addEventListener("ended", () => {
      this.isPlaying = false; // Restablecer estado cuando el audio termine
    });
  },
  methods: {
    playAudio() {
      if (!this.isPlaying) {
        this.audio
          .play()
          .then(() => {
            console.log("Audio reproduciéndose");
          })
          .catch((error) => {
            console.warn("Error al reproducir el audio:", error);
          });
      }
    },
  },
  beforeDestroy() {
    if (this.audio) {
      this.audio.pause(); // Detener el audio si el componente se destruye
      this.audio = null; // Limpiar referencia
    }
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
  <img src="/img/reproducir-audio.png" alt="Reproducir" @click="playAudio" class="w-20 h-20 md:w-40 md:h-40 absolute z-50 animate-pulse right-0 top-10">
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
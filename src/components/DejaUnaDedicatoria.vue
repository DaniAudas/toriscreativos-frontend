<script>
import { ref } from 'vue';
import Dedicatorias from './Dedicatorias.vue';

export default {
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
          }
        });
      },
      { threshold: 0.1 } // Activar cuando el 10% sea visible
    );
    observer.observe(this.$refs.animar);
  },
  components: {
    Dedicatorias
  }
};
</script>
<template>
    <div class="relative h-full w-full bg-[#FFFCF5]"><!--Sección dedicatorias-->
    <div class="absolute w-4/5 h-4/5 top-10 left-10 bg-no-repeat bg-center opacity-25 bg-[url('/img/anillos.png')]" 
       style="background-size: contain;"></div>
    <div class="mx-auto mb-4 relative z-10">
      <img src="/img/margen-corazon.png" alt="Margen de corazón" class="mx-auto w-1/3 pt-10">
      <h1 class="text-4xl text-center">Dedicatorias</h1>
    </div>
    <img src="/img/juntos.jpg" alt="Somos 2 enamorados" 
    ref="animar"
    class="w-3/4 md:w-3/4 lg:w-[45rem] h-auto m-auto z-10 relative pt-3 md:pt-10 rounded-3xl md:rounded-full opacity-0 transition-opacity duration-1000"
    :class="{ 'animate-zoomIn': isVisible }">
    <br><br><br>
    <!-- componente de dedicatorias-->
    <Dedicatorias />
    <br><br><br>
  </div>
</template>
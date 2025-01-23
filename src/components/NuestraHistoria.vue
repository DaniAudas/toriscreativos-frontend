<script>
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
};
</script>
<template>
    <div class="flex flex-col md:grid md:grid-cols-2 bg-[#FFFCF5]"><!--Sección nuestra historia-->
    <div 
    ref="animar" 
    class="h-auto relative opacity-0 transition-opacity duration-1000"
    :class="{ 'animate-fadeInLeft': isVisible }">
      <h1 class="text-5xl pt-8 text-center font-lobster">
        Nuestra historia
      </h1>
      <h4 class="text-3xl sm:text-2xl md:text-3xl mt-8 px-8 sm:pb-28 font-roboto relative">
        Nuestra historia comenzó hace 6
        años. Nos conocimos en una
        acampada de la comunidad Verbum
        Dei.

        En esa aventura que Dios nos invito
        a vivir descubrimos que nuestro
        destino era estar juntos, por que
        somos el uno para el otro.

        Damos gracias a Dios por esta gran
        vocación al matrimonio, le pedimos
        a nuestra madre, la virgen María
        que nos acompañe en esta nueva
        aventura que emprendemos juntos.



        Agradecemos a nuestros familiares
        y amigos por acompañarnos y ser
        parte de nuestra historia.



        Dios los bendiga.
      </h4>
      <img src="/img/adorno.svg" alt="Adorno pie nuestra historia" class="relative md:absolute bottom-0 right-0 px-5 py-5">
    </div>
    <div class="h-auto sm:flex sm:flex-col sm:justify-center sm:items-center">
      <img 
      ref="animar" 
      src="/img/nuestra-historia.jpg" 
      alt="Nuestra historia" 
      class="h-auto sm:w-11/12 lg:w-full opacity-0 transition-opacity duration-1000"
      :class="{ 'animate-fadeInRight': isVisible }">
    </div>
  </div>
</template>  
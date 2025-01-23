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
    observer.observe(this.$refs.imageContainer);
  },
};
</script>
<template>
    <div class="md:columns-2 bg-[#162651]"><!--Sección cita biblica-->
        <img src="/img/principal2.jpg"
        ref="imageContainer"
        alt="Nuestra historia" 
        class="w-full h-full opacity-0 transition-opacity duration-1000"
        :class="{ 'animate-fadeInLeft': isVisible }">
        <div class="justify-center items-center block">
            <h4 ref="imageContainer" 
            class="text-4xl md:text-lg lg:text-4xl px-12 py-12 sm:py-6 lg:py-12 font-playfar text-white opacity-0 transition-opacity duration-1000"
            :class="{ 'animate-fadeInRight': isVisible }">
                Por eso, si hemos
                recibido el reino
                que no se puede
                conmover,
                conservemos esta
                gracia y sirvamos a
                Dios cómo él desea,
                con amor y de
                verdad. Heb 12, 28
            </h4>
            <img src="/img/biblia.png" alt="Biblia" class="w-1/3 sm:w-1/4 h-1/3 sm:h-1/4 m-auto pb-6 md:pb-0 animate-[ping_2s_ease-in-out]">
        </div>
    </div>
</template>
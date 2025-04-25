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
    <div class="relative h-full w-full bg-[#162651]"><!-- Sección direcciones -->
    <h2 class="text-center text-2xl md:text-3xl lg:text-4xl text-white py-16">Acompañanos a celebrar este día tan especial</h2>
    <div class="md:columns-2 md:gap-2 lg:gap-6 px-6 md:px-6 lg:px-28">
      <img src="/img/parroquia.jpg" 
      alt="Parroquia" 
      ref="animar"
      class="w-1/2 h-1/2 rounded-md opacity-0 transition-opacity duration-1000"
      :class="{ 'animate-fadeInLeft': isVisible }">
      <div class="container opacity-0 transition-opacity duration-1000"
      ref="animar"
      :class="{ 'animate-fadeInRight': isVisible }">
        <h2 class="text-3xl text-white mb-5">Ceremonia Religiosa</h2>
        <h3 class="text-2xl text-white">
          <span class="font-bold">Parroquia de nuestra señora del destierro</span><br>
          <span class="underline">Dirección:</span> Calle 5 de Mayo esquina calle Morelos
          S/N, 72920 San Sebastián de Aparicio, Pue.
          <br><span class="underline">Hora:</span> 4:00 pm
        </h3>
        <div class="mt-6">
          <a href="https://maps.app.goo.gl/2NJEBwJCWrY9kiJC8" target="_blank" class="text-white py-2 px-6 bg-blue-600 hover:bg-blue-700 mt-6 shadow-md hover:shadow-xl">Dirigime</a>
        </div>
      </div>
    </div>
    <br><br><br>
    <div class="md:columns-2 md:gap-2 lg:gap-6 px-6 md:px-6 lg:px-28">
      <img src="/img/hotelposadasenorial-logo.png" 
      alt="Parroquia"
      ref="animar" 
      class="w-1/2 h-1/2 rounded-md opacity-0 transition-opacity duration-1000"
      :class="{ 'animate-fadeInLeft': isVisible }">
      <div class="container opacity-0 transition-opacity duration-1000 relative z-10"
      ref="animar"
      :class="{ 'animate-fadeInRight': isVisible }">
        <h2 class="text-3xl text-white mb-5">Banquete</h2>
        <h3 class="text-2xl text-white">
          <span class="font-bold">Posada Señorial - Salón aquiahuac</span><br>
          <span class="underline">Dirección:</span> Av. 5 de Mayo 1400, San Juan
          Aquiahuac, 72810 San Andrés Cholula, Pue.
          <br><span class="underline">Hora:</span> 7:00 pm
        </h3>
        <div class="mt-6 md:mb-6 lg:mb-0 relative">
          <a href="https://maps.app.goo.gl/EJLjw4rJMfDpsdgz9" target="_blank" class="text-white py-2 px-6 bg-blue-600 hover:bg-blue-700 mt-6 shadow-md hover:shadow-xl transition-shadow duration-300">Dirigime</a>
        </div>
      </div>
    </div>
      <div class="container relative py-44  md:py-20 lg:py-0"></div>
    <!-- Imagen en la esquina inferior derecha -->
    <div class="absolute z-0 bottom-0 right-0 bg-no-repeat bg-contain bg-[url('/img/esquina-decorada.png')]"
        style="width: 25rem; height: 27rem;">
    </div>
  </div>
</template>
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
  <div class="flex"><!--Sección inicio-->
    <div class="relative w-full h-screen">
      <!-- Imagen de fondo -->
      <!-- Imagen para dispositivos móviles -->
      <img 
        src="/img/principal1.jpg" 
        alt="Imagen móvil"
        class="block sm:hidden w-full h-full object-cover"
      />

      <!-- Imagen para tabletas y dispositivos más grandes -->
      <img 
        src="/img/principal3.jpg" 
        alt="Imagen escritorio"
        class="hidden sm:block w-full h-full object-cover"
      />
      
      <!-- Texto superpuesto -->
      <div class="absolute inset-0 flex justify-center mt-20">
        <div class="block">
          <h1 class="text-indigo-950 text-3xl md:text-8xl font-bold px-4 py-2 font-serif"
          ref="animar"
          :class="{ 'animate-fadeIn': isVisible }">
            Nuestra Boda
          </h1>
          <h2 class="text-indigo-950 font-bold mt-10 text-3xl md:text-[3.4rem]"
          ref="animar"
          :class="{ 'animate-fadeIn': isVisible }">Diana Laura & Victor Hugo</h2>
          <!-- Texto centrado al medio -->
          <div class="absolute left-1/2 transform -translate-x-1/2 mt-10">
            <h1 class="text-white text-md md:text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded"
            ref="animar"
            :class="{ 'animate-fadeInDown': isVisible }">
              25 de Julio de 2025
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>  
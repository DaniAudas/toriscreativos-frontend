<script>
export default {
  data() {
    return {
      fechaEspecifica: new Date('2025-07-25'), // Fecha específica
      diasRestantes: 0, // Días restantes
      isVisible: false,
    };
  },
  methods: {
    calcularDiferienciaDias() {
      const fechaActual = new Date(); // Fecha actual
      const diferienciaTiempo = this.fechaEspecifica - fechaActual; // Diferencia en milisegundos

      // Convierte la diferencia en días
      this.diasRestantes = Math.max(0, Math.ceil(diferienciaTiempo / (1000 * 60 * 60 * 24)));
    },
  },
  mounted() {
    // Calcula la diferencia al cargar la app
    this.calcularDiferienciaDias();

    // Actualiza cada día (opcional si quieres una sincronización continua)
    setInterval(this.calcularDiferienciaDias, 1000 * 60 * 60 * 24);

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
}  
</script>
<template>
    <div class="bg-[#162651] grid grid-cols-3 grid-rows-1"><!--Sección cuenta regresiva-->
      <div class="tile">
        <img src="/img/corazon.png" alt="Corazón" ref="animar" class="pl-10 pt-10 opacity-0 transition-opacity duration-1000"
        :class="{ 'animate-fadeInLeft': isVisible }">
      </div>
      <div class="tile">
        <h1 class="tile-marker text-6xl text-center text-white pt-10">Faltan</h1>
        <div class="relative w-full h-64">
          <!-- Imagen de fondo -->
          <img src="/img/calendario.svg" alt="Calendario" class="w-80 h-80 m-auto pt-8">
          
          <!-- Texto superpuesto -->
          <div class="absolute inset-0 flex flex-col items-center justify-center text-[#162651]">
            <h1 class="text-4xl md:text-9xl font-bold px-4 py-2 mt-32 animate-flyIn">
              {{ diasRestantes  }}
            </h1>
            <h5 class="text-xl md:text-2xl font-bold">Días</h5>
          </div>
        </div>
      </div>
      <div>
        <img src="/img/calendar-corazon.png"
        ref="animar" 
        alt="Calendario de boda" 
        class="pt-8 md:pt-12 w-3/4 md:w-full opacity-50 md:opacity-100 transition-opacity duration-1000"
        :class="{ 'animate-fadeInRight': isVisible }">
      </div>
      <div class="col-span-3 mb-16 md:mt-16 lg:mt-0 opacity-0 transition-opacity duration-1000" ref="animar" :class="{ 'animate-fadeInDown': isVisible }">
        <h1 class="text-white text-8xl text-center">Para decir <span class="text-orange-300">ACEPTO</span></h1>
      </div>
  </div>
</template>
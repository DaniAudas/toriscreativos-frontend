<script>
import { ref } from 'vue';
import Dedicatorias from './components/Dedicatorias.vue';

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
      fechaEspecifica: new Date('2025-07-25'), // Fecha específica
      diasRestantes: 0, // Días restantes
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
  },
  components: {
    Dedicatorias
  }
};
</script>

<template>
  <div class="flex">
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
          <h1 class="text-indigo-950 text-3xl md:text-8xl font-bold px-4 py-2 rounded animate-fadeIn font-serif">
            Nuestra Boda
          </h1>
          <h2 class="text-indigo-950 font-bold animate-fadeIn mt-10 text-3xl md:text-[3.4rem]">Diana Laura & Victor Hugo</h2>
          <!-- Texto centrado al medio -->
          <div class="absolute left-1/2 transform -translate-x-1/2 mt-10 animate-fadeIn">
            <h1 class="text-white text-md md:text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
              25 de Julio de 2025
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container md:columns-2 bg-[#162651]">
    <img src="/img/principal2.jpg" alt="Nuestra historia" class="w-full h-full">
    <div class="justify-center items-center block">
      <h4 class="text-4xl md:text-lg lg:text-4xl px-12 py-12 sm:py-6 lg:py-12 font-playfar text-white">
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
      <img src="/img/biblia.png" alt="Biblia" class="w-1/3 sm:w-1/4 h-1/3 sm:h-1/4 m-auto pb-6 md:pb-0">
    </div>
  </div>
  <div class="flex flex-col md:grid md:grid-cols-2 bg-[#FFFCF5]">
    <div class="h-auto relative">
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
        a nuestra madre, la virgen Maia
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
      <img src="/img/nuestra-historia.jpg" alt="Nuestra historia" class="h-auto sm:w-11/12 lg:w-full">
    </div>
  </div>
  <div class="bg-[#162651] grid grid-cols-3 grid-rows-1">
      <div class="tile">
        <img src="/img/corazon.png" alt="Corazón" class="pl-10 pt-10">
      </div>
      <div class="tile">
        <h1 class="tile-marker text-6xl text-center text-white pt-10">Faltan</h1>
        <div class="relative w-full h-64">
          <!-- Imagen de fondo -->
          <img src="/img/calendario.svg" alt="Calendario" class="w-80 h-80 m-auto pt-8">
          
          <!-- Texto superpuesto -->
          <div class="absolute inset-0 flex flex-col items-center justify-center text-[#162651]">
            <h1 class="text-4xl md:text-9xl font-bold px-4 py-2 mt-32">
              {{ diasRestantes  }}
            </h1>
            <h5 class="text-xl md:text-2xl font-bold">Días</h5>
          </div>
        </div>
      </div>
      <div>
        <img src="/img/calendar-corazon.png" alt="Calendario de boda" class="pt-8 md:pt-12 w-3/4 md:w-full opacity-50 md:opacity-100">
      </div>
      <div class="col-span-3 mb-16 md:mt-16 lg:mt-0">
        <h1 class="text-white text-8xl text-center">Para decir <span class="text-orange-300">ACEPTO</span></h1>
      </div>
  </div>
  <div class="flex flex-col md:grid md:grid-cols-3 bg-[#B3A500]">
    <div>
      <h1 class="font-bold text-2xl md:text-3xl lg:text-5xl text-[#162651] text-center pt-10 pb-10">MESA DE REGALOS</h1>
      <div class="relative w-full h-40 md:h-64">
        <!-- Imagen PNG (fondo) -->
        <a href="https://example.com" target="_blank" class="hover:opacity-80 transition duration-300">
          <img src="/img/regalo.png" alt="Reagalos" class="w-2/4 mx-auto object-cover">
        </a>
        <!-- Imagen GIF (frente) -->
        <a href="https://example.com" target="_blank" class="hover:opacity-80 transition duration-300">
          <img src="/img/click.gif" alt="Click Aqui" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-10">
        </a>  
      </div>
      <h1 class="font-bold text-2xl lg:text-4xl text-[#162651] text-center mt-28 md:mt-2 lg:mt-28">DEJA UNA DEDICATORIA A LOS NOVIOS</h1>
      <a href="#" target="_blank" class="hover:opacity-80 transition duration-300 relative">
        <img src="/img/lista-regalos.png" alt="Lista de regalos" class="h-72 md:h-1/3 center mx-auto pt-10 pb-12 md:pb-10 lg:pb-0">
        <img src="/img/click.gif" alt="Click Aqui" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-10">
      </a>
    </div>
    <img src="/img/corazonconanillos.png" alt="Corazón con anillos" class="h-16 md:h-1/5 lg:h-1/4 m-auto">
    <div>
      <h1 class="text-2xl md:text-3xl lg:text-5xl text-[#162651] text-center pt-10 font-bold">
        CONFIRMA TU ASISTENCIA
      </h1>
      <div class="relative w-full h-80 md:h-64">
        <!-- Imagen PNG (fondo) -->
        <a href="#" target="_blank" class="hover:opacity-80 transition duration-300">
          <img src="/img/confirma.png" alt="Reagalos" class="w-1/2 md:w-3/4 mx-auto object-cover  mt-12 md:mt-10 lg:mt-32">
        </a>
        <!-- Imagen GIF (frente) -->
        <a href="#" target="_blank" class="hover:opacity-80 transition duration-300">
          <img src="/img/click.gif" alt="Click Aqui" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-10">
        </a>
      </div>
    </div>
  </div>
  <div class="relative h-full w-full bg-[#FFFCF5]">
    <div class="absolute w-4/5 h-4/5 top-10 left-10 bg-no-repeat bg-center opacity-25 bg-[url('/img/anillos.png')]" 
       style="background-size: contain;"></div>
    <div class="mx-auto mb-4 relative z-10">
      <img src="/img/margen-corazon.png" alt="Margen de corazón" class="mx-auto w-1/3 pt-10">
      <h1 class="text-4xl text-center">Dedicatorias</h1>
    </div>
    <img src="/img/juntos.jpg" alt="Somos 2 enamorados" class="w-3/4 md:w-3/4 lg:w-[45rem] h-auto m-auto z-10 relative pt-3 md:pt-10 rounded-3xl md:rounded-full">
    <br><br><br>
    <!-- componente de dedicatorias-->
    <Dedicatorias />
    <br><br><br>
  </div>
  <div class="relative h-full w-full bg-[#162651]">
    <h2 class="text-center text-2xl md:text-3xl lg:text-4xl text-white py-16">Acompañanos a celebrar este día tan especial</h2>
    <div class="md:columns-2 md:gap-2 lg:gap-6 px-6 md:px-6 lg:px-28">
      <img src="/img/parroquia.jpg" alt="Parroquia" class="w-1/2 h-1/2 rounded-md">
      <div class="container">
        <h2 class="text-3xl text-white mb-5">Ceremonia Religiosa</h2>
        <h3 class="text-2xl text-white">
          <span class="font-bold">Parroquia de nuestra señora del destierro</span><br>
          <span class="underline">Dirección:</span> Calle 5 de Mayo esquina calle Morelos
          S/N, 72920 San Sebastián de Aparicio, Pue.
        </h3>
        <div class="mt-6">
          <a href="https://maps.app.goo.gl/2NJEBwJCWrY9kiJC8" target="_blank" class="text-white py-2 px-6 bg-blue-600 hover:bg-blue-700 mt-6 shadow-md hover:shadow-xl">Dirigime</a>
        </div>
      </div>
    </div>
    <br><br><br>
    <div class="md:columns-2 md:gap-2 lg:gap-6 px-6 md:px-6 lg:px-28">
      <img src="/img/hotelposadasenorial-logo.png" alt="Parroquia" class="w-1/2 h-1/2 rounded-md">
      <div class="container">
        <h2 class="text-3xl text-white mb-5">Banquete</h2>
        <h3 class="text-2xl text-white">
          <span class="font-bold">Posada Señorial - Salón aquiahuac</span><br>
          <span class="underline">Dirección:</span> Av. 5 de Mayo 1400, San Juan
          Aquiahuac, 72810 San Andrés Cholula, Pue.
        </h3>
        <div class="mt-6 md:mb-6 lg:mb-0">
          <a href="https://maps.app.goo.gl/EJLjw4rJMfDpsdgz9" target="_blank" class="text-white py-2 px-6 bg-blue-600 hover:bg-blue-700 mt-6 shadow-md hover:shadow-xl transition-shadow duration-300">Dirigime</a>
        </div>
      </div>
    </div>
    <div class="container relative py-44  md:py-20 lg:py-0"></div>
    <!-- Imagen en la esquina inferior derecha -->
    <div class="absolute bottom-0 right-0 bg-no-repeat bg-contain bg-[url('/img/esquina-decorada.png')]" 
        style="width: 25rem; height: 27rem;">
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>
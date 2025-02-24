<script setup>
  import { RouterLink } from 'vue-router';
  import { ref} from 'vue';

  const phoneNumber = ref("2211274274"); // Número en formato internacional sin "+"
  const message = ref("Hola, ¡Confirmo mi asistencia!");
  const whatsappLink = ref(`https://wa.me/${phoneNumber.value}?text=${encodeURIComponent(message.value)}`);
</script>
<template>
    <div class="flex flex-col md:grid md:grid-cols-3 bg-[#B3A500]"><!--Sección enlaces-->
    <div>
      <h1 class="font-bold text-2xl md:text-3xl lg:text-5xl text-[#162651] text-center pt-10 pb-10">MESA DE REGALOS</h1>
      <div class="relative w-full h-40 md:h-64">
        <!-- Imagen PNG (fondo) -->
        <RouterLink :to="{name:'mesa'}" class="hover:opacity-80 transition duration-300">
          <img src="/img/regalo.png" alt="Reagalos" class="w-2/4 mx-auto object-cover">
        </RouterLink>
        <!-- Imagen GIF (frente) -->
        <RouterLink :to="{name: 'mesa'}" class="hover:opacity-80 transition duration-300">
          <img src="/img/click.gif" alt="Click Aqui" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-10">
        </RouterLink>
      </div>
      <h1 class="font-bold text-2xl lg:text-4xl text-[#162651] text-center mt-28 md:mt-2 lg:mt-28">DEJA UNA DEDICATORIA A LOS NOVIOS</h1>
      <a href="#" class="hover:opacity-80 transition duration-300 relative">
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
        <a :href="whatsappLink" target="_blank" class="hover:opacity-80 transition duration-300">
          <img src="/img/confirma.png" alt="Reagalos" class="w-1/2 md:w-3/4 mx-auto object-cover  mt-12 md:mt-10 lg:mt-32">
        </a>
        <!-- Imagen GIF (frente) -->
        <a :href="whatsappLink" target="_blank" class="hover:opacity-80 transition duration-300">
          <img src="/img/click.gif" alt="Click Aqui" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-10">
        </a>
      </div>
    </div>
  </div>
</template>
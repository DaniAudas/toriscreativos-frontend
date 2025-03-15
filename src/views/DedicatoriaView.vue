<script setup>
import {reactive} from "vue";
import Swal from 'sweetalert2';

const API_URL = import.meta.env.VITE_API_URL;
const fecha = new Date();

const anio = fecha.getFullYear();
const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Meses comienzan en 0
const dia = String(fecha.getDate()).padStart(2, '0');

let horas = fecha.getHours();
const minutos = String(fecha.getMinutes()).padStart(2, '0');
const segundos = String(fecha.getSeconds()).padStart(2, '0');

const fechaFormateada = `${anio}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;

const dedicatoria = reactive({
  name: '',
  message: null,
  date: fechaFormateada,
  validated: false,
});

const submitForm = async () => {
  try{
    const response = await fetch(`${API_URL}/api/form`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dedicatoria)
    });
    if (!response.ok)
      Swal.fire({
        title: '¡Error!',
        text: 'La dedicatoria no pudo ser enviada',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      });
      //throw new Error('Error al enviar la dedicatoria');
    else{
      Swal.fire({
        title: '¡OK!',
        text: 'Dedicatoria registrada correctamente',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        window.location.reload(); // Recarga la página después de cerrar el mensaje
      });
    }
  }catch (e) {
    console.error('Error:',e);
    alert('Hubo un problema al enviar el formulario');
  }
};
</script>

<template>
  <div class="bg-[#FFFCF5]">
    <div class="flex flex-col items-center justify-center">
      <img src="/img/margen-corazon.png" class="w-1/4 mt-8">
      <h2 class="text-3xl font-bold">Comparte un lindo mensaje a los novios</h2>
    </div>
    <div class="md:flex md:justify-center md:gap-10 py-16">
      <div class="md:w-6/12">
        <img src="/img/manos.jpg" alt="Imagen Registrate" class="rounded-lg shadow-xl animate-fadeInLeft">
      </div>
      <div class="md:w-4/12 bg-white p-6 rounded-lg shadow-xl animate-fadeInRight">
        <form @submit.prevent="submitForm" method="post">
          <div class="mb-5">
            <label for="name" class="mb-2 block uppercase text-gray-500 font-bold">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre aqui" class="border p-3 w-full rounded-lg" v-model="dedicatoria.name" required autocomplete="off">
          </div>
          <div class="mb-5">
            <label for="message" class="mb-2 block uppercase text-gray-500 font-bold">Dedicatoria</label>
            <textarea id="message" name="message" class="border p-3 w-full rounded-lg h-40" placeholder="Tu mensaje aqui" v-model="dedicatoria.message" required autocomplete="off"></textarea>
          </div>
          <input
              type="submit"
              value="Crear dedicatoria"
              class="bg-sky-600 hover:bg-sky-700 transition-colors cursor-pointer uppercase font-bold w-full p-3 text-white rounded-lg">
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
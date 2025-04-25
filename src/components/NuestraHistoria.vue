<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    /*const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
          }
        });
      },
      {threshold: 0} // Activar cuando el 10% sea visible
    );
    observer.observe(this.$refs.animar);*/
  },
};
</script>
<template>
    <div class="flex flex-col md:grid md:grid-cols-2 bg-[#FFFCF5]"><!--Sección nuestra historia-->
    <div 
    ref="animar" 
    class="h-auto relative">
      <h1 class="text-5xl pt-8 text-center font-lobster">
        Nuestra historia
      </h1>
      <h4 class="text-3xl sm:text-2xl md:text-3xl mt-8 px-8 sm:pb-52 font-roboto relative text-justify">
        Hace siete años, Dios junto nuestros caminos en el coro de la iglesia, nos conocimos a través de WhatsApp y en poco tiempo nacio una amistad que fue germinando como una semilla de mostaza.
        Compartimos Semana Santa y junto con Jesús resucitamos en el camino a una vocación. La cual, a lo largo de este tiempo entre incontables momentos y oraciones ha madurado para ser un nuevo matrimonio.
        Hoy, miramos atrás y damos gracias a la Trinidad, a Mamá María y a José por acompañarnos y guiarnos en este tiempo por ello con el corazón lleno de gratitud y esperanza, sabemos que el siguiente paso en nuestra historia es seguir caminando juntos, con un compromiso eterno dedicandonos a servir con ese mismo amor.
        Agradecemos a nuestras familias, amigos y hermanos en la fe, por acompañarnos a decir Sí, a este camino al Matrimonio.
      </h4>
      <img src="/img/adorno.svg" alt="Adorno pie nuestra historia" class="relative md:absolute bottom-0 right-0 px-5 py-5">
    </div>
    <div class="h-auto sm:flex sm:flex-col sm:justify-center sm:items-center">
      <img 
      ref="animar" 
      src="/img/nuestra-historia.jpg" 
      alt="Nuestra historia" 
      class="h-auto sm:w-11/12 lg:w-full">
    </div>
  </div>
</template>  
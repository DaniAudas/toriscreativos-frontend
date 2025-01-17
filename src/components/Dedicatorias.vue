<script>
export default {
  name: "Dedicatorias",
  mounted() {
    this.autoSlide = setInterval(() => {
        this.nextSlide();
    }, 5000);
  },
beforeDestroy() {
clearInterval(this.autoSlide);
},
  data() {
    return {
      currentIndex: 0,
      comments: [
        { 
          text: "Queridos amigos les deseamos lo mejor en esta nueva ventura que comienza, Dios los bendiga.", 
          author: "Lau y Dani" 
        },
        { 
          text: "Les deseo lo mejor muchachos Que todos sus sueños se cumplan", 
          author: "Oscar Isaias" 
        },
        { 
          text: "Hermanitos míos me alegra saber que darán el siguiente paso al Amor, Felicidades!!", 
          author: "Erika Ramos" 
        },
        { 
          text: "Muchas felicidades, les deseo lo mejor. Unfuerte abrazo", 
          author: "Diego" 
        },
        { 
          text: "Mis mejores deseos para ustedes son una pareja muy bonita", 
          author: "Elena coty" 
        },
        { 
          text: "Que Dios los bendiga en esta nueva etapa de sus vidas, felicidades", 
          author: "Gina y familia" 
        },
      ],
    };
  },
  computed: {
    chunkedComments() {
      // Agrupar en chunks dinámicos basados en el tamaño de la pantalla
      const chunkSize = window.innerWidth < 640 ? 1 : 3; // Cambia el tamaño de los chunks según el tamaño de pantalla
      return this.comments.reduce((result, comment, index) => {
        const chunkIndex = Math.floor(index / chunkSize);
        if (!result[chunkIndex]) result[chunkIndex] = [];
        result[chunkIndex].push(comment);
        return result;
      }, []);
    },
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.chunkedComments.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // Reinicia al primer grupo
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.chunkedComments.length - 1; // Vuelve al último grupo
      }
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>
 
 <template>
    <div class="relative overflow-hidden w-full max-w-6xl mx-auto">
      <!-- Contenedor del carrusel -->
      <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(comment, index) in comments"
          :key="index"
          class="flex-shrink-0 w-full md:w-1/3 p-4"
        >
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <img src="/img/palomas.png" alt="Decoracion" class="w-24 m-auto">
            <p class="text-gray-700 italic">"{{ comment.text }}"</p>
            <h3 class="text-gray-900 font-bold mt-2">- {{ comment.author }}</h3>
          </div>
        </div>
      </div>
  
      <!-- Botones de navegación -->
      <button
        @click="prevSlide"
        class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full px-3 py-1"
      >
        &#8249;
      </button>
      <button
        @click="nextSlide"
        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full px-3 py-1"
      >
        &#8250;
      </button>
  
      <!-- Indicadores -->
      <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <span
          v-for="(chunk, index) in chunkedComments"
          :key="'dot-' + index"
          @click="goToSlide(index)"
          :class="[
            'w-3 h-3 rounded-full cursor-pointer',
            currentIndex === index ? 'bg-blue-500' : 'bg-gray-400',
          ]"
        ></span>
      </div>
    </div>
  </template>
  
  <style scoped>
  </style>
  
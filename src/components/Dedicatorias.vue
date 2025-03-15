<script>
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

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
      dedicatorias: []
    };
  },
  async created() {
    try {
      const response = await axios.get(`${API_URL}/api/dedicatorias`);
      this.dedicatorias = response.data.filter(item => item.validated === true);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  },
  computed: {
    chunkedComments() {
      // Agrupar en chunks dinámicos basados en el tamaño de la pantalla
      const chunkSize = window.innerWidth < 640 ? 1 : 3; // Cambia el tamaño de los chunks según el tamaño de pantalla
      return this.dedicatorias.reduce((result, comment, index) => {
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
          v-for="(dedicatoria, index) in dedicatorias"
          :key="index"
          class="flex-shrink-0 w-full md:w-1/3 p-4"
        >
          <div>
            <div class="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="/img/palomas.png" alt="Decoracion" class="w-24 m-auto">
              <p class="text-gray-700 italic">"{{ dedicatoria.message}}"</p>
              <h3 class="text-gray-900 font-bold mt-2">- {{ dedicatoria.name }}</h3>
            </div>
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
  
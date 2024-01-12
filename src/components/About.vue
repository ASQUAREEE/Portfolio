<template>
  <div class="bg-green-50 page-section pt-5 -mb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 py-3 wow zoomIn">
          <div class="img-place text-center hidden lg:flex">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_qhrndegx.json"
              background="transparent"
              speed="1"
              style="max-width: 500px; max-height: 500px"
              autoplay></lottie-player>
          </div>
        </div>

        <div class="col-lg-6 p-4">
          <h2 class="title-section text-2xl">
            All About
            <span class="marked">Myself</span>
          </h2>
          <div class="divider"></div>

          <div>
            <p>
              🚀 Futurist Engineer:
B-Tech student at RAJIV GANDHI INSTITUTE of PETROLEUM TECHNOLOGY, with a stellar A Grade. 📚
            </p>
          </div>

          <div>
            <p>
              🔥 Trailblazing Intern:
At EYANTRA, IIT Bombay, crafted "Draftease" – a dynamic document generator using Vue.js, Django, and Fabric.js. 📝
            </p>
          </div>

          <div>
            <p>
              🌐 Creative Technologist:
Innovated "UNMANNED DELIVERY BIKE," wove "GLOOMY CHAT" using Quasar, and decoded cancer DNA sequences. 🤖
            </p>
          </div>
          <div>
            <p>
              🛰️ Aeronautics Aficionado:
Explored UAVs at HINDUSTAN AERONAUTICS LIMITED, diving into advanced tech like mosp and dtg. ✈️
            </p>
          </div>
          <div>
            <p>
              🏆 Leadership Luminary:
Headed IEEE and E-Cell at RGIPT, shaping futures, while excelling academically and in e-Yantra robotics. 🎓
            </p>
          </div>

         

          <div class="img-place mb-3"></div>
          <a href="#" class="btn btn-primary">More Details</a>
          <a href="#" class="btn btn-outline border ml-2">Success Stories</a>
        </div>
      </div>
    </div>
    <!-- .container -->
  </div>
  <!-- .page-section -->

  <div class="bg-green-50 page-section">
    <div class="container">
      <div class="row">
        <!-- Section 1: Skills -->
    <div class="bg-green-50 page-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 p-4">
            <h2 class="title-section text-2xl">
              My
              <span class="marked">Skills</span>
            </h2>
            <div class="divider"></div>

            <!-- Technical Skills -->
            <div class="mt-4">
              <h3 class="text-lg font-bold mb-2">Technical Skills</h3>
              <ul>
                <li><b>Languages:</b> C, C++, Python, Elixir, Lua, JavaScript, TypeScript, Verilog, HTML, CSS</li>
                <li><b>Frameworks and Environments:</b> Vue.js, Next.js, Django, React.js, Quasar, Node.js, Cordova, Capacitor</li>
                <li><b>Databases/Database Management:</b> MySQL, Firebase, Appwrite, MongoDB, Prisma, Vuex, Pinia</li>
                <li><b>Data Science:</b> Standard ML Algorithms (Regression, Classification, Clustering), Data Analysis: Numpy, Pandas, Matplotlib</li>
                <li><b>Tools:</b> Coppeliasim, Octave, MATLAB, Docker, Arduino, Raspberry Pi</li>
              </ul>
            </div>

            
          </div>

          <div class="col-lg-6 py-3 wow zoomIn">
            <!-- Add any relevant images, graphics, or animations here -->
            
          <div class="img-place text-center">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_u4jjb9bd.json"
              background="transparent"
              speed="0.5"
              style="max-width: 550px; max-height: 550px"
              loop
              autoplay></lottie-player>
          </div>
        </div>
          
        </div>
      </div>
    </div>

    <!-- Section 2: Experience -->
    <div class="bg-green-50 page-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 py-3 wow zoomIn">
            <!-- Add any relevant images, graphics, or animations here -->
            <img style="max-width: 400px; max-height: 400px" src="https://www.e-yantra.org/img/robot/eyrc.png" alt="eYantra image">
          </div>

          <div class="col-lg-6 p-4">
            <h2 class="title-section text-2xl">
              My
              <span class="marked">Experience</span>
            </h2>
            <div class="divider"></div>

            <!-- Experience Details -->
            <div class="mt-4">
              <h3 class="text-lg font-bold mb-2">Experience</h3>
              <p>
                EYANTRA, IIT Bombay | eYSIP Summer Intern (05/2023 - 07/2023)
                <br />
                Department: Web Development Mumbai
              </p>
              <ul>
                <li>Developed Draftease: Customized Document Generator</li>
                <li>Created frontend using Vue.js and backend using Django, integrated MySQL for data storage</li>
                <li>Implemented advanced functionalities with Fabric.js for drawing, shapes, text manipulation, and image editing</li>
                <li>Integrated Quill.js editor for text editing, formatting, media embedding, and collaborative editing</li>
              </ul>
            </div>

            <!-- Additional Experience Details -->
            <div class="mt-4">
              <!-- Add any additional experience details here -->
            </div>
          </div>
        
    </div>
  </div>

          <router-link to="/blog" class="btn btn-primary">Contact Me</router-link>
          <router-link to="/projects" class="btn btn-outline ml-2">
            My Projects
          </router-link>
        </div>
        
      </div>
    </div>
    <!-- .container -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
    };
  },

  methods: {
    handleScroll(e) {
      this.scrollPosition = e.target.scrollTop;

      if (this.scrollPosition > 100) {
        console.log("UP");
      } else {
        console.log("DOWN");
      }
    },
  },
};
</script>

<style></style>

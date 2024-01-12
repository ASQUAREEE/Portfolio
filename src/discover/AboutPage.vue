<template>
  <Navbar />

  <div class="hidden lg:block container mt-5">
    <div class="page-banner1">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-6">
          <nav aria-label="Breadcrumb">
            <ul class="breadcrumb justify-content-center py-0 bg-transparent">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">About</li>
            </ul>
          </nav>
          <h1 class="text-center">About Me</h1>
        </div>
      </div>
    </div>
  </div>

  <Services />

  <About />


 
     

  <Footer />
</template>

<script>
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default {
  name: "About Page",
  data() {
    return {};
  },

 

  components: {
    Navbar,
    About,
    Services,
    Footer,
  },
};
</script>

<style></style>

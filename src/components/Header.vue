<template>
  <header>
    <div class="page-banner home-banner">
      <div class="container h-100">
        <div class="row align-items-center h-100">
          <div class="col-lg-6 py-3 wow fadeInUp">
            <p
              class="text-green-600 hover:text-green-500 text-2xl lg:text-4xl font-medium lg:font-semibold mb-5 lg:leading-normal leading-snug">
              HI, I'm Ashher Ali
              <br />
              Full Stack Developer,
              <br />
              Roboticist,
              <br />
              Data Analyst
            </p>
            <p
              class="hidden lg:block text-2xl mb-5">
              Exploring the intersection of electronics and programming to create innovative solutions.
            </p>

            <router-link
              to="/about"
              name="fade"
              class="btn btn-outline border text-secondary">
              About
            </router-link>
            <a
              href="https://drive.google.com/file/d/1FCcGISl76UcIy5diW7qk13Nrndjzk4Wv/view?usp=drive_link"
              class="btn btn-primary btn-split ml-2">
              Resume
              <div class="fab"><span class="mai-play"></span></div>
            </a>
          </div>
          <div class="col-lg-6 wow zoomIn">
            <div
              class="m-3 lg:m-3 p-1 lg:p-5">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_gnb0jsok.json"
                background="transparent"
                speed="1"
                style="max-width: 500px; max-height: 500px"
                autoplay></lottie-player>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {};
</script>

<style></style>

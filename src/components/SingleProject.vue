<template>
  <Navbar />

  <div class="">
    <div class="page-section pt-5" style="">
      <div class="container">
        <nav aria-label="Breadcrumb">
          <ul class="breadcrumb p-0 mb-0 bg-transparent">
            <li class="breadcrumb-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/projects">All Projects</router-link>
            </li>
            <li class="breadcrumb-item active">Projects</li>
          </ul>
        </nav>

        <div class="row">
          <div class="col-lg-8">
            <div class="blog-single-wrap">
              <div class="header">
                <div class="post-thumb">
                  <img :src="project[$route.params.id].image" alt="" />
                </div>
                <div class="meta-header"></div>
              </div>
              <h1 class="post-title">{{ project[$route.params.id].name }}</h1>
              <br />

              <div class="post-meta">
                <div class="post-date">
                  <span class="icon" style="margin-right: 10px">
                    <span class="mai-time-outline"></span>
                  </span>
                  <a class="font-size: 20px;">
                    {{ project[$route.params.id].content }}
                  </a>
                  <br />
                  <br />

                  <p class="margin-top: 20px;">
                    {{ project[$route.params.id].content1 }}
                  </p>

                  <p class="margin-top: 20px;">
                    {{ project[$route.params.id].content2 }}
                  </p>

                  <p class="margin-top: 20px;">
                    {{ project[$route.params.id].content3 }}
                  </p>

                  <div class="text-center mt-5">
                    <button class="btn btn-primary">
                      <a
                        class="text-white"
                        href="https://prmblogs.tistory.com/">
                        READ MORE
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              <div class="post-content"></div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="widget">
              <!-- Widget search -->
              <div class="widget-box">
                <form action="#" class="search-widget">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter keyword.." />
                  <button type="submit" class="btn btn-primary btn-block">
                    Search
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import ProjectData from "../data/projects.js";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
  name: "Single Project Page",
  data() {
    return {
      project: ProjectData,
    };
  },
  props: {
    blog: Array,
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>

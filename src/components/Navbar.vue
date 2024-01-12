<template>
  <nav
    class="p-3 border-gray-200 rounded bg-green-50 dark:bg-gray-800 dark:border-gray-700">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <p class="flex items-center hover:no-underline">
        <img src="" class="h-6 mr-3 sm:h-10" />
        <span
          class="self-center hover:text-green-600 text-xl font-semibold whitespace-nowrap dark:text-white">
          MyPortfolio
        </span>
      </p>

      <div class="hidden w-full md:block md:w-auto">
        <ul
          class="flex flex-col mt-4 rounded-lg text-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
            <router-link
              to="/"
              class="flex items-center hover:-mt-1 hover:no-underline bg-green-50 p-2 ml-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
              aria-current="page">
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 hover:-mt-1 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"></path>
              </svg>
              <span class="flex-1 ml-2 whitespace-nowrap">Home</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/projects"
              class="flex items-center hover:-mt-1 hover:no-underline p-2 ml-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
              aria-current="page">
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 4.25A2.25 2.25 0 014.25 2h2.5A2.25 2.25 0 019 4.25v2.5A2.25 2.25 0 016.75 9h-2.5A2.25 2.25 0 012 6.75v-2.5zM2 13.25A2.25 2.25 0 014.25 11h2.5A2.25 2.25 0 019 13.25v2.5A2.25 2.25 0 016.75 18h-2.5A2.25 2.25 0 012 15.75v-2.5zM11 4.25A2.25 2.25 0 0113.25 2h2.5A2.25 2.25 0 0118 4.25v2.5A2.25 2.25 0 0115.75 9h-2.5A2.25 2.25 0 0111 6.75v-2.5zM15.25 11.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z"></path>
              </svg>
              <span class="flex-1 ml-2 whitespace-nowrap">Projects</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="flex items-center p-2 ml-2 hover:-mt-1 hover:no-underline text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
              aria-current="page">
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
              </svg>
              <span class="flex-1 ml-2 whitespace-nowrap">About</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="flex items-center p-2 ml-2 hover:-mt-1 hover:no-underline text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
              aria-current="page">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
              <span class="flex-1 ml-2 whitespace-nowrap">Contact Me</span>
            </router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    inActive() {
      this.active += 1;
    },
  },
};
</script>

<style>
.fade-nav-enter-active,
.fade-nav-leave-active {
  transition: opacity 0.5s ease;
}

.fade-nav-enter-from,
.fade-nav-leave-to {
  opacity: 0;
}

.vue-school-active-link {
  background-color: rgb(225, 255, 228);
  padding: 5px 12px;
  border-radius: 10px;
  text-decoration: none;
}
</style>

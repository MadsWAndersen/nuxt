<script setup>

  const routes = [
    {
      "path": "/",
      "component": "pages/index.vue"
    },
    {
      "path": "/about",
      "component": "pages/about/index.vue"
    },
    {
      "path": "/contact/",
      "component": "pages/contact.vue"
    },
    {
      "path": "/about/history",
      "component": "pages/about/history.vue"
    },
    {
      "path": "/blog",
      "component": "pages/index.vue"
    }
  ]


</script>
<template>
  <div>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li><NuxtLink to="/about/history">History</NuxtLink></li>
      </ul>
    </nav>
      <NuxtPage />

  </div>
</template>


<style lang="scss" scoped>

</style>
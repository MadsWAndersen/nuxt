<script setup>
console.log("running");

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
    },
    {
      "path": "/blog/[id]artical.vue",
      "component": "pages/[id].vue"
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
          <li><NuxtLink to="/blog/id">id</NuxtLink></li>
          <li><NuxtLink to="/blog/test">test</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          <li><NuxtLink to="/about/history">History</NuxtLink></li>
        </ul>
      </nav>
    </div>
</template>

<style lang="scss" scoped>
  nav {
    ul {
      display: flex;
      list-style: none;

      li {
        padding-right: 20px;
      }
    }
  }
</style>
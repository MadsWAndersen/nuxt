<script setup>
import { toDisplayString } from 'vue';


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
  <NuxtLayout>

  </NuxtLayout>
</template>


<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
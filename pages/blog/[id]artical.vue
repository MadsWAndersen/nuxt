<script setup>
import { useRoute } from 'vue-router';

const id = useRoute().params;
console.log(id);
</script>

<template>
    <div>
        this is the {{ id.idartical }} subpage
    </div>
</template>

<style lang="scss" scoped>

</style>
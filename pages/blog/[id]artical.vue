<script setup>
import { useRoute } from 'vue-router';

const id = useRoute().params;
console.log(id);
</script>

<template>
    <div>
        this is the <span>{{ id.idartical }}</span> subpage
    </div>
</template>

<style lang="scss" scoped>
span {
    font-weight: bold;
}
</style>
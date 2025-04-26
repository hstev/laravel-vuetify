<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
</script>
<template>
    <Head title="Landing" />
    <div class="container-landing">
        <span class="laravel">Laravel</span> 🤝 <span class="vuetify">Vuetify</span>
    </div>
</template>

<style scoped>
.container-landing {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 2rem;
}

.laravel {
    color: #ff2d55;
}

.vuetify {
    color: #1867c0;
}
</style>
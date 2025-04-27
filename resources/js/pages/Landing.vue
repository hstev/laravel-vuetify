<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
</script>
<template>
    <Head title="Landing" />
    <div class="container-landing">
        <v-card
            append-icon="mdi-open-in-new"
            class="mx-auto"
            href="https://github.com/hstev/laravel-vuetify/"
            max-width="344"
            prepend-icon="mdi-github"
            rel="noopener"
            subtitle="Github repository"
            target="_blank"
            title="hstev/laravel-vuetify"
        ></v-card>
    </div>
</template>

<style scoped>
.container-landing {
    display: flex;
    flex-direction: column;
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
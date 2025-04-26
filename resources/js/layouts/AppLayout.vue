<script setup lang="ts">

const theme: 'light' | 'dark' = 'dark';

</script>

<template>
    <v-responsive>
        <v-app :theme="theme">
            <v-main class="d-flex h-100 justify-center align-center">
                <v-container>
                    <slot />
                </v-container>
            </v-main>
        </v-app>
    </v-responsive>
</template>
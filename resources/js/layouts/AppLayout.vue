<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';
</script>

<template>
    <v-responsive>
        <v-app :theme="useTheme()">
            <v-main class="d-flex h-100 justify-center align-center">
                <v-container>
                    <slot />
                </v-container>
            </v-main>
        </v-app>
    </v-responsive>
</template>
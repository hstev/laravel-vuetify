<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
const handleLogout = () => {
    router.flushAll();
};
</script>
<template>
    <Head title="Dashboard" />
    <div>
        <h1>Dashboard</h1>
        <Link class="block w-full" method="post" :href="route('logout')" @click="handleLogout" as="button">
            <LogOut class="mr-2 h-4 w-4" />
            Log out
        </Link>
    </div>
</template>
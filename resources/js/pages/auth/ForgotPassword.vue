<script setup lang="ts">
import BaseLayout from '@/layouts/AppLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    email: '' as string,
    processing: false as boolean,
});

const submit = () => {
    form.processing = true;
    if (!form.email) {
        form.processing = false;
        return;
    }
    form.post(route('password.email'), {
        onFinish: () => {
            form.reset('email')
            form.processing = false;
        },
    });
};
</script>

<template>
    <Head title="Forgot Password" />
    <BaseLayout>
        <div class="d-flex align-center justify-center" style="height: 100vh;">
            <v-card
                class="mx-auto pa-12 pb-8"
                max-width="600"
                width="600"
                rounded="lg"
                elevation="8"
            >
                <v-form @submit.prevent="submit">
                    <div class="text-subtitle-1 text-medium-emphasis">Account</div>
                    <v-text-field
                        density="compact"
                        placeholder="Email address"
                        prepend-inner-icon="mdi-email-outline"
                        variant="outlined"
                        type="email"
                        :rules="[
                            (v: string) => !!v || 'Email is required',
                            (v: string) => /.+@.+\..+/.test(v) || 'Email must be valid',
                        ]"
                        class="mb-4"
                        v-model="form.email"
                    />

                    <v-btn
                        class="mb-8"
                        color="blue"
                        size="large"
                        variant="tonal"
                        block
                        text="Send password reset link"
                        :loading="form.processing"
                        type="submit"
                        :disabled="form.processing"
                    />

                    <v-card-text class="text-center">
                        <Link
                            class="text-blue text-decoration-none"
                            :href="route('login')"
                            rel="noopener noreferrer"
                        >
                            <v-icon icon="mdi-chevron-left"></v-icon> Go back to the login page
                        </Link>
                    </v-card-text>
                </v-form>
            </v-card>
        </div>
    </BaseLayout>
</template>
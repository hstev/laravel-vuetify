<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';


const form = useForm({
    email: '' as string,
    password: '' as string,
    visible: false as boolean,
    processing: false as boolean,
});

const submit = () => {
    if (form.errors.email || form.errors.password) {
        return;
    }
    form.processing = true;
    form.post(route('login'), {
        onFinish: () => {
            form.processing = false;
        },
    });
};

</script>

<template>
    <Head title="Login" />
    <AppLayout>
        <div>
            <v-card
                class="mx-auto pa-12 pb-8"
                max-width="600"
                width="600"
                rounded="lg"
                elevation="8"
            >
                <div class="text-center mb-8">
                    <v-icon icon="$vuetify" size="100"></v-icon>
                </div>

                <v-form @submit.prevent="submit">
                    <div class="text-subtitle-1 text-medium-emphasis">Account</div>

                    <v-text-field
                        density="compact"
                        placeholder="Email address"
                        prepend-inner-icon="mdi-email-outline"
                        variant="outlined"
                        type="email"
                        v-model="form.email"
                        :rules="[
                            (v: string) => !!v || 'Email is required',
                            (v: string) => /.+@.+\..+/.test(v) || 'Email must be valid',
                        ]"
                        class="mb-4"
                        :error-messages="form.errors.email"
                    />

                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                        Password
                        
                        <Link
                            class="text-caption text-decoration-none text-blue"
                            :href="route('password.request')"
                            rel="noopener noreferrer"
                        >Forgot login password?</Link>
                    </div>

                    <v-text-field
                        :append-inner-icon="form.visible ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="form.visible ? 'text' : 'password'"
                        density="compact"
                        placeholder="Enter your password"
                        prepend-inner-icon="mdi-lock-outline"
                        variant="outlined"
                        @click:append-inner="form.visible = !form.visible"
                        :rules="[
                            (v: string) => !!v || 'Password is required',
                            (v: string) => v.length >= 8 || 'Password must be at least 8 characters',
                        ]"
                        v-model="form.password"
                        class="mb-4"
                        :error-messages="form.errors.password"
                    />

                    <v-btn
                        class="mb-4"
                        color="blue"
                        size="large"
                        variant="tonal"
                        block
                        type="submit"
                        :loading="form.processing"
                        :disabled="form.processing"
                    >Login</v-btn>

                </v-form>
            </v-card>
        </div>
    </AppLayout>
</template>
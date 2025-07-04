<script setup lang="ts">
import UILayout from '@/layouts/UILayout.vue';
import LandingLayout from '@/layouts/LandingLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import CustomizationMenu from '@/components/CustomizationMenu.vue';

import BackToTop from '@/components/common/BackToTop.vue';
import Snackbar from '@/components/common/Snackbar.vue';
import { useAppStore } from '@/stores/appStore';

import { useTheme } from 'vuetify';

const appStore = useAppStore();
const theme = useTheme();

const route = useRoute();

const isRouterLoaded = computed(() => {
  if (route.name !== null) return true;
  return false;
});

const layouts = {
  default: DefaultLayout,
  ui: UILayout,
  landing: LandingLayout,
  auth: AuthLayout,
};

type LayoutName = 'default' | 'ui' | 'landing' | 'auth' | 'error';

const currentLayout = computed(() => {
  const layoutName = route.meta.layout as LayoutName;
  if (!layoutName) {
    return DefaultLayout;
  }
  return layouts[layoutName];
});

onMounted(() => {
  theme.global.name.value = appStore.theme;
});
</script>

<template>
  <v-app>
    <component :is="currentLayout" v-if="isRouterLoaded">
      <router-view> </router-view>
    </component>
    <CustomizationMenu />
    <BackToTop />
    <Snackbar />
  </v-app>
</template>

<style scoped></style>

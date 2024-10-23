<script>
import { useTelegramTheme } from '@/hooks/useTelegramTheme';

export default {
  setup() {
    const { isDarkTheme } = useTelegramTheme();
    return { isDarkTheme };
  },
  mounted() {
        window.Telegram.WebApp.expand();
  },
};
</script>

<template>
    <router-view />
</template>


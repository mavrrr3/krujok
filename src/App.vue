<script>
import { useTelegramTheme } from '@/hooks/useTelegramTheme';

export default {
  setup() {
    const { isDarkTheme } = useTelegramTheme();
    return { isDarkTheme };
  },
};
</script>

<template>
    <router-view />
</template>

<script>
export default {
    mounted() {
        window.Telegram.WebApp.expand();
    },
}
</script>
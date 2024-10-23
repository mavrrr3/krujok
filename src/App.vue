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
    <router-view></router-view>
</template>

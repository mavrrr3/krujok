// src/composables/useTelegramTheme.js

import { ref, onMounted, watch } from 'vue';

export function useTelegramTheme() {
  const isDarkTheme = ref(false);

  onMounted(() => {
    const tg = window.Telegram.WebApp;

    isDarkTheme.value = tg.themeParams?.theme === 'dark' || tg.colorScheme === 'dark';

    tg.onEvent('themeChanged', () => {
      isDarkTheme.value = tg.themeParams?.theme === 'dark' || tg.colorScheme === 'dark';
    });

    updateBodyClass();
  });

  watch(isDarkTheme, updateBodyClass);

  function updateBodyClass() {
    if (isDarkTheme.value) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  return { isDarkTheme };
}

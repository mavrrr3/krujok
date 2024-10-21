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
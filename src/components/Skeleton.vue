<template>
    <div class="skeleton" :style="styles"></div>
</template>

<script>
export default {
    props: {
        width: { type: [String, Number], default: '100%' },
        height: { type: [String, Number], default: 10 },
        margin: { type: [String, Number], default: 0 },
        corner: { type: [String, Number], default: 1 },
    },
    methods: {
        isNumeric(value) {
            return /^\d+$/.test(value);
        }
    },
    data() {
        return {
            styles: {
                width: this.isNumeric(this.width) ? this.width + 'px' : this.width,
                height: this.isNumeric(this.height) ? this.height + 'px' : this.height,
                margin: this.isNumeric(this.margin) ? this.margin + 'px' : this.margin,
                borderRadius: this.isNumeric(this.corner) ? this.corner + 'px' : this.corner,
                background: window.Telegram.WebApp.colorScheme == 'dark' ? 'rgba(255, 255, 255, 0.5)' : '#dddbdd',
            }
        }
    },
}
</script>
  
<style>
.skeleton {
    position: relative;
    overflow: hidden;
}

.skeleton::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent);
    animation: wave 0.6s linear 0.5s infinite;
}

@keyframes wave {
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }

    65% {
        opacity: 1;
        transform: translateX(100%);
    }

    100% {
        opacity: 1;
        transform: translateX(100%);
    }
}
</style>
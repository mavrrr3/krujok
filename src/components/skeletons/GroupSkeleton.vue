<template>
    <div v-for="n in count" :key="n">
        <div class="mb-3">
            <skeleton height="48" corner="10" />
        </div>
        <div class="mb-3">
            <skeleton height="48" corner="10" />
        </div>
        <div class="mb-3">
            <skeleton width="110" height="48" corner="10" />
        </div>
    </div>
</template>
  
<script>
import Skeleton from '@/components/Skeleton.vue';
export default {
    components: { Skeleton },
    props: {
        count: { type: Number, default: 1 },
    }
}
</script>
  
<style></style>
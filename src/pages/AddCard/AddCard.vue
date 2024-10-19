<template>

  <div class="container add-card__container">
    <AddCardForm />
  </div>

</template>

<script>
import AddCardForm from '@/pages/AddCard/AddCardForm.vue';
export default {
  name: "AddCard",
  components: {
    AddCardForm
  }
}
</script>


<style lang="scss">
.add-card__container {
  padding-bottom: 66px !important;
}
</style>
<template>
  <AddCardHeader />

  <div class="container add-card__container">
    <AddCardForm />
  </div>

</template>

<script>
import AddCardHeader from '@/pages/AddCard/AddCardHeader.vue';
import AddCardForm from '@/pages/AddCard/AddCardForm.vue';
export default {
  name: "AddCard",
  components: {
    AddCardHeader,
    AddCardForm
  }
}
</script>


<style lang="scss">
.add-card__container {
  padding-bottom: 66px !important;
}
</style>
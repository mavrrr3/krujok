<template>
  <AddCardHeader />

  <div class="container add-card__container">
    <AddCardForm />
  </div>

</template>

<script>
import AddCardHeader from '@/components/AddCard/AddCardHeader.vue';
import AddCardForm from '@/components/AddCard/AddCardForm.vue';
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
  padding-bottom: 66px;
}
</style>
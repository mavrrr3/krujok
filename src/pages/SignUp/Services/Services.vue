<script>

import ServicesItem from "@/pages/SignUp/Services/ServicesItem.vue";
import AddService from "@/components/ModalsBody/AddService.vue";
import Modal from "@/components/Modal/Modal.vue";
export default {
  name: "Services",
  components: {ServicesItem, Modal},
  data() {
   return {
     services: [
       {name: 'Услуги стоматолога', price: '2000 руб.', duration: '30 мин', break: '30 мин'},
       {name: 'Услуги стоматолога', price: '2000 руб.', duration: '30 мин', break: '30 мин'},
     ]
   }
  },
  methods: {
    showModal() {
      this.$refs.modal.openModal(AddService);
    }
  }

}
</script>

<template>
  <div class="services">
      <h3 class="heading">Услуги</h3>
      <div class="services__wrap">
        <ServicesItem v-for="(item,index) in services" :key="index" :name="item.name" :price="item.price" :duration="item.duration" :pause="item.break" />
      </div>
      <button @click="showModal" class="btn" style="width: 100%">Добавить услугу</button>
  </div>
  <Modal ref="modal" />
</template>

<style scoped lang="scss">
  .services {
    margin-bottom: 20px;
    &__wrap {
      margin-bottom: 12px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
</style>
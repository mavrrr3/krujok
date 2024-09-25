<script>

import ServicesItem from "@/pages/SignUp/Services/ServicesItem.vue";
import AddService from "@/components/ModalsBody/AddService.vue";
import Modal from "@/components/Modal/Modal.vue";

import { mapGetters } from 'vuex';

export default {
  name: "Services",
  components: {ServicesItem, Modal},
  methods: {
    showModal() {
      this.$store.dispatch('toggleModal', true);
      this.$store.dispatch('setModalComponent', AddService);
      console.log(this.services);
    }
  },
  computed: {
    ...mapGetters(['Services']),
    services() {
      return this.Services;
    }
  }
}
</script>

<template>
  <div class="services">
      <h3 class="heading">Услуги</h3>
      <div class="services__wrap">
        <ServicesItem v-for="(item,index) in this.Services" :key="index" :name="item.name" :price="item.price" :duration="item.duration" :pause="item.break" />
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
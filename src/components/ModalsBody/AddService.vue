<script>

import { mapMutations } from "vuex";

export default {
  name: 'AddService',
  data() {
    return {
      isShowBlock: true,
      serviceName: '',
      servicePrice: '2000 руб',
      serviceDuration: '30 мин',
      servicesBreak: '1 час'
    }
  },
  methods: {
    ...mapMutations(['ADD_SERVICE']),
    toggleBlock() {
      this.isShowBlock = !this.isShowBlock;
    },
    updateServices(e) {
      e.preventDefault();
      const newService = {
        name: this.serviceName,
        price: this.servicePrice,
        duration: this.serviceDuration,
        break: this.servicesBreak,
      }
      this.ADD_SERVICE(newService);
      this.$store.dispatch('toggleModal', false);
      this.$store.dispatch('resetModalComponent');
    }
  },
}
</script>

<template>
  <h4 class="heading">Добавить услугу</h4>

  <form action="">
    <label for="service-name">Название услуги</label>
    <input type="text" id="service-name" placeholder="Название услуги" v-model="serviceName">
    <label for="service-price">Стоимость</label>
    <input type="text" id="service-price" v-model="servicePrice">
    <label for="service-duration">Продолжительность</label>
    <input type="text" id="service-duration" v-model="serviceDuration">

    <label for="services-break" @click="toggleBlock" class="checkbox-label">
      Перерыв после записи
      <span class="checkbox-icon" :class="isShowBlock ? '' : 'hidden'">
        <span></span>
      </span>
    </label>

    <input type="text" id="services-break" v-model="servicesBreak">

    <button class="btn" @click="updateServices">Сохранить</button>
    
  </form>
</template>
<script>
export default {
  name: 'AddService',
  data() {
    return {
      isShowBlock: true,
    }
  },
  methods: {
    toggleBlock() {
      this.isShowBlock = !this.isShowBlock;
    }
  }
}
</script>

<template>
  <h4 class="heading">Добавить услугу</h4>

  <form action="">
    <label for="service-name">Название услуги</label>
    <input type="text" id="service-name" placeholder="Название услуги">
    <label for="service-price">Стоимость</label>
    <input type="text" value="3000 руб">
    <label for="service-duration">Продолжительность</label>
    <select name="" id="">
      <option value="">02:00</option>
      <option value="">03:00</option>
    </select>

    <label for="" @click="toggleBlock" class="checkbox-label">
      Перерыв после записи
      <span class="checkbox-icon" :class="isShowBlock ? '' : 'hidden'">
        <span></span>
      </span>
    </label>

    <select v-if="isShowBlock" name="" id="">
      <option value="">00:30</option>
      <option value="">01:00</option>
    </select>

    <button class="btn">Сохранить</button>
    
  </form>
</template>
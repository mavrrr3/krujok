<script>
export default {
  name: 'SetAYear',
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
  <h4 class="heading">Заполнить на весь год</h4>
  <p class="descr">
    Введите ваше рабочее время, оно заполнится на весь год с учетом праздников и выходных по производственному календарю
  </p>
  <form action="">
    <div class="form-time">
      <input type="text" value="12:00">
      <span>-</span>
      <input type="text" value="20:00">
    </div>

    <label for="" @click="toggleBlock" class="checkbox-label set-a-time-label">
      Перерыв после записи
      <span class="checkbox-icon" :class="isShowBlock ? '' : 'hidden'">
        <span></span>
      </span>
    </label>

    <div class="form-time" v-if="isShowBlock">
      <input type="text" value="14:00">
      <span>-</span>
      <input type="text" value="15:00">
    </div>

    <button class="btn">Сохранить</button>
  </form>
</template>

<style lang="scss" scoped>
.set-a-time-label {
  font-size: 16px;
  font-weight: 600;
  color: $black;
}
</style>
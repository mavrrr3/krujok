<script>
export default {
  name: 'SetATime',
  data() {
    return {
      isShowBlock: true,
      startTime: '12:00',
      endTime: '20:00',
      breakStartTime: '14:00',
      breakEndTime: '15:00'
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
  <h4 class="heading">Назначить время</h4>
  <form action="">

    <div class="form-time">
      <input type="text" v-model="startTime">
      <span>-</span>
      <input type="text" v-model="endTime">
    </div>

    <label for="" @click="toggleBlock" class="checkbox-label set-a-time-label">
      Перерыв после записи
      <span class="checkbox-icon" :class="isShowBlock ? '' : 'hidden'">
        <span></span>
      </span>
    </label>

    <div class="form-time" v-if="isShowBlock">
      <input type="text" v-model="breakStartTime">
      <span>-</span>
      <input type="text" v-model="breakStartTime">
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
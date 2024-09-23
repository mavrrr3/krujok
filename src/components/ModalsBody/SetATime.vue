<script>

import {mapMutations} from 'vuex';
export default {
  name: 'SetATime',
  props: {
    calendarDate: {
      type: Array,
      required: false,
    }
  },
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
    ...mapMutations(['ADD_EVENT']),
    toggleBlock() {
      this.isShowBlock = !this.isShowBlock;
    },
    updateCalendar(event) {
      event.preventDefault();


      this.calendarDate.forEach(event => {
        const newEvent = {
          date: event.year + '-' +
              String(event.month).padStart(2, '0') + '-' +
              String(event.date).padStart(2, '0'),
          startTime: this.startTime,
          endTime: this.endTime,
          breakStart: this.breakStartTime,
          breakEnd: this.breakEndTime,
        };
        this.ADD_EVENT(newEvent);
        this.$store.dispatch('clearActiveDays');
      })

      this.$store.dispatch('toggleModal', false);
      this.$store.dispatch('resetModalComponent');
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

    <button
        class="btn"
        @click="updateCalendar"
    >
      Сохранить
    </button>
  </form>
</template>

<style lang="scss" scoped>
.set-a-time-label {
  font-size: 16px;
  font-weight: 600;
  color: $black;
}
</style>
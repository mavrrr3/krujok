<script>
import {mapMutations} from 'vuex';
export default {
  name: 'SetAYear',
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

      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();

      const dates = this.getDatesUntilEndOfYear(year, month, day);
      dates.forEach(date => {
        const newEvent = {
          date: date,
          startTime: this.startTime,
          endTime: this.endTime,
          breakStart: this.breakStartTime,
          breakEnd: this.breakEndTime,
        };
        this.ADD_EVENT(newEvent);
      })
      this.$store.dispatch('clearActiveDays');
      this.$store.dispatch('toggleModal', false);
      this.$store.dispatch('resetModalComponent');
    },
    getDatesUntilEndOfYear(year, month, day) {
      const dates = [];
      const startDate = new Date(year, month - 1, day);
      const endDate = new Date(year, 11, 31);

      // Проходим по всем дням до конца года
      while (startDate <= endDate) {
        const formattedDate = this.formatDate(startDate);
        dates.push(formattedDate);

        startDate.setDate(startDate.getDate() + 1);
      }

      return dates;
    },
    formatDate(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
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
      <input type="text" v-model="startTime">
      <span>-</span>
      <input type="text" v-model="endTime">
    </div>

    <label for="" @click="toggleBlock" class="checkbox-label set-a-time-label">
      Перерыв
      <span class="checkbox-icon" :class="isShowBlock ? '' : 'hidden'">
        <span></span>
      </span>
    </label>

    <div class="form-time" v-if="isShowBlock">
      <input type="text" v-model="breakStartTime">
      <span>-</span>
      <input type="text" v-model="breakEndTime">
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
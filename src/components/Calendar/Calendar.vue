<script>
import './Calendar.scss';
export default {
  name: "Calendar",
  data() {
    return {
      currentDate: new Date(),
      daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    };
  },
  computed: {
    currentYear() {
      return this.currentDate.getFullYear();
    },
    currentMonth() {
      return this.currentDate.getMonth();
    },
    currentMonthName() {
      return this.currentDate.toLocaleString('default', { month: 'long' });
    },
    daysInCurrentMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    firstDayOfWeek() {
      const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
      return firstDay === 0 ? 7 : firstDay; // Если воскресенье (0), то сделать 7
    },
    daysInPrevMonth() {
      return new Date(this.currentYear, this.currentMonth, 0).getDate();
    },
    calendarDays() {
      const totalDays = [];
      // Дни предыдущего месяца
      const prevMonthDays = this.firstDayOfWeek - 1; // Сколько дней предыдущего месяца нужно добавить
      for (let i = prevMonthDays; i > 0; i--) {
        totalDays.push({
          date: this.daysInPrevMonth - i + 1,
          isPrevMonth: true,
          isNextMonth: false,
        });
      }

      // Дни текущего месяца
      for (let i = 1; i <= this.daysInCurrentMonth; i++) {
        totalDays.push({
          date: i,
          isPrevMonth: false,
          isNextMonth: false,
        });
      }

      const nextMonthDays = 7 - (totalDays.length % 7);
      for (let i = 1; i <= nextMonthDays; i++) {
        totalDays.push({
          date: i,
          isPrevMonth: false,
          isNextMonth: true,
        });
      }

      return totalDays;
    },
  },
  methods: {
    prevMonth() {
      this.currentDate = new Date(this.currentYear, this.currentMonth - 1, 1);
    },
    nextMonth() {
      this.currentDate = new Date(this.currentYear, this.currentMonth + 1, 1);
    },
  },

}
</script>

<template>
  <div class="calendar">

    <div class="calendar__info">
      {{ currentMonthName + ' ' + currentYear }}
      <button class="calendar__arrow" @click="prevMonth">
        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" fill="none" viewBox="0 0 7 12">
          <path fill="#8B97B5" fill-rule="evenodd" d="M5.3 11.3a.99.99 0 1 0 1.4-1.4L2.8 6l3.9-3.9A.99.99 0 1 0 5.3.7L0 6l5.3 5.3Z" clip-rule="evenodd"/>
        </svg>
      </button>
      <button class="calendar__arrow" @click="nextMonth">
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" fill="none" viewBox="0 0 8 12">
          <path fill="#8B97B5" fill-rule="evenodd" d="M2.1.7A.99.99 0 0 0 .7 2.1L4.6 6 .7 9.9a.99.99 0 1 0 1.4 1.4L7.4 6 2.1.7Z" clip-rule="evenodd"/>
        </svg>
      </button>
    </div>

    <div class="calendar__head">
      <span>пн</span>
      <span>вт</span>
      <span>ср</span>
      <span>чт</span>
      <span>пт</span>
      <span>сб</span>
      <span>вс</span>
    </div>

    <div class="calendar__wrap">
      <div class="calendar__item" v-for="(day, index) in calendarDays"
           :key="index" :class="{ 'prev-month': day.isPrevMonth, 'next-month': day.isNextMonth }">
        <span class="calendar__date">{{ day.date }}</span>
      </div>
    </div>  


  
  </div>
</template>

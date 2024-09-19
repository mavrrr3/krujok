<script>
import './Calendar.scss';

export default {
  name: "Calendar",
  data() {
    return {
      currentDate: new Date(),
      daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      events: [
        {date: '2024-09-10', title: 'Event 1'},
        {date: '2024-09-15', title: 'Event 2'},
        {date: '2024-09-25', title: 'Event 3'},
      ],
      activeDays: [],
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
      return this.currentDate.toLocaleString('default', {month: 'long'});
    },
    daysInCurrentMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    firstDayOfWeek() {
      const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
      return firstDay === 0 ? 7 : firstDay;
    },
    daysInPrevMonth() {
      return new Date(this.currentYear, this.currentMonth, 0).getDate();
    },
    calendarDays() {
      const totalDays = [];
      const prevMonthDays = this.firstDayOfWeek - 1;

      for (let i = prevMonthDays; i > 0; i--) {
        totalDays.push({
          date: this.daysInPrevMonth - i + 1,
          isPrevMonth: true,
          isNextMonth: false,
          events: [],
        });
      }

      for (let i = 1; i <= this.daysInCurrentMonth; i++) {
        const currentDateString = `${this.currentYear}-${String(this.currentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        const dayEvents = this.events.filter(event => event.date === currentDateString);

        totalDays.push({
          date: i,
          isPrevMonth: false,
          isNextMonth: false,
          events: dayEvents,
        });
      }

      const nextMonthDays = 7 - (totalDays.length % 7);
      for (let i = 1; i <= nextMonthDays; i++) {
        totalDays.push({
          date: i,
          isPrevMonth: false,
          isNextMonth: true,
          events: [],
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
    handleDayClick(day) {
      const year = this.currentYear;
      const month = this.currentMonth + 1;
      const dateString = `${year}-${String(month).padStart(2, '0')}-${String(day.date).padStart(2, '0')}`;
      console.log(dateString);

      const dayIndex = this.activeDays.findIndex(activeDay =>
          activeDay.date === day.date &&
          activeDay.month === month &&
          activeDay.year === year
      );

      if (dayIndex > -1) {
        this.activeDays.splice(dayIndex, 1);
      } else {
        this.activeDays.push({date: day.date, month, year});
      }
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
          <path fill="#8B97B5" fill-rule="evenodd"
                d="M5.3 11.3a.99.99 0 1 0 1.4-1.4L2.8 6l3.9-3.9A.99.99 0 1 0 5.3.7L0 6l5.3 5.3Z" clip-rule="evenodd"/>
        </svg>
      </button>
      <button class="calendar__arrow" @click="nextMonth">
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" fill="none" viewBox="0 0 8 12">
          <path fill="#8B97B5" fill-rule="evenodd"
                d="M2.1.7A.99.99 0 0 0 .7 2.1L4.6 6 .7 9.9a.99.99 0 1 0 1.4 1.4L7.4 6 2.1.7Z" clip-rule="evenodd"/>
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
      <div
          class="calendar__item"
          @click="handleDayClick(day)"
          v-for="(day, index) in calendarDays"
          :key="index"
          :class="{
         'prev-month': day.isPrevMonth,
         'next-month': day.isNextMonth,
         'active': !day.isNextMonth && activeDays.some(activeDay =>
           activeDay.date === day.date &&
           activeDay.month === (this.currentMonth + 1) &&
           activeDay.year === this.currentYear
         )
       }"
      >
        <span class="calendar__date">{{ day.date }}</span>
        <div class="calendar__events" v-if="day.events.length">
          <span v-for="(event, eIndex) in day.events" :key="eIndex" class="calendar__event">
            {{ event.title }}
          </span>
        </div>
      </div>
    </div>


  </div>
</template>

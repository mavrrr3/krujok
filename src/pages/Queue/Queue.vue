<template>
  <div class="container">
    <div class="queue-info">
      <span class="queue-num">Номер в очереди: 3</span>
      <span class="queue-date">
        <img :src="calendarIcon" alt="">
        14.07.2024 15:30
      </span>
      <span class="queue-shifts">Количество дежурств: 15</span>
    </div>

    <a href="#" class="btn queue-btn">Вступить в конец очереди</a>

    <h4 class="heading">Очередь</h4>

    <ul class="users__list queue-users">
      <li v-for="(item, index) in userList" :key="index">
        <User :photo="item.photo" :name="item.name" :date="item.date" :count="item.count" />
      </li>

    </ul>

    <a href="#" class="btn btn-exit">Покинуть очередь</a>
  </div>
</template>

<script>
import './Queue.scss';
import User from "@/components/User.vue";
export default {
  name: 'Queue',
  components: {User},
  data() {
    return {
      calendarIcon: require('@/assets/icons/calendar.svg'),
      userList: [
        {name: "Иван Абрамов", date: '14.07.2024 15:30', count: '5'},
        {name: "Иван Иванов", date: '14.07.2024 15:30', count: '50'},
      ]
    }
  }
}
</script>
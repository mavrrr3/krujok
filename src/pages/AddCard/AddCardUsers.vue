<template>
  <h4 class="heading">Участники</h4>
  <AddCardSearch />
  <ul class="users__list">
    <li v-for="(item, index) in userList" :key="index">
      <User :photo="item.photo" :name="item.name" :date="item.date" :status="item.status" :count="item.count" />
    </li>

  </ul>
</template>


<script>

import AddCardSearch from "@/pages/AddCard/AddCardSearch.vue";
import User from "@/components/User.vue";
import photoImg from '@/assets/images/card-1.png';
export default {
  data() {
    return {

      userList: [
        {photo: photoImg, name: "Иван Иванов", date: '14.07.2024 15:30', count: '15', status: 1},
        {name: "Иван Абрамов", date: '14.07.2024 15:30', count: '5', status: 2},
        {name: "Иван Иванов", date: '14.07.2024 15:30', count: '50', status: 3},
      ]
    }
  },
  name: "AddCardUsers",
  components: {
    AddCardSearch,
    User,
  }
}
</script>

<style>
.users__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
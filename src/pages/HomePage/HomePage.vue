<script>
// import Header from '@/pages/HomePage/Header.vue';
import Card from '@/pages/HomePage/Card.vue';

import Modal from "@/components/Modal/Modal.vue";

import folderIcon from '@/assets/icons/folder.svg';
import queueIcon from '@/assets/icons/queue.svg';
import calendarIcon from '@/assets/icons/calendar.svg';
import groupIcon from '@/assets/icons/group.svg';
import checkIcon from '@/assets/icons/check.svg';

import photo1 from '@/assets/images/card-1.png';
import photo2 from '@/assets/images/card-2.png';

import './HomePage.scss';

export default {
  data() {
    return {
      addCardIcon: require('@/assets/icons/add-card.svg'),
      selectedTab: 'Все',
      tabs: ['Все', 'Мои кружки'],
      allCards: [
        {title: 'Парикмахерская Цирюльник', text: '14 кружков', icon: folderIcon},
        {title: 'Очередь уборки', text: 'Очередь из 14 человек', icon: queueIcon, photo: photo1},
        {title: 'Елена Викторовна Стоматолог', text: 'Запись', icon: calendarIcon},
        {title: 'Кружок программирования', text: 'Запись в группу', icon: groupIcon, photo: photo2},
        {title: 'Разработка приложения', text: 'Чеклист', icon: checkIcon},
        {title: 'Кружок состоящий в группе', text: 'Очередь из 14 человек', icon: queueIcon, subtitle: '/ Парикмахерская Цирюльник'},
      ],
      myCards: [
        {title: 'Очередь уборки', text: 'Очередь из 14 человек', icon: queueIcon, photo: photo1},
        {title: 'Кружок состоящий в группе', text: 'Очередь из 14 человек', icon: queueIcon, subtitle: '/ Парикмахерская Цирюльник'},
      ]
    }
  },
  name: 'HomePage',
  components: {
    // Header,
    Card,
    Modal
  },
}
</script>

<template>
<!--  <Header />-->

  <div class="container">
    <div class="hp__content">
      <div class="hp__tabs">
        <button
            v-for="tab in tabs"
            :key="tab"
            @click="selectedTab = tab"
            :class="{ active: selectedTab === tab }">
          {{ tab }}
        </button>
      </div>
      <div class="tab-content">
        <div v-if="selectedTab === 'Все'">
          <ul class="hp__cards">
            <li v-for="(item,index) in allCards" :key="index">
              <Card :title=item.title :icon="item.icon" :text="item.text" :subtitle="item.subtitle" :photo="item.photo" />
            </li>
          </ul>
        </div>
        <div v-if="selectedTab === 'Мои кружки'">
          <ul class="hp__cards">
            <li v-for="(item,index) in myCards" :key="index">
              <Card :title=item.title :icon="item.icon" :text="item.text" :subtitle="item.subtitle" :photo="item.photo" />
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
  <router-link class="add-card" to="/add-card">
    <img :src="addCardIcon" alt="">
  </router-link>

  <Modal ref="modal" />

</template>


<style lang="scss">
.add-card {
  position: fixed;
  right: 29px;
  bottom: 48px;
  width: 54px;
  height: 54px;
  background: #175FFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
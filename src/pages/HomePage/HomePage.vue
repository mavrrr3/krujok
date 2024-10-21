<script>
// import Header from '@/pages/HomePage/Header.vue';
import Card from '@/pages/HomePage/Card.vue';
import Modal from "@/components/Modal/Modal.vue";
import './HomePage.scss';
import { mapGetters } from 'vuex';

export default {
  created() {
    this.$store.dispatch('fetchHomeGroups');
  },
  computed: {
    ...mapGetters(['allGroups', 'myGroups']),
  },
  data() {
    return {
      addCardIcon: require('@/assets/icons/add-card.svg'),
      selectedTab: 'Все',
      tabs: ['Все', 'Мои кружки'],
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
        <button v-for="tab in tabs" :key="tab" @click="selectedTab = tab" :class="{ active: selectedTab === tab }">
          {{ tab }}
        </button>
      </div>
      <div class="tab-content">
        <div v-if="selectedTab === 'Все'">
          <ul class="hp__cards">
            <li v-for="(item, index) in allGroups" :key="index">
              <Card :title=item.name :icon="item.icon" :text="item.text" :subtitle="item.subtitle" :photo="item.photo" />
            </li>
          </ul>
        </div>
        <div v-if="selectedTab === 'Мои кружки'">
          <ul class="hp__cards">
            <li v-for="(item, index) in myGroups" :key="index">
              <Card :title=item.name :icon="item.icon" :text="item.text" :subtitle="item.subtitle" :photo="item.photo" />
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
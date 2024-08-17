<template>
  <div class="user">
    <div v-if="photo" class="user__photo">
      <img :src="photo" alt="">
    </div>
    <div v-else class="user__photo">
      {{ getInitials(name) }}
    </div>
    <div class="user__info">
      <div class="user__name">{{name}}</div>
      <div class="user__date">
        <img :src="calendarIcon" alt="">
        {{ date }}
        <div :class="{
          'user__status': true,
          'green': status === 1,
          'red': status === 2,
          'blue': status === 3
        }">
          <span v-if="status === 1">Подтвердил</span>
          <span v-else-if="status === 2">Не подтвердил</span>
          <span v-else-if="status === 3">Отправлено</span>
        </div>
      </div>
      <div class="user__count">Количество дежурств: {{ count }}</div>
    </div>
    <button class="user__regroup">
      <img :src="reGroupIcon" alt="">
    </button>
  </div>
</template>


<script>



export default {
  data() {
    return {
      reGroupIcon: require('@/assets/icons/re-group.svg'),
      calendarIcon: require('@/assets/icons/calendar.svg'),
    }
  },
  props: {
    name: String,
    photo: String,
    date: String,
    status: Number,
    count: String,
  },
  name: 'User',
  methods: {
    getInitials(title) {
      const words = title.split(' ');
      if (words.length === 1) {
        return words[0].charAt(0).toUpperCase();
      } else if (words.length >= 2) {
        const firstInitial = words[0].charAt(0).toUpperCase();
        const secondInitial = words[1].charAt(0).toUpperCase();
        return firstInitial + secondInitial;
      }
      return '';
    }
  }
}
</script>


<style lang="scss">
.user {
  background: $white;
  padding: 8px 16px 11px 9px;
  border-radius: 10px;
  display: flex;
  position: relative;
  &__regroup {
    position: absolute;
    display: flex;
    top: 15px;
    right: 16px;
    background: transparent;
    border: 0;
  }

  &__photo {
    width: 38px;
    min-width: 38px;
    height: 38px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #fff;
    font-weight: 600;
    margin-right: 8px;
    background: rgb(125,255,177);
    background: linear-gradient(0deg, rgba(125,255,177,1) 0%, rgba(0,219,153,1) 100%);
    text-transform: uppercase;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 14px;
    color: $black;
  }
  &__date {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #8B97B5;
    margin-bottom: 6px;
  }
  &__status {
    padding: 2px 6px;
    font-weight: bold;
    font-size: 10px;
    text-transform: uppercase;
    color: $white;
    border-radius: 60px;
    &.green {
      background: #00DB4A;
    }
    &.red {
      background: #FD5959;
    }
    &.blue {
      background: #7DB1FF;
    }
  }

  &__count {
    color: #8B97B5;
  }
}
</style>
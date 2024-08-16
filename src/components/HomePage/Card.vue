<template>
  <div class="card">
    <div v-if="photo" class="card__photo">
      <img :src="photo" alt="">
    </div>
    <div v-else class="card__photo">{{ getInitials(title) }}</div>
    <div class="card__content">
      <div class="card__subtitle" v-if="subtitle">{{ subtitle }}</div>
      <h4 class="card__name">{{ title }}</h4>
      <div class="card__info">
        <img v-if="icon" :src=icon alt="">
        {{text}}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Card",
  props: {
    title: {type: String},
    icon: {type: String, required: true},
    text: {type: String},
    photo: {type: String},
    subtitle: {type: String}
  },
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
.card {
  background: #fff;
  padding: 8px;
  display: flex;
  align-items: center;
  border-radius: 10px;

  &__photo {
    width: 38px;
    height: 38px;
    min-width: 38px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(125,177,255);
    background: linear-gradient(0deg, rgba(125,177,255,1) 0%, rgba(0,88,219,1) 100%);
    margin-right: 8px;
    overflow: hidden;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 600;
  }

  &__info {
    display: flex;
    align-items: center;
    color: #8B97B5;
    img {
      margin-right: 5px;
    }
  }
  &__subtitle {
    margin-bottom: 1px;
    color: #8B97B5;
  }
}
</style>
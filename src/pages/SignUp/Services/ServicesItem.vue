<script>
export default {
  name: "ServicesItem",
  props: {
    name: String,
    price: String,
    duration: String,
    pause: String,
  }
}
</script>

<template>
  <div class="block service">
    <h5 class="service__name">{{ name }}</h5>
    <ul class="service__list">
      <li>Стоимость - {{ price }}</li>
      <li>Продолжительность - {{ duration }}</li>
      <li>Перерыв после записи - {{ pause }}</li>
    </ul>
    <div class="service__nav">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 15 15">
          <path fill="#8B97B5" d="M7.551 3.247.594 10.204a.594.594 0 0 0-.17.356l-.42 3.78a.594.594 0 0 0 .656.656l3.782-.42a.594.594 0 0 0 .356-.17l6.955-6.957-4.202-4.202Zm6.927-1.044L12.798.522a1.783 1.783 0 0 0-2.522 0L8.392 2.406l4.202 4.203 1.885-1.885a1.783 1.783 0 0 0 0-2.521Z"/>
        </svg>
      </button>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" fill="none" viewBox="0 0 13 15">
          <path fill="#8B97B5" d="M13 .833H9.75L8.821 0H4.18l-.93.833H0V2.5h13V.833ZM.929 13.333c0 .442.195.866.544 1.179.348.312.82.488 1.313.488h7.428a1.97 1.97 0 0 0 1.313-.488c.349-.313.544-.737.544-1.179v-10H.93v10Z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .service {
    padding-right: 95px;
    &__nav {
      display: flex;
      align-items: center;
      top: 12px;
      right: 12px;
      gap: 10px;
      position: absolute;
      button {
        display: flex;
        background: transparent;
        border: 0;
      }
    }
    &__name {
      margin-bottom: 6px;
      font-weight: 600;
      font-size: 14px;
    }
    &__list {
      list-style: none;
      font-size: 14px;
    }
  }
</style>
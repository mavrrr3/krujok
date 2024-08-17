<template>
  <header class="header">
    <div class="container">
      <button class="header__back">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
          <path fill="#8B97B5" d="M16 8a1 1 0 0 0-1-1H3.83l4.88-4.88A1 1 0 0 0 7.295.705L0 8l7.295 7.295a.998.998 0 0 0 1.41-1.41L3.83 9H15a1 1 0 0 0 1-1Z"/>
        </svg>
        Создать кружок
      </button>
      <button class="header__close">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14">
          <path fill="#8B97B5" d="M13.295 2.115a.997.997 0 1 0-1.41-1.41L7 5.59 2.115.705a.997.997 0 1 0-1.41 1.41L5.59 7 .705 11.885a.997.997 0 1 0 1.41 1.41L7 8.41l4.885 4.885a.997.997 0 1 0 1.41-1.41L8.41 7l4.885-4.885Z"/>
        </svg>
      </button>
    </div>
  </header>
</template>


<script>
export default {
  name: 'AddCardHeader'
}
</script>

<style lang="scss">
.header {
  &__back {
    display: flex;
    align-items: center;
    border: 0;
    background: transparent;
    font-weight: 600;
    font-size: 14px;
    svg {
      margin-right: 10px;
    }
  }
  &__close {
    display: flex;
    border: 0;
    background: transparent;
  }
}
</style>
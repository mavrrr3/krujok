<template>

  <header class="header">
    <div class="container">
      <h1 class="header__title">Кружок</h1>
    </div>
  </header>

</template>


<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss">
.header {
  background: #fff;
  .container {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    font-weight: 600;
    font-size: 14px;
  }
}

</style>
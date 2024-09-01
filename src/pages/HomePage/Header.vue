<template>

  <header class="header">
    <div class="container">
      <h1 class="header__title">Кружок</h1>
      <div class="header__btn-group">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
            <path fill="#8B97B5" d="M6.686 0a6.686 6.686 0 0 1 6.685 6.686 6.702 6.702 0 0 1-1.604 4.35l.278.278h.812L18 16.457 16.457 18l-5.143-5.143v-.812l-.277-.278a6.702 6.702 0 0 1-4.351 1.604A6.686 6.686 0 0 1 6.686 0Zm0 2.057a4.61 4.61 0 0 0-4.629 4.629 4.61 4.61 0 0 0 4.629 4.628 4.61 4.61 0 0 0 4.628-4.628 4.61 4.61 0 0 0-4.628-4.629Z"/>
          </svg>
        </a>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" fill="none" viewBox="0 0 4 16">
            <path fill="#8B97B5" d="M2 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/>
          </svg>
        </a>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14">
            <path fill="#8B97B5" d="M13.295 2.115a.997.997 0 1 0-1.41-1.41L7 5.59 2.115.705a.997.997 0 1 0-1.41 1.41L5.59 7 .705 11.885a.997.997 0 1 0 1.41 1.41L7 8.41l4.885 4.885a.997.997 0 1 0 1.41-1.41L8.41 7l4.885-4.885Z"/>
          </svg>
        </a>
      </div>
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

  &__btn-group {
    display: flex;
    align-items: center;
    gap: 20px;
    a {
      display: flex;
    }
  }
}

</style>
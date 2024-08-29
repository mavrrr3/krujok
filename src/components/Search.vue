<script>
export default {
  name: 'Search',
}
</script>

<template>
  <form action="" class="search">
    <input type="search" placeholder="Поиск">
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
        <path fill="#8B97B5" d="M6.686 0a6.686 6.686 0 0 1 6.685 6.686 6.702 6.702 0 0 1-1.604 4.35l.278.278h.812L18 16.457 16.457 18l-5.143-5.143v-.812l-.277-.278a6.702 6.702 0 0 1-4.351 1.604A6.686 6.686 0 0 1 6.686 0Zm0 2.057a4.61 4.61 0 0 0-4.629 4.629 4.61 4.61 0 0 0 4.629 4.628 4.61 4.61 0 0 0 4.628-4.628 4.61 4.61 0 0 0-4.628-4.629Z"/>
      </svg>
    </button>
  </form>
</template>

<style scoped lang="scss">
  .search {
    position: relative;
    margin-bottom: 12px;

    input {
      margin: 0;
      padding-right: 47px;
      -moz-appearance: textfield;
      appearance: textfield;
      &::-webkit-search-cancel-button {
        -webkit-appearance: none;
        appearance: none;
      }
      &::-ms-clear {
        display: none;
        width: 0;
        height: 0;
      }
    }
    button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 16px;
      display: flex;
      background: transparent;
      border: 0;
    }
  }
</style>
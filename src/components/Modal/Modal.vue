<script>

export default {
  name: 'Modal',
  data() {
    return {
      isVisible: false,
      currentComponent: null,
    }
  },
    methods: {
      openModal(component = {}) {
        this.currentComponent = component;
        this.isVisible = true;
      },
      closeModal() {
        this.isVisible = false;
        this.currentComponent = null;
      },
    }
}
</script>
<template>
  <div v-if="isVisible" class="modal">
    <div class="container">
      <div class="modal-content">
        <button class="modal-close" @click="closeModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" fill="none" viewBox="0 0 10 5">
            <path fill="#8B97B5" d="m0 0 5 5 5-5H0Z"/>
          </svg>
        </button>
        <component
            :is="currentComponent"
        />
      </div>
    </div>
    <div class="modal-overlay" @click="closeModal"></div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  &-overlay {
    background: rgba(#000, .6);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
  }
  .container {
    height: 100%;
    display: flex;
    align-items: flex-end;
    position: relative;
    z-index: 2;
  }
}
.modal-content {
  background: $white;
  min-width: 100%;
  padding: 43px 16px 40px;
  border-radius: 25px 25px 0 0;
  max-height: 100%;
  overflow: auto;
  position: relative;
  transform: translateX(0);
  transition: transform 1s ease;
}
.modal-close {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 50%;
  background: #ECF0F9;
  border: 0;
  padding-bottom: 6px;
}
</style>
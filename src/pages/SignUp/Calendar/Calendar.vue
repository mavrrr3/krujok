<script>
import Modal from "@/components/Modal/Modal.vue";
import './Calendar.scss';
import SetATime from "@/components/ModalsBody/SetATime.vue";
  export default {
    name: 'Calendar',
    components: {Modal},
    methods: {
      showModal() {
        this.$refs.modal.openModal(SetATime);
      }
    }
  }
</script>


<template>
  <div class="block calendar">
    <h4 class="heading">График работы</h4>

    <button class="btn" @click="showModal">Назначить время</button>
  </div>
  <Modal ref="modal" />
</template>


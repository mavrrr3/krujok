<script>
import Modal from "@/components/Modal/Modal.vue";
import './Calendar.scss';
import SetATime from "@/components/ModalsBody/SetATime.vue";
import SetAYear from "@/components/ModalsBody/SetAYear.vue";

  export default {
    name: 'Calendar',
    components: {Modal},
    methods: {
      showModal() {
        this.$refs.modal.openModal(SetATime);
      },
      showModalYear() {
        this.$refs.modal.openModal(SetAYear);
      },
    }
  }
</script>


<template>
  <div class="block calendar">
    <h4 class="heading">График работы</h4>

    <button class="btn" @click="showModal">Назначить время</button>


    <button class="btn btn-white" @click="showModalYear">Заполнить на весь год</button>
  </div>
  <Modal ref="modal" />
</template>


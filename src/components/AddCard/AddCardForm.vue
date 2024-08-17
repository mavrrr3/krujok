<template>
  <form class="addCardForm">
    <div class="addCardForm__head">
      <div class="addCardForm__photo">
        <label for="addCardFile">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="42" fill="none" viewBox="0 0 50 42">
            <path fill="#8B97B5" fill-rule="evenodd" d="M19.36 0a6.663 6.663 0 0 0-6.091 3.99l-.463 1.05h-6.14C2.987 5.04 0 8.05 0 11.76v23.52C0 38.99 2.985 42 6.667 42h36.666C47.015 42 50 38.99 50 35.28V11.76c0-3.71-2.985-6.72-6.667-6.72h-6.14l-.462-1.05A6.663 6.663 0 0 0 30.64 0H19.361ZM8.334 12.6c0 .928-.745 1.68-1.666 1.68A1.673 1.673 0 0 1 5 12.6c0-.928.746-1.68 1.667-1.68.92 0 1.666.752 1.666 1.68ZM25 10.08c6.904 0 12.5 5.64 12.5 12.6s-5.595 12.6-12.5 12.6c-6.904 0-12.5-5.64-12.5-12.6s5.596-12.6 12.5-12.6Z" clip-rule="evenodd"/>
          </svg>
        </label>
        <input type="file" id="addCardFile" name="photo">
      </div>
      <input type="text" name="card_name" placeholder="Название кружка">
      <textarea name="card_descr" placeholder="Описание"></textarea>
      <select name="card_queue">
        <option value="" disabled selected>Очередь</option>
        <option value="">5 человек</option>
        <option value="">10 человек</option>
        <option value="">15 человек</option>
      </select>
    </div>

    <h4 class="heading">Смена очереди</h4>

    <div class="addCardForm__body">
      <div class="addCardForm__time">time</div>
    </div>



  </form>

  <AddCardUsers />
</template>


<script>
import AddCardUsers from "@/components/AddCard/AddCardUsers.vue";
import './AddCardForm.scss';
export default {
  name: 'AddCardForm',
  components: {
    AddCardUsers,
  }
}
</script>
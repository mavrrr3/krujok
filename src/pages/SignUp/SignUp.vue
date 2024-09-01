<template>
  <AddCardHeader />
  <div class="container">
    <div class="sign-up">
      <div class="sign-up__info">
          <div class="sign-up__photo">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="42" fill="none" viewBox="0 0 50 42">
              <path fill="#8B97B5" fill-rule="evenodd" d="M19.36 0a6.663 6.663 0 0 0-6.091 3.99l-.463 1.05h-6.14C2.987 5.04 0 8.05 0 11.76v23.52C0 38.99 2.985 42 6.667 42h36.666C47.015 42 50 38.99 50 35.28V11.76c0-3.71-2.985-6.72-6.667-6.72h-6.14l-.462-1.05A6.663 6.663 0 0 0 30.64 0H19.361ZM8.334 12.6c0 .928-.745 1.68-1.666 1.68A1.673 1.673 0 0 1 5 12.6c0-.928.746-1.68 1.667-1.68.92 0 1.666.752 1.666 1.68ZM25 10.08c6.904 0 12.5 5.64 12.5 12.6s-5.595 12.6-12.5 12.6c-6.904 0-12.5-5.64-12.5-12.6s5.596-12.6 12.5-12.6Z" clip-rule="evenodd"/>
            </svg>
          </div>
          <input type="text" name="name" placeholder="Название кружка">
          <textarea name="description" placeholder="Описание"></textarea>
          <select name="queue">
            <option value="" disabled selected>Очередь</option>
            <option value="">10</option>
          </select>
      </div>
      <Gallery />
      <div class="block sign-up__address">
        <h4 class="heading">Адрес</h4>
        <input type="text" name="address" placeholder="Введите адрес">
      </div>
      <Services />
      <Calendar />
      <Booking />
    </div>
  </div>
</template>

<script>
import './SignUp.scss';
import Gallery from "@/pages/SignUp/gallery.vue";
import Services from "@/pages/SignUp/Services/Services.vue";
import Booking from "@/pages/SignUp/Booking/Booking.vue";
import Calendar from "@/pages/SignUp/Calendar/Calendar.vue";
import AddCardHeader from "@/pages/AddCard/AddCardHeader.vue";

export default {
  name: 'SingUp',
  components: {Calendar, Gallery, Services, Booking, AddCardHeader},
  data() {
    return {
      modalData: {}
    }
  },
}
</script>
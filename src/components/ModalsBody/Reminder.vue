<script>
export default {
  name: 'Reminder',
  data() {
    return {
      blocks: [
        { id: 1 },
      ],
    }
  },
  methods: {
    addBlock() {
      const newId = this.blocks.length ? this.blocks[this.blocks.length - 1].id + 1 : 1;
      this.blocks.push({ id: newId });
    },
    removeBlock(index) {
      this.blocks.splice(index, 1);
    },
  },
}
</script>

<template>
  <div v-for="(block, index) in blocks" :key="block.id" class="reminder__item">
    <h4 class="reminder__heading">
      <span class="heading">
        Напоминание #{{ index + 1 }}
      </span>
      <button class="reminder__add" @click="addBlock">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
          <path fill="#175FFF"
                d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-18a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 6a1 1 0 1 0-2 0v3H6a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2h-3V6Z"/>
        </svg>
      </button>
      <button v-if="index !== 0" @click="removeBlock" class="reminder__delete">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
          <path fill="#FD5959" d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-18C4.47 0 0 4.47 0 10s4.47 10 10 10 10-4.47 10-10S15.53 0 10 0Zm3.295 6.705a.997.997 0 0 0-1.41 0L10 8.59 8.115 6.705a.997.997 0 0 0-1.41 1.41L8.59 10l-1.885 1.885a.997.997 0 0 0 1.41 1.41L10 11.41l1.885 1.885a.997.997 0 1 0 1.41-1.41L11.41 10l1.885-1.885a.997.997 0 0 0 0-1.41Z"/>
        </svg>
      </button>
    </h4>

    <select name="reminder_time" id="">
      <option value="">За сутки</option>
      <option value="">За неделю</option>
    </select>

    <input type="text" name="reminder_text" placeholder="Введите текст">
    <input type="text" placeholder="Ответ на подтверждение">
    <input type="text" placeholder="Ответ на отказ">

  </div>

  <h4 class="heading">Текст приглашения</h4>
  <input type="text" placeholder="Введите текст">

  <button class="btn">Сохранить</button>

</template>

<style lang="scss" scoped>
.reminder {
  &__item {
    margin-bottom: 20px;
  }
  &__heading {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    button {
      display: flex;
      background: transparent;
      border: 0;
      margin-left: 7px;
    }
    .heading {
      margin: 0;
    }
  }
}
</style>
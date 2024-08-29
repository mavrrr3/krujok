<script>
export default {
  name: 'Gallery',
  data() {
    return {
      galleryPhoto: require('@/assets/images/gallery.png')
    }
  }
}
</script>

<template>
  <div class="block gallery">
    <h3 class="heading">Фотогалерея</h3>
    <div class="gallery__wrap">
      <div class="gallery__item">
        <img :src="galleryPhoto" alt="">
        <button class="gallery__remove">
          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" fill="none" viewBox="0 0 7 7">
            <path fill="#FD5959" d="M3.5 6.3A2.804 2.804 0 0 1 .7 3.5C.7 1.956 1.956.7 3.5.7c1.543 0 2.8 1.256 2.8 2.8 0 1.543-1.256 2.8-2.8 2.8Zm0-6.3A3.497 3.497 0 0 0 0 3.5C0 5.436 1.565 7 3.5 7 5.436 7 7 5.436 7 3.5 7 1.565 5.436 0 3.5 0Zm1.153 2.347a.349.349 0 0 0-.493 0l-.66.66-.66-.66a.349.349 0 1 0-.493.493l.66.66-.66.66a.349.349 0 1 0 .493.493l.66-.66.66.66a.349.349 0 1 0 .493-.493l-.66-.66.66-.66a.349.349 0 0 0 0-.493Z"/>
          </svg>
        </button>
      </div>
      <button class="gallery__item add-photo">
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" fill="none" viewBox="0 0 38 32">
          <path fill="#8B97B5" fill-rule="evenodd" d="M14.714 0a5.064 5.064 0 0 0-4.63 3.04l-.351.8H5.067C2.269 3.84 0 6.133 0 8.96v17.92C0 29.707 2.269 32 5.067 32h27.866C35.731 32 38 29.707 38 26.88V8.96c0-2.827-2.269-5.12-5.067-5.12h-4.666l-.351-.8A5.064 5.064 0 0 0 23.286 0h-8.572Zm-8.38 9.6c0 .707-.567 1.28-1.267 1.28S3.8 10.307 3.8 9.6c0-.707.567-1.28 1.267-1.28s1.266.573 1.266 1.28ZM19 7.68c5.247 0 9.5 4.298 9.5 9.6 0 5.303-4.253 9.6-9.5 9.6s-9.5-4.297-9.5-9.6c0-5.302 4.253-9.6 9.5-9.6Z" clip-rule="evenodd"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .gallery {
    margin-bottom: 12px;
    &__wrap {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    &__item {
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 68px;
      position: relative;
      &.add-photo {
        border: 1px solid #8B97B5;
        background: transparent;
      }
    }
    &__remove {
      position: absolute;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: $white;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      top: 4px;
      right: 4px;
      border: none;
    }
  }
</style>
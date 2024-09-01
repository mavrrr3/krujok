<script>
import './ToDo.scss'

export default {
  name: "ToDo",
}
</script>
<template>
  <div class="todo">
    <div class="container">
      <div class="todo__main">
        <div class="todo__main--head">
          <h3>Ваша задача</h3>
          <button class="time">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 13 13">
              <path fill="#FD5959"
                    d="M6.5 0A6.503 6.503 0 0 0 0 6.5 6.503 6.503 0 0 0 6.5 13 6.503 6.503 0 0 0 13 6.5 6.503 6.503 0 0 0 6.5 0Zm0 12.071a5.57 5.57 0 0 1-3.94-9.51 5.57 5.57 0 0 1 7.88 0 5.57 5.57 0 0 1 0 7.879 5.57 5.57 0 0 1-3.94 1.63Zm.464-9.75v3.794c0 .369-.147.723-.408.984L4.508 9.15a.466.466 0 1 1-.66-.66l2.053-2.047a.464.464 0 0 0 .135-.33V2.322a.464.464 0 1 1 .928 0Z"/>
            </svg>
            -5ч 30мин
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" fill="none" viewBox="0 0 8 5">
              <path fill="#8B97B5" fill-rule="evenodd"
                    d="M7.54 1.413a.664.664 0 0 0-.946-.934L4 3.11 1.406.478a.664.664 0 1 0-.946.934L4 5l3.54-3.587Z"
                    clip-rule="evenodd"/>
            </svg>
          </button>
          <span class="status in-progress">В процессе</span>
        </div>
        <div class="todo__main--title">Дизайн приложения</div>
        <button class="btn">Завершить этап</button>
      </div>


      <div class="todo__body">
        <div class="todo__main--head">
          <h3>Ваша задача</h3>
          <button class="time">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 13 13">
              <path fill="#175FFF"
                    d="M6.5 0A6.503 6.503 0 0 0 0 6.5 6.503 6.503 0 0 0 6.5 13 6.503 6.503 0 0 0 13 6.5 6.503 6.503 0 0 0 6.5 0Zm0 12.071a5.57 5.57 0 0 1-3.94-9.51 5.57 5.57 0 0 1 7.88 0 5.57 5.57 0 0 1 0 7.879 5.57 5.57 0 0 1-3.94 1.63Zm.464-9.75v3.794c0 .369-.147.723-.408.984L4.508 9.15a.466.466 0 1 1-.66-.66l2.053-2.047a.464.464 0 0 0 .135-.33V2.322a.464.464 0 1 1 .928 0Z"/>
            </svg>
            10ч 30мин
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" fill="none" viewBox="0 0 8 5">
              <path fill="#8B97B5" fill-rule="evenodd"
                    d="M.46 3.587a.664.664 0 0 0 .946.934L4 1.89l2.594 2.63a.664.664 0 0 0 .946-.934L4 0 .46 3.587Z"
                    clip-rule="evenodd"/>
            </svg>
          </button>
        </div>
        <div class="todo__main--title">Дизайн приложения</div>
        <div class="todo__name">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 19 19">
            <path fill="url(#a)" d="M0 0h19v19H0z"/>
            <defs>
              <pattern id="a" width="1" height="1" patternContentUnits="objectBoundingBox">
                <use href="#b" transform="scale(.01316)"/>
              </pattern>
              <image id="b" width="76" height="76" data-name="image.png"
                     href="data:image/png;base64,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"/>
            </defs>
          </svg>
          Иван Иванов
        </div>


        <div class="todo__duration">
          <div class="todo__col">
            <p class="ttl">Начало этапа</p>
            <span class="date">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14">
                <g clip-path="url(#a)">
                  <path fill="#175FFF"
                        d="M7 7.382a.536.536 0 1 0 .536.536A.52.52 0 0 0 7 7.382Zm2.498 0a.536.536 0 1 0 .535.536.52.52 0 0 0-.535-.536Zm-4.995 0a.536.536 0 1 0 .537.536.52.52 0 0 0-.537-.536ZM7 9.85a.536.536 0 1 0 .536.535A.52.52 0 0 0 7 9.85Zm2.498 0a.536.536 0 1 0 .535.535.521.521 0 0 0-.535-.535Zm-4.995 0a.536.536 0 1 0 .537.535.518.518 0 0 0-.537-.535Z"/>
                  <path fill="#175FFF"
                        d="M10.695.911h-.887V.535A.573.573 0 0 0 9.268 0a.536.536 0 0 0-.537.535v.376h-3.46V.535A.573.573 0 0 0 4.728 0a.536.536 0 0 0-.535.535v.376h-.886A3.31 3.31 0 0 0 0 4.221v6.47A3.315 3.315 0 0 0 3.307 14h7.388A3.308 3.308 0 0 0 14 10.691v-6.47a3.314 3.314 0 0 0-3.305-3.31Zm0 12.017H3.307A2.235 2.235 0 0 1 1.07 10.69V5.676h11.86v5.015a2.24 2.24 0 0 1-2.234 2.237ZM3.307 1.983h.886v.401a.573.573 0 0 0 .535.537.538.538 0 0 0 .537-.537v-.4H8.73v.4a.574.574 0 0 0 .536.537.536.536 0 0 0 .535-.537v-.4h.887a2.237 2.237 0 0 1 2.24 2.237v.383H1.07v-.383a2.242 2.242 0 0 1 2.236-2.238Z"/>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h14v14H0z"/>
                  </clipPath>
                </defs>
              </svg>
              14.07.2024 15:30
            </span>
          </div>
          <div class="todo__col">
            <p class="ttl">Завершение этапа</p>
            <span class="date">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14">
                <g clip-path="url(#a)">
                  <path fill="#175FFF"
                        d="M7 7.382a.536.536 0 1 0 .536.536A.52.52 0 0 0 7 7.382Zm2.498 0a.536.536 0 1 0 .535.536.52.52 0 0 0-.535-.536Zm-4.995 0a.536.536 0 1 0 .537.536.52.52 0 0 0-.537-.536ZM7 9.85a.536.536 0 1 0 .536.535A.52.52 0 0 0 7 9.85Zm2.498 0a.536.536 0 1 0 .535.535.521.521 0 0 0-.535-.535Zm-4.995 0a.536.536 0 1 0 .537.535.518.518 0 0 0-.537-.535Z"/>
                  <path fill="#175FFF"
                        d="M10.695.911h-.887V.535A.573.573 0 0 0 9.268 0a.536.536 0 0 0-.537.535v.376h-3.46V.535A.573.573 0 0 0 4.728 0a.536.536 0 0 0-.535.535v.376h-.886A3.31 3.31 0 0 0 0 4.221v6.47A3.315 3.315 0 0 0 3.307 14h7.388A3.308 3.308 0 0 0 14 10.691v-6.47a3.314 3.314 0 0 0-3.305-3.31Zm0 12.017H3.307A2.235 2.235 0 0 1 1.07 10.69V5.676h11.86v5.015a2.24 2.24 0 0 1-2.234 2.237ZM3.307 1.983h.886v.401a.573.573 0 0 0 .535.537.538.538 0 0 0 .537-.537v-.4H8.73v.4a.574.574 0 0 0 .536.537.536.536 0 0 0 .535-.537v-.4h.887a2.237 2.237 0 0 1 2.24 2.237v.383H1.07v-.383a2.242 2.242 0 0 1 2.236-2.238Z"/>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h14v14H0z"/>
                  </clipPath>
                </defs>
              </svg>
              14.07.2024 15:30
            </span>
          </div>
        </div>

      </div>


    </div>
  </div>


</template>
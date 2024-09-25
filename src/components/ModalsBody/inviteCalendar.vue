<script>

import './InviteCalendar.scss';
export default {
  name: 'InviteCalendar',
  data() {
    return {
      inviteCalendarData: [
        {time: '10:00', user: 'Иван Иванов'},
        {time: '11:00'},
        {time: '12:00'},
        {time: '13:00'},
        {time: '14:00'},
        {time: '15:00', user: 'Иван Иванов'},
        {time: '16:00'},
        {time: '17:00'},
        {time: '18:00'},
        {time: '19:00'},
        {time: '20:00'},
        {time: '21:00'},
      ]
    }
  }
}
</script>


<template>

  <div class="invite-calendar__dates">
    <div class="invite-calendar__overflow">
      <button class="invite-calendar__date">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
          <g clip-path="url(#a)">
            <path fill="#175FFF" d="M8 8.436a.613.613 0 1 0 .612.614.594.594 0 0 0-.611-.614Zm2.855 0a.612.612 0 1 0 .611.614.594.594 0 0 0-.611-.614Zm-5.708 0a.613.613 0 1 0 .613.614.594.594 0 0 0-.613-.614ZM8 11.257a.613.613 0 1 0 .612.612.594.594 0 0 0-.611-.612Zm2.855 0a.613.613 0 1 0 .611.612.594.594 0 0 0-.611-.612Zm-5.708 0a.613.613 0 1 0 .613.612.592.592 0 0 0-.613-.612Z"/>
            <path fill="#175FFF" d="M12.223 1.041h-1.014v-.43A.654.654 0 0 0 10.591 0a.613.613 0 0 0-.613.612v.43H6.023v-.43A.654.654 0 0 0 5.403 0a.613.613 0 0 0-.61.612v.43H3.778A3.782 3.782 0 0 0 0 4.823v7.395A3.788 3.788 0 0 0 3.78 16h8.443A3.78 3.78 0 0 0 16 12.219V4.824a3.788 3.788 0 0 0-3.777-3.783Zm0 13.734H3.778a2.555 2.555 0 0 1-2.555-2.556V6.487h13.552v5.732a2.56 2.56 0 0 1-2.553 2.556ZM3.778 2.267h1.013v.458a.654.654 0 0 0 .612.613.614.614 0 0 0 .613-.613v-.458h3.961v.458a.656.656 0 0 0 .613.613.613.613 0 0 0 .612-.613v-.458h1.013a2.557 2.557 0 0 1 2.56 2.557v.438H1.224v-.438A2.562 2.562 0 0 1 3.78 2.267Z"/>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h16v16H0z"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      <div class="invite-calendar__date">
        <span>ПТ</span>
        18 апр
      </div>
      <div class="invite-calendar__date active">
        <span>СБ</span>
        19 апр
      </div>
      <div class="invite-calendar__date">
        <span>ВС</span>
        20 апр
      </div>
    </div>
  </div>

  <div class="invite-calendar__current-day">18 апреля, пятинца</div>
  <ul class="invite-calendar__list">
    <li v-for="(event) in inviteCalendarData" :key="event.time">
      <span class="invite-calendar__time">{{event.time}}</span>
      <div v-if="event.user" class="invite-calendar__user">
        <div class="invite-calendar__user-name">
          <span>ИИ</span>
          Иван Иванов
        </div>
        <div class="invite-calendar__btn-group">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" fill="none" viewBox="0 0 17 10">
              <path stroke="#8B97B5" stroke-linecap="round" stroke-width="2" d="M1 1h15M1 9h15"/>
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="none" viewBox="0 0 12 16">
              <path fill="#FD5959" d="M12 .857H9L8.143 0H3.857L3 .857H0v1.714h12V.857ZM.857 13.714a1.714 1.714 0 0 0 1.714 1.714H9.43a1.714 1.714 0 0 0 1.714-1.714V3.43H.857v10.285Z"/>
            </svg>
          </button>
        </div>
      </div>
      <button v-else class="invite-calendar__add">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28">
          <circle cx="14" cy="14" r="14" fill="#175FFF"/>
          <rect width="2.074" height="13.482" x="12.963" y="7.259" fill="#fff" rx="1.037"/>
          <rect width="2.074" height="13.482" x="20.741" y="12.963" fill="#fff" rx="1.037" transform="rotate(90 20.74 12.963)"/>
        </svg>
      </button>
    </li>
  </ul>

  <button class="btn">Сохранить</button>
</template>
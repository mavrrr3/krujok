<script>
export default {
  name: 'Invite',
}
</script>


<template>
  <h3 class="heading">Пригласить</h3>
  <div class="invite-name">
    <span>ИИ</span>
    Иван Иванов
  </div>
  <div class="invite-wrap">
    <div class="invite-item">
      <input type="text" placeholder="Дата">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
        <g clip-path="url(#a)">
          <path fill="#8B97B5" d="M10.001 10.545a.766.766 0 1 0 .764.767.743.743 0 0 0-.764-.767Zm3.567 0a.766.766 0 1 0 .764.767.743.743 0 0 0-.764-.767Zm-7.134 0a.766.766 0 0 0-.542 1.31.767.767 0 0 0 1.308-.543.743.743 0 0 0-.766-.767Zm3.567 3.526a.766.766 0 1 0 .764.765.743.743 0 0 0-.764-.765Zm3.567 0a.766.766 0 0 0-.544 1.31.766.766 0 0 0 1.308-.545.743.743 0 0 0-.764-.765Zm-7.134 0a.766.766 0 1 0 .766.765.74.74 0 0 0-.766-.765Z"/>
          <path fill="#8B97B5" d="M15.278 1.302h-1.266V.765A.818.818 0 0 0 13.239 0a.766.766 0 0 0-.766.765v.537H7.529V.765A.818.818 0 0 0 6.755 0a.766.766 0 0 0-.764.765v.537H4.723a4.728 4.728 0 0 0-3.339 1.386A4.737 4.737 0 0 0 0 6.03v9.244a4.735 4.735 0 0 0 1.386 3.34A4.726 4.726 0 0 0 4.724 20h10.554a4.726 4.726 0 0 0 3.337-1.386A4.735 4.735 0 0 0 20 15.274V6.03a4.735 4.735 0 0 0-1.384-3.342 4.726 4.726 0 0 0-3.338-1.387Zm0 17.166H4.724a3.194 3.194 0 0 1-3.194-3.194V8.109h16.94v7.165a3.2 3.2 0 0 1-3.192 3.194ZM4.724 2.833H5.99v.573a.818.818 0 0 0 .765.767.768.768 0 0 0 .766-.767v-.573h4.952v.573a.82.82 0 0 0 .766.767.766.766 0 0 0 .764-.767v-.573h1.267a3.196 3.196 0 0 1 3.2 3.197v.547H1.53V6.03a3.202 3.202 0 0 1 3.194-3.197Z"/>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h20v20H0z"/>
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="invite-item">
      <input type="text" placeholder="Время">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path fill="#8B97B5" d="M10 0a10.004 10.004 0 0 0-7.072 2.928 10.004 10.004 0 0 0 0 14.144 10.004 10.004 0 0 0 14.144 0 10.003 10.003 0 0 0 0-14.144A10.003 10.003 0 0 0 10 0Zm0 18.571A8.569 8.569 0 0 1 1.429 10 8.569 8.569 0 0 1 10 1.429 8.569 8.569 0 0 1 18.571 10 8.568 8.568 0 0 1 10 18.571Zm.714-15v5.836c0 .568-.226 1.113-.628 1.514l-3.15 3.157a.717.717 0 1 1-1.015-1.014l3.157-3.15a.714.714 0 0 0 .208-.507V3.571a.714.714 0 1 1 1.428 0Z"/>
      </svg>
    </div>
  </div>

  <textarea placeholder="Текст приглашения"></textarea>

  <button class="btn">Пригласить</button>
</template>


<style scoped lang="scss">
  .invite {
    &-name {
      display: flex;
      align-items: center;
      gap: 6px;
      background: #F3F3FC;
      border-radius: 10px;
      padding: 8px;
      font-weight: 600;
      font-size: 14px;
      color: #000;
      margin-bottom: 12px;
      span {
        width: 25px;
        min-width: 25px;
        height: 25px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 10px;
        line-height: 25px;
        text-align: center;
        font-weight: 600;
        background: rgb(125,255,177);
        background: linear-gradient(0deg, rgba(125,255,177,1) 0%, rgba(0,219,153,1) 100%);
      }
    }
    &-wrap {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      margin-bottom: 12px;
    }
    &-item {
      position: relative;
      input {
        margin: 0;
      }
      svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 12px;
      }
    }
  }
</style>
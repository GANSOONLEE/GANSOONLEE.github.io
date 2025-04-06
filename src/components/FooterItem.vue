<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import { useAlertStore } from '@/stores/alert.ts'
const alertStore = useAlertStore()

const currentYear = ref(new Date().getFullYear())

const copyDiscordId = async () => {
  await navigator.clipboard.writeText('axun0402')
}

const handleUnavailable = () => {
  alertStore.showAlertMessage('error', '這個功能未開放，敬請期待！')
}

const cooperateUnavailable = () => {
  alertStore.showAlertMessage('warning', '目前業務繁忙，暫不開放合作機會！', 7)
}
</script>

<template>
  <footer>
    <h2 class="title">{{ $t('footer.title') }}</h2>
    <section class="column-group">
      <div class="column">
        <h3>{{ $t('footer.link') }}</h3>
        <ul>
          <RouterLink to="/">{{ $t('navbar.home') }}</RouterLink>
          <RouterLink to="/about">{{ $t('navbar.about') }}</RouterLink>
          <RouterLink to="/portfolio">{{ $t('navbar.portfolio') }}</RouterLink>
          <RouterLink to="/contact">{{ $t('navbar.contact') }}</RouterLink>
          <RouterLink to="/cooperate" @click.prevent="cooperateUnavailable">{{
            $t('navbar.cooperate')
          }}</RouterLink>
        </ul>
      </div>
      <div class="column">
        <h3>{{ $t('footer.contact') }}</h3>
        <ul>
          <a
            target="_blank"
            title="另開新視窗"
            href="https://www.facebook.com/profile.php?id=100086108567293"
            >臉書 Facebook</a
          >
          <a target="_blank" title="另開新視窗" href="https://www.instagram.com/frankganrichang/"
            >唉居 Instagram</a
          >
          <a target="_blank" title="另開新視窗" href="https://x.com/axun0402">推特 Twitter (X)</a>
          <a target="_blank" title="另開新視窗" href="https://qm.qq.com/q/xoZuZli6Hu">腾讯QQ</a>
          <a target="_blank" title="另開新視窗" href="https://weibo.com/u/7554285797">微博 Weibo</a>
          <a target="_blank" title="另開新視窗" href="https://space.bilibili.com/3546645901872050"
            >B站 Bilibili</a
          >
          <a target="_blank" title="點擊複製 Discord ID" @click.prevent="copyDiscordId" href="#"
            >Discord</a
          >
          <a target="_blank" title="另開新視窗" href="https://github.com/GANSOONLEE">Github</a>
          <a target="_blank" href="mailto:vincentgan0402@gmail.com">Gmail</a>
        </ul>
      </div>
      <div class="column">
        <h3>{{ $t('footer.portfolio') }}</h3>
        <ul>
          <a target="_blank" @click.prevent="handleUnavailable" class="disabled" href="#">{{
            $t('footer.photography')
          }}</a>
          <a target="_blank" @click.prevent="handleUnavailable" class="disabled" href="#">{{
            $t('footer.web-design')
          }}</a>
        </ul>
      </div>
    </section>
    <p class="copy-right">
      © 2023 - {{ currentYear }} Frankgan. All Rights Reserved.<br />
      © 2023 - {{ currentYear }} （顏循禮）阿循 版權所有
    </p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  padding: 2rem 2rem 1rem;
  background: #343238;
  h2.title {
    color: #fff;
  }
  section.column-group {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    gap: 1rem;
    div.column {
      h3 {
        color: #00ff8c;
      }
      ul {
        margin-top: 1.2rem;
        display: flex;
        flex-direction: column;
        row-gap: 0.4rem;
        a {
          width: max-content;
          color: #aaa;
          &.disabled {
            cursor: not-allowed;
            color: #666;
          }
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
  p.copy-right {
    color: #00ff8c;
    font-size: 0.8rem;
    text-align: center;
    line-height: 1.6rem;
  }
}

@media screen and (max-width: '768px') {
  footer {
    h2.title {
      text-align: center;
    }
    section.column-group {
      display: flex;
      flex-direction: column;
      div.column {
        &:not(:first-child) {
          padding-top: 1rem;
          border-top: 2px solid #ffffff51;
        }
        h3 {
          text-align: center;
        }
        ul {
          align-items: center;
          row-gap: 1rem;
        }
      }
    }
    p.copy-right {
      color: #00ff8c;
      font-size: 0.8rem;
      text-align: center;
      line-height: 1.6rem;
    }
  }
}
</style>

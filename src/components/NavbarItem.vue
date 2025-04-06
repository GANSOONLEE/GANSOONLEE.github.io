<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import { useAlertStore } from '@/stores/alert.ts'
const alertStore = useAlertStore()

const cooperateUnavailable = () => {
  alertStore.showAlertMessage('warning', '目前業務繁忙，暫不開放合作機會！', 7)
}

const isMenuOpen = ref(false)
const { availableLocales, locale } = useI18n()

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const isDropdownOpen = ref(false)
const selectedLocale = ref(locale.value)

const getLocaleFromCookie = () => {
  const match = document.cookie.match(/locale=([^;]+)/)
  return match ? match[1] : null
}

const setLocaleInCookie = (newLocale: string) => {
  document.cookie = `locale=${newLocale}; path=/; max-age=31536000`
}

onMounted(() => {
  const localeFromCookie = getLocaleFromCookie()
  if (localeFromCookie) {
    locale.value = localeFromCookie
  } else {
    locale.value = 'zh'
    setLocaleInCookie('zh')
  }
  selectedLocale.value = locale.value
})

const handleChangeLocale = (newLocale: string) => {
  document.body.classList.remove(...availableLocales)
  document.body.classList.add(newLocale)
  locale.value = newLocale
  setLocaleInCookie(newLocale)
  selectedLocale.value = newLocale
  isDropdownOpen.value = false
}
</script>

<template>
  <nav>
    <ul @click="closeMenu" :class="['links', { open: isMenuOpen }]">
      <RouterLink to="/">{{ $t('navbar.home') }}</RouterLink>
      <RouterLink to="/about">{{ $t('navbar.about') }}</RouterLink>
      <RouterLink to="/portfolio">{{ $t('navbar.portfolio') }}</RouterLink>
      <RouterLink to="/contact">{{ $t('navbar.contact') }}</RouterLink>
      <RouterLink to="/cooperate" @click.prevent="cooperateUnavailable">{{
        $t('navbar.cooperate')
      }}</RouterLink>
    </ul>
    <div class="language-dropdown">
      <button @click="isDropdownOpen = !isDropdownOpen">
        {{ $t('language.' + selectedLocale) }}
        <i :class="['fa', isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
      </button>
      <ul v-if="isDropdownOpen" class="language-menu">
        <li
          v-for="(language, idx) in availableLocales"
          :key="idx"
          @click="handleChangeLocale(language)"
          :class="{ current: language === locale }"
        >
          {{ $t('language.' + language) }}
        </li>
      </ul>
    </div>
    <i :class="['fa', isMenuOpen ? 'fa-close' : 'fa-bars', 'menu-button']" @click="toggleMenu"></i>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: sticky;
  top: 0;
  padding: 1rem;
  background: #343238;
  box-shadow: 0 2px 4px rgba(36, 36, 59, 0.1);
  ul.links {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1.4rem;
    a {
      color: #00ff8c;
      transition: color 0.12s ease-in-out;
      &:hover {
        color: #00b664;
      }
    }
  }
  ul.language-menu {
    display: block;
    position: absolute;
    background: #fff;
    padding: 1rem;
    list-style: none;
    border-radius: 4px;
    margin-top: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: max-content;
    right: 0;
    z-index: 10;
    li {
      cursor: pointer;
      padding: 0.5rem;
      &:hover {
        background-color: #f0f0f0;
      }
      &.current {
        font-weight: bold;
        color: #007bff;
      }
    }
  }
  .language-dropdown {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0.8rem;
    button {
      background: none;
      cursor: pointer;
      color: #fff;
      font-size: 16px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      i {
        font-size: 14px;
      }
    }
  }
  i.menu-button {
    display: none;
  }
}

@media screen and (max-width: '768px') {
  nav {
    ul.links {
      width: 100%;
      background: #2b282e;
      position: absolute;
      left: -100%;
      top: 100%;
      flex-direction: column;
      transition: left 0.17s ease-in-out;
      &.open {
        left: 0;
      }
      a {
        padding: 0.8rem;
        width: 100%;
        text-align: center;
        &:hover {
          background: rgba(0, 0, 0, 0.3);
        }
      }
    }
    i.menu-button {
      display: block;
      width: min-content;
      cursor: pointer;
      color: #00ff8c;
    }
  }
}
</style>

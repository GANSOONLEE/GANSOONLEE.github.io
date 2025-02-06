import { createI18n } from 'vue-i18n'
import en from './en.json'
import zh from './zh.json'
import cn from './cn.json'

export default createI18n({
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: {
    en: en,
    zh: zh,
    cn: cn,
  },
})

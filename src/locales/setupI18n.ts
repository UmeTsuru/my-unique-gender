import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "hello world",
    },
  },
  ja: {
    message: {
      hello: "こんにちは、世界",
    },
  },
  "zh-CN": {
    message: {
      hello: "你好",
      test: "测试",
    },
  },
};

export const setupI18n = createI18n({
  locale: "zh-CN",
  messages,
});

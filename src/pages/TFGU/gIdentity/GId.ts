import { reactive } from "vue";
import { GenderGroup } from "@/types/index";
import { setupI18n } from "../../../locales/setupI18n";

export const genderIdentity: GenderGroup = reactive({
  title: setupI18n.global.t('message.hello'),
  category: [
    {
      name: "非二元性别",
      colorSeries: ["ff9292", "ffd6a7"],
      value: 50,
    },
    {
      name: "跨性别",
      colorSeries: ["ffd6a7", "fffb8f"],
      value: 50,
    },
    {
      name: "女性",
      colorSeries: ["fffb8f", "c9ffaf"],
      value: 50,
    },
    {
      name: "男性",
      colorSeries: ["c9ffaf", "90f8ff"],
      value: 50,
    },
    {
      name: "customer",
      colorSeries: ["90f8ff", "9390ff"],
      value: 50,
    },
  ],
  mainColor: "red",
  hasCustom: false,
});

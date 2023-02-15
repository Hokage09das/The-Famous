import png1 from "../../assets/images/png1.png";
import png2 from "../../assets/images/png2.png";
import png3 from "../../assets/images/png3.png";
import png4 from "../../assets/images/png4.png";

export const arts = [
  {
    id: 1,
    image: png1,
    title: "Сандро Боттичелли",
    description: "Рождение Венеры",
    oldPrice: "2 000 000",
    currentPrice: "1 000 000",
    booked: false,
    sold: false,
  },
  {
    id: 2,
    image: png2,
    title: "Тайная вечеря",
    description: "Леонардо да Винчи",
    currentPrice: "1 000 000",
    booked: false,
    sold: false,
  },
  {
    id: 3,
    image: png3,
    title: "Сотворение Адама",
    description: "Микеланджело",
    oldPrice: "2 000 000",
    currentPrice: "1 000 000",
    booked: true,
    sold: false,
  },
  {
    id: 4,
    image: png4,
    title: "Урок анатомии",
    description: "Рембрандт",
    oldPrice: "2 000 000",
    currentPrice: "1 000 000",
    booked: false,
    sold: true,
  },
];

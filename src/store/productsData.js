const productsData = [
  {
    id: 1,
    category: "headphones",
    title: "MW65 Black",
    price: 499.0,
    info: {
      description_title:
        "Our Most Technically Sophisticated Noise-Cancelling Wireless Headphones",
      description:
        "Built for Life On-the-Go: The ultimate companion for your daily listening or travels, the MW65's are our lightest over-ear noise-cancelling wireless headphones and feature custom 40mm Beryllium drivers and Active Noise-Cancelling technology to produce an exceptional acoustic experience. These active noise-cancelling wireless headphones are the perfect match for audiophiles everywhere. ",
    },
    imgs: {
      img_1: "MW65B_1.png",
      img_2: "MW65B_2.png",
      img_3: "MW65B_3.png",
      img_4: "MW65B_4.png",
    },
  },
  {
    id: 2,
    category: "headphones",
    title: "MW65 White",
    price: 499.0,
    info: {
      description_title:
        "Our Most Technically Sophisticated Noise-Cancelling Wireless Headphones",
      description:
        "Built for Life On-the-Go: The ultimate companion for your daily listening or travels, the MW65's are our lightest over-ear noise-cancelling wireless headphones and feature custom 40mm Beryllium drivers and Active Noise-Cancelling technology to produce an exceptional acoustic experience. These active noise-cancelling wireless headphones are the perfect match for audiophiles everywhere. ",
    },
    imgs: {
      img_1: "MW65W_1.png",
      img_2: "MW65W_2.png",
      img_3: "MW65W_3.png",
      img_4: "MW65W_4.png",
    },
  },
  {
    id: 3,
    category: "headphones",
    title: "MW65 Blue",
    price: 499.0,
    info: {
      description_title:
        "Our Most Technically Sophisticated Noise-Cancelling Wireless Headphones",
      description:
        "Built for Life On-the-Go: The ultimate companion for your daily listening or travels, the MW65's are our lightest over-ear noise-cancelling wireless headphones and feature custom 40mm Beryllium drivers and Active Noise-Cancelling technology to produce an exceptional acoustic experience. These active noise-cancelling wireless headphones are the perfect match for audiophiles everywhere. ",
    },
    imgs: {
      img_1: "MW65BL_1.png",
      img_2: "MW65BL_2.png",
      img_3: "MW65BL_3.png",
      img_4: "MW65BL_4.png",
    },
  },
  {
    id: 4,
    category: "headphones",
    title: "MW65 Brown",
    price: 499.0,
    info: {
      description_title:
        "Our Most Technically Sophisticated Noise-Cancelling Wireless Headphones",
      description:
        "Built for Life On-the-Go: The ultimate companion for your daily listening or travels, the MW65's are our lightest over-ear noise-cancelling wireless headphones and feature custom 40mm Beryllium drivers and Active Noise-Cancelling technology to produce an exceptional acoustic experience. These active noise-cancelling wireless headphones are the perfect match for audiophiles everywhere. ",
    },
    imgs: {
      img_1: "MW65BR_1.png",
      img_2: "MW65BR_2.png",
      img_3: "MW65BR_3.png",
      img_4: "MW65BR_4.png",
    },
  },
  {
    id: 5,
    category: "earphones",
    title: "ME05 Black",
    price: 299.0,
    info: {
      description_title: "Our Most Technically Sophisticated Wired Earphones",
      description:
        "Precision-machined from solid brass, the ME05 Earphones feature a distinctive form with ergonomic and elegant details, including laser etching and mirrored accents that reflect light. Our ME05 Earphones utilize custom drivers for superb sound quality and a balanced weight distribution that ensures a snug, comfortable fit. ",
    },
    imgs: {
      img_1: "ME05B_1.png",
      img_2: "ME05B_2.png",
      img_3: "ME05_CORD.png",
    },
  },
  {
    id: 6,
    category: "earphones",
    title: "ME05 Gold",
    price: 299.0,
    info: {
      description_title: "Our Most Technically Sophisticated Wired Earphones",
      description:
        "Precision-machined from solid brass, the ME05 Earphones feature a distinctive form with ergonomic and elegant details, including laser etching and mirrored accents that reflect light. Our ME05 Earphones utilize custom drivers for superb sound quality and a balanced weight distribution that ensures a snug, comfortable fit. ",
    },
    imgs: {
      img_1: "ME05G_1.png",
      img_2: "ME05G_2.png",
      img_3: "ME05_CORD.png",
    },
  },
  {
    id: 7,
    category: "earphones",
    title: "MW07 PLUS",
    price: 399.0,
    info: {
      description_title:
        "Our Most Technically Sophisticated Noise-Cancelling Wireless Earphones",
      description:
        "Precision-machined from solid brass, the ME05 Earphones feature a distinctive form with ergonomic and elegant details, including laser etching and mirrored accents that reflect light. Our ME05 Earphones utilize custom drivers for superb sound quality and a balanced weight distribution that ensures a snug, comfortable fit. ",
    },
    imgs: {
      img_1: "MW07_PLUS_1.webp",
      img_2: "MW07_PLUS_2.webp",
      img_3: "MW07_PLUS_3.webp",
      img_4: "MW07_PLUS_4.webp",
      img_5: "MW07_PLUS_5.webp",
    },
  },
  {
    id: 8,
    category: "accessories",
    title: "MW07 PLUS Charging Case & Canvas Pouch ",
    price: 299.0,
    info: {
      description:
        "Hand-polished stainless steel charging case provides elegant mobility and holds 3 additional charges for a total of 40 hours of listening time for MW07 PLUS True Wireless Earphones.",
    },
    imgs: {
      img_1: "MW07_PLUS_Charging_Case_1.webp",
      img_2: "MW07_PLUS_Charging_Case_2.webp",
      img_3: "MW07_PLUS_Charging_Case_3.webp",
    },
  },
  {
    id: 9,
    category: "accessories",
    title: "Headphone Stand ",
    price: 99.0,
    info: {
      description:
        "Our stand is designed to display your headphones in the most elegant and utilitarian way, while maintaining the organization and beauty of your desk, studio or home. ",
    },
    imgs: {
      img_1: "Headphone_Stand_1.webp",
      img_2: "Headphone_Stand_2.webp",
    },
  },
  {
    id: 10,
    category: "accessories",
    title: "Auxiliary Cable Replacement ",
    price: 29.0,
    info: {
      description:
        "Our 3.5mm to 3.5mm Audio Cable includes a remote and microphone and is compatible with MW65, MW60, MW50, MH40 and MH30. Length is 1.2m.",
    },
    imgs: {
      img_1: "Auxiliary_Cable.webp",
    },
  },
];

export default productsData;

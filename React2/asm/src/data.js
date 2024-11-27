const Products = [
  {
    danhmuc: "Noodle",
    data: [
      {
        id: '1',
        name: "Beef Noodle Soup",
        price: 10.99,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/448996495_1045243073893667_2479797187813435811_n.png?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=eURZPX6FsQcQ7kNvgFF-Xuw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHFHEWj3hcVYfpMUEYTE_DycdN4vWecyvoek6osInQIMw&oe=66A852E1",
        description: "Savor tender beef slices and fresh vegetables in a rich, aromatic broth. This hearty soup is perfect for a satisfying and comforting meal."
      },
      {
        id: '2',
        name: "Chicken Lo Mein",
        price: 8.99,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/448902061_974420421086291_3219261011609264531_n.png?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=HV_P9Gl9VjkQ7kNvgG8Gx85&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFpa7s_dHmF21k_2PmmkUXt9gG34xrKyi-EacV5YnqY3Q&oe=66A83DB6",
        description: "Enjoy stir-fried noodles with juicy chicken and crisp vegetables, all coated in a savory sauce. A delicious and satisfying dish."
      },
      {
        id: '3',
        name: "Shrimp Chow Mein",
        price: 12.99,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/448878017_394646583606389_7983135565550103861_n.png?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=T84obCooKDoQ7kNvgFV33A9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFSQHGXm8yYIn54US_WN_951Pd7OLaNTkMJZU8aviniAA&oe=66A8569C",
        description: "Delight in plump shrimp and colorful vegetables tossed in flavorful chow mein noodles. A vibrant and tasty meal.Delicious chow mein with plump shrimp and a mix of colorful vegetables."
      },
      {
        id: '4',
        name: "Vegetable Noodle",
        price: 7.99,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/448842336_1209247457094280_4017131417605174429_n.png?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Tm9-I9MKglMQ7kNvgExvRkh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFmS5Vi8AQixyxul2OU5PUgFQzUxo3Xw_KuNRMlutq0NQ&oe=66A849C2",
        description: "A healthy mix of fresh, crunchy vegetables combined with delicious noodles. Perfect for a light and nutritious meal."
      },
    ],
  },
  {
    danhmuc: "Dimsum",
    data: [
      {
        id: '5',
        name: "Shrimp Dumplings",
        price: 5.99,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/448907343_1226606361832020_2910358050835510160_n.png?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=MEov8P4JRFQQ7kNvgF8UsBP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFcP-qCYS4qVTKDszCVChpFTHTNBALbdNfYaYk8q_ykoQ&oe=66B2FC43",
        description: "Enjoy delicate dumplings filled with fresh, juicy shrimp. A classic dim sum treat that’s light and flavorful."
      },
      {
        id: '6',
        name: "Pork Siu Mai",
        price: 6.99,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449757460_475220268443908_4340596993166100953_n.png?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=b-C_KV_UlUMQ7kNvgFy9iNS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFrKfPXTE7sv0BD_4tdXTXI_XwxZYTdOHvuBF0ov4dXzQ&oe=66B2EE5B",
        description: "Traditional siu mai with a savory pork filling, steamed to perfection. A must-try dim sum favorite."
      },
      {
        id: '7',
        name: "BBQ Pork Buns",
        price: 4.99,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449209320_1004738607455472_5027672739807891629_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=CqFKb4B-ArEQ7kNvgFpBxlz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGTVVBTxX5CHk64KuO3ve7jvvElETk5IEhMZxGibi8C_g&oe=66B2E347",
        description: "Steamed buns filled with sweet and savory BBQ pork. Soft, fluffy, and packed with flavor."
      },
      {
        id: '8',
        name: "Vegetable Spring Rolls",
        price: 3.99,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449411496_993850008731668_3411185362654346423_n.png?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=tQ6S5ZqrhwUQ7kNvgHaVvTV&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEOZomXzcxTqGrRokAnD-j3PZTlo0AoIYLAcP7vQZSNew&oe=66B2F86F",
        description: "Crispy spring rolls stuffed with a mix of fresh vegetables. Perfect for a light and crunchy appetizer."
      },
    ],
  },
  {
    danhmuc: "Desserts",
    data: [
      {
        id: '9',
        name: "Mango Pudding",
        price: 4.99,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449744505_1133599337945254_2885868231618221474_n.png?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=hDuqSNLil7kQ7kNvgG73GoC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QG-TOP4ftfOEM45VeB5TNT65k6xmgNObQoh4a4hR5_HOg&oe=66B5AADE",
        description: "A refreshing pudding made with ripe mangoes and a hint of sweetness. Smooth, creamy, and delightful."
      },
      {
        id: '10',
        name: "Sesame Balls",
        price: 3.99,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449974346_7760893600694912_4121882342417319195_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Yr0vxTq4EvMQ7kNvgF6pAea&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGOoXno73Pxxm3RK7d_LVS-RPhjslEF4eob9sS7j2btIA&oe=66B5C4C8",
        description: "Crispy sesame balls filled with sweet red bean paste. A perfect balance of texture and flavor."
      },
      {
        id: '11',
        name: "Egg Tarts",
        price: 4.49,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449222974_807877298140506_3542438330463270063_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=_DfUMgAcxUoQ7kNvgG3dCwc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHhoiXBXc56y_TDXn7WSZZYNsI5qUqY2QxGwp6Bh9rrUA&oe=66B59CBD",
        description: "Flaky pastry crust filled with creamy egg custard. A deliciously sweet and satisfying dessert."
      },
      {
        id: '12',
        name: "Red Bean Soup",
        price: 3.99,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449986611_457667203553884_3779274370218763736_n.png?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=dFpN9PRiPkcQ7kNvgFwfoVP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHgS9uU-_yJurArF_xA2jt3zGe4nB7apdoruf29u55LUw&oe=66B59683",
        description: "A warm and comforting soup made with sweet red beans. Ideal for a cozy and soothing treat."
      },
    ],
  },
  {
    danhmuc: "Drinks",
    data: [
      {
        id: '13',
        name: "Green Tea",
        price: 2.99,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449645142_387848967178934_2404562294310573423_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=oyWF0bDoIYoQ7kNvgEWrnFP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHT5GTL8FgPC5nOiVU2SZkeBvNWXbMffAbRNDKep7HB6g&oe=66B59853",
        description: "A refreshing cup of green tea brewed to perfection. Light, aromatic, and invigorating."
      },
      {
        id: '14',
        name: "Bubble Milk Tea",
        price: 4.99,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449693696_365816952916743_4560871169993061648_n.png?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=puzZaBVCxXEQ7kNvgGgmSC4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFvk78XJujN9rctwyODMmiMLalPdesOcmUaNqsz6gXfQA&oe=66B5AE46",
        description: "Creamy milk tea with chewy tapioca pearls. A popular and satisfying drink for any time."
      },
      {
        id: '15',
        name: "Lychee Juice",
        price: 3.49,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449958870_1035434084603121_1638487233335972650_n.png?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=HTgmavMUiMwQ7kNvgH9ohU5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEU8M3Bgzx-qbMjvpqrlUrGEx6raK2D4a-KGHXsjhHpiA&oe=66B5C06F",
        description: "A sweet and refreshing juice made from fresh lychees. Perfect for a tropical twist."
      },
      {
        id: '16',
        name: "Chrysanthemum Tea",
        price: 2.99,
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449520836_814291717470255_1965053077729697551_n.png?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Kyk4YsikmUIQ7kNvgFTMsHn&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEiQ0IiG34WwuI1wYm-LMLax5Sx8RIubjUvEZT32xhnNg&oe=66B5C321",
        description: "A soothing tea made from chrysanthemum flowers. Light, fragrant, and calming."
      },
    ],
  },
];

export default Products;

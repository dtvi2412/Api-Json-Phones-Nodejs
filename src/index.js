const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

const phones = [
  {
    id: 1,
    name: 'Iphone 13',
    price: 1000,
    category: 'Phone',
    img: 'https://image.cellphones.com.vn/220x/media/catalog/product/i/p/iphone_13-_pro-5_4_1.jpg',
  },
  {
    id: 2,
    name: 'Samsung Fold',
    price: 2000,
    category: 'Phone',
    img: 'https://image.cellphones.com.vn/200x/media/catalog/product/g/a/galaxy-z-fold2-5g-1.jpg',
  },
  {
    id: 3,
    name: 'Iphone X',
    price: 800,
    category: 'Phone',
    img: 'https://image.cellphones.com.vn/200x/media/catalog/product/i/p/iphone_x_256gb.jpg',
  },
  {
    id: 4,
    name: 'Samsung Galaxy S22',
    price: 1500,
    category: 'Phone',
    img: 'https://image.cellphones.com.vn/200x/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_burgundy_211119_3_1.jpg',
  },
  {
    id: 5,
    name: 'Apple MacBook Air M1 256GB 2020 I Chính hãng Apple Việt Nam ',
    price: 1499,
    category: 'Laptop',
    img: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/m/a/mac_air.jpg',
  },
  {
    id: 6,
    name: 'Laptop Huawei Matebook D14',
    price: 800,
    category: 'Laptop',
    img: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/l/a/laptop-huawei-matebook-d14-1.jpg',
  },
  {
    id: 7,
    name: 'Xiaomi Mi 11 Lite 5G',
    price: 350,
    category: 'Phone',
    img: 'https://image.cellphones.com.vn/220x/media/catalog/product/x/i/xiaomi-mi-11-lite-5g-2_10.png',
  },
  {
    id: 8,
    name: 'ASUS ROG Phone 5S',
    price: 999,
    category: 'Phone',
    img: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/a/s/asus-rog-phone-5_0002_gsmarena_001_3_1.jpg',
  },
  {
    id: 9,
    name: 'Laptop MSI Modern 14 B11MOU 1030VN',
    price: 650,
    category: 'Laptop',
    img: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/l/a/laptop-msi-modern-14-b11mou-1030vn-1.jpg',
  },
  {
    id: 10,
    name: 'Apple Watch Series 7 41mm (GPS)',
    price: 500,
    category: 'Watch',
    img: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/s/e/series_7-thumb_2.jpg',
  },
  {
    id: 11,
    name: 'Huawei Watch GT3 dây da',
    price: 295,
    category: 'Watch',
    img: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/w/a/watch_3_leather.jpg',
  },
  {
    id: 12,
    name: 'Samsung Galaxy Watch4 ',
    price: 320,
    category: 'Watch',
    img: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/s/m/sm-r870_003_1.jpg',
  },
  {
    id: 13,
    name: 'Xiaomi Mi Band 6 ',
    price: 48,
    category: 'Watch',
    img: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/t/e/template_dongho123-recovered_5.jpg',
  },
];

app.get('/api/phones', (req, res) => {
  res
    .status(200)
    .json({ status: true, message: 'Get data successfully!', data: phones });
});

app.listen(process.env.PORT, () =>
  console.log(`Api running with PORT ${process.env.PORT}`)
);

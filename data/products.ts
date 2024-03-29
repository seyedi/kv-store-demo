export type ProductType = {
  id: string
  name: string
  thumbnail: string
  price: string
}

export const products: ProductType[] = [
  {
    id: '1',
    name: 'Playstation 5 + Controller',
    price: '499.99',
    thumbnail: '/PS5.png',
  },
  {
    id: '2',
    name: 'iPhone 13 — 128GB',
    price: '396.99',
    thumbnail: '/iPhone13.png',
  },
  {
    id: '3',
    name: 'Dev hoddie in Black',
    price: '29.99',
    thumbnail: '/man-in-hoodie.png',
  },
  {
    id: '4',
    name: 'Airpods Pro — 1st Gen',
    price: '149.99',
    thumbnail: '/AirPods-Pro.png',
  },
]

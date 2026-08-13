const productos = [
  // ===================== APPLE =====================
  { id: 1, nombre: "iPhone 17 Pro", marca: "Apple", precio: 4500, almacenamiento: "256GB · 8GB RAM · 48MP", stock: 12, imagen: "/productos/iphone17pro.png" },
  { id: 2, nombre: "iPhone 17", marca: "Apple", precio: 3999, almacenamiento: "128GB · 8GB RAM · 48MP", stock: 10, imagen: "/productos/iphone17.png" },
  { id: 3, nombre: "iPhone 16 Pro Max", marca: "Apple", precio: 4200, almacenamiento: "512GB · 8GB RAM · 48MP", stock: 8, imagen: "/productos/iphone16max.png" },
  { id: 4, nombre: "iPhone 16 Pro", marca: "Apple", precio: 3800, almacenamiento: "256GB · 8GB RAM · 48MP", stock: 9, imagen: "/productos/iphone16pro.png" },
  { id: 5, nombre: "iPhone 16", marca: "Apple", precio: 3299, almacenamiento: "128GB · 6GB RAM · 48MP", stock: 15, imagen: "/productos/iphone16.png" },
  { id: 6, nombre: "iPhone 14 (Reacondicionado)", marca: "Apple", precio: 2999, almacenamiento: "128GB · 6GB RAM · 48MP", stock: 0, imagen: "/productos/iphone14Pro.png" },
  { id: 7, nombre: "iPhone 13 Pro Max", marca: "Apple", precio: 2300, almacenamiento: "256GB · 6GB RAM · 48MP", stock: 6, imagen: "/productos/iphone13max.png" },
  { id: 8, nombre: "iPhone 13", marca: "Apple", precio: 1900, almacenamiento: "128GB · 6GB RAM · 12MP", stock: 11, imagen: "/productos/iphone13.png" },
  { id: 9, nombre: "iPhone 12 Pro Max", marca: "Apple", precio: 1500, almacenamiento: "128GB · 6GB RAM · 12MP", stock: 7, imagen: "/productos/Iphone12ProMAX.png" },
  { id: 10, nombre: "iPhone 11 (Reacondicionado)", marca: "Apple", precio: 999, almacenamiento: "64GB · 4GB RAM · 12MP", stock: 14, imagen: "/productos/Iphone11.png" },

  // ===================== SAMSUNG =====================
  { id: 11, nombre: "Galaxy S25 Ultra", marca: "Samsung", precio: 4200, almacenamiento: "512GB · 12GB RAM · 200MP", stock: 5, imagen: "/productos/s25ultra.png" },
  { id: 12, nombre: "Galaxy S25+", marca: "Samsung", precio: 3500, almacenamiento: "256GB · 12GB RAM · 50MP", stock: 8, imagen: "/productos/s25+.png" },
  { id: 13, nombre: "Galaxy S25", marca: "Samsung", precio: 2999, almacenamiento: "256GB · 8GB RAM · 50MP", stock: 10, imagen: "/productos/S25.png" },
  { id: 14, nombre: "Galaxy S24 Ultra", marca: "Samsung", precio: 3800, almacenamiento: "512GB · 12GB RAM · 200MP", stock: 6, imagen: "/productos/S24ultra.png" },
  { id: 15, nombre: "Galaxy Z Fold 6", marca: "Samsung", precio: 5500, almacenamiento: "256GB · 12GB RAM · 50MP", stock: 3, imagen: "/productos/fold6.png" },
  { id: 16, nombre: "Galaxy Z Flip 6", marca: "Samsung", precio: 3600, almacenamiento: "256GB · 12GB RAM · 50MP", stock: 0, imagen: "/productos/GalaxyZFlip6.png" },
  { id: 17, nombre: "Galaxy A55", marca: "Samsung", precio: 1499, almacenamiento: "128GB · 8GB RAM · 50MP", stock: 20, imagen: "/productos/A55.png" },
  { id: 18, nombre: "Galaxy A35", marca: "Samsung", precio: 1199, almacenamiento: "128GB · 6GB RAM · 50MP", stock: 18, imagen: "/productos/A35.png" },
  { id: 19, nombre: "Galaxy A25 (Reacondicionado)", marca: "Samsung", precio: 899, almacenamiento: "128GB · 6GB RAM · 50MP", stock: 16, imagen: "/productos/A25.png" },
  { id: 20, nombre: "Galaxy A15 (Reacondicionado)", marca: "Samsung", precio: 699, almacenamiento: "128GB · 4GB RAM · 50MP", stock: 22, imagen: "/productos/A15.png" },

  // ===================== XIAOMI =====================
  { id: 21, nombre: "Xiaomi 14 Ultra", marca: "Xiaomi", precio: 3200, almacenamiento: "512GB · 16GB RAM · 50MP", stock: 7, imagen: "/productos/xiaomi.jpeg" },
  { id: 22, nombre: "Xiaomi 14", marca: "Xiaomi", precio: 2500, almacenamiento: "256GB · 12GB RAM · 50MP", stock: 9, imagen: "/productos/Xiaomi 14.png" },
  { id: 23, nombre: "Xiaomi 13T Pro", marca: "Xiaomi", precio: 2100, almacenamiento: "256GB · 12GB RAM · 50MP", stock: 8, imagen: "/productos/Xiaomi 13T Pro.png" },
  { id: 24, nombre: "Redmi Note 13 Pro+", marca: "Xiaomi", precio: 1499, almacenamiento: "256GB · 12GB RAM · 200MP", stock: 13, imagen: "/productos/Redmi Note 13 Pro+.png" },
  { id: 25, nombre: "Redmi Note 13 Pro", marca: "Xiaomi", precio: 1199, almacenamiento: "128GB · 8GB RAM · 200MP", stock: 15, imagen: "/productos/Redmi Note 13 Pro.png" },
  { id: 26, nombre: "Redmi Note 13", marca: "Xiaomi", precio: 899, almacenamiento: "128GB · 6GB RAM · 108MP", stock: 20, imagen: "/productos/Redmi Note 13.png" },
  { id: 27, nombre: "Redmi 13C", marca: "Xiaomi", precio: 599, almacenamiento: "128GB · 4GB RAM · 50MP", stock: 25, imagen: "/productos/Redmi 13C.png" },
  { id: 28, nombre: "Redmi 12 (Reacondicionado)", marca: "Xiaomi", precio: 549, almacenamiento: "128GB · 4GB RAM · 50MP", stock: 17, imagen: "/productos/Redmi 12.png" },
  { id: 29, nombre: "Redmi A3 (Reacondicionado)", marca: "Xiaomi", precio: 399, almacenamiento: "64GB · 3GB RAM · 8MP", stock: 19, imagen: "/productos/Redmi A3.png" },
  { id: 30, nombre: "Xiaomi MIX Fold 3", marca: "Xiaomi", precio: 4800, almacenamiento: "512GB · 16GB RAM · 50MP", stock: 0, imagen: "/productos/Xiaomi MIX Fold 3.png" },

  // ===================== POCO =====================
  { id: 31, nombre: "Poco X7 Pro", marca: "Poco", precio: 1299, almacenamiento: "256GB · 12GB RAM · 50MP", stock: 12, imagen: "/productos/Poco X7 Pro.png" },
  { id: 32, nombre: "Poco X7", marca: "Poco", precio: 999, almacenamiento: "256GB · 8GB RAM · 50MP", stock: 14, imagen: "/productos/Poco X7.png" },
  { id: 33, nombre: "Poco F6 Pro", marca: "Poco", precio: 1599, almacenamiento: "256GB · 12GB RAM · 50MP", stock: 9, imagen: "/productos/Poco F6 Pro.png" },
  { id: 34, nombre: "Poco F6", marca: "Poco", precio: 1299, almacenamiento: "256GB · 8GB RAM · 50MP", stock: 11, imagen: "/productos/Poco F6.png" },
  { id: 35, nombre: "Poco M6 Pro", marca: "Poco", precio: 899, almacenamiento: "256GB · 8GB RAM · 64MP", stock: 16, imagen: "/productos/Poco M6 Pro.png" },
  { id: 36, nombre: "Poco M6 (Reacondicionado)", marca: "Poco", precio: 699, almacenamiento: "128GB · 6GB RAM · 64MP", stock: 18, imagen: "/productos/Poco M6.png" },
  { id: 37, nombre: "Poco X6 Pro", marca: "Poco", precio: 1199, almacenamiento: "256GB · 12GB RAM · 64MP", stock: 10, imagen: "/productos/Poco X6 Pro.png" },
  { id: 38, nombre: "Poco F5 Pro", marca: "Poco", precio: 1399, almacenamiento: "256GB · 12GB RAM · 64MP", stock: 8, imagen: "/productos/Poco F5 Pro.png" },
  { id: 39, nombre: "Poco C65 (Reacondicionado)", marca: "Poco", precio: 499, almacenamiento: "128GB · 4GB RAM · 50MP", stock: 21, imagen: "/productos/Poco C65.png" },
  { id: 40, nombre: "Poco C55 (Reacondicionado)", marca: "Poco", precio: 449, almacenamiento: "128GB · 4GB RAM · 50MP", stock: 0, imagen: "/productos/Poco C55.png" },

  // ===================== MOTOROLA =====================
  { id: 41, nombre: "Edge 50 Ultra", marca: "Motorola", precio: 2999, almacenamiento: "512GB · 16GB RAM · 50MP", stock: 7, imagen: "/productos/Edge 50 Ultra.png" },
  { id: 42, nombre: "Edge 50 Pro", marca: "Motorola", precio: 2299, almacenamiento: "256GB · 12GB RAM · 50MP", stock: 9, imagen: "/productos/Edge 50 Pro.png" },
  { id: 43, nombre: "Edge 50", marca: "Motorola", precio: 1799, almacenamiento: "256GB · 8GB RAM · 50MP", stock: 12, imagen: "/productos/Edge 50.png" },
  { id: 44, nombre: "Razr 50 Ultra", marca: "Motorola", precio: 3800, almacenamiento: "512GB · 12GB RAM · 50MP", stock: 4, imagen: "/productos/Razr 50 Ultra.png" },
  { id: 45, nombre: "Moto G84", marca: "Motorola", precio: 999, almacenamiento: "256GB · 12GB RAM · 50MP", stock: 15, imagen: "/productos/Moto G84.png" },
  { id: 46, nombre: "Moto G64", marca: "Motorola", precio: 799, almacenamiento: "128GB · 8GB RAM · 50MP", stock: 17, imagen: "/productos/Moto G64.png" },
  { id: 47, nombre: "Moto G54", marca: "Motorola", precio: 699, almacenamiento: "128GB · 8GB RAM · 50MP", stock: 20, imagen: "/productos/Moto G54.png" },
  { id: 48, nombre: "Moto G34 (Reacondicionado)", marca: "Motorola", precio: 549, almacenamiento: "128GB · 4GB RAM · 50MP", stock: 22, imagen: "/productos/Moto G34.png" },
  { id: 49, nombre: "Moto G14 (Reacondicionado)", marca: "Motorola", precio: 449, almacenamiento: "128GB · 4GB RAM · 50MP", stock: 24, imagen: "/productos/Moto G14.png" },
  { id: 50, nombre: "Moto E14 (Reacondicionado)", marca: "Motorola", precio: 349, almacenamiento: "64GB · 2GB RAM · 13MP", stock: 0, imagen: "/productos/Moto E14.png" },
];

export default productos;
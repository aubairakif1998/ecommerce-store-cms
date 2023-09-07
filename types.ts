
// export interface Product {
//     id: string;
//     category: Category;
//     name: string;
//     price: string;
//     isFeatured: boolean;
//     size: Size;
//     color: Color;
//     images: Image[]
// };
// export interface Order {
//     id: string
//     storeId: string // Foreign Key to Store
//     store: Store
//     orderItems: OrderItem[] // Relation to OrderItem model
//     isPaid: boolean
//     phone: string
//     address: string
//     createdAt: Date
//     updatedAt: Date

// }

// export interface OrderItem {
//     id: string
//     orderId: string // Foreign Key to Order
//     order: Order
//     productId: string // Foreign Key to Product
//     product: Product

// }

// export interface Store {

//     id: string
//     name: string
//     userId: string
//     billboards: Billboard[]
//     categories: Category[]
//     products: Product[]
//     sizes: Size[]
//     colors: Color[]
//     orders: Order[]
//     createdAt: Date
//     updatedAt: Date



// };

// export interface Image {
//     id: string;
//     url: string;
// }

// export interface Billboard {
//     id: string;
//     label: string;
//     imageUrl: string;
// };

// export interface Category {
//     id: string;
//     name: string;
//     billboard: Billboard;
// };

// export interface Size {
//     id: string;
//     name: string;
//     value: string;
// };

// export interface Color {
//     id: string;
//     name: string;
//     value: string;
// };


export interface ProductData {
    id: string
    name: string
    price: string
    description: string
    paymentMethod: string
    category: string
    owner: string
};

export interface ProductId {
    id: string
};

export interface ProductCategory{
    category: string 
};

export interface ProductUpdate{
    id: string
    name: string
    price: string
    description: string
    paymentMethod: string
    category: string
};

export interface Product{
    name: string
    price: string
    description: string
    paymentMethod: string
    category: string
    owner: string
    id: string 
};
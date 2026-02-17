import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Product {
    id: bigint;
    collection?: bigint;
    name: string;
    tags: Array<string>;
    description: string;
    price: number;
    images: Array<string>;
}
export interface Collection {
    id: bigint;
    name: string;
}
export interface backendInterface {
    getCollections(): Promise<Array<Collection>>;
    getProductById(id: bigint): Promise<Product>;
    getProducts(collectionId: bigint | null, tag: string | null): Promise<Array<Product>>;
    init(): Promise<void>;
    submitContactMessage(name: string, email: string, message: string): Promise<string>;
}

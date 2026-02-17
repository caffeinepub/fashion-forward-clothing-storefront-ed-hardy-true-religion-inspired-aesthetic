const IMAGE_MAP: Record<string, string> = {
  floral_dress_1: '/assets/generated/product-graphic-tee.dim_1200x1200.png',
  floral_dress_2: '/assets/generated/product-graphic-tee.dim_1200x1200.png',
  winter_jacket_1: '/assets/generated/product-denim-jacket.dim_1200x1200.png',
  sneakers_1: '/assets/generated/product-trucker-hat.dim_1200x1200.png',
  denim_jacket: '/assets/generated/product-denim-jacket.dim_1200x1200.png',
  graphic_tee: '/assets/generated/product-graphic-tee.dim_1200x1200.png',
  embellished_jeans: '/assets/generated/product-embellished-jeans.dim_1200x1200.png',
  trucker_hat: '/assets/generated/product-trucker-hat.dim_1200x1200.png',
  buckle_belt: '/assets/generated/product-buckle-belt.dim_1200x1200.png',
  graphic_hoodie: '/assets/generated/product-graphic-hoodie.dim_1200x1200.png',
  // New themed product images
  angel_wings_hoodie_1: '/assets/generated/product-graphic-hoodie.dim_1200x1200.png',
  angel_wings_hoodie_2: '/assets/generated/product-graphic-hoodie.dim_1200x1200.png',
  demon_slayer_denim_1: '/assets/generated/product-triumph-denim-jacket.dim_1200x1200.png',
  balance_tee_1: '/assets/generated/product-triumph-graphic-tee.dim_1200x1200.png',
  guardian_angel_jeans_1: '/assets/generated/product-embellished-jeans.dim_1200x1200.png',
  temptation_skirt_1: '/assets/generated/product-embellished-jeans.dim_1200x1200.png',
  holy_grail_cap_1: '/assets/generated/product-triumph-buckle-belt.dim_1200x1200.png',
};

const FALLBACK_IMAGE = '/assets/generated/product-graphic-tee.dim_1200x1200.png';

export function getProductImagePath(imageName: string): string {
  return IMAGE_MAP[imageName] || FALLBACK_IMAGE;
}

export function getProductImages(imageNames: string[]): string[] {
  return imageNames.map(getProductImagePath);
}

const IMAGE_MAP: Record<string, string> = {
  // Original themed products (1-6) - corrected mappings
  angel_wings_hoodie: '/assets/generated/product-graphic-hoodie.dim_1200x1200.png',
  demon_slayer_denim: '/assets/generated/product-triumph-denim-jacket.dim_1200x1200.png',
  balance_tee: '/assets/generated/product-triumph-graphic-tee.dim_1200x1200.png',
  guardian_angel_jeans: '/assets/generated/product-embellished-jeans.dim_1200x1200.png',
  temptation_skirt: '/assets/generated/product-new-design-05.dim_1200x1200.png',
  holy_grail_cap: '/assets/generated/product-trucker-hat.dim_1200x1200.png',
  
  // New designs (products 7-22) - corrected to match backend keys
  shadow_fighter_jacket: '/assets/generated/product-new-design-01.dim_1200x1200.png',
  heavenly_balance_crewneck: '/assets/generated/product-new-design-02.dim_1200x1200.png',
  redemption_joggers: '/assets/generated/product-new-design-03.dim_1200x1200.png',
  nightmare_bomber_jacket: '/assets/generated/product-new-design-04.dim_1200x1200.png',
  virtuous_vixen_skirt: '/assets/generated/product-new-design-05.dim_1200x1200.png',
  sacred_heart_tee: '/assets/generated/product-new-design-06.dim_1200x1200.png',
  soul_searcher_hoodie: '/assets/generated/product-new-design-07.dim_1200x1200.png',
  illumination_leggings: '/assets/generated/product-new-design-08.dim_1200x1200.png',
  wings_of_change_denim: '/assets/generated/product-new-design-09.dim_1200x1200.png',
  twisted_fate_bodysuit: '/assets/generated/product-new-design-10.dim_1200x1200.png',
  enlightened_joggers: '/assets/generated/product-new-design-11.dim_1200x1200.png',
  shadow_chaser_skirt: '/assets/generated/product-new-design-12.dim_1200x1200.png',
  purity_pendant_tee: '/assets/generated/product-triumph-graphic-tee.dim_1200x1200.png',
  temptation_twill_pants: '/assets/generated/product-embellished-jeans.dim_1200x1200.png',
  virtue_seekers_crewneck: '/assets/generated/product-graphic-hoodie.dim_1200x1200.png',
  phoenix_rising_hoodie: '/assets/generated/product-denim-jacket.dim_1200x1200.png',
  
  // Living Off Experience themed products (products 23-33) - corrected keys
  living_off_experience_union_suit: '/assets/generated/product-living-off-experience-01.dim_1200x1200.png',
  living_off_experience_hoodie: '/assets/generated/product-living-off-experience-02.dim_1200x1200.png',
  loe_denim: '/assets/generated/product-living-off-experience-03.dim_1200x1200.png',
  resilience_joggers: '/assets/generated/product-living-off-experience-01.dim_1200x1200.png',
  journey_tee: '/assets/generated/product-living-off-experience-02.dim_1200x1200.png',
  experience_leggings: '/assets/generated/product-living-off-experience-03.dim_1200x1200.png',
  growth_crewneck: '/assets/generated/product-living-off-experience-01.dim_1200x1200.png',
  trailblazer_denim: '/assets/generated/product-living-off-experience-02.dim_1200x1200.png',
  persistence_hoodie: '/assets/generated/product-living-off-experience-03.dim_1200x1200.png',
  loe_skirt: '/assets/generated/product-living-off-experience-01.dim_1200x1200.png',
  transformation_tee: '/assets/generated/product-living-off-experience-02.dim_1200x1200.png',
};

const FALLBACK_IMAGE = '/assets/generated/product-graphic-tee.dim_1200x1200.png';

export function getProductImagePath(imageName: string): string {
  const path = IMAGE_MAP[imageName];
  
  if (!path && process.env.NODE_ENV === 'development') {
    console.warn(`[imagePaths] Unknown image key: "${imageName}". Using fallback.`);
  }
  
  return path || FALLBACK_IMAGE;
}

export function getProductImages(imageNames: string[]): string[] {
  if (!imageNames || imageNames.length === 0) {
    return [FALLBACK_IMAGE];
  }
  return imageNames.map(getProductImagePath);
}

export { FALLBACK_IMAGE };

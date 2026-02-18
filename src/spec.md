# Specification

## Summary
**Goal:** Fix missing and incorrect product images by correcting product image key mappings and aligning seeded product labels/descriptions with the photos shown.

**Planned changes:**
- Audit and correct the frontend product image key-to-asset mapping so each backend `Product.images` key resolves to the intended `/assets/generated/*.png` file and does not reuse unrelated product images.
- Ensure all frontend-referenced product image assets exist under `frontend/public/assets/generated` and load successfully on Shop and Product Details pages.
- Audit and update seeded backend catalog entries so each product’s name/description matches the garment depicted by its associated image keys, and each product only uses image keys supported by the frontend mapping.

**User-visible outcome:** The Shop grid and Product Details pages show the correct, non-broken product photos, and product labels/descriptions match the clothing depicted (no missing images, obvious duplicates, or mismatches).

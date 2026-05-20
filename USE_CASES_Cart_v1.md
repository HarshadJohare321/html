# Cart - Use Cases v1

## UC-CART-001: Add Item to Cart
**Actors:** Customer, Cart Service
**Flow:** Customer views product → Clicks add to cart → Quantity selected → Item added → Confirmation shown

## UC-CART-002: Modify Cart
**Actors:** Customer, Cart Service
**Flow:** Customer views cart → Updates quantity OR removes item → Total recalculated → Changes saved

## UC-CART-003: Apply Coupon
**Actors:** Customer, Promotions Service
**Flow:** Customer enters coupon code → System validates → Discount applied → Total updated

## UC-CART-004: Cart Persistence
**Actors:** Customer, Cart Service
**Flow:** Customer abandons cart → Returns within 7 days → Cart items still present → Can checkout

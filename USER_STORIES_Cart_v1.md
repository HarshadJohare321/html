# Cart - User Stories v1

### US-CART-001: Add to Cart
**As a** customer
**I want to** add items to my cart
**So that** I can purchase them

**Acceptance Criteria:**
- Add button on product page
- Quantity selector before adding
- Confirmation message shown
- Cart icon updates
- Continue shopping option

### US-CART-002: View Cart
**As a** customer
**I want to** view my cart items
**So that** I can review before checkout

**Acceptance Criteria:**
- List shows: Product, Price, Quantity, Subtotal
- Item count displayed
- Total price calculated
- Tax breakdown shown
- Delivery charges shown

### US-CART-003: Update Quantity
**As a** customer
**I want to** change item quantities
**So that** I can order exactly what I need

**Acceptance Criteria:**
- +/- buttons for quantity
- Direct input option
- Max 10 per item
- Total updates immediately
- Stock validation

### US-CART-004: Remove Item
**As a** customer
**I want to** remove items from cart
**So that** I only have what I need

**Acceptance Criteria:**
- Remove button per item
- Confirmation dialog
- Undo option (5 secs)
- Total recalculated

### US-CART-005: Apply Coupon
**As a** customer
**I want to** apply a coupon code
**So that** I get a discount

**Acceptance Criteria:**
- Coupon code input field
- Apply button
- Validation: Code exists, valid date, minimum order met
- Discount amount shown
- Error messages clear

### US-CART-006: Cart Expiry
**As the** system
**I want to** expire carts after 7 days
**So that** old orders don't process

**Acceptance Criteria:**
- Cart expires after 7 days
- Expiry notification sent
- Cart cleared
- Can save items to wishlist

# Ordering - User Stories v1

### US-ORD-001: Proceed to Checkout
**As a** customer
**I want to** proceed to checkout
**So that** I can purchase my items

**Acceptance Criteria:**
- Checkout button on cart page
- Multi-step process: Address → Payment → Review
- Step indicators shown
- Back button works
- Save for later option

### US-ORD-002: Select Delivery Address
**As a** customer
**I want to** select or enter delivery address
**So that** my order goes to right place

**Acceptance Criteria:**
- Saved addresses shown
- Add new address option
- Address validation (service area)
- Default address pre-selected
- Edit address option

### US-ORD-003: Select Payment Method
**As a** customer
**I want to** choose payment method
**So that** I pay in my preferred way

**Acceptance Criteria:**
- Options: Card, UPI, Wallet, Cash
- Card: Save for future
- UPI: Instant payment
- Wallet: Check balance
- Cash: Confirmation shown

### US-ORD-004: Review Order
**As a** customer
**I want to** review my order before confirming
**So that** I ensure everything is correct

**Acceptance Criteria:**
- Items with prices shown
- Address confirmed
- Payment method shown
- Total breakdown: Subtotal, Tax, Delivery, Discount
- Edit capability for items/address

### US-ORD-005: Place Order
**As a** customer
**I want to** place my order
**So that** my purchase is confirmed

**Acceptance Criteria:**
- Order button clearly visible
- Loading state shown
- Confirmation page displayed
- Order number shown
- Confirmation email sent

### US-ORD-006: Cancel Order
**As a** customer
**I want to** cancel my order
**So that** I don't have to buy

**Acceptance Criteria:**
- Cancellation allowed within 5 mins of order
- Reason selection required
- Refund initiated if paid
- Confirmation email sent
- Full refund for cancel window

### US-ORD-007: Track Order
**As a** customer
**I want to** track my order status
**So that** I know when it arrives

**Acceptance Criteria:**
- Status shown: Confirmed, Preparing, Dispatched, Out for Delivery, Delivered
- Real-time updates
- Delivery partner info if available
- Location tracking option
- Estimated delivery time

### US-ORD-008: Order History
**As a** customer
**I want to** see my past orders
**So that** I can reorder or reference

**Acceptance Criteria:**
- List of all orders
- Filter by: Date, Status
- Quick reorder button
- Order details accessible
- Invoice downloadable

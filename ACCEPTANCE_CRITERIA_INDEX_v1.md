# Acceptance Criteria Index v1

## Hyperlocal Grocery Marketplace - Kharadi, Pune

### AC-001: User Registration
- User can register with email/phone
- Password validation (min 8 chars, 1 uppercase, 1 number)
- Email verification required
- Phone OTP verification required
- Duplicate account prevention

### AC-002: User Login
- Login with email/password
- Forgot password functionality
- Session timeout after 30 mins
- Concurrent session limit: 3 devices
- Login audit trail maintained

### AC-003: Vendor Onboarding
- Vendor completes profile
- Store name, location, contact required
- Bank account verification
- PAN/GST number validation
- KYC documents uploaded
- Approval by admin within 48 hours

### AC-004: Product Catalog
- 5000+ products supported
- 5-level category hierarchy
- Search by name, category, price
- Filter by availability, ratings
- Real-time inventory sync

### AC-005: Shopping Cart
- Add/remove items
- Update quantities
- Calculate totals with tax
- Apply coupon codes
- Session persistence (7 days)

### AC-006: Checkout
- Multi-step checkout process
- Address selection/entry
- Payment method selection
- Order review before submit
- Confirmation email sent

### AC-007: Payment Processing
- Support: Card, UPI, Wallet
- PCI compliance maintained
- Payment timeout: 10 minutes
- Refund within 48 hours
- Transaction audit trail

### AC-008: Order Tracking
- Real-time order status
- Delivery partner location tracking
- Estimated delivery time
- Proof of delivery photo
- Order history available

### AC-009: Return/Refund
- Return request within 7 days
- Inspect items on return
- Refund within 5 business days
- Return shipping free
- Photo evidence required

### AC-010: Ratings & Reviews
- Rate 1-5 stars
- Written review optional
- Photos can be attached
- Verified purchase badge
- Helpful rating system

# Payment - User Stories v1

### US-PAY-001: Card Payment
**As a** customer
**I want to** pay by debit/credit card
**So that** I can complete my purchase

**Acceptance Criteria:**
- Card details entry form
- CVV validation
- Expiry date check
- 3D Secure if required
- Confirmation receipt

### US-PAY-002: UPI Payment
**As a** customer
**I want to** pay using UPI
**So that** payment is instant

**Acceptance Criteria:**
- UPI ID entry
- QR code display option
- Instant payment
- Confirmation within 30 secs

### US-PAY-003: Wallet Payment
**As a** customer
**I want to** pay from my wallet
**So that** I use saved funds

**Acceptance Criteria:**
- Balance display
- Partial payment option
- Wallet debit confirmation
- Transaction logged

### US-PAY-004: Save Payment Method
**As a** customer
**I want to** save my payment method
**So that** checkout is faster

**Acceptance Criteria:**
- Save option on checkout
- Method stored securely
- Display last 4 digits
- Delete option available

### US-PAY-005: Payment Failure
**As a** customer
**I want to** retry payment if it fails
**So that** I can complete purchase

**Acceptance Criteria:**
- Error message shown
- Retry button available
- Max 3 retries
- Alternative method option
- Chat support link

### US-PAY-006: Refund Status
**As a** customer
**I want to** track my refund
**So that** I know when money is received

**Acceptance Criteria:**
- Refund status: Initiated, Processing, Completed
- Processing time: 48-72 hours
- Original payment method refunded
- Notification sent

### US-PAY-007: Transaction History
**As a** customer
**I want to** see my payment history
**So that** I can verify transactions

**Acceptance Criteria:**
- List of all transactions
- Filter by date range
- Amount and status shown
- Invoice downloadable
- 12 months history

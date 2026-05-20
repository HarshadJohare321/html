# Inventory - User Stories v1

### US-INV-001: Stock Update
**As a** vendor
**I want to** update product stock
**So that** customers see availability

**Acceptance Criteria:**
- Manual stock entry
- Bulk stock upload
- Stock level validation (0-99999)
- Update history maintained

### US-INV-002: Reservation Management
**As the** system
**I want to** reserve stock when items are added to cart
**So that** overselling is prevented

**Acceptance Criteria:**
- Reserve on add to cart
- Release after 15 mins if unpaid
- Release on order cancellation
- Clear reservation status

### US-INV-003: Inventory Notifications
**As a** vendor
**I want to** get alerts when stock is low
**So that** I can reorder in time

**Acceptance Criteria:**
- Alert when stock < 20 units
- Alert when stock < 5 units
- SMS + Email alert
- Disable alerts option

### US-INV-004: Damage/Loss Adjustment
**As a** vendor
**I want to** adjust inventory for damaged items
**So that** records are accurate

**Acceptance Criteria:**
- Reason selection required
- Quantity to reduce
- Photo evidence optional
- Adjustment logged

### US-INV-005: Stock History
**As a** vendor
**I want to** see stock history
**So that** I can track changes

**Acceptance Criteria:**
- Daily stock changes shown
- Reason for each change
- Date and time logged
- 90 days history maintained

### US-INV-006: Stock Reconciliation
**As a** vendor
**I want to** reconcile physical stock with system
**So that** discrepancies are identified

**Acceptance Criteria:**
- Physical count entry
- System vs Physical comparison
- Differences highlighted
- Adjustment recommendations

### US-INV-007: Transfer Stock
**As a** vendor (multi-store)
**I want to** transfer stock between stores
**So that** inventory is balanced

**Acceptance Criteria:**
- Select from store
- Select to store
- Transfer quantity
- Transfer logged

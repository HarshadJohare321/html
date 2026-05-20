# Inventory - Use Cases v1

## UC-INV-001: Stock Management
**Actors:** Vendor, Inventory Service
**Flow:** Vendor updates stock → System validates → Availability adjusted → Product visible/hidden accordingly

## UC-INV-002: Reservation
**Actors:** Customer, Inventory Service
**Flow:** Customer adds item to cart → System reserves stock → Stock held for 15 mins → Released if unpaid

## UC-INV-003: Inventory Adjustment
**Actors:** Vendor, Adjustment Service
**Flow:** Vendor reports damage/loss → Stock adjusted → Reason logged → Confirmation sent

## UC-INV-004: Low Stock Alert
**Actors:** Vendor, Notification Service
**Flow:** Stock falls below threshold → Alert sent → Vendor can order more stock

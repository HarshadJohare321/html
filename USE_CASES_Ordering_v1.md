# Ordering - Use Cases v1

## UC-ORD-001: Checkout
**Actors:** Customer, Order Service
**Flow:** Customer views cart → Selects address → Chooses payment method → Reviews order → Submits → Order created

## UC-ORD-002: Order Confirmation
**Actors:** System, Email Service
**Flow:** Order created → Confirmation email sent → SMS notification sent → Customer receives details

## UC-ORD-003: Order Status Tracking
**Actors:** Customer, Order Service
**Flow:** Customer views order → Status shown → Updates displayed in real-time → Delivery time estimated

## UC-ORD-004: Order Cancellation
**Actors:** Customer, Order Service
**Flow:** Customer requests cancel → System checks eligibility → Cancels if allowed → Refund initiated → Notification sent

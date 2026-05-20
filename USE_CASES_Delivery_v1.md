# Delivery - Use Cases v1

## UC-DEL-001: Delivery Assignment
**Actors:** Delivery Manager, Delivery Partner, Order Service
**Flow:** Order ready → System finds nearest partner → Assignment sent → Partner accepts → Pickup scheduled

## UC-DEL-002: Pickup
**Actors:** Delivery Partner, Store
**Flow:** Partner arrives at store → Collects order → Scans QR → Photo taken → Departure recorded

## UC-DEL-003: In-Transit Tracking
**Actors:** GPS Service, Customer, Delivery Partner
**Flow:** Partner starts delivery → Real-time location shared → Customer tracks → ETA updated

## UC-DEL-004: Delivery Completion
**Actors:** Delivery Partner, Customer, Payment Service
**Flow:** Partner arrives → OTP shared → Customer verifies items → Confirms delivery → Photo taken → Payment settled

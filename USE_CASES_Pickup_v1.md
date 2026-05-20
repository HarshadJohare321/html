# Pickup - Use Cases v1

## UC-PICK-001: Schedule Pickup
**Actors:** Customer, Pickup Service
**Flow:** Customer selects pickup → Chooses time slot → Confirmation sent → Order marked as pickup

## UC-PICK-002: Confirm Pickup Readiness
**Actors:** Store, System
**Flow:** Store marks order ready → Customer notified → Customer has 2 hours to pick → Auto-cancel if not picked

## UC-PICK-003: Customer Arrives for Pickup
**Actors:** Customer, Store Staff
**Flow:** Customer arrives → Provides order ID → Staff verifies → Items handed over → Confirmation recorded

# Payment - Use Cases v1

## UC-PAY-001: Payment Initiation
**Actors:** Customer, Payment Gateway
**Flow:** Customer selects payment method → Redirected to gateway → Payment processed → Response received → Order updated

## UC-PAY-002: Payment Validation
**Actors:** Payment Service, Bank
**Flow:** Payment received → System validates → Confirmation sent → Transaction logged

## UC-PAY-003: Refund Processing
**Actors:** System, Bank
**Flow:** Refund request received → System processes → Amount transferred → Confirmation sent

## UC-PAY-004: Payment Failure Retry
**Actors:** Customer, Payment Gateway
**Flow:** Payment fails → Retry option offered → Attempt again → Success or failure notification

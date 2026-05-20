# Audit - Use Cases v1

## UC-AUD-001: User Activity Log
**Actors:** System, Audit Service
**Flow:** User performs action → Action logged with timestamp → User and details recorded → Available for review

## UC-AUD-002: Transaction Audit
**Actors:** System, Audit Service
**Flow:** Payment transaction → Details logged → Vendor commission logged → Settlement logged → All traceable

## UC-AUD-003: Audit Report
**Actors:** Admin, Audit Service
**Flow:** Admin requests audit report → System fetches logs → Report generated → Email sent to admin

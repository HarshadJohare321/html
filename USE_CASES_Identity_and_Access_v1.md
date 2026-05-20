# Identity and Access - Use Cases v1

## UC-IA-001: User Registration
**Actors:** Customer, Email Service
**Precondition:** User has valid email/phone
**Flow:** User enters details → System validates → Sends OTP → User verifies → Account created
**Postcondition:** Account active, ready to login

## UC-IA-002: User Login
**Actors:** Customer, Session Manager
**Precondition:** Account exists
**Flow:** User enters credentials → System validates → Session created → User directed to dashboard
**Postcondition:** User authenticated and logged in

## UC-IA-003: Password Reset
**Actors:** Customer, Email Service
**Precondition:** User has registered email
**Flow:** User requests reset → Email sent → User clicks link → New password set
**Postcondition:** Password updated, user can login

## UC-IA-004: Role Assignment
**Actors:** Admin, Role Service
**Precondition:** User registered
**Flow:** Admin assigns role → System updates permissions → User sees role-specific features
**Postcondition:** User has role-based access

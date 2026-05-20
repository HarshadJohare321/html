# Identity and Access - User Stories v1

### US-IA-001: Customer Registration
**As a** new user
**I want to** register with email and phone
**So that** I can access the marketplace

**Acceptance Criteria:**
- Registration form collects: Name, Email, Phone, Password
- Email and phone validation
- Password requirements enforced (8+ chars, 1 uppercase, 1 number)
- OTP sent to phone/email
- Account created after OTP verification

### US-IA-002: Social Login
**As a** user
**I want to** login using Google/Facebook
**So that** I don't need to remember another password

**Acceptance Criteria:**
- Google login option visible on login page
- Facebook login option visible
- Account created on first login
- Existing account linked on subsequent login

### US-IA-003: Two-Factor Authentication
**As a** security-conscious user
**I want to** enable 2FA
**So that** my account is more secure

**Acceptance Criteria:**
- 2FA toggle in settings
- SMS OTP supported
- Email OTP supported
- Backup codes provided

### US-IA-004: Session Management
**As a** user
**I want to** see active sessions
**So that** I can logout from other devices

**Acceptance Criteria:**
- List shows: Device, Location, Login time
- Logout button per session
- Auto-logout after 30 mins inactivity

### US-IA-005: Account Profile
**As a** user
**I want to** update my profile
**So that** my information is current

**Acceptance Criteria:**
- Edit: Name, Email, Phone
- Email change requires verification
- Phone change requires OTP
- Save changes successfully

### US-IA-006: Address Management
**As a** customer
**I want to** save multiple delivery addresses
**So that** I can quickly checkout

**Acceptance Criteria:**
- Add address: Home/Work/Other type
- Set default address
- Edit/delete addresses
- Max 5 saved addresses

### US-IA-007: Vendor Role
**As a** vendor
**I want to** register as seller
**So that** I can sell products

**Acceptance Criteria:**
- Vendor registration form
- KYC documents upload
- Bank details entry
- Admin approval process

### US-IA-008: Admin Dashboard
**As an** admin
**I want to** see all users and their roles
**So that** I can manage permissions

**Acceptance Criteria:**
- User list with filters
- Role assignment interface
- Deactivation capability
- Audit log of changes

# Finance - Use Cases v1

## UC-FIN-001: Vendor Settlement
**Actors:** Finance Service, Bank
**Flow:** Weekly settlement period → Orders calculated → Commission deducted → Amount transferred → Report generated

## UC-FIN-002: Payment Reconciliation
**Actors:** Finance Service, Payment Gateway
**Flow:** Transactions fetched → Compared with orders → Discrepancies identified → Manual review if needed

## UC-FIN-003: Financial Reporting
**Actors:** Admin, Finance Service
**Flow:** Admin requests report → System generates → Data exported → Email sent

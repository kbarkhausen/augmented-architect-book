Add email notifications for order status changes.

MUST:
- Use existing email service (@src/services/email.ts)
- Use existing templates (@src/templates/email/)
- Queue emails via existing job system

MUST NOT:
- Add new email provider
- Send emails synchronously
- Store email content in database

SHOULD:
- Log all email sends
- Handle failures gracefully
- Support email preferences (opt-out)
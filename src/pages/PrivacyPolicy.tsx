import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-8">
          <img
            src="/icon-transparent.png"
            alt="CarRevio"
            className="w-10 h-10 brightness-0 invert"
          />
          <span className="text-white font-semibold text-lg">CarRevio</span>
        </div>

        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-zinc-500 mb-12">Last updated: March 28, 2026</p>

        <div className="prose-custom space-y-10">
          {/* 1. Introduction */}
          <section>
            <h2>1. Introduction</h2>
            <p>
              CarRevio ("we", "us", "our") operates the CarRevio mobile application
              (available on iOS and Android), the CarRevio web dashboard
              (dashboard.carrevio.com), and the CarRevio website (carrevio.com),
              collectively referred to as the "Service".
            </p>
            <p>
              This Privacy Policy explains what personal data we collect, how we use
              it, who we share it with, and what rights you have regarding your data.
              By using our Service, you agree to the collection and use of
              information as described in this policy.
            </p>
            <p>
              CarRevio is a multi-tenant platform. Each auto service shop
              ("Tenant") that uses our platform operates in a fully isolated
              environment. Your data is never shared between Tenants.
            </p>
          </section>

          {/* 2. Data Controller */}
          <section>
            <h2>2. Data Controller</h2>
            <p>
              The data controller for your personal data is CarRevio, operated under
              the domain carrevio.com. For any data protection inquiries, contact us
              at{' '}
              <a href="mailto:privacy@carrevio.com">privacy@carrevio.com</a>.
            </p>
          </section>

          {/* 3. Personal Data We Collect */}
          <section>
            <h2>3. Personal Data We Collect</h2>

            <h3>3.1 Account Information</h3>
            <p>When you create an account, we collect:</p>
            <ul>
              <li>Full name (first and last name)</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Residential or service address</li>
              <li>Profile photo (optional)</li>
            </ul>
            <p>
              If you sign in using Google or Apple, we receive your name and email
              from those providers. We do not receive or store your Google or Apple
              password.
            </p>

            <h3>3.2 Vehicle Information</h3>
            <p>When you add vehicles to your digital garage, we collect:</p>
            <ul>
              <li>License plate number</li>
              <li>Vehicle Identification Number (VIN)</li>
              <li>Vehicle brand, model, and year of manufacture</li>
              <li>Fuel type</li>
              <li>Vehicle photos (optional)</li>
            </ul>

            <h3>3.3 Service & Appointment Data</h3>
            <p>When you use our Service, we collect:</p>
            <ul>
              <li>Appointment details (date, time, service type, location, customer notes)</li>
              <li>Work order information and status history</li>
              <li>Cost estimates (labor items, parts, pricing)</li>
              <li>Your approval or rejection of estimates</li>
              <li>Service reviews and ratings you submit</li>
            </ul>

            <h3>3.4 Communication Data</h3>
            <ul>
              <li>Chat messages exchanged between you and the service shop</li>
              <li>Images or files shared in chat conversations</li>
              <li>Notification history (titles, content, delivery status)</li>
            </ul>

            <h3>3.5 Device & Technical Data</h3>
            <ul>
              <li>Device platform (iOS or Android)</li>
              <li>Push notification token (Firebase Cloud Messaging)</li>
              <li>Authentication tokens (JSON Web Tokens)</li>
              <li>Language/locale preference</li>
            </ul>

            <h3>3.6 Staff Data (for shop employees)</h3>
            <p>
              If you are a staff member of a service shop using CarRevio, we also
              collect your assigned role (Admin, Reception, or Mechanic), active
              status, and location assignments.
            </p>
          </section>

          {/* 4. How We Use Your Data */}
          <section>
            <h2>4. How We Use Your Data</h2>
            <p>We use the collected data for the following purposes:</p>
            <ul>
              <li>
                <strong>Providing the Service:</strong> Creating and managing your
                account, processing appointments, tracking work orders, sending
                estimates, and facilitating communication with service shops.
              </li>
              <li>
                <strong>Authentication & Security:</strong> Verifying your identity,
                managing sessions, enforcing role-based access control, and ensuring
                tenant data isolation.
              </li>
              <li>
                <strong>Notifications:</strong> Sending push notifications about
                appointment confirmations, work order status changes, estimate
                submissions, and new chat messages.
              </li>
              <li>
                <strong>Auditing:</strong> Maintaining an audit log of actions
                performed within the platform for security, dispute resolution, and
                compliance purposes.
              </li>
              <li>
                <strong>Error Monitoring:</strong> Detecting, diagnosing, and fixing
                technical issues to improve platform stability (via Sentry, when
                enabled).
              </li>
              <li>
                <strong>Service Improvement:</strong> Analyzing aggregated,
                non-identifiable usage patterns to improve our platform.
              </li>
            </ul>
          </section>

          {/* 5. Legal Basis for Processing */}
          <section>
            <h2>5. Legal Basis for Processing (GDPR)</h2>
            <p>We process your personal data based on:</p>
            <ul>
              <li>
                <strong>Contract Performance (Art. 6(1)(b) GDPR):</strong> Processing
                necessary to provide the services you signed up for — account
                management, appointments, work orders, estimates, and communication.
              </li>
              <li>
                <strong>Legitimate Interest (Art. 6(1)(f) GDPR):</strong> Auditing,
                error monitoring, security enforcement, and platform improvement.
              </li>
              <li>
                <strong>Consent (Art. 6(1)(a) GDPR):</strong> Push notifications
                (you can opt out via device settings), optional profile photos, and
                optional vehicle photos.
              </li>
            </ul>
          </section>

          {/* 6. Third-Party Services */}
          <section>
            <h2>6. Third-Party Services & Data Sharing</h2>
            <p>
              We use the following third-party services to operate CarRevio. We do
              not sell your personal data to any third party.
            </p>

            <h3>6.1 Firebase (Google LLC)</h3>
            <ul>
              <li>
                <strong>Firebase Authentication:</strong> Handles user registration,
                login, email verification, and social sign-in (Google, Apple). Stores
                authentication credentials securely.
              </li>
              <li>
                <strong>Firebase Cloud Messaging (FCM):</strong> Delivers push
                notifications to your device. Requires a device token.
              </li>
            </ul>
            <p>
              Firebase processes data under Google's privacy policy:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy
              </a>
            </p>

            <h3>6.2 Hetzner Online GmbH</h3>
            <ul>
              <li>
                <strong>Server Hosting:</strong> Our backend servers and database are
                hosted on Hetzner infrastructure in the EU.
              </li>
              <li>
                <strong>Object Storage:</strong> Vehicle photos, work order
                attachments, inspection photos, and chat media are stored on
                Hetzner's S3-compatible object storage.
              </li>
            </ul>
            <p>
              Hetzner's data processing agreement and privacy information:{' '}
              <a
                href="https://www.hetzner.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.hetzner.com/legal/privacy-policy
              </a>
            </p>

            <h3>6.3 Sentry (Functional Software, Inc.)</h3>
            <p>
              When enabled, Sentry is used for error tracking and performance
              monitoring. It may receive technical error data including stack traces
              and request metadata. No personal user content is intentionally sent to
              Sentry.
            </p>

            <h3>6.4 PostgreSQL Database</h3>
            <p>
              All operational data (users, vehicles, appointments, work orders,
              estimates, chat messages, reviews) is stored in a PostgreSQL database
              hosted on our Hetzner infrastructure in the EU. Data is isolated per
              tenant.
            </p>
          </section>

          {/* 7. Device Permissions */}
          <section>
            <h2>7. Device Permissions</h2>
            <p>The CarRevio mobile app may request the following device permissions:</p>
            <ul>
              <li>
                <strong>Camera:</strong> Used to scan vehicle registration documents
                or take vehicle photos. Only accessed when you explicitly initiate a
                scan or photo capture.
              </li>
              <li>
                <strong>Photo Library:</strong> Used to select existing photos of
                your vehicle or registration documents from your device gallery.
              </li>
              <li>
                <strong>Push Notifications:</strong> Used to send you real-time
                updates about appointments, work orders, estimates, and messages. You
                can disable this in your device settings at any time.
              </li>
            </ul>
            <p>
              All permissions are optional. The core functionality of the app works
              without camera or photo library access. Denying push notifications
              means you will not receive real-time alerts.
            </p>
          </section>

          {/* 8. Data Storage & Security */}
          <section>
            <h2>8. Data Storage & Security</h2>

            <h3>8.1 Server-Side Storage</h3>
            <ul>
              <li>All data is stored on servers located in the European Union (Hetzner, Germany).</li>
              <li>All API communication is encrypted in transit via HTTPS/TLS.</li>
              <li>Database access is restricted to our application servers only.</li>
              <li>File storage uses presigned URLs with time-limited access.</li>
              <li>Passwords are managed by Firebase and never stored in our database.</li>
            </ul>

            <h3>8.2 Mobile App Local Storage</h3>
            <ul>
              <li>
                The app uses a local SQLite database to cache data (user profile,
                vehicles, appointments) for offline access and performance.
              </li>
              <li>Language preferences are stored via device shared preferences.</li>
              <li>All local data is cleared when you log out.</li>
            </ul>

            <h3>8.3 Dashboard (Web)</h3>
            <ul>
              <li>
                The web dashboard does not use cookies for tracking. Authentication
                is handled via JWT tokens in the Authorization header.
              </li>
              <li>Firebase SDK manages session state using browser local storage.</li>
              <li>API responses are cached in memory only (not persisted to disk).</li>
            </ul>

            <h3>8.4 Multi-Tenant Isolation</h3>
            <p>
              Every record in our database is associated with a tenant ID. All
              queries are filtered by tenant, and the tenant ID is extracted
              server-side from your authentication token (it cannot be manipulated by
              the client). This ensures complete data isolation between different
              service shops.
            </p>
          </section>

          {/* 9. Data Retention */}
          <section>
            <h2>9. Data Retention</h2>
            <ul>
              <li>
                <strong>Account Data:</strong> Retained for as long as your account
                is active. When you delete your account, your personal data is
                permanently removed from our systems.
              </li>
              <li>
                <strong>Service Records:</strong> Appointment history, work orders,
                and estimates are retained for the duration of the service shop's
                subscription to provide historical service records.
              </li>
              <li>
                <strong>Chat Messages:</strong> Retained for the duration of the
                associated work order and service relationship.
              </li>
              <li>
                <strong>Audit Logs:</strong> Retained for up to 2 years for security
                and compliance purposes.
              </li>
              <li>
                <strong>Push Notification Tokens:</strong> Deactivated when you log
                out or uninstall the app. Inactive tokens are periodically cleaned
                up.
              </li>
            </ul>
          </section>

          {/* 10. Your Rights */}
          <section>
            <h2>10. Your Rights (GDPR)</h2>
            <p>
              Under the General Data Protection Regulation (GDPR), you have the
              following rights:
            </p>
            <ul>
              <li>
                <strong>Right of Access (Art. 15):</strong> You can request a copy of
                all personal data we hold about you.
              </li>
              <li>
                <strong>Right to Rectification (Art. 16):</strong> You can update
                your personal information directly in the app (name, phone, address)
                or request corrections by contacting us.
              </li>
              <li>
                <strong>Right to Erasure (Art. 17):</strong> You can delete your
                account from the app settings. This permanently removes your personal
                data. Note: some data may be retained in anonymized form in service
                records for the shop's operational needs.
              </li>
              <li>
                <strong>Right to Data Portability (Art. 20):</strong> You can request
                your data in a structured, machine-readable format.
              </li>
              <li>
                <strong>Right to Restrict Processing (Art. 18):</strong> You can
                request that we limit how we process your data.
              </li>
              <li>
                <strong>Right to Object (Art. 21):</strong> You can object to
                processing based on legitimate interests.
              </li>
              <li>
                <strong>Right to Withdraw Consent:</strong> Where processing is based
                on consent (push notifications, optional photos), you can withdraw
                consent at any time without affecting the lawfulness of prior
                processing.
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:privacy@carrevio.com">privacy@carrevio.com</a>. We
              will respond within 30 days.
            </p>
          </section>

          {/* 11. Children's Privacy */}
          <section>
            <h2>11. Children's Privacy</h2>
            <p>
              Our Service is not directed at individuals under the age of 16. We do
              not knowingly collect personal data from children. If you become aware
              that a child has provided us with personal data, please contact us at{' '}
              <a href="mailto:privacy@carrevio.com">privacy@carrevio.com</a> and we
              will take steps to delete such information.
            </p>
          </section>

          {/* 12. International Data Transfers */}
          <section>
            <h2>12. International Data Transfers</h2>
            <p>
              Our servers and database are located in the European Union (Germany).
              Firebase services (Google) may process some authentication and
              notification data in data centers outside the EU. Google provides
              Standard Contractual Clauses (SCCs) for such transfers in compliance
              with GDPR.
            </p>
          </section>

          {/* 13. Changes */}
          <section>
            <h2>13. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you
              of any material changes by posting the updated policy on this page and
              updating the "Last updated" date. For significant changes, we may also
              notify you via push notification or email.
            </p>
          </section>

          {/* 14. Contact */}
          <section>
            <h2>14. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <ul>
              <li>
                Email:{' '}
                <a href="mailto:privacy@carrevio.com">privacy@carrevio.com</a>
              </li>
              <li>Website: carrevio.com</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <p className="text-sm text-zinc-700">
            &copy; {new Date().getFullYear()} CarRevio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-zinc-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-zinc-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .prose-custom h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
        }
        .prose-custom h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .prose-custom p {
          color: #a1a1aa;
          line-height: 1.75;
          margin-bottom: 0.75rem;
        }
        .prose-custom ul {
          list-style: disc;
          padding-left: 1.5rem;
          color: #a1a1aa;
          margin-bottom: 0.75rem;
        }
        .prose-custom li {
          margin-bottom: 0.375rem;
          line-height: 1.65;
        }
        .prose-custom a {
          color: #3b82f6;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .prose-custom a:hover {
          color: #60a5fa;
        }
        .prose-custom strong {
          color: #e4e4e7;
        }
      `}</style>
    </div>
  )
}

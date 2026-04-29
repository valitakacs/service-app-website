import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'

export default function TermsOfService() {
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

        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-zinc-500 mb-12">Last updated: March 28, 2026</p>

        <div className="prose-custom space-y-10">
          {/* 1. Acceptance */}
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the CarRevio platform — including the mobile
              application, web dashboard, and website (collectively the "Service") —
              you agree to be bound by these Terms of Service ("Terms"). If you do
              not agree to these Terms, do not use the Service.
            </p>
            <p>
              These Terms apply to all users of the Service, including auto service
              shop owners ("Tenants"), their staff members, and end-user customers.
            </p>
          </section>

          {/* 2. Description */}
          <section>
            <h2>2. Description of Service</h2>
            <p>
              CarRevio is a multi-tenant auto service management platform that
              provides:
            </p>
            <ul>
              <li>
                <strong>For Service Shops (Tenants):</strong> A web dashboard to
                manage appointments, work orders, cost estimates, staff, customers,
                real-time chat, service catalogs, and multi-location operations.
              </li>
              <li>
                <strong>For Customers:</strong> A mobile application (iOS and
                Android) to book service appointments, manage a vehicle garage, track
                work order progress, approve or decline estimates, chat with the
                service team, and leave reviews.
              </li>
            </ul>
          </section>

          {/* 3. Account Registration */}
          <section>
            <h2>3. Account Registration</h2>
            <ul>
              <li>
                You must provide accurate and complete information when creating an
                account. You are responsible for maintaining the accuracy of your
                information.
              </li>
              <li>
                You may register using email/password, Google Sign-In, or Apple
                Sign-In.
              </li>
              <li>
                You must verify your email address before accessing the full Service.
              </li>
              <li>
                You are responsible for safeguarding your account credentials. You
                agree to notify us immediately of any unauthorized access to your
                account.
              </li>
              <li>
                You must be at least 16 years old to create an account.
              </li>
            </ul>
          </section>

          {/* 4. Customer-Specific Terms */}
          <section>
            <h2>4. Customer-Specific Terms</h2>
            <h3>4.1 Vehicle Management</h3>
            <ul>
              <li>
                You may freely add vehicles to your digital garage with accurate
                information (license plate, VIN, brand, model, year, fuel type).
              </li>
              <li>
                You may not delete a vehicle directly. Vehicle deletion requires
                submitting a request to the service shop for approval.
              </li>
              <li>
                You may not edit vehicle data if the vehicle has an active
                appointment. You must cancel the appointment first, then submit a
                change request to the service shop.
              </li>
            </ul>

            <h3>4.2 Appointments</h3>
            <ul>
              <li>Booking an appointment does not guarantee service until confirmed by the shop.</li>
              <li>The service shop may confirm, reschedule, or cancel your appointment.</li>
              <li>Appointment details (date, time, service type) are subject to the shop's availability.</li>
            </ul>

            <h3>4.3 Estimates</h3>
            <ul>
              <li>
                Cost estimates sent by the service shop include itemized labor and
                parts costs. You may approve or decline an estimate.
              </li>
              <li>
                Approving an estimate constitutes your consent for the service shop
                to proceed with the described work at the quoted price.
              </li>
              <li>
                Prices in estimates are in the currency specified (default: RON) and
                may include or exclude VAT as indicated.
              </li>
            </ul>

            <h3>4.4 Reviews</h3>
            <ul>
              <li>You may submit one review per completed appointment.</li>
              <li>Reviews must be honest and based on your actual experience.</li>
              <li>
                We reserve the right to remove reviews that contain abusive language,
                personal attacks, or fraudulent content.
              </li>
            </ul>
          </section>

          {/* 5. Tenant-Specific Terms */}
          <section>
            <h2>5. Tenant (Service Shop) Terms</h2>
            <h3>5.1 Shop Configuration</h3>
            <ul>
              <li>
                As a Tenant, you are responsible for configuring your shop's business
                hours, service catalog, pricing, staff, and locations accurately.
              </li>
              <li>
                You are responsible for the actions of all staff members you add to
                your account.
              </li>
            </ul>

            <h3>5.2 Staff Roles</h3>
            <ul>
              <li>
                <strong>Admin:</strong> Full access to all features including staff
                management, settings, and all operational data.
              </li>
              <li>
                <strong>Reception:</strong> Access to appointments, work orders,
                clients, chat, and estimates.
              </li>
              <li>
                <strong>Mechanic:</strong> Access to assigned work orders and related
                chat conversations only.
              </li>
            </ul>

            <h3>5.3 Data Responsibility</h3>
            <ul>
              <li>
                Tenants act as data controllers for their customers' data within the
                scope of services they provide. CarRevio acts as a data processor.
              </li>
              <li>
                Tenants must not use customer data for purposes other than providing
                the auto service for which the customer engaged them.
              </li>
            </ul>
          </section>

          {/* 6. Communication */}
          <section>
            <h2>6. Communication</h2>
            <ul>
              <li>
                The in-app chat feature facilitates communication between customers
                and service shop staff regarding active work orders.
              </li>
              <li>
                Chat messages are stored and associated with specific work orders.
                Both parties can view the full conversation history.
              </li>
              <li>
                Push notifications are used for service updates (appointment
                confirmations, status changes, estimates, new messages). You may
                disable push notifications in your device settings.
              </li>
              <li>
                Users agree not to use the communication features for spam, harassment,
                or any illegal purposes.
              </li>
            </ul>
          </section>

          {/* 7. Intellectual Property */}
          <section>
            <h2>7. Intellectual Property</h2>
            <p>
              The CarRevio name, logo, software, design, and all related materials
              are the intellectual property of CarRevio. You may not copy, modify,
              distribute, or create derivative works of our Service without explicit
              written permission.
            </p>
            <p>
              Content you upload (vehicle photos, chat messages, reviews) remains
              your property. By uploading content, you grant us a limited license to
              store, display, and transmit it as necessary to provide the Service.
            </p>
          </section>

          {/* 8. Prohibited Uses */}
          <section>
            <h2>8. Prohibited Uses</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to other users' accounts or data</li>
              <li>Attempt to access data belonging to other Tenants</li>
              <li>Reverse-engineer, decompile, or disassemble any part of the Service</li>
              <li>Upload malicious content, viruses, or harmful code</li>
              <li>Use automated tools (bots, scrapers) to access the Service</li>
              <li>Impersonate another person or entity</li>
              <li>Submit false vehicle information, fraudulent reviews, or misleading content</li>
            </ul>
          </section>

          {/* 9. Limitation of Liability */}
          <section>
            <h2>9. Limitation of Liability</h2>
            <p>
              CarRevio provides a platform connecting auto service shops with their
              customers. We are not a party to the service agreement between Tenants
              and their customers.
            </p>
            <ul>
              <li>
                We are not responsible for the quality, safety, or legality of auto
                repair services provided by Tenants.
              </li>
              <li>
                We are not responsible for the accuracy of estimates, pricing, or
                service descriptions set by Tenants.
              </li>
              <li>
                The Service is provided "as is" without warranties of any kind,
                express or implied.
              </li>
              <li>
                To the maximum extent permitted by law, CarRevio shall not be liable
                for any indirect, incidental, special, consequential, or punitive
                damages arising from your use of the Service.
              </li>
            </ul>
          </section>

          {/* 10. Account Termination */}
          <section>
            <h2>10. Account Termination</h2>
            <ul>
              <li>
                <strong>By You:</strong> You may delete your account at any time from
                the app settings. Account deletion permanently removes your personal
                data from our systems.
              </li>
              <li>
                <strong>By Us:</strong> We reserve the right to suspend or terminate
                accounts that violate these Terms, engage in fraudulent activity, or
                are inactive for an extended period, with reasonable notice where
                possible.
              </li>
            </ul>
          </section>

          {/* 11. Availability */}
          <section>
            <h2>11. Service Availability</h2>
            <p>
              We strive to maintain high availability of the Service but do not
              guarantee uninterrupted access. The Service may be temporarily
              unavailable due to maintenance, updates, or circumstances beyond our
              control. We will provide reasonable notice for planned maintenance when
              possible.
            </p>
          </section>

          {/* 12. Modifications */}
          <section>
            <h2>12. Modifications to Terms</h2>
            <p>
              We may update these Terms from time to time. Material changes will be
              communicated via the app, email, or by posting the updated Terms on
              this page. Continued use of the Service after changes constitutes your
              acceptance of the updated Terms.
            </p>
          </section>

          {/* 13. Governing Law */}
          <section>
            <h2>13. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws
              of Romania and the European Union. Any disputes arising from these
              Terms shall be resolved in the competent courts of Romania.
            </p>
          </section>

          {/* 14. Contact */}
          <section>
            <h2>14. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul>
              <li>
                Email:{' '}
                <a href="mailto:legal@carrevio.com">legal@carrevio.com</a>
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

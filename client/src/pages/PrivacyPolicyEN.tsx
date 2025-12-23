import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyEN() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </button>

          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-sm max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p>
                PA & ERS INDUSTRY ("we", "us", "our" or "the Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
              <p>We collect information in several ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Information you provide:</strong> Name, email, phone number, address, and other details when you complete contact forms or inquiries.</li>
                <li><strong>Automatic information:</strong> IP address, browser type, pages visited, time spent, and other website usage data.</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and requests</li>
                <li>Provide claim evaluation services</li>
                <li>Improve our website and services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and illegal activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Information Sharing</h2>
              <p>
                We do not sell, rent, or share your personal information with third parties without your consent, except when necessary to provide our services or comply with the law. We may share information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who help us operate our business</li>
                <li>Insurance companies when necessary to process claims</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Information Security</h2>
              <p>
                We implement technical, administrative, and physical security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">6. User Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Revoke your consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies to enhance your experience. You can control cookies through your browser settings. Disabling cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We recommend reviewing their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">9. Policy Changes</h2>
              <p>
                We may update this Privacy Policy at any time. Changes will be effective when posted on the website. Your continued use of the website constitutes acceptance of the changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email: office@pa-ers-industry.com</li>
                <li>Phone: 630-538-4741</li>
                <li>Address: 1650 N Randall Rd, Aurora, Illinois 60506</li>
              </ul>
            </section>

            <section>
              <p className="text-sm text-muted-foreground mt-8">
                Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

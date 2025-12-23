import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsEN() {
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

          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-sm max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Website Use</h2>
              <p>You agree to use this website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the website.</p>
              <p>Specifically, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Harass or cause distress or anxiety to any person</li>
                <li>Transmit obscene or offensive content</li>
                <li>Disrupt the normal flow of dialogue within the website</li>
                <li>Attempt to gain unauthorized access to computer systems</li>
                <li>Collect or track personal information of others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">3. Website Content</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of PA & ERS INDUSTRY or its content suppliers and is protected by international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Evaluation Services</h2>
              <p>
                Evaluations provided by PA & ERS INDUSTRY are estimates based on available information. They do not constitute legal advice or guarantees of results. Each case is unique and results may vary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
              <p>
                PA & ERS INDUSTRY shall not be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, even if advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Disclaimer of Warranties</h2>
              <p>
                This website is provided "as is" without warranties of any kind, express or implied. PA & ERS INDUSTRY does not warrant that the site is free from errors, viruses, or harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">7. External Links</h2>
              <p>
                This website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Modification of Terms</h2>
              <p>
                PA & ERS INDUSTRY reserves the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">9. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of the State of Illinois, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
              <p>
                If you have questions about these Terms of Service, please contact us at:
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

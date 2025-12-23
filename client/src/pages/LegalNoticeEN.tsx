import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalNoticeEN() {
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

          <h1 className="text-4xl font-bold mb-8">Legal Notice</h1>

          <div className="prose prose-sm max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Identification</h2>
              <p>
                Company Name: PA & ERS INDUSTRY
              </p>
              <p>
                Address: 1650 N Randall Rd, Aurora, Illinois 60506, United States
              </p>
              <p>
                Phone: 630-538-4741
              </p>
              <p>
                Email: office@pa-ers-industry.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Business Purpose</h2>
              <p>
                PA & ERS INDUSTRY is a company of certified public adjusters that provides insurance claim evaluation services, negotiation with insurance companies, and insurance policy advisory services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">3. Intellectual Property</h2>
              <p>
                All contents, designs, texts, graphics, images, videos, and other materials available on this website are the property of PA & ERS INDUSTRY or are duly authorized. Their reproduction, distribution, or transmission without express authorization is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Content Responsibility</h2>
              <p>
                PA & ERS INDUSTRY strives to keep the website information updated and accurate. However, we do not guarantee the accuracy, completeness, or timeliness of the contents. The user uses the information at their own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Professional Services</h2>
              <p>
                The evaluation and advisory services provided by PA & ERS INDUSTRY are professional estimates based on available information. They do not constitute guarantees of specific results. Final compensation will depend on factors beyond our control, including insurance company decisions and judicial authorities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Legal Compliance</h2>
              <p>
                PA & ERS INDUSTRY operates in compliance with all applicable laws and regulations of the State of Illinois and U.S. federal laws. Our adjusters possess the required certifications and licenses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Protection</h2>
              <p>
                Personal information collected through this website is treated in accordance with our Privacy Policy. Consult that policy for more information about how we protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Limitation of Liability</h2>
              <p>
                PA & ERS INDUSTRY shall not be liable for direct, indirect, incidental, special, or consequential damages arising from the use or inability to use this website or the services provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">9. External Links</h2>
              <p>
                This website may contain links to third-party websites. PA & ERS INDUSTRY is not responsible for the content, availability, or practices of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">10. Modifications</h2>
              <p>
                PA & ERS INDUSTRY reserves the right to modify this Legal Notice at any time. Changes will be effective when posted on the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">11. Governing Law</h2>
              <p>
                This Legal Notice is governed by the laws of the State of Illinois, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact</h2>
              <p>
                For any inquiries related to this Legal Notice, please contact us at:
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

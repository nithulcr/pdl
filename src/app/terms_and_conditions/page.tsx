

import Header from "../components/Header";

import Footer from "../components/Footer";




export const metadata = {
  title: 'Privacy Policy | HOST ON PDL',

};

export default function terms_and_conditions() {

  return (
    <>
      <Header />

      <section className="py-14 lg:py-24 bg-[var(--background2)] relative  overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-3 lg:px-6 pt-10">
          <h1 className="text-3xl lg:text-5xl font-semibold mb-6">Terms and Conditions</h1>
          <p className="text-sm text-gray-500 mb-8">
            Last updated: 29 March 2026
          </p>

          <section className="space-y-4">
            <p>
              Welcome to HOST ON PDL. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to comply with and be bound by these terms. If you do not agree, please do not use our services.
            </p>
            <p className="mb-6">
              At <strong>HOST ON PDL</strong>, we provide digital services and real estate opportunities subject to the following terms, which may be updated by us from time to time without prior notice.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">1. Services Provided</h2>

            <h3 className="font-semibold mt-4 mb-2">a. Digital Services</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Web development and design</li>
              <li>Lead generation and digital marketing solutions</li>
              <li>Consulting and tech support</li>
            </ul>

            <h3 className="font-semibold mt-4 mb-2">b. Real Estate Opportunities</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Property listings and informational updates</li>
              <li>Connecting users with real estate inquiries</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">2. User Obligations</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>You must provide accurate and truthful information through our forms.</li>
              <li>You agree not to use the website for any unlawful purpose or prohibited activity.</li>
              <li>You may not attempt to disrupt or compromise the security of this website.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">3. Intellectual Property</h2>
            <p className="mb-4">
              All content, logos, trademarks, and graphics on this website are the property of HOST ON PDL unless stated otherwise. You may not reproduce, distribute, or modify any content without our prior written consent.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">4. Limitation of Liability</h2>
            <p className="mb-4">
              HOST ON PDL provides its services &quot;as is&quot; and &quot;as available.&quot; We do not guarantee that our digital services or real estate information will be entirely error-free or uninterrupted. We are not liable for any direct or indirect damages resulting from your use of this site.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">5. Third-Party Links</h2>
            <p className="mb-4">
              Our website may contain links to external third-party websites for your convenience. We do not endorse or assume responsibility for the content, accuracy, or business practices of these external sites.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">6. Termination of Use</h2>
            <p className="mb-4">
              We reserve the right to restrict or terminate your access to our website and services at any time, without notice, for behavior that violates these terms or is harmful to our operations.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">7. Governing Law</h2>
            <p className="mb-4">
              These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Kannur, Kerala.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">8. Changes to These Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Your continued use of the website following any changes signifies your acceptance of the updated Terms and Conditions.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">9. Contact Us</h2>
            <p>If you have any questions or concerns regarding these Terms and Conditions, please contact us at:</p>
            <p className="mt-2">
              <strong>HOST ON PDL</strong>
              <br />
              Kannur, Kerala, India
              <br />
              Email: rajup@hostonpdl.com
              <br />
              Phone: +91 9846 272 623
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}

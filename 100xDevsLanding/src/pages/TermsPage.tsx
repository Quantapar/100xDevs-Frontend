export function TermsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 lg:py-20 lg:pb-32">
      <h1 className="text-3xl lg:text-4xl font-black text-[#04102d] mb-6">Terms & Conditions</h1>
      
      <div className="flex flex-col gap-6 text-[15px] lg:text-[17px] font-semibold text-[#04102d]/80 leading-relaxed mb-12">
        <p>
          Welcome, if you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern 100xDevs relationship with you in relation to this website.
        </p>
        <p>
          The term "100xDevs" or "us" or "we" refers to the owner of the website. The term "you" refers to the user or viewer of our website.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        
        <section>
          <h2 className="text-2xl font-black text-[#04102d] mb-4">Use of This Website</h2>
          <ul className="list-disc pl-5 flex flex-col gap-3 text-[15px] lg:text-[17px] font-semibold text-[#04102d]/80">
            <li>The content of this website is for general information and use only and is subject to change without notice.</li>
            <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials on this website for any particular purpose.</li>
            <li>You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
            <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.</li>
            <li>It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#04102d] mb-4">Copyright & Trademarks</h2>
          <ul className="list-disc pl-5 flex flex-col gap-3 text-[15px] lg:text-[17px] font-semibold text-[#04102d]/80">
            <li>This website contains material which is owned by or licensed to us, including design, layout, graphics and appearance.</li>
            <li>Reproduction is prohibited other than in accordance with the copyright notice.</li>
            <li>All trademarks that are not the property of or licensed to the operator are acknowledged on the website.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#04102d] mb-4">Unauthorized Use & External Links</h2>
          <ul className="list-disc pl-5 flex flex-col gap-3 text-[15px] lg:text-[17px] font-semibold text-[#04102d]/80">
            <li>Unauthorized use of this website may give rise to a claim for damages and/or may be a criminal offense.</li>
            <li>This website may include links to other websites for additional information. These links do not signify endorsement, and we are not responsible for their content.</li>
            <li>You may not create a link to this website from another website or document without prior written consent from 100xDevs.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#04102d] mb-4">Legal Jurisdiction</h2>
          <p className="text-[15px] lg:text-[17px] font-semibold text-[#04102d]/80">
            Your use of this website and any dispute arising out of such use is subject to the laws of India or other regulatory authority.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#04102d] mb-4">Payments, Usage & Liability</h2>
          <ul className="list-disc pl-5 flex flex-col gap-3 text-[15px] lg:text-[17px] font-semibold text-[#04102d]/80">
            <li>Credit card orders commence after authorization/confirmation from the respective payment gateway or card issuer.</li>
            <li><strong className="font-extrabold text-[#04102d]">Educational Purpose Only:</strong> The platform is designed to help users develop skills. We do not guarantee any income or financial results.</li>
            <li><strong className="font-extrabold text-[#04102d]">No Income Assurance:</strong> We do not promise jobs, business success or earnings.</li>
            <li><strong className="font-extrabold text-[#04102d]">Non-Refundable:</strong> All payments are final. No refunds are provided in any case.</li>
            <li><strong className="font-extrabold text-[#04102d]">User Responsibility:</strong> You are solely responsible for how you apply the skills learned. We are not liable for outcomes of your usage.</li>
          </ul>
        </section>

        <section>
          <p className="text-[15px] lg:text-[17px] font-bold text-[#04102d] mt-4">
            By continuing to use the app and website, you fully accept and agree to these terms and conditions.
          </p>
        </section>

      </div>
    </div>
  );
}

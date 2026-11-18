import { Breadcrumb } from "@/components/sites/nuron/chrome";

export default function Page() {
  return (
    <>
      <Breadcrumb title="Terms" crumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
      <section className="rn-section-gap">
        <div className="nuron-container">
        <article className="blog-article">
          <p>By accessing or using the Nuron website and services, you agree to be bound by the following terms and conditions (the “Terms”). If you do not agree to these Terms, you may not access or use the Nuron website or services.</p>
          <p>Nuron is a platform for buying, selling, and trading non-fungible tokens (NFTs). NFTs are unique digital assets that are verified on the blockchain. By using Nuron, you acknowledge that you understand the risks associated with buying, selling, and trading NFTs.</p>
          <p>In order to use Nuron, you must create an account. You are responsible for maintaining the security of your account and should not share your account information with anyone else. Nuron is not responsible for any losses or damages that may result from unauthorized access to your account.</p>
          <p>When you buy, sell, or trade NFTs on Nuron, you are entering into a legal and binding agreement with the other party. Nuron is not a party to these transactions and is not responsible for any disputes that may arise.</p>
          <p>Nuron charges a fee for certain transactions on the platform. These fees are clearly listed on the platform and are subject to change at any time.</p>
          <p>All sales on Nuron are final. Nuron does not offer cancellations or refunds for any transactions.</p>
          <p>You are prohibited from using Nuron for any illegal or fraudulent activities. Nuron may take action against any user who engages in such activities, including terminating their account and reporting them to the authorities.</p>
          <p>All content on the Nuron website, including but not limited to text, images, and code, is the property of Nuron or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use any content from the Nuron website without express permission from Nuron or the appropriate licensor.</p>
          <p>Nuron provides the website and services “as is” and does not make any representations or warranties of any kind, express or implied, as to the operation of the website or the information, content, materials, or products included on the website.</p>
          <p>In no event shall Nuron be liable for any damages whatsoever, including but not limited to any direct, indirect, special, incidental, or consequential damages, arising out of or in connection with the use or inability to use the Nuron website or services.</p>
          <p>Nuron reserves the right to make changes to these Terms at any time and without notice. Your continued use of the Nuron website and services following any changes to these Terms will be deemed your acceptance of those changes.</p>
          <p>These Terms and your use of the Nuron website and services shall be governed by and construed in accordance with the laws of the United States of America.</p>
          <p>If you have any questions or concerns about these Terms, please contact us at support@nuron.com</p>
          <p>Thank you for using Nuron.</p>
        </article>
        </div>
      </section>
    </>
  );
}

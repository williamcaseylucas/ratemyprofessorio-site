import Navbar from "./Navbar";
import Footer from "./Footer";
import Divider from "./Divider";
import { useState } from "react";
import Markdown from "react-markdown";

const Terms = () => {
  const [markdown, setMarkdown] = useState(`

  # Terms of Use

  ## 1. Acceptance of Terms

  By accessing or using RateMyProfessorIO you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using the Website.

  ## 2. User Responsibilities
  2.1. Accuracy of Information: Users are responsible for providing accurate and truthful information when submitting ratings and reviews of professors.\n
  2.2. User Conduct: Users must not engage in any activity that may disrupt the functioning of the Website, including but not limited to hacking, spamming, or any other form of abuse.\n
  2.3. Impersonation: Users must not impersonate any person or entity, including professors or other users.

  ## 3. Privacy Policy
  Please refer to our Privacy Policy for information on how we collect, use, and disclose personal information. By using the Website, you acknowledge and consent to the terms outlined in the Privacy Policy.

  ## 4. Intellectual Property
  4.1. Ownership: RateMyProfessorIO retains all rights, title, and interest in and to the Website, including all content, features, and functionality.\n
  4.2. User Content: By submitting ratings, reviews, or other content, users grant RateMyProfessorIO a worldwide, royalty-free, non-exclusive license to reproduce, modify, distribute, and display the content.\n

  ## 5. Disclaimers
  5.1. Accuracy of Information: RateMyProfessorIO does not guarantee the accuracy, completeness, or reliability of information provided on the Website. Users are encouraged to verify information independently.\n
  5.2. No Endorsement: The inclusion of a professor on the Website does not constitute an endorsement by RateMyProfessorIO. The ratings and reviews reflect the opinions of users.\n
  5.3. No Guarantee of Results: RateMyProfessorIO does not guarantee any specific results from using the Website.

  ## 6. Limitation of Liability

  To the fullest extent permitted by applicable law, RateMyProfessorIO shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.

  ## 7. Modifications
  RateMyProfessorIO reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. Users are responsible for regularly reviewing the Terms and Conditions.

  ## 8. Governing Law
  These Terms and Conditions are governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law principles. \n
  

  `);
  return (
    <div className="">
      <div className="bg-blue-800">
        <Navbar page="terms" />
      </div>
      <div className="w-full flex items-center justify-center">
        <Markdown className="prose p-4 m-4">{markdown}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;

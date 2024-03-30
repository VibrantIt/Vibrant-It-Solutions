import * as React from "react"
import {
  type TermsConditionsPageBodyType,
  type TermsConditionsPageFrontmatterType
} from "../pages/terms-and-conditions"
import { HTMLContent } from "./Content"
import he from "he"

type TandCProps =
  NonNullable<TermsConditionsPageFrontmatterType>["terms_Conditions"] & {
    body: NonNullable<TermsConditionsPageBodyType>
  }

const TandC = (props: TandCProps): React.ReactElement => {
  return (
    <>
      <div className="tc-tech-tales">
        <div className="tc-tales">
          <h5>{props?.kicker}</h5>
          <h1>
            <span className="line1">{props?.title}</span>
            <span className="line2">{props?.titleHighlight}</span>
          </h1>
          <p>{props?.lastUpdate}</p>
        </div>
      </div>
      <HTMLContent className="tnc-details" content={he.decode(props.body)} />

      {/* <p>
        The original version of our staging system can be traced back to the
        Martin Garrix project where we had a need for ensuring that the preview
        environment for the client was behind a secure login to ensure the
        project would not leak before the release date. We threw together a
        quick prototype that we continuously used during the project. <br />
        <br />
        When we extended its use to another client project, the feedback was
        overwhelmingly positive. The prototype succeeded in addressing security
        concerns and the gaps in our deployment process became evident. It
        wasn’t just a tool; it was a solution that filled a significant gap in
        our workflow. <br />
        <br />
        Recognizing its potential, we made the decision to evolve this prototype
        into a full-fledged system. Our aim? To make it a cornerstone of our
        deployment process, ensuring security, efficiency and consistency in
        every project we undertook.
      </p> */}
      {/* <div className="background">
        <h4>1. Information We Collect & How it is Collected</h4>
        <p>
          The original version of our staging system can be traced back to the
          Martin Garrix project where we had a need for ensuring that the
          preview environment for the client was behind a secure login to ensure
          the project would not leak before the release date. We threw together
          a quick prototype that we continuously used during the project. <br />
          <br />
          &bull; Site usage data, such as web pages visited, content viewed on
          web pages, amount of time spent on particular pages, information about
          a User’s browser, traffic channel and operating system. We collect
          site usage data as you use and navigate the Site. <br />
          &bull; Geolocation data that does not include specific
          addresses/locations or information that may be used to identify any
          User or individual. We collect this information as you use and
          navigate the Site. <br />
          &bull; Cookies and information derived from our Site analytics tools.
          We collect this kind of information as you use and navigate the Site.
        </p>
      </div>
      <div className="background">
        <h4>
          2. Our Uses and Disclosures of Information & Purposes of Using and
          Disclosing Information
        </h4>
        <p>
          Uses and Disclosures of Non-Personal Information: We use Non-Personal
          Information we collect for Site analytics purposes. For example, we
          use cookies and other information derived from our Site analytics
          tools to analyze trends and our Users' preferences in using the Site,
          which helps us improve the Site and Users’ experiences on the Site. We
          may also disclose such Non-Personal Information to third party service
          providers for such purposes and as described in this Privacy Policy.{" "}
          <br />
          <br />
          Uses and Disclosures of Personal Information: We use the following
          Personal Information for the purposes described below: <br />
          &bull; We use names, email addresses, company/organization
          affiliation, your title with such company/organization and phone
          numbers of Users to respond to questions and comments submitted to us
          through a Contact Us Form; <br />
          &bull; We use names, email addresses, company/organization
          affiliation, your title with such company/organization, phone numbers,
          and other Personal Information you include on your CV or otherwise
          provide as part of a job application that you submit to us to contact
          you about job opening(s) and/or evaluate your candidacy for job
          opening(s). <br />
          &bull; We use IP addresses for our Site analytics purposes. We may
          also disclose IP addresses to third party service providers for such
          purposes as described in this Privacy Policy; and <br />
          &bull; We use and disclose any of the foregoing Personal Information
          to comply with applicable law, regulation, legal process, subpoena or
          governmental request, or to protect the rights or property of Vibrant
          IT Solution or its Users, as needed.
        </p>
      </div>
      <div className="background">
        <h4>3. Retention of Personal Information</h4>
        <p>
          Uses and Disclosures of Non-Personal Information: We use Non-Personal
          Information we collect for Site analytics purposes. For example, we
          use cookies and other information derived from our Site analytics
          tools to analyze trends and our Users' preferences in using the Site,
          which helps us improve the Site and Users’ experiences on the Site. We
          may also disclose such Non-Personal Information to third party service
          providers for such purposes and as described in this Privacy Policy.{" "}
          <br />
          <br />
          Uses and Disclosures of Personal Information: We use the following
          Personal Information for the purposes described below: <br />
          &bull; We use names, email addresses, company/organization
          affiliation, your title with such company/organization and phone
          numbers of Users to respond to questions and comments submitted to us
          through a Contact Us Form; <br />
          &bull; We use names, email addresses, company/organization
          affiliation, your title with such company/organization, phone numbers,
          and other Personal Information you include on your CV or otherwise
          provide as part of a job application that you submit to us to contact
          you about job opening(s) and/or evaluate your candidacy for job
          opening(s). <br />
          &bull; We use IP addresses for our Site analytics purposes. We may
          also disclose IP addresses to third party service providers for such
          purposes as described in this Privacy Policy; and <br />
          &bull; We use and disclose any of the foregoing Personal Information
          to comply with applicable law, regulation, legal process, subpoena or
          governmental request, or to protect the rights or property of Vibrant
          IT Solution or its Users, as needed.
        </p>
      </div> */}
    </>
  )
}

export default TandC

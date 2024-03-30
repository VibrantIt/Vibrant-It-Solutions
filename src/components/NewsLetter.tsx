import * as React from "react"
// import { Slide, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// type NewsLetterProps = NonNullable<IndexPageFrontmatterType>["NewsLetter"]

const NewsLetter = (): React.ReactElement => {
  // const notify = (): void => {
  //   toast.success("Submitted !", {
  //     position: "bottom-center",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     transition: Slide,
  //   })
  // }

  return (
    <div className="newsletter">
      <h2>
        <span className="head2">Subscribe</span>&nbsp;
        <span className="head1">
          our newsletter & get all the timely updates into your inbox
        </span>
      </h2>
      <div className="subscription-container">
        <form
          name="Subscription"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="Subscription" />
          <input
            type="email"
            name="Email"
            className="email-input"
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="sub-button">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}
export default NewsLetter

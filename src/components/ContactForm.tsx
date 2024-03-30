import * as React from "react"
import { type ContactPageFrontmatterType } from "../pages/contact"
import { MenuItem, TextField, colors } from "@mui/material"
import { styled } from "@mui/system"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
// import { toast } from "react-toastify"

type ContactFormProps = NonNullable<ContactPageFrontmatterType>

const ContactForm = (
  props: NonNullable<ContactFormProps>
): React.ReactElement => {
  const CustomizedTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: "blue",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green", // Border color when focused
      },
    },
    "& .MuiFormLabel-root": {
      "&.Mui-focused": {
        transform: "translate(0, -0.5rem) scale(0.65)",
      },
      "&.MuiFormLabel-filled": {
        transform: "translate(0, -0.5rem) scale(0.65)",
      },
    },
  }))

  const CustomizedSelectField = styled(TextField)(({ theme }) => ({
    "& .MuiSelect-root": {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),

      "&:focus": {
        backgroundColor: "transparent", // Prevent the background color change on focus
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: `${theme.spacing(1)} !important`, // Adjust input padding
      responsiveFontSizes: true, // Make font responsive
      background: "black",
    },
    "& .MuiSelect-select-MuiInputBase-input-MuiInput-input": {
      padding: "10px 14px",
      borderRadius: "4px",
      backgroundColor: "black",
      border: `2px solid ${colors.grey[200]}`,
      fontSize: "0.25rem",
      color: colors.grey[700],
    },
    "& .MuiInputLabel-root": {
      // transform: 'translate(0, -0.5rem) scale(0.75)', // Adjust label position
      fontSize: "1rem", // Default font size for select options
      "@media (max-width: 600px)": {
        fontSize: "5rem", // Adjust font size for screens smaller than 600px
      },
      "@media (min-width: 1200px)": {
        fontSize: "8rem", // Adjust font size for screens larger than 1200px
      },
    },
    "& .MuiInput-underline:before": {
      // borderBottom: 'none', // Remove the underline
    },
    "& .MuiInput-underline:after": {
      // borderBottom: 'none', // Remove the underline
    },
  }))

  const options = [
    { value: "none", label: "Select an option", disabled: true },
    { value: "Entertainment", label: "Entertainment" },
    { value: "Finance", label: "Finance" },
    { value: "Medical", label: "Medical" },
    { value: "Software", label: "Software" },
    { value: "Textile", label: "Textile" },
    { value: "Media and news", label: "Media and news" },
    { value: "Food Processing", label: "Food Processing" },
    { value: "Hospitality", label: "Hospitality" },
    { value: "Construction", label: "Construction" },
    { value: "Law", label: "Law" },
    { value: "Advertising", label: "Advertising" },
  ]

  // const notify = (): void => {
  //   toast.success("Submitted Successfully!", {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   })
  // }

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
  //   event.preventDefault()

  //   const myForm = event.target as HTMLFormElement
  //   const formData = new FormData(myForm)

  //   const urlEncodedData = new URLSearchParams()
  //   formData.forEach((value, key) => {
  //     if (typeof value === "string") {
  //       urlEncodedData.append(key, value)
  //     }
  //   })

  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: urlEncodedData.toString(),
  //   })
  //     .then(notify)
  //     .catch((error) => { alert(error) })
  // }

  return (
    <>
      <div className="contact-tech-tales">
        <div className="contact-tales">
          <h5>{props?.kicker}</h5>
          <h1>
            <span className="line1">{props.title}</span> <br />
            <span className="line2">{props.titleHighlight}</span>
          </h1>
          <p>{props.description}</p>
        </div>
      </div>

      <div className="container">
        <div className="form-container">
          <form
            id="contact"
            name="Contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="flex flex-col max-w-md mx-auto"
          >
            <input type="hidden" name="form-name" value="Contact" />

            <CustomizedTextField
              id="standard-basic name"
              label="Name"
              name="Name"
              variant="standard"
              className="field"
            />

            <CustomizedTextField
              id="standard-basic email"
              name="Email"
              label="Email*"
              variant="standard"
              className="field"
            />

            <CustomizedSelectField
              id="outlined-select-currency-native"
              name="Industry"
              select
              label="YOUR INDUSTRY"
              variant="standard"
              defaultValue="none"
              className="select-field"
            >
              {options.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled ?? false}
                >
                  {option.label}
                </MenuItem>
              ))}
            </CustomizedSelectField>

            <CustomizedTextField
              id="standard-basic message"
              name="Message"
              label="What else we should know before responding ?"
              variant="standard"
              multiline
              className="field"
            />

            <button type="submit" className="button">
              {props.button?.buttonText}
              <img src={props.button?.icon!} alt="" />
            </button>
          </form>
        </div>
        <div className="image-container">
          <LazyLoadImage
            placeholderSrc={props.image!}
            src={props.image!}
            effect="blur"
            alt="Image"
          />
        </div>
      </div>
    </>
  )
}

export default ContactForm

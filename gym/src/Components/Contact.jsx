import { useState,useEffect,useRef } from "react";
import styles from "./contact.module.css";
import { toast,Bounce } from "react-toastify";
const Contact = () => {
  const shown = useRef(false);
   useEffect(()=>{
    if (!shown.current){
      toast.info("Welcome To Contact Us  Page",{
          position:"top-center",
          autoClose: 2000,
      
      });
      shown.current=true;
    }
      },[])
        const [submittedData, setSubmittedData] = useState(null);
  const [formData, setFormData] = useState({
    myname: "",
    email: "",
    phone: "",
    issue: "Registeration Problem",
    message: ""
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message Sent Successfully!!",{
      position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
    })
        setSubmittedData(formData);
    console.log("Form submitted:", formData);
    setFormData({
      myname: "",
    email: "",
    phone: "",
    issue: "Registeration Problem",
    message: ""
    })
  };

  const handleReset = () => {
    setFormData({
      myname: "",
      email: "",
      phone: "",
      issue: "Registeration Problem",
      message: ""
    });
  };

  return (
    <div>
      <hr />
      <hr />

      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
        className={styles.form1}
      >
        <fieldset>
          <legend>
            <h4>Contact Us</h4>
          </legend>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="myname"
            placeholder="Enter your name"
            value={formData.myname}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <label><b>Subject:</b></label>
          <div className={styles["radio-group"]}>
            <label>
              <input
                type="radio"
                name="issue"
                value="Registeration Problem"
                checked={formData.issue === "Registeration Problem"}
                onChange={handleChange}
              />
              Registration
            </label>
            <label>
              <input
                type="radio"
                name="issue"
                value="Fitness"
                checked={formData.issue === "Fitness"}
                onChange={handleChange}
              />
              Fitness
            </label>
            <label>
              <input
                type="radio"
                name="issue"
                value="Other"
                checked={formData.issue === "Other"}
                onChange={handleChange}
              />
              Other
            </label>
          </div>

          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <div className={styles.buttons}>
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
          </div>
        </fieldset>
      </form>

      <p className={styles.note}>
        Have a question, suggestion, or just want to get in touch? We're here to
        help! Feel free to reach out to us anytime — whether it's about our
        services, support, or feedback. Your thoughts matter to us, and we’re
        always happy to hear from you. Simply fill out the form above or drop us
        an email, and we’ll respond as quickly as we can.
      </p>

      <hr />
    </div>
  );
};

export default Contact;

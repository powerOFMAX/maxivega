import { useState, useRef, Suspense, lazy, useEffect } from "react"
import emailjs from "@emailjs/browser"

import { motion } from "framer-motion"

import { SectionWrapper } from "../hoc"

import { slideIn } from "../utils/motion"
import { styles } from "../styles"
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../constants"

const EarthCanvas = lazy(() =>
  import("./canvas").then((module) => ({ default: module.EarthCanvas }))
)

const Contact = () => {
  const formRef = useRef()

  const sendWhatsAppMessage = ({ from_name, from_email, message }) => {
    const VITE_WHATSAPP_TOKEN = import.meta.env.VITE_WHATSAPP_TOKEN
    const VITE_PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER
    const VITE_RECIPIENT_PHONE = import.meta.env.VITE_RECIPIENT_PHONE

    fetch(`https://graph.facebook.com/v21.0/${VITE_PHONE_NUMBER}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${VITE_WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: VITE_RECIPIENT_PHONE,
        recipient_type: "individual",
        type: "text",
        text: {
          preview_url: false,
          body: `Error: Alguien intentó contactarte, pero ocurrió un problema.\nMensaje de: ${from_name},\nEmail: ${from_email},\nMensaje: ${message}
          `,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Notification sent:", data))
      .catch((error) => console.error("Error sending notification:", error))
  }

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Maximiliano",
          from_email: form.email,
          to_email: "info@thecodesquare.com",
          message: form.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setLoading(false)
        alert("Thank you, I'll get back to you as soon as possible")
        setForm({
          name: "",
          email: "",
          message: "",
        })
      }),
      (error) => {
        setLoading(false)
        console.log(error, "The message will be sent through WhatsApp")
        sendWhatsAppMessage({
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        })
      }
  }

  const [isComponentVisible, setIsComponentVisible] = useState(false)

  useEffect(() => {
    const targetElement = document.querySelector("#TechStack")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsComponentVisible(true)
            // Stop observing after the component is visible
            observer.unobserve(targetElement)
          }
        })
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    )

    if (targetElement) {
      observer.observe(targetElement)
    }

    return () => {
      // Clean up observer on unmount
      observer.disconnect()
    }
  }, [])

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what's your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="what's your email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="what do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary 
              py-3 px-8 outline-none w-fit text-white 
              font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <Suspense fallback={<div>Loading earth...</div>}>
          {isComponentVisible && <EarthCanvas />}
        </Suspense>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")

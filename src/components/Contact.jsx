import { useState, Suspense, lazy, useEffect } from "react"

import { motion } from "framer-motion"

import { SectionWrapper } from "../hoc"

import { slideIn } from "../utils/motion"
import { styles } from "../styles"

const EarthCanvas = lazy(() =>
  import("./canvas").then((module) => ({ default: module.EarthCanvas })),
)

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: "", message: "" })
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    if (status.message) {
      setStatus({ type: "", message: "" })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = form.name.trim()
    const email = form.email.trim()
    const subject = form.subject.trim()
    const message = form.message.trim()

    if (!name || !email || !subject || !message) {
      setStatus({
        type: "error",
        message: "Please complete name, email, subject and message.",
      })
      return
    }

    if (!emailRegex.test(email)) {
      setStatus({
        type: "error",
        message: "Please provide a valid email address.",
      })
      return
    }

    setLoading(true)
    setStatus({ type: "", message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      })

      const payload = await response.json()
      if (!response.ok) {
        setStatus({
          type: "error",
          message:
            payload.message || "Could not send your message. Please try again.",
        })
        return
      }

      setStatus({
        type: "success",
        message: payload.message || "Thanks! Your message has been sent.",
      })
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Contact request failed", error)
      setStatus({
        type: "error",
        message: "Network error. Please try again in a moment.",
      })
    } finally {
      setLoading(false)
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
      { threshold: 0.1 }, // Trigger when 10% of the element is visible
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

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
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
            <span className="text-white font-medium mb-4">Subject</span>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="what is this about?"
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

          {status.message && (
            <p
              className={`text-sm ${
                status.type === "error" ? "text-red-400" : "text-green-400"
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary 
              py-3 px-8 outline-none w-fit text-white 
              font-bold shadow-md shadow-primary rounded-xl disabled:opacity-60"
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

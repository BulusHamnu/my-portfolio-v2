import { Whatsapp, Gmail } from "@thesvg/react";
import { SiCalendly } from "@icons-pack/react-simple-icons";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import env from "../config/env";
import { motion } from "motion/react";
import { onViewVariants } from "../config/animations";

/* Contact Section */
function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submiting, setSubmiting] = useState(false);

  const submitForm = (e: React.SubmitEvent<HTMLFormElement>) => {
    setSubmiting(true);

    fetch(env.FORM_SPREE_URL, {
      method: "POST",
      body: new FormData(e.target),
      headers: {
        Accept: "application/json",
      },
    })
      .then(async (response) => {
        if (response.ok) {
          setSubmiting(false);

          toast.success("Message sent successfully!", {
            duration: 5000,
            id: "contact-success",
          });

          formRef.current?.reset();
        } else {
          await response.json().then((data) => {
            setSubmiting(false);
            console.error("Error:", data);
          });
        }
      })
      .catch((error) => {
        setSubmiting(false);
        console.error("An error occured while sending form message:", error);
      });
  };

  return (
    <motion.section
      variants={onViewVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="contact"
      className="p-3 mt-13 mb-20"
    >
      <h2 className="section-heading text-left">Contact</h2>
      <p style={{ marginTop: "25px" }} className="text-left">
        If you have a project, idea, or opportunity, feel free to reach out. I’m
        always open to working on something interesting.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            void submitForm(e);
          }}
          className="mt-5 flex flex-col flex-nowrap p-4 lg:p-0 gap-5"
        >
          <div className="form-row flex flex-col flex-nowrap text-left gap-2">
            <label className="text-lg" htmlFor="name">
              Name
            </label>
            <input
              className="border border-gray-600 h-12 p-2 bg-neutral-900"
              id="name"
              type="text"
              name="name"
              required
              placeholder="Name.."
            />
          </div>
          <div className="form-row flex flex-col flex-nowrap text-left gap-2">
            <label className="text-lg" htmlFor="subject">
              Subject
            </label>
            <input
              className="border border-gray-600 h-12 p-2 bg-neutral-900"
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Subject.."
            />
          </div>
          <div className="form-row flex flex-col flex-nowrap text-left gap-2">
            <label className="text-lg" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-600 h-12 p-2 bg-neutral-900"
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email.."
            />
          </div>
          <div className="form-row flex flex-col flex-nowrap text-left gap-2">
            <label className="text-lg" htmlFor="message">
              Message
            </label>
            <textarea
              className="border border-gray-600 h-45 p-2 bg-neutral-900"
              name="message"
              id="message"
              required
              placeholder="Message.."
            ></textarea>
          </div>
          <motion.button
            whileHover={{
              backgroundColor: "#8adfbc",
              transition: { duration: 0.3 },
            }}
            className="text-gray-900 h-14 rounded bg-[#a0ecce] cursor-pointer"
            type="submit"
            disabled={submiting}
          >
            {submiting ? "Sending..." : "Send Message"}
          </motion.button>
          <Toaster />
        </form>
        <div className="contact-meduim mt-5">
          <div className="flex flex-row flex-nowrap gap-4 p-3">
            <div className="p-4 rounded-lg bg-neutral-900">
              <Whatsapp width={25} height={25} />
            </div>
            <div className="flex flex-col gap-1 items-start p-1">
              <span className="text-stone-400 text-lg">Phone</span>
              <a
                target="_blank"
                className="anchor text-xl"
                href="tel:+234 705 925 2490"
              >
                +234 705 925 2490
              </a>
            </div>
          </div>
          <div className="flex flex-row flex-nowrap gap-4 p-3">
            <div className="p-4 rounded-lg bg-neutral-900">
              <Gmail width={25} height={25} />
            </div>
            <div className="flex flex-col gap-1 items-start p-1">
              <span className="text-stone-400 text-lg">Email</span>
              <a
                target="_blank"
                className="anchor text-xl"
                href="mailto:hamnubulus@gmail.com"
              >
                hamnubulus@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-row flex-nowrap gap-4 p-3">
            <div className="p-4 rounded-lg bg-neutral-900">
              <SiCalendly width={27} height={27} />
            </div>
            <div className="flex flex-col gap-1 items-start p-1">
              <span className="text-stone-400 text-lg">Calendly</span>
              <a
                target="_blank"
                className="anchor text-xl"
                href="https://calendly.com/hamnubulus/30min"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactSection;

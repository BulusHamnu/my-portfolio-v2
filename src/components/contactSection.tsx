import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import env from "../config/env";
import { motion } from "motion/react";
import { onViewVariants } from "../config/animations";
import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import { type IconType } from "react-icons";

function SocialLink({
  Icon,
  text,
  to,
}: {
  Icon: IconType;
  text: string;
  to: string;
}) {
  const variants = {
    initial: { x: 0 },
    hover: { x: 4, transition: { duration: 0.3 } },
  };

  return (
    <motion.a
      initial="initial"
      whileHover="hover"
      target="_blank"
      className="anchor text-xl flex flex-row flex-nowrap gap-4 mb-5 items-center"
      href={to}
    >
      <Icon size={30} />
      <motion.span
        variants={variants}
        className="capitalize inline-block text-sm"
      >
        {text}
      </motion.span>
      <span style={{ height: "1px" }} className="w-full bg-[#919090]"></span>
    </motion.a>
  );
}

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
      className="p-3"
    >
      <h2 className="section-heading text-left">Contact</h2>
      <p style={{ marginTop: "25px" }} className="text-left">
        Have a project, idea, or business that needs software? I'd love to hear
        about it. Feel free to reach out and let's discuss how I can help.
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
            className="text-gray-900 h-14 rounded bg-[#a0ecce] cursor-pointer disabled:cursor-not-allowed"
            type="submit"
            disabled={submiting}
          >
            {submiting ? "Sending..." : "Send Message"}
          </motion.button>
          <Toaster />
          <small className="text-left">
            Typical response time: Within 24–48 hours.
          </small>
        </form>
        <div className="contact-meduim mt-5 px-3">
          <h3
            style={{ fontSize: "22px", color: "#f59e0b" }}
            className="text-left my-2"
          >
            Find Me Online
          </h3>
          <div className="mt-4">
            <SocialLink
              Icon={FaWhatsapp}
              text="WHATSAPP"
              to="https://wa.me/2347059252490"
            />
            <SocialLink
              Icon={FaInstagram}
              text="INSTAGRAM"
              to="https://www.instagram.com/demy_thekidd"
            />
            <SocialLink
              Icon={SiX}
              text="TWITTER"
              to="https://x.com/bulushamnu?t=DruMHErbK2GRXdyNzD5pEw&s=09"
            />
            <SocialLink
              Icon={FaYoutube}
              text="YOUTUBE"
              to="https://youtube.com/@bulus_hamnu"
            />
            <SocialLink
              Icon={FaGithub}
              text="GITHUB"
              to="https://github.com/BulusHamnu"
            />
            <SocialLink
              Icon={FaLinkedin}
              text="LINKEDIN"
              to="https://www.linkedin.com/in/bulus-hamnu-a2850a23b"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactSection;

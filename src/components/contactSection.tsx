import { Whatsapp, Gmail } from "@thesvg/react";
import { SiCalendly } from "@icons-pack/react-simple-icons";

/* Contact Section */
function ContactSection() {
  return (
    <section id="contact-section" className="p-3 mt-13 mb-20">
      <h2 className="section-heading text-left">Contact</h2>
      <p style={{ marginTop: "25px" }} className="text-left">
        If you have a project, idea, or opportunity, feel free to reach out. I’m
        always open to working on something interesting.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
        <form className="mt-5 flex flex-col flex-nowrap p-4 lg:p-0 gap-5">
          <div className="form-row flex flex-col flex-nowrap text-left gap-2">
            <label className="text-lg" htmlFor="name-box">
              Name
            </label>
            <input
              className="border border-gray-600 h-12 p-2 "
              id="name-box"
              type="text"
              placeholder="Your name my lord ?"
            />
          </div>
          <div className="form-row flex flex-col flex-nowrap text-left gap-2">
            <label className="text-lg" htmlFor="subject-box">
              Subject
            </label>
            <input
              className="border border-gray-600 h-12 p-2"
              id="subject-box"
              type="text"
              placeholder="Is it work my lord ?"
            />
          </div>
          <div className="form-row flex flex-col flex-nowrap text-left gap-2">
            <label className="text-lg" htmlFor="email-box">
              Email
            </label>
            <input
              className="border border-gray-600 h-12 p-2"
              id="email-box"
              type="email"
              placeholder="Your email pls.."
            />
          </div>
          <div className="form-row flex flex-col flex-nowrap text-left gap-2">
            <label className="text-lg" htmlFor="message-box">
              Message
            </label>
            <textarea
              className="border border-gray-600 h-45 p-2"
              name="Message"
              id="message-box"
              placeholder="How can i help u, my lord?"
            ></textarea>
          </div>
          <button className="button-primary h-14 rounded" type="submit">
            Send Message
          </button>
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
                className="text-xl"
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
                className="text-xl"
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
                className="text-xl"
                href="https://calendly.com/hamnubulus/30min"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

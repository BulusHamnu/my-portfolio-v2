import { Whatsapp, Gmail } from "@thesvg/react";
import { SiCalendly } from "@icons-pack/react-simple-icons";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

/* Contact Section */
function ContactSection() {
  const [state, handleSubmit] = useForm("xlgzndpa");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
      toast.success("Message sent successfully!", {
        duration: 5000,
      });
    }
  }, [state.succeeded]);

  return (
    <section id="contact-section" className="p-3 mt-13 mb-20">
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
            void handleSubmit(e);
          }}
          className="mt-5 flex flex-col flex-nowrap p-4 lg:p-0 gap-5"
        >
          <div className="form-row flex flex-col flex-nowrap text-left gap-2">
            <label className="text-lg" htmlFor="name">
              Name
            </label>
            <input
              className="border border-gray-600 h-12 p-2 "
              id="name"
              type="text"
              name="name"
              required
              placeholder="Your name my lord ?"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="form-row flex flex-col flex-nowrap text-left gap-2">
            <label className="text-lg" htmlFor="subject">
              Subject
            </label>
            <input
              className="border border-gray-600 h-12 p-2"
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Is it work my lord ?"
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </div>
          <div className="form-row flex flex-col flex-nowrap text-left gap-2">
            <label className="text-lg" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-600 h-12 p-2"
              id="email"
              name="email"
              type="email"
              required
              placeholder="Your email pls.."
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-row flex flex-col flex-nowrap text-left gap-2">
            <label className="text-lg" htmlFor="message">
              Message
            </label>
            <textarea
              className="border border-gray-600 h-45 p-2"
              name="message"
              id="message"
              required
              placeholder="How can i help u, my lord?"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            className="button-primary h-14 rounded"
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
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
    </section>
  );
}

export default ContactSection;

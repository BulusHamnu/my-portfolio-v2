import Services from "../data/services";
import { motion } from "motion/react";
import { onViewVariants } from "../config/animations";

/* Services Section */
function ServicesSection() {
  return (
    <motion.section
      variants={onViewVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="services"
      className="p-3"
    >
      <h2 className="section-heading text-left">Services</h2>
      <p style={{ marginTop: "20px" }} className="text-left">
        I build practical software that helps businesses automate work, manage
        data, accept payments, and deliver better experiences to their users.
      </p>
      <motion.div
        id="services-cont"
        className="flex flex-row flex-wrap gap-7 mt-6 justify-center md:justify-start"
      >
        {Services.map((service) => (
          <motion.div className="flex-1 p-2 min-w-75 max-w-125 ">
            <div className="icons object-contain max-w-20 mx-auto">
              <img src={service.iconUrl} alt={service.name} />
            </div>
            <h3>{service.name}</h3>
            <p style={{ marginTop: "8px" }} className="text-left">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default ServicesSection;

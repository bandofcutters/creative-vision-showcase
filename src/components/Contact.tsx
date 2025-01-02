import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-dark">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Get in <span className="text-accent">Touch</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <a 
              href="mailto:ryan@bandofcutters.com"
              className="group flex flex-col items-center hover:text-accent transition-colors"
            >
              <Mail className="text-accent mb-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <span className="text-gray-300 group-hover:text-accent">
                  ryan@bandofcutters.com
                </span>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <a 
              href="tel:+16472733154"
              className="group flex flex-col items-center hover:text-accent transition-colors"
            >
              <Phone className="text-accent mb-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-white font-semibold mb-1">Phone</h3>
                <span className="text-gray-300 group-hover:text-accent">
                  647.273.3154
                </span>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <a 
              href="https://www.google.com/maps?q=Toronto,Ontario"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center hover:text-accent transition-colors"
            >
              <MapPin className="text-accent mb-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-white font-semibold mb-1">Location</h3>
                <span className="text-gray-300 group-hover:text-accent">
                  Toronto, Canada / Remote
                </span>
              </div>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4"
        >
          <a
            href="https://www.linkedin.com/in/ryanmonteitheditor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://x.com/ryanmonteith_?s=11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-white transition-colors"
          >
            <Twitter size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

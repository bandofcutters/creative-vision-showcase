import { motion } from "framer-motion";
import { Camera, Edit, Award } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-4 bg-dark text-white">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          About <span className="text-accent">Me</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Camera,
              title: "Capture",
              description: "Expert in identifying the perfect moment and composition"
            },
            {
              icon: Edit,
              title: "Edit",
              description: "Transforming raw images into stunning visual stories"
            },
            {
              icon: Award,
              title: "Deliver",
              description: "Providing exceptional quality and attention to detail"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 rounded-lg bg-dark-lighter"
            >
              <div className="inline-block p-4 rounded-full bg-accent/10 mb-4">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
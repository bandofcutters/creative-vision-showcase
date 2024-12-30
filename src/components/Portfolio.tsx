import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const portfolioItems = [
  {
    id: 1,
    title: "Documentaries",
    image: "/lovable-uploads/08d58990-f33e-403c-a06a-58aea28af892.png",
    route: "/documentaries"
  },
  {
    id: 2,
    title: "Reality TV Series",
    image: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Unscripted Content",
    image: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?auto=format&fit=crop&q=80",
  },
];

export const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-20 px-4 bg-dark-lighter">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Featured <span className="text-accent">Work</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              onClick={() => item.route && navigate(item.route)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
import { motion } from "framer-motion";

export const FeaturedWork = () => {
  return (
    <section className="min-h-screen bg-dark text-white relative">
      <div className="container mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-accent"
        >
          Featured Work
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative aspect-video w-full max-w-6xl mx-auto shadow-2xl rounded-lg overflow-hidden"
        >
          <iframe
            src="https://www.youtube.com/embed/zpfeKRjrciw?autoplay=1&rel=0&mute=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};
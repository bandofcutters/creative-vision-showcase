import { motion } from "framer-motion";

export const FeaturedWork = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="relative aspect-video w-full max-w-2xl mx-auto shadow-2xl rounded-lg overflow-hidden mb-8"
    >
      <iframe
        src="https://www.youtube.com/embed/zpfeKRjrciw?autoplay=1&rel=0&mute=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </motion.div>
  );
};
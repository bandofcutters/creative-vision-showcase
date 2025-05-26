import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PortfolioNav } from "@/components/PortfolioNav";
import { VideoModal } from "@/components/VideoModal";

const shows = [
  {
    id: 1,
    title: "United Gangs of America Season 2",
    description:
      "An investigative series that delves deep into the hidden world of organized crime networks, exploring their operations, impact on society, and the efforts to dismantle them.",
    image: "/lovable-uploads/a1ab5db7-63b9-40d3-854e-600555069217.png",
    trailerUrl: "https://www.youtube.com/embed/FZIkv-943bE" // Replace with actual video ID
  }
];

const TrueCrime = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto"
      >
        <Button
          variant="ghost"
          className="text-white mb-6 md:mb-8 hover:bg-accent/20 hover:text-white"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2" /> Back to Home
        </Button>

        <PortfolioNav />

        <div className="space-y-12">
          {shows.map((show) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-dark-lighter rounded-lg overflow-hidden"
            >
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-4">{show.title}</h2>
                  <p className="text-gray-300 mb-6">{show.description}</p>
                </div>
                <Button
                  variant="outline"
                  className="w-fit border-accent text-accent hover:bg-accent hover:text-dark"
                  onClick={() => setSelectedVideo({ url: show.trailerUrl, title: show.title })}
                >
                  <Play className="mr-2" /> Watch
                </Button>
              </div>
              <div className="flex items-center justify-center p-4">
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-[300px] h-[300px] object-cover rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}
    </div>
  );
};

export default TrueCrime;

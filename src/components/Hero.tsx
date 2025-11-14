import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ScrollingNavigation } from "./ScrollingNavigation";
import { AuroraTextEffect } from "./AuroraTextEffect";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AuroraTextEffect 
              text="BPUT FFC"
              fontSize="clamp(3rem, 10vw, 8rem)"
              className="mb-6"
              colors={{
                first: "bg-cyan-400",
                second: "bg-purple-500",
                third: "bg-accent",
                fourth: "bg-primary",
              }}
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Inter College Free Fire
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">
              Tournament
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              4th Edition • Tournament is Live!
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card flex items-center gap-3">
              <Trophy className="w-5 h-5 text-accent" />
              <span className="text-lg font-semibold">12 Teams</span>
            </div>
            <div className="glass-card flex items-center gap-3">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold">50+ Players</span>
            </div>
            <div className="glass-card flex items-center gap-3">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="text-lg font-semibold">6 Maps</span>
            </div>
            <div className="glass-card flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold">HHR (LAN)</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-accent hover:opacity-90 transition-smooth glow-accent"
              onClick={() => navigate("/points")}
            >
              View Points Table
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 glass-card border-2 hover:bg-primary/10 transition-smooth"
              onClick={() => navigate("/schedule")}
            >
              View Schedule
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 mb-24 inline-block glass-card px-6 py-3 rounded-full border-2 border-accent/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="text-accent-2 font-bold text-lg">Registration Closed</span>
          </motion.div>
        </div>
      </div>
      
      <ScrollingNavigation />
    </section>
  );
};

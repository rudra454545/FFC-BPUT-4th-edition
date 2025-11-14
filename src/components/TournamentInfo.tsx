import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Target, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Battle Royale",
    description: "12 teams competing across 6 iconic maps in intense BR matches",
    color: "text-accent",
  },
  {
    icon: Target,
    title: "12 Matches",
    description: "2 matches per map: Bermuda, Kalahari, Purgatory, Solara, Nexterra, Alpine",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "LAN Event",
    description: "Live tournament at HHR venue with real-time scoring and standings",
    color: "text-accent",
  },
  {
    icon: Shield,
    title: "Fair Play",
    description: "Strict verification process with UID checks and admin oversight",
    color: "text-primary",
  },
];

export const TournamentInfo = () => {
  return (
    <section className="py-24 relative pt-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tournament <span className="gradient-text">Format</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience competitive Free Fire at its finest with professional organization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card hover:glow-primary transition-all duration-300 h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 glass-card p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4">Match Schedule</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["19:00", "19:20", "19:40", "20:00", "22:00", "22:20"].map((time, index) => (
              <div
                key={index}
                className="bg-primary/10 rounded-lg px-4 py-3 font-mono text-lg font-semibold"
              >
                {time}
              </div>
            ))}
          </div>
          <p className="mt-4 text-muted-foreground">
            Room ID & Password announced via WhatsApp & in-app notifications
          </p>
        </motion.div>
      </div>
    </section>
  );
};

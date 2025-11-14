import { Hero } from "@/components/Hero";
import { TournamentInfo } from "@/components/TournamentInfo";
import { StatsCounter } from "@/components/StatsCounter";
import WaveBackground from "@/components/WaveBackground";
import { ScrollingNavigation } from "@/components/ScrollingNavigation";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <WaveBackground backdropBlurAmount="md" />
      <ScrollingNavigation />
      <Hero />
      <TournamentInfo />
      <StatsCounter />
    </div>
  );
};

export default Index;

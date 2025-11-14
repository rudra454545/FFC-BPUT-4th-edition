import { ThreeDMarquee, MarqueeImage } from "@/components/ThreeDMarquee";
import WaveBackground from "@/components/WaveBackground";
import team444 from "@/assets/teams/team-444.jpg";
import immortalRoar from "@/assets/teams/immortal-roar.jpg";
import eternalVoid from "@/assets/teams/Eternal Voids.jpg";
import teamForce from "@/assets/teams/team-force.jpg";
import xForce from "@/assets/teams/x-force.jpg";
import royals from "@/assets/teams/royals.png";
import utkalaEsports from "@/assets/teams/utkala-esports.jpg";
import teamEvious from "@/assets/teams/team-evious.png";
import teamBg from "@/assets/teams/team-bg.jpg";
import teamMarco from "@/assets/teams/team-marco.png";
import cosmicEsports from "@/assets/teams/cosmic-esports.jpg";
import fantastic4 from "@/assets/teams/fantastic-4.jpg";
import { ScrollingNavigation } from "@/components/ScrollingNavigation";

const Teams = () => {
  const teamLogos: MarqueeImage[] = [
    { src: eternalVoid, alt: "Eternal Void" },
    { src: team444, alt: "Team 444" },
    { src: teamBg, alt: "Team BG" },
    { src: utkalaEsports, alt: "Utkala Esports" },
    { src: cosmicEsports, alt: "Cosmic Esports" },
    { src: xForce, alt: "X-Force" },
    { src: royals, alt: "Royals" },
    { src: fantastic4, alt: "Fantastic 4" },
    { src: teamEvious, alt: "Team Evious" },
    { src: immortalRoar, alt: "Immortal Roar" },
    { src: teamForce, alt: "Team Force" },
    { src: teamMarco, alt: "Team Marco" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 relative">
      <WaveBackground backdropBlurAmount="md" />
      <ScrollingNavigation />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Participating Teams
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            12 Elite Teams Ready for Battle
          </p>
          <div className="inline-block glass-card px-6 py-2 rounded-full">
            <span className="text-accent-2 font-bold">Registration Closed</span>
          </div>
        </div>

        <div className="mb-16">
          <ThreeDMarquee images={teamLogos} cols={4} />
        </div>

        <div className="glass-card p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center gradient-text">
            Tournament Status
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-background/40 rounded-lg">
              <span className="text-foreground font-semibold">Total Teams</span>
              <span className="text-accent text-xl font-bold">12</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-background/40 rounded-lg">
              <span className="text-foreground font-semibold">Tournament Format</span>
              <span className="text-primary text-xl font-bold">Battle Royale</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-background/40 rounded-lg">
              <span className="text-foreground font-semibold">Total Matches</span>
              <span className="text-accent-2 text-xl font-bold">12</span>
            </div>
          </div>
          <div className="text-center mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
            <p className="text-accent font-bold text-lg">
              Registration is now closed. Tournament is Live!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;

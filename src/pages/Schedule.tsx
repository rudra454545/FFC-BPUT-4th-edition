import { SeasonalHoverCards } from "@/components/SeasonalHoverCards";
import WaveBackground from "@/components/WaveBackground";
import { ScrollingNavigation } from "@/components/ScrollingNavigation";
import bermuda from "@/assets/maps/bermuda.jpeg";
import kalahari from "@/assets/maps/kalahari.jpeg";
import purgatory from "@/assets/maps/purgatory.jpeg";
import nexterra from "@/assets/maps/nexterra.jpeg";
import solara from "@/assets/maps/solara.jpg";
import alpine from "@/assets/maps/alpine.jpeg";
import eternalVoid from "@/assets/teams/Eternal Voids.jpg";
import team444 from "@/assets/teams/team-444.jpg";
import teamBg from "@/assets/teams/team-bg.jpg";

const Schedule = () => {
  const matchesDay1 = [
    {
      title: "Match 1 - Bermuda",
      subtitle: "13th Nov • 7:00 PM",
      description: "Winner: Eternal Void",
      imageSrc: bermuda,
      imageAlt: "Bermuda Map",
      winnerLogo: eternalVoid
    },
    {
      title: "Match 2 - Kalahari",
      subtitle: "13th Nov • 7:20 PM",
      description: "Winner: Team 444",
      imageSrc: kalahari,
      imageAlt: "Kalahari Map",
      winnerLogo: team444
    },
    {
      title: "Match 3 - Purgatory",
      subtitle: "13th Nov • 7:40 PM",
      description: "Winner: Eternal Void",
      imageSrc: purgatory,
      imageAlt: "Purgatory Map",
      winnerLogo: eternalVoid
    },
    {
      title: "Match 4 - Nexterra",
      subtitle: "13th Nov • 8:00 PM",
      description: "Winner: Team BG",
      imageSrc: nexterra,
      imageAlt: "Nexterra Map",
      winnerLogo: teamBg
    },
    {
      title: "Match 5 - Solara",
      subtitle: "13th Nov • 8:20 PM",
      description: "Winner: Eternal Void",
      imageSrc: solara,
      imageAlt: "Solara Map",
      winnerLogo: eternalVoid
    },
    {
      title: "Match 6 - Alpine",
      subtitle: "13th Nov • 8:40 PM",
      description: "Winner: Eternal Void",
      imageSrc: alpine,
      imageAlt: "Alpine Map",
      winnerLogo: eternalVoid
    },
  ];

  const matchesDay2 = [
    {
      title: "Match 7 - Bermuda",
      subtitle: "14th Nov • 7:00 PM",
      description: "Second match on Bermuda map. All 12 teams compete for placement.",
      imageSrc: bermuda,
      imageAlt: "Bermuda Map"
    },
    {
      title: "Match 8 - Kalahari",
      subtitle: "14th Nov • 7:20 PM",
      description: "Second match on Kalahari map. Desert warfare continues.",
      imageSrc: kalahari,
      imageAlt: "Kalahari Map"
    },
    {
      title: "Match 9 - Purgatory",
      subtitle: "14th Nov • 7:40 PM",
      description: "Second match on Purgatory map. High stakes battle.",
      imageSrc: purgatory,
      imageAlt: "Purgatory Map"
    },
    {
      title: "Match 10 - Nexterra",
      subtitle: "14th Nov • 8:00 PM",
      description: "Second match on Nexterra map. Tech zone supremacy.",
      imageSrc: nexterra,
      imageAlt: "Nexterra Map"
    },
    {
      title: "Match 11 - Solara",
      subtitle: "14th Nov • 8:20 PM",
      description: "Second match on Solara map. Speed and strategy.",
      imageSrc: solara,
      imageAlt: "Solara Map"
    },
    {
      title: "Match 12 - Alpine",
      subtitle: "14th Nov • 8:40 PM",
      description: "Final match on Alpine map. Championship decider!",
      imageSrc: alpine,
      imageAlt: "Alpine Map"
    },
  ];

  return (
    <div className="min-h-screen pt-24 relative">
      <WaveBackground backdropBlurAmount="md" />
      <ScrollingNavigation />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Match Schedule
          </h1>
          <p className="text-xl text-muted-foreground">
            BPUT FFIC 4th Edition • Battle Royale Matches
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center gradient-text">Day 1 - 13th November</h2>
            <div className="space-y-8">
              <SeasonalHoverCards cards={matchesDay1.slice(0, 3)} />
              <SeasonalHoverCards cards={matchesDay1.slice(3, 6)} />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center gradient-text">Day 2 - 14th November</h2>
            <div className="space-y-8">
              <SeasonalHoverCards cards={matchesDay2.slice(0, 3)} />
              <SeasonalHoverCards cards={matchesDay2.slice(3, 6)} />
            </div>
          </div>
        </div>

        <div className="mt-16 glass-card p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center gradient-text">
            Tournament Information
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Venue:</strong> HHR (LAN Setup)
            </p>
            <p>
              <strong className="text-foreground">Format:</strong> Battle Royale - 12 Teams, 5 Players each
            </p>
            <p>
              <strong className="text-foreground">Total Matches:</strong> 12 matches across 6 different maps
            </p>
            <p>
              <strong className="text-foreground">WhatsApp Group:</strong>{" "}
              <a 
                href="https://chat.whatsapp.com/E1e94eyrfCGAVzcq250vCn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Join Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import WaveBackground from "@/components/WaveBackground";
import { Trophy, Target, Crosshair } from "lucide-react";
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

const Points = () => {
  const rawTeamsData = [
    { logo: eternalVoid, name: "Eternal Void", booyah: 4, killPoints: 61, positionPoints: 57 },
    { logo: team444, name: "Team 444", booyah: 1, killPoints: 76, positionPoints: 42 },
    { logo: teamBg, name: "Team BG", booyah: 1, killPoints: 59, positionPoints: 46 },
    { logo: utkalaEsports, name: "Utkala Esports", booyah: 0, killPoints: 50, positionPoints: 39 },
    { logo: cosmicEsports, name: "Cosmic Esports", booyah: 0, killPoints: 43, positionPoints: 34 },
    { logo: xForce, name: "X-Force", booyah: 0, killPoints: 34, positionPoints: 24 },
    { logo: royals, name: "Royals", booyah: 0, killPoints: 30, positionPoints: 24 },
    { logo: fantastic4, name: "Fantastic 4", booyah: 0, killPoints: 19, positionPoints: 29 },
    { logo: teamEvious, name: "Team Evious", booyah: 0, killPoints: 22, positionPoints: 20 },
    { logo: immortalRoar, name: "Immortal Roar", booyah: 0, killPoints: 15, positionPoints: 12 },
    { logo: teamForce, name: "Team Force", booyah: 0, killPoints: 7, positionPoints: 10 },
    { logo: teamMarco, name: "Team Marco", booyah: 0, killPoints: 5, positionPoints: 4 },
  ];

  const teamsData = rawTeamsData
    .map((team, index) => ({
      ...team,
      rank: index + 1,
      totalPoints: team.killPoints + team.positionPoints,
    }))
    .sort((a, b) => {
      const aTotal = a.killPoints + a.positionPoints;
      const bTotal = b.killPoints + b.positionPoints;
      if (aTotal !== bTotal) return bTotal - aTotal;
      if (a.booyah !== b.booyah) return b.booyah - a.booyah;
      if (a.positionPoints !== b.positionPoints) return b.positionPoints - a.positionPoints;
      return b.killPoints - a.killPoints;
    })
    .map((team, index) => ({ ...team, rank: index + 1 }));

  const topKillTeams = [
    { name: "Team 444", kills: 76, logo: team444 },
    { name: "Eternal Void", kills: 61, logo: eternalVoid },
    { name: "Team BG", kills: 59, logo: teamBg },
    { name: "Utkala Esports", kills: 50, logo: utkalaEsports },
    { name: "Cosmic Esports", kills: 43, logo: cosmicEsports },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 relative">
      <WaveBackground backdropBlurAmount="md" />
      <ScrollingNavigation />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Points Table
          </h1>
          <p className="text-xl text-muted-foreground">
            Battle Royale Standings - Live Rankings
          </p>
        </div>

        <Card className="glass-card p-6 mb-8 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border/20 hover:bg-transparent">
                <TableHead className="text-accent font-bold">Rank</TableHead>
                <TableHead className="text-accent font-bold">Logo</TableHead>
                <TableHead className="text-accent font-bold">Team</TableHead>
                <TableHead className="text-accent font-bold text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Trophy className="w-4 h-4" />
                    Booyah
                  </div>
                </TableHead>
                <TableHead className="text-accent font-bold text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Crosshair className="w-4 h-4" />
                    Kill Points
                  </div>
                </TableHead>
                <TableHead className="text-accent font-bold text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Target className="w-4 h-4" />
                    Position Points
                  </div>
                </TableHead>
                <TableHead className="text-accent font-bold text-center">Total Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamsData.map((team) => (
                <TableRow 
                  key={team.rank} 
                  className="border-border/10 hover:bg-primary/5 transition-colors"
                >
                  <TableCell className="font-bold text-lg">
                    {team.rank <= 3 ? (
                      <span className="text-accent-2">{team.rank}</span>
                    ) : (
                      team.rank
                    )}
                  </TableCell>
                  <TableCell>
                    <img 
                      src={team.logo} 
                      alt={team.name}
                      className="w-12 h-12 object-contain rounded-lg ring-2 ring-accent/20"
                    />
                  </TableCell>
                  <TableCell className="font-semibold text-foreground">
                    {team.name}
                  </TableCell>
                  <TableCell className="text-center font-bold text-accent-2">
                    {team.booyah}
                  </TableCell>
                  <TableCell className="text-center font-semibold">
                    {team.killPoints}
                  </TableCell>
                  <TableCell className="text-center font-semibold">
                    {team.positionPoints}
                  </TableCell>
                  <TableCell className="text-center font-bold text-xl text-accent">
                    {team.totalPoints}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <div className="glass-card p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center gradient-text flex items-center justify-center gap-2">
            <Crosshair className="w-6 h-6 text-accent" />
            Top 5 Teams by Kills
          </h2>
          <div className="space-y-4">
            {topKillTeams.map((team, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-background/20 border border-border/20 hover:bg-primary/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-accent-2 w-8">#{index + 1}</span>
                  <img 
                    src={team.logo} 
                    alt={team.name}
                    className="w-12 h-12 object-contain rounded-lg ring-2 ring-accent/20"
                  />
                  <h3 className="text-lg font-bold text-foreground">
                    {team.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xl font-bold text-accent">
                  <Crosshair className="w-5 h-5" />
                  {team.kills}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;

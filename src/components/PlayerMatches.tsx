import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Zap, TrendingUp, TrendingDown, Calendar, MapPin } from "lucide-react";

interface Match {
  opponent: string;
  format: string;
  venue: string;
  date: string;
  runs: number;
  balls: number;
  strikeRate: number;
  wickets?: number;
  economy?: number;
  result: "win" | "loss";
  highlight: boolean;
  playerOfMatch?: boolean;
}

const recentMatches: Match[] = [
  { 
    opponent: "vs Australia", 
    format: "T20I", 
    venue: "Melbourne Cricket Ground",
    date: "Nov 20, 2025",
    runs: 52, 
    balls: 28, 
    strikeRate: 185.7, 
    wickets: 2,
    economy: 7.2,
    result: "win", 
    highlight: true,
    playerOfMatch: true 
  },
  { 
    opponent: "vs England", 
    format: "ODI", 
    venue: "Lord's, London",
    date: "Nov 15, 2025",
    runs: 71, 
    balls: 55, 
    strikeRate: 129.1, 
    wickets: 2,
    economy: 5.8,
    result: "win", 
    highlight: false 
  },
  { 
    opponent: "vs South Africa", 
    format: "T20I", 
    venue: "Wanderers Stadium",
    date: "Nov 10, 2025",
    runs: 31, 
    balls: 24, 
    strikeRate: 129.2, 
    wickets: 1,
    economy: 8.5,
    result: "loss", 
    highlight: false 
  },
  { 
    opponent: "vs New Zealand", 
    format: "ODI", 
    venue: "Eden Park, Auckland",
    date: "Nov 5, 2025",
    runs: 45, 
    balls: 38, 
    strikeRate: 118.4, 
    wickets: 1,
    economy: 6.2,
    result: "win", 
    highlight: false 
  },
  { 
    opponent: "vs Pakistan", 
    format: "T20I", 
    venue: "Dubai International Stadium",
    date: "Oct 28, 2025",
    runs: 67, 
    balls: 35, 
    strikeRate: 191.4, 
    wickets: 3,
    economy: 5.5,
    result: "win", 
    highlight: true,
    playerOfMatch: true 
  },
];

export const PlayerMatches = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Section Header with improved hierarchy */}
      <div className="mb-12 space-y-4 animate-fade-in">
        <div className="flex items-center gap-4">
          <div className="w-2 h-16 bg-gradient-to-b from-primary to-accent rounded-full" />
          <div>
            <h2 className="text-5xl md:text-6xl font-display font-black text-foreground uppercase tracking-tight glow-text">
              Battle Log
            </h2>
            <p className="text-lg text-muted-foreground font-body mt-2 tracking-wide">
              Recent Performance History
            </p>
          </div>
        </div>
      </div>

      {/* Stats Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="gradient-card border-primary/30 p-6 hover-lift group">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Matches</div>
          <div className="text-4xl font-display font-black text-primary group-hover:scale-110 transition-transform">{recentMatches.length}</div>
        </Card>
        <Card className="gradient-card border-success/30 p-6 hover-lift group">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Wins</div>
          <div className="text-4xl font-display font-black text-success group-hover:scale-110 transition-transform">
            {recentMatches.filter(m => m.result === 'win').length}
          </div>
        </Card>
        <Card className="gradient-card border-accent/30 p-6 hover-lift group">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Avg Strike Rate</div>
          <div className="text-4xl font-display font-black text-accent group-hover:scale-110 transition-transform">
            {Math.round(recentMatches.reduce((acc, m) => acc + m.strikeRate, 0) / recentMatches.length)}
          </div>
        </Card>
        <Card className="gradient-card border-primary/30 p-6 hover-lift group">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">MVP Awards</div>
          <div className="text-4xl font-display font-black text-primary group-hover:scale-110 transition-transform">
            {recentMatches.filter(m => m.playerOfMatch).length}
          </div>
        </Card>
      </div>

      {/* Match Cards */}
      <div className="space-y-4">
        {recentMatches.map((match, index) => (
          <Card 
            key={index}
            className={`gradient-card border-2 p-6 md:p-8 hover-lift animate-slide-in-right relative overflow-hidden group ${
              match.highlight ? 'border-primary/60 bg-primary/5' : 'border-border/50'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Background effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Result Icon - LARGE */}
              <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center ${
                match.result === "win" 
                  ? "bg-success/20 border-3 border-success/60 shadow-lg shadow-success/30" 
                  : "bg-destructive/20 border-3 border-destructive/60 shadow-lg shadow-destructive/30"
              } group-hover:scale-110 transition-transform`}>
                {match.result === "win" ? (
                  <Trophy className={`w-8 h-8 md:w-10 md:h-10 ${match.result === "win" ? "text-success" : "text-destructive"}`} />
                ) : (
                  <TrendingDown className="w-8 h-8 md:w-10 md:h-10 text-destructive" />
                )}
              </div>

              {/* Match Info */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
                {/* Opponent & Format - 3 cols */}
                <div className="md:col-span-3 space-y-2">
                  <div className="text-2xl md:text-3xl font-display font-black text-foreground group-hover:text-primary transition-colors">
                    {match.opponent}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-sm font-display font-bold border-2 border-primary/50 text-primary px-3 py-1">
                      {match.format}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="font-body">{match.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="font-body">{match.venue}</span>
                  </div>
                </div>

                {/* Batting Stats - 3 cols */}
                <div className="md:col-span-3 space-y-2 p-4 bg-muted/30 rounded-lg border border-border/30">
                  <div className="text-xs text-muted-foreground font-body uppercase tracking-wider">Batting Performance</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-display font-black text-foreground">{match.runs}</span>
                    <span className="text-lg text-muted-foreground font-body">({match.balls})</span>
                  </div>
                </div>

                {/* Strike Rate - 2 cols */}
                <div className="md:col-span-2 space-y-2 p-4 bg-muted/30 rounded-lg border border-border/30">
                  <div className="text-xs text-muted-foreground font-body uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-accent" />
                    Strike Rate
                  </div>
                  <div className={`text-2xl font-display font-black ${
                    match.strikeRate > 150 ? 'text-success' : 
                    match.strikeRate > 120 ? 'text-primary' : 
                    'text-foreground'
                  }`}>
                    {match.strikeRate.toFixed(1)}
                  </div>
                </div>

                {/* Bowling Stats - 2 cols */}
                <div className="md:col-span-2 space-y-2 p-4 bg-muted/30 rounded-lg border border-border/30">
                  <div className="text-xs text-muted-foreground font-body uppercase tracking-wider flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-accent" />
                    Bowling
                  </div>
                  {match.wickets !== undefined ? (
                    <div className="space-y-1">
                      <div className="text-2xl font-display font-black text-accent">{match.wickets}W</div>
                      <div className="text-xs text-muted-foreground">{match.economy} eco</div>
                    </div>
                  ) : (
                    <div className="text-sm text-muted-foreground font-body">—</div>
                  )}
                </div>

                {/* Highlight Badges - 2 cols */}
                <div className="md:col-span-2 flex flex-col gap-2">
                  {match.playerOfMatch && (
                    <Badge className="bg-gradient-to-r from-accent to-accent-glow text-accent-foreground border-2 border-accent/60 font-display font-black uppercase px-3 py-1.5 text-sm shadow-lg shadow-accent/30 whitespace-nowrap">
                      ⭐ Player of Match
                    </Badge>
                  )}
                  {match.highlight && !match.playerOfMatch && (
                    <Badge className="bg-primary/20 text-primary border-2 border-primary/50 font-display uppercase px-3 py-1.5 text-sm whitespace-nowrap">
                      ★ Highlight
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

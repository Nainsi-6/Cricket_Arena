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
    <div className="container mx-auto px-6 py-8">
      
      {/* Section Header with aggressive compression */}
      <div className="mb-8 space-y-2 animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="w-2 h-10 bg-gradient-to-b from-primary to-accent rounded-full" />
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-black text-foreground uppercase tracking-tight glow-text">
              Matches
            </h2>
            <p className="text-sm text-muted-foreground font-body mt-1 tracking-wide">
              Recent Performance History
            </p>
          </div>
        </div>
      </div>

      {/* Stats Summary Cards - REVISED LAYOUT for better horizontal use */}
      {/* Use flexbox with gap and allow wrapping for a more dynamic layout,
          or explicitly define grid columns that allow for narrower cards.
          For this, I'll use a specific grid pattern for smaller items. */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 mb-6"> 
        <Card className="gradient-card border-primary/30 p-4 hover-lift group col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2"> {/* Adjusted column spans for different breakpoints */}
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Matches</div>
          <div className="text-2xl font-display font-black text-primary group-hover:scale-110 transition-transform">{recentMatches.length}</div>
        </Card>
        <Card className="gradient-card border-success/30 p-4 hover-lift group col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Wins</div>
          <div className="text-2xl font-display font-black text-success group-hover:scale-110 transition-transform">
            {recentMatches.filter(m => m.result === 'win').length}
          </div>
        </Card>
        <Card className="gradient-card border-accent/30 p-4 hover-lift group col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Avg Strike Rate</div>
          <div className="text-2xl font-display font-black text-accent group-hover:scale-110 transition-transform">
            {Math.round(recentMatches.reduce((acc, m) => acc + m.strikeRate, 0) / recentMatches.length)}
          </div>
        </Card>
        <Card className="gradient-card border-primary/30 p-4 hover-lift group col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">MVP Awards</div>
          <div className="text-2xl font-display font-black text-primary group-hover:scale-110 transition-transform">
            {recentMatches.filter(m => m.playerOfMatch).length}
          </div>
        </Card>
      </div>

      {/* Match Cards - Compressed */}
      <div className="space-y-3">
        {recentMatches.map((match, index) => (
          <Card 
            key={index}
            className={`gradient-card border-2 p-4 md:p-5 hover-lift animate-slide-in-right relative overflow-hidden group ${
              match.highlight ? 'border-primary/60 bg-primary/5' : 'border-border/50'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Background effect on hover (unchanged) */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4">
              
              {/* Result Icon - Smaller */}
              <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center ${
                match.result === "win" 
                  ? "bg-success/20 border-3 border-success/60 shadow-lg shadow-success/30" 
                  : "bg-destructive/20 border-3 border-destructive/60 shadow-lg shadow-destructive/30"
              } group-hover:scale-110 transition-transform`}>
                {match.result === "win" ? (
                  <Trophy className={`w-6 h-6 md:w-8 md:h-8 ${match.result === "win" ? "text-success" : "text-destructive"}`} />
                ) : (
                  <TrendingDown className="w-6 h-6 md:w-8 md:h-8 text-destructive" />
                )}
              </div>

              {/* Match Info Grid */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 items-center w-full">
                
                {/* Opponent & Format - Tighter Spacing */}
                <div className="md:col-span-3 space-y-1">
                  <div className="text-xl md:text-2xl font-display font-black text-foreground group-hover:text-primary transition-colors">
                    {match.opponent}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-xs font-display font-bold border-2 border-primary/50 text-primary px-2 py-0.5">
                      {match.format}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span className="font-body">{match.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span className="font-body">{match.venue}</span>
                  </div>
                </div>

                {/* Batting Stats - Compressed */}
                <div className="md:col-span-3 space-y-1 p-3 bg-muted/30 rounded-lg border border-border/30">
                  <div className="text-xs text-muted-foreground font-body uppercase tracking-wider">Batting Performance</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-display font-black text-foreground">{match.runs}</span>
                    <span className="text-base text-muted-foreground font-body">({match.balls})</span>
                  </div>
                </div>

                {/* Strike Rate - Compressed */}
                <div className="md:col-span-2 space-y-1 p-3 bg-muted/30 rounded-lg border border-border/30">
                  <div className="text-xs text-muted-foreground font-body uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-accent" />
                    Strike Rate
                  </div>
                  <div className={`text-xl font-display font-black ${
                    match.strikeRate > 150 ? 'text-success' : 
                    match.strikeRate > 120 ? 'text-primary' : 
                    'text-foreground'
                  }`}>
                    {match.strikeRate.toFixed(1)}
                  </div>
                </div>

                {/* Bowling Stats - Compressed */}
                <div className="md:col-span-2 space-y-1 p-3 bg-muted/30 rounded-lg border border-border/30">
                  <div className="text-xs text-muted-foreground font-body uppercase tracking-wider flex items-center gap-1.5">
                    <Target className="w-3 h-3 text-accent" />
                    Bowling
                  </div>
                  {match.wickets !== undefined ? (
                    <div className="space-y-1">
                      <div className="text-xl font-display font-black text-accent">{match.wickets}W</div>
                      <div className="text-xs text-muted-foreground">{match.economy} eco</div>
                    </div>
                  ) : (
                    <div className="text-sm text-muted-foreground font-body">—</div>
                  )}
                </div>

                {/* Highlight Badges - Tighter spacing */}
                <div className="md:col-span-2 flex flex-col gap-1 justify-center">
                  {match.playerOfMatch && (
                    <Badge className="bg-gradient-to-r from-accent to-accent-glow text-accent-foreground border-2 border-accent/60 font-display font-black uppercase px-2 py-1 text-xs shadow-lg shadow-accent/30 whitespace-nowrap">
                      ⭐ Player of Match
                    </Badge>
                  )}
                  {match.highlight && !match.playerOfMatch && (
                    <Badge className="bg-primary/20 text-primary border-2 border-primary/50 font-display uppercase px-2 py-1 text-xs whitespace-nowrap">
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
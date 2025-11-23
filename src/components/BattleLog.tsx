import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Zap, TrendingUp, TrendingDown } from "lucide-react";

interface Match {
  opponent: string;
  format: string;
  runs: number;
  balls: number;
  strikeRate: number;
  wickets?: number;
  result: "win" | "loss";
  highlight: boolean;
}

const recentMatches: Match[] = [
  { opponent: "vs Australia", format: "T20I", runs: 52, balls: 28, strikeRate: 185.7, result: "win", highlight: true },
  { opponent: "vs England", format: "ODI", runs: 71, balls: 55, strikeRate: 129.1, wickets: 2, result: "win", highlight: false },
  { opponent: "vs South Africa", format: "T20I", runs: 31, balls: 24, strikeRate: 129.2, result: "loss", highlight: false },
  { opponent: "vs New Zealand", format: "ODI", runs: 45, balls: 38, strikeRate: 118.4, wickets: 1, result: "win", highlight: false },
  { opponent: "vs Pakistan", format: "T20I", runs: 67, balls: 35, strikeRate: 191.4, wickets: 3, result: "win", highlight: true },
];

export const BattleLog = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-display font-bold text-foreground uppercase tracking-wide mb-2">
          Battle Log
        </h2>
        <p className="text-muted-foreground font-body">
          Recent performance history
        </p>
      </div>

      <div className="space-y-3">
        {recentMatches.map((match, index) => (
          <Card 
            key={index}
            className={`gradient-card border-border/50 p-6 hover-lift animate-slide-in-right ${
              match.highlight ? 'border-primary/50 bg-primary/5' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-6">
              {/* Result Icon */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                match.result === "win" 
                  ? "bg-success/20 border-2 border-success/50" 
                  : "bg-destructive/20 border-2 border-destructive/50"
              }`}>
                {match.result === "win" ? (
                  <Trophy className={`w-6 h-6 ${match.result === "win" ? "text-success" : "text-destructive"}`} />
                ) : (
                  <TrendingDown className="w-6 h-6 text-destructive" />
                )}
              </div>

              {/* Match Info */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                {/* Opponent & Format */}
                <div>
                  <div className="text-lg font-display font-bold text-foreground">
                    {match.opponent}
                  </div>
                  <Badge variant="outline" className="mt-1 text-xs font-display">
                    {match.format}
                  </Badge>
                </div>

                {/* Batting Stats */}
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground font-body uppercase">Batting</div>
                  <div className="font-display font-bold text-foreground">
                    {match.runs}
                    <span className="text-sm text-muted-foreground">({match.balls})</span>
                  </div>
                </div>

                {/* Strike Rate */}
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground font-body uppercase flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Strike Rate
                  </div>
                  <div className={`font-display font-bold ${
                    match.strikeRate > 150 ? 'text-success' : 
                    match.strikeRate > 120 ? 'text-primary' : 
                    'text-foreground'
                  }`}>
                    {match.strikeRate.toFixed(1)}
                  </div>
                </div>

                {/* Wickets (if any) */}
                <div className="space-y-1">
                  {match.wickets !== undefined ? (
                    <>
                      <div className="text-xs text-muted-foreground font-body uppercase flex items-center gap-1">
                        <Target className="w-3 h-3" />
                        Wickets
                      </div>
                      <div className="font-display font-bold text-accent">
                        {match.wickets}
                      </div>
                    </>
                  ) : (
                    <div className="text-xs text-muted-foreground font-body">—</div>
                  )}
                </div>
              </div>

              {/* Highlight Badge */}
              {match.highlight && (
                <div className="flex-shrink-0">
                  <Badge className="bg-accent/20 text-accent border-accent/50 font-display uppercase px-3 py-1">
                    ⭐ MVP
                  </Badge>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

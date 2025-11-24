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
  { opponent: "vs West Indies", format: "Test", runs: 12, balls: 18, strikeRate: 66.6, wickets: 5, result: "win", highlight: true }, 
  { opponent: "vs Australia", format: "T20I", runs: 52, balls: 28, strikeRate: 185.7, result: "win", highlight: true },
  { opponent: "vs England", format: "ODI", runs: 71, balls: 55, strikeRate: 129.1, wickets: 2, result: "win", highlight: false },
  { opponent: "vs South Africa", format: "T20I", runs: 31, balls: 24, strikeRate: 129.2, result: "loss", highlight: false },
  { opponent: "vs New Zealand", format: "ODI", runs: 45, balls: 38, strikeRate: 118.4, wickets: 1, result: "win", highlight: false },
  { opponent: "vs Pakistan", format: "T20I", runs: 67, balls: 35, strikeRate: 191.4, wickets: 3, result: "win", highlight: true },
];

export const BattleLog = () => {
  return (
    <div className="container mx-auto px-3 sm:px-6 py-4 sm:py-8">
      
      {/* Section Header - Responsive */}
      <div className="mb-4 sm:mb-6 space-y-0.5 sm:space-y-1">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground uppercase tracking-wide mb-0.5 sm:mb-1">
          Battle Log
        </h2>
        <p className="text-muted-foreground font-body text-xs sm:text-sm md:text-base">
          Recent performance history
        </p>
      </div>

      {/* Match Cards - Responsive spacing */}
      <div className="space-y-2 sm:space-y-3">
        {recentMatches.map((match, index) => (
          <Card 
            key={index}
            className={`gradient-card border-border/50 p-3 sm:p-4 hover-lift animate-slide-in-right ${
              match.highlight ? 'border-primary/50 bg-primary/5' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Mobile: Vertical Stack, Desktop: Horizontal Layout */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              
              {/* Result Icon - Responsive size */}
              <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${
                match.result === "win" 
                  ? "bg-success/20 border-2 border-success/50" 
                  : "bg-destructive/20 border-2 border-destructive/50"
              }`}>
                {match.result === "win" ? (
                  <Trophy className={`w-4 h-4 sm:w-5 sm:h-5 ${match.result === "win" ? "text-success" : "text-destructive"}`} />
                ) : (
                  <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-destructive" />
                )}
              </div>

              {/* Match Info Grid - Responsive */}
              <div className="flex-1 w-full">
                
                {/* Mobile Layout: Stacked sections */}
                <div className="block sm:hidden space-y-3 w-full">
                  {/* Opponent & Format & MVP */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="text-base font-display font-bold text-foreground leading-tight">
                        {match.opponent}
                      </div>
                      <Badge variant="outline" className="text-xs font-display px-2 py-0.5">
                        {match.format}
                      </Badge>
                    </div>
                    {match.highlight && (
                      <Badge className="bg-accent/20 text-accent border-accent/50 font-display uppercase px-2 py-0.5 text-[10px] flex-shrink-0">
                        ⭐ MVP
                      </Badge>
                    )}
                  </div>

                  {/* Stats in single column layout */}
                  <div className="space-y-2 bg-muted/20 rounded-lg p-3 border border-border/30">
                    {/* Batting */}
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground font-body uppercase">Batting</div>
                      <div className="font-display font-bold text-foreground text-base">
                        {match.runs}
                        <span className="text-xs text-muted-foreground ml-1">({match.balls})</span>
                      </div>
                    </div>

                    {/* Strike Rate */}
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground font-body uppercase flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        Strike Rate
                      </div>
                      <div className={`font-display font-bold text-base ${
                        match.strikeRate > 150 ? 'text-success' : 
                        match.strikeRate > 120 ? 'text-primary' : 
                        'text-foreground'
                      }`}>
                        {match.strikeRate.toFixed(1)}
                      </div>
                    </div>

                    {/* Wickets */}
                    {match.wickets !== undefined && (
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-muted-foreground font-body uppercase flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          Wickets
                        </div>
                        <div className="font-display font-bold text-accent text-base">
                          {match.wickets}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Desktop Layout: Grid */}
                <div className="hidden sm:grid sm:grid-cols-12 gap-3 items-center">
                  
                  {/* 1. Opponent & Format (3 cols) */}
                  <div className="col-span-3 space-y-0.5">
                    <div className="text-lg md:text-xl font-display font-bold text-foreground">
                      {match.opponent}
                    </div>
                    <Badge variant="outline" className="mt-1 text-xs sm:text-sm font-display px-2 py-0.5">
                      {match.format}
                    </Badge>
                  </div>

                  {/* 2. Batting Stats (3 cols) */}
                  <div className="col-span-3 space-y-0.5">
                    <div className="text-sm md:text-base text-muted-foreground font-body uppercase">Batting</div> 
                    <div className="font-display font-bold text-foreground text-base md:text-lg"> 
                      {match.runs}
                      <span className="text-xs sm:text-sm text-muted-foreground">({match.balls})</span>
                    </div>
                  </div>

                  {/* 3. Strike Rate (2 cols) */}
                  <div className="col-span-2 space-y-0.5">
                    <div className="text-sm md:text-base text-muted-foreground font-body uppercase flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      SR
                    </div>
                    <div className={`font-display font-bold text-base md:text-lg ${
                      match.strikeRate > 150 ? 'text-success' : 
                      match.strikeRate > 120 ? 'text-primary' : 
                      'text-foreground'
                    }`}>
                      {match.strikeRate.toFixed(1)}
                    </div>
                  </div>

                  {/* 4. Wickets (2 cols) */}
                  <div className="col-span-2 space-y-0.5">
                    {match.wickets !== undefined ? (
                      <>
                        <div className="text-sm md:text-base text-muted-foreground font-body uppercase flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          Wkts
                        </div>
                        <div className="font-display font-bold text-accent text-base md:text-lg">
                          {match.wickets}
                        </div>
                      </>
                    ) : (
                      <div className="text-sm md:text-base text-muted-foreground font-body">—</div>
                    )}
                  </div>
                  
                  {/* 5. Highlight Badge (2 cols) */}
                  <div className="col-span-2 flex justify-end">
                    {match.highlight && (
                      <div className="flex-shrink-0">
                        <Badge className="bg-accent/20 text-accent border-accent/50 font-display uppercase px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm">
                          ⭐ MVP
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
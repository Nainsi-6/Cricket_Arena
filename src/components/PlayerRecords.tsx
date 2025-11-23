import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Zap } from "lucide-react";

export const PlayerRecords = () => {
  return (
    <div className="container mx-auto px-6 py-12 space-y-8">
      <div className="space-y-2 animate-fade-in">
        <h2 className="text-4xl font-display font-black text-foreground uppercase tracking-wider glow-text">
          Career Records & Achievements
        </h2>
        <p className="text-muted-foreground font-body text-lg">Legendary moments and milestones</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-gradient-card border-border/50 p-6 hover-lift animate-fade-in group" style={{ animationDelay: '0.1s' }}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <Badge className="bg-primary/20 text-primary border-primary/50 px-3 py-1 font-display font-bold uppercase">
                Batting
              </Badge>
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wide">Highest Score</p>
                <p className="text-3xl font-display font-black text-primary">108</p>
                <p className="text-sm text-foreground/70 font-body">vs Sri Lanka, Pallekele, 2017</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wide">Best Strike Rate (Min 500 runs)</p>
                <p className="text-3xl font-display font-black text-primary">142.24</p>
                <p className="text-sm text-foreground/70 font-body">T20 Format</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-card border-border/50 p-6 hover-lift animate-fade-in group" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <Badge className="bg-accent/20 text-accent border-accent/50 px-3 py-1 font-display font-bold uppercase">
                Bowling
              </Badge>
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wide">Best Bowling</p>
                <p className="text-3xl font-display font-black text-accent">5/28</p>
                <p className="text-sm text-foreground/70 font-body">vs England, Trent Bridge, 2018</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wide">Total Wickets</p>
                <p className="text-3xl font-display font-black text-accent">208</p>
                <p className="text-sm text-foreground/70 font-body">T20 Format</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-card border-border/50 p-6 hover-lift animate-fade-in group" style={{ animationDelay: '0.3s' }}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-success" />
              </div>
              <Badge className="bg-success/20 text-success border-success/50 px-3 py-1 font-display font-bold uppercase">
                Special
              </Badge>
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wide">Most Sixes</p>
                <p className="text-3xl font-display font-black text-success">299</p>
                <p className="text-sm text-foreground/70 font-body">T20 Career</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wide">All-Round Performance</p>
                <p className="text-3xl font-display font-black text-success">50+ & 3W</p>
                <p className="text-sm text-foreground/70 font-body">Multiple matches</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card className="bg-gradient-card border-border/50 p-8 hover-lift animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h3 className="text-2xl font-display font-black text-foreground uppercase tracking-wider mb-6">Championships & Honors</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300">
            <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-display font-bold text-foreground">IPL Champion</p>
              <p className="text-sm text-muted-foreground font-body">Mumbai Indians (2015, 2017, 2019, 2020)</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300">
            <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-display font-bold text-foreground">ICC Champions Trophy</p>
              <p className="text-sm text-muted-foreground font-body">Winner (2013)</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30 hover:border-accent/50 transition-all duration-300">
            <div className="w-10 h-10 rounded bg-accent/20 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-display font-bold text-foreground">T20 World Cup</p>
              <p className="text-sm text-muted-foreground font-body">Runner-up (2014)</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30 hover:border-accent/50 transition-all duration-300">
            <div className="w-10 h-10 rounded bg-accent/20 flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-display font-bold text-foreground">IPL Player of the Match</p>
              <p className="text-sm text-muted-foreground font-body">Multiple Awards</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

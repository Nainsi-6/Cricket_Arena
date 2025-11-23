import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Zap, Shield, TrendingUp, Award, Star } from "lucide-react";

interface StatBar {
  label: string;
  value: number;
  max: number;
  icon: React.ReactNode;
  color: string;
}

const statBars: StatBar[] = [
  { label: "Power", value: 92, max: 100, icon: <Zap className="w-5 h-5" />, color: "accent" },
  { label: "Accuracy", value: 85, max: 100, icon: <Target className="w-5 h-5" />, color: "primary" },
  { label: "Defense", value: 78, max: 100, icon: <Shield className="w-5 h-5" />, color: "success" },
  { label: "Technique", value: 88, max: 100, icon: <Star className="w-5 h-5" />, color: "primary" },
  { label: "Fitness", value: 94, max: 100, icon: <TrendingUp className="w-5 h-5" />, color: "accent" },
  { label: "Leadership", value: 82, max: 100, icon: <Award className="w-5 h-5" />, color: "success" }
];

interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: string;
}

const achievements: Achievement[] = [
  {
    title: "ICC T20 World Cup Winner",
    description: "Key player in India's championship victory",
    year: "2024",
    icon: "🏆"
  },
  {
    title: "IPL Champion",
    description: "Led team to IPL glory with stellar performances",
    year: "2023",
    icon: "👑"
  },
  {
    title: "Fastest T20I Fifty",
    description: "Scored fifty in just 17 balls",
    year: "2024",
    icon: "⚡"
  },
  {
    title: "Man of the Series",
    description: "Outstanding all-round performance",
    year: "2025",
    icon: "⭐"
  }
];

export const PlayerAttributes = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Section Header */}
      <div className="mb-12 space-y-4 animate-fade-in">
        <div className="flex items-center gap-4">
          <div className="w-2 h-16 bg-gradient-to-b from-primary via-accent to-success rounded-full" />
          <div>
            <h2 className="text-5xl md:text-6xl font-display font-black text-foreground uppercase tracking-tight glow-text">
              Player Stats
            </h2>
            <p className="text-lg text-muted-foreground font-body mt-2 tracking-wide">
              Comprehensive Ability Breakdown
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Ability Stats */}
        <Card className="gradient-card border-2 border-primary/30 p-8 space-y-6 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-black text-foreground uppercase">Core Abilities</h3>
          </div>

          {statBars.map((stat, index) => (
            <div 
              key={index} 
              className="space-y-2 animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`text-${stat.color}`}>
                    {stat.icon}
                  </div>
                  <span className="text-sm font-display font-bold uppercase tracking-wider text-foreground">
                    {stat.label}
                  </span>
                </div>
                <span className={`text-2xl font-display font-black text-${stat.color}`}>
                  {stat.value}
                </span>
              </div>
              
              {/* Animated stat bar */}
              <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`absolute left-0 top-0 h-full bg-gradient-to-r from-${stat.color} to-${stat.color}-glow rounded-full animate-stat-fill shadow-lg shadow-${stat.color}/30`}
                  style={{ 
                    '--stat-width': `${(stat.value / stat.max) * 100}%`,
                    width: 0
                  } as React.CSSProperties}
                />
                {/* Glow effect */}
                <div 
                  className={`absolute left-0 top-0 h-full bg-${stat.color} rounded-full opacity-50 blur-sm animate-stat-fill`}
                  style={{ 
                    '--stat-width': `${(stat.value / stat.max) * 100}%`,
                    width: 0
                  } as React.CSSProperties}
                />
              </div>
            </div>
          ))}

          {/* Overall Rating Circle */}
          <div className="pt-6 border-t-2 border-border/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Overall Rating</div>
                <div className="text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-success glow-text">
                  87
                </div>
              </div>
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-accent to-success flex items-center justify-center animate-float shadow-xl shadow-primary/30">
                <div className="w-28 h-28 rounded-full bg-card flex items-center justify-center">
                  <div className="text-5xl">🌟</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Achievements */}
        <div className="space-y-6">
          <Card className="gradient-card border-2 border-accent/30 p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-black text-foreground uppercase">Achievements</h3>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="p-5 bg-muted/30 rounded-xl border-2 border-border/30 hover:border-accent/50 hover:bg-muted/40 transition-all duration-300 hover:scale-105 group cursor-pointer animate-slide-in-right"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-display font-bold text-foreground group-hover:text-accent transition-colors">
                          {achievement.title}
                        </h4>
                        <Badge className="bg-accent/20 text-accent border border-accent/50 font-display text-xs px-2 py-1">
                          {achievement.year}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground font-body">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Career Stats Summary */}
          <Card className="gradient-card border-2 border-success/30 p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-2xl font-display font-black text-foreground uppercase">Career Stats</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
                <div className="text-xs text-muted-foreground uppercase mb-2">Matches</div>
                <div className="text-3xl font-display font-black text-primary">234</div>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
                <div className="text-xs text-muted-foreground uppercase mb-2">Runs</div>
                <div className="text-3xl font-display font-black text-accent">5,842</div>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
                <div className="text-xs text-muted-foreground uppercase mb-2">Wickets</div>
                <div className="text-3xl font-display font-black text-success">167</div>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
                <div className="text-xs text-muted-foreground uppercase mb-2">Avg</div>
                <div className="text-3xl font-display font-black text-primary">32.4</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

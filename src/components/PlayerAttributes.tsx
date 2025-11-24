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
  { label: "Power", value: 92, max: 100, icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, color: "accent" },
  { label: "Accuracy", value: 85, max: 100, icon: <Target className="w-4 h-4 sm:w-5 sm:h-5" />, color: "primary" },
  { label: "Defense", value: 78, max: 100, icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />, color: "success" },
  { label: "Technique", value: 88, max: 100, icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />, color: "primary" },
  { label: "Fitness", value: 94, max: 100, icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />, color: "accent" },
  { label: "Leadership", value: 82, max: 100, icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />, color: "success" }
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
    <div className="container mx-auto px-3 sm:px-6 py-4 sm:py-6">
      
      {/* Section Header */}
      <div className="mb-4 sm:mb-6 space-y-1 sm:space-y-2 animate-fade-in"> 
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-primary via-accent to-success rounded-full" />
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-foreground uppercase tracking-tight glow-text">
              Player Stats
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground font-body tracking-wide">
              Comprehensive Ability Breakdown
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Ability Stats Card */}
        <Card className="gradient-card border-2 border-primary/30 p-4 sm:p-6 space-y-3 sm:space-y-4 animate-fade-in">
          
          {/* Overall Rating Summary Box */}
          <div className="pb-3 sm:pb-4 mb-3 sm:mb-4 border-b-2 border-border/30">
            <div className="flex items-center justify-between">
              
              <div className="flex flex-col justify-center"> 
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Overall Rating</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-success glow-text">
                  87
                </div>
              </div>
              
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary via-accent to-success flex items-center justify-center shadow-xl shadow-primary/30">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-card flex items-center justify-center">
                  <div className="text-2xl sm:text-3xl">🌟</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Core Abilities Header */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            </div>
            <h3 className="text-base sm:text-lg font-display font-black text-foreground uppercase">Core Abilities</h3>
          </div>
          
          {/* Stat Bars */}
          {statBars.map((stat, index) => (
            <div 
              key={index} 
              className="space-y-1 animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className={`text-${stat.color}`}>
                    {stat.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-foreground">
                    {stat.label}
                  </span>
                </div>
                <span className={`text-base sm:text-lg font-display font-black text-${stat.color}`}>
                  {stat.value}
                </span>
              </div>
              
              <div className="relative h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`absolute left-0 top-0 h-full bg-gradient-to-r from-${stat.color} to-${stat.color}-glow rounded-full animate-stat-fill shadow-lg shadow-${stat.color}/30`}
                  style={{ 
                    '--stat-width': `${(stat.value / stat.max) * 100}%`,
                    width: 0
                  } as React.CSSProperties}
                />
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
        </Card>

        {/* Achievements and Career Stats (Second column) */}
        <div className="space-y-4 sm:space-y-6">
          
          {/* Achievements Card */}
          <Card className="gradient-card border-2 border-accent/30 p-4 sm:p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              </div>
              <h3 className="text-base sm:text-xl font-display font-black text-foreground uppercase">Achievements</h3>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="p-2.5 sm:p-3 bg-muted/30 rounded-lg sm:rounded-xl border-2 border-border/30 hover:border-accent/50 hover:bg-muted/40 transition-all duration-300 hover:scale-105 group cursor-pointer animate-slide-in-right"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="text-xl sm:text-2xl group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-0.5 sm:mb-1">
                        <h4 className="text-sm sm:text-base font-display font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
                          {achievement.title}
                        </h4>
                        <Badge className="bg-accent/20 text-accent border border-accent/50 font-display text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 flex-shrink-0">
                          {achievement.year}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground font-body line-clamp-2">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Career Stats Summary Card */}
          <Card className="gradient-card border-2 border-success/30 p-4 sm:p-5 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-success/20 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
              </div>
              <h3 className="text-base sm:text-xl font-display font-black text-foreground uppercase">Career Stats</h3>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="p-2.5 sm:p-3 bg-muted/30 rounded-lg border border-border/30 hover:border-primary/50 hover:bg-muted/40 transition-all duration-300">
                <div className="text-xs text-muted-foreground uppercase mb-0.5 sm:mb-1">Matches</div>
                <div className="text-lg sm:text-xl font-display font-black text-primary">234</div>
              </div>
              <div className="p-2.5 sm:p-3 bg-muted/30 rounded-lg border border-border/30 hover:border-accent/50 hover:bg-muted/40 transition-all duration-300">
                <div className="text-xs text-muted-foreground uppercase mb-0.5 sm:mb-1">Runs</div>
                <div className="text-lg sm:text-xl font-display font-black text-accent">5,842</div>
              </div>
              <div className="p-2.5 sm:p-3 bg-muted/30 rounded-lg border border-border/30 hover:border-success/50 hover:bg-muted/40 transition-all duration-300">
                <div className="text-xs text-muted-foreground uppercase mb-0.5 sm:mb-1">Wickets</div>
                <div className="text-lg sm:text-xl font-display font-black text-success">167</div>
              </div>
              <div className="p-2.5 sm:p-3 bg-muted/30 rounded-lg border border-border/30 hover:border-primary/50 hover:bg-muted/40 transition-all duration-300">
                <div className="text-xs text-muted-foreground uppercase mb-0.5 sm:mb-1">Avg</div>
                <div className="text-lg sm:text-xl font-display font-black text-primary">32.4</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
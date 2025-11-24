import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Target, Shield, Flame, TrendingUp, Cpu } from "lucide-react";

interface Ability {
  name: string;
  description: string;
  stats: string;
  icon: any;
  type: "signature" | "ultimate" | "passive";
}

const abilities: Ability[] = [
  {
    name: "The Finisher",
    description: "Unleashes devastating power in death overs. Strike rate increases by 40% in final 5 overs.",
    stats: "40*(15) vs Australia, T20 World Cup",
    icon: Flame,
    type: "signature",
  },
  {
    name: "Death Over Mastery",
    description: "Elite ability to bowl yorkers and slower balls when it matters most. Economy drops by 25% in pressure situations.",
    stats: "3/17 vs Pakistan, Final Over Defense",
    icon: Target,
    type: "ultimate",
  },
  {
    name: "All-Phase Dominance",
    description: "Versatile performance across formats. Can adapt batting strategy based on match situation.",
    stats: "T20: SR 145 | ODI: AVG 35+ | Tests: 50+ AVG",
    icon: Shield,
    type: "passive",
  },
  {
    name: "Power Surge",
    description: "Extraordinary six-hitting ability from the first ball. Known for launching momentum shifts.",
    stats: "6s in Powerplay: 47% success rate",
    icon: Zap,
    type: "signature",
  },
];

const getTypeBadgeColor = (type: Ability["type"]) => {
  switch (type) {
    case "signature": return "bg-accent/20 text-accent border-accent/50";
    case "ultimate": return "bg-primary/20 text-primary border-primary/50";
    case "passive": return "bg-success/20 text-success border-success/50";
  }
};

export const PlayerAbilities = () => {
  return (
    <div className="container mx-auto px-3 sm:px-6 py-4 sm:py-8 bg-gradient-to-b from-transparent via-card/20 to-transparent">
      
      {/* Section Header - Responsive */}
      <div className="mb-4 sm:mb-6 space-y-0.5 sm:space-y-1"> 
        <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground uppercase tracking-wide mb-0.5 sm:mb-1">
          Signature Abilities
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground font-body">
          Career-defining performances transformed into special skills
        </p>
      </div>

      {/* Main Abilities Grid - Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {abilities.map((ability, index) => {
          const Icon = ability.icon;
          return (
            <Card 
              key={ability.name} 
              className="gradient-card border-border/50 p-3 sm:p-4 md:p-5 hover-lift group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-2 sm:gap-3">
                
                {/* Icon - Responsive Size */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/50 flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 space-y-1.5 sm:space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-body font-bold text-foreground uppercase tracking-wide leading-tight">
                      {ability.name}
                    </h3>
                    <Badge className={`${getTypeBadgeColor(ability.type)} font-body text-[10px] sm:text-xs uppercase px-1.5 sm:px-2 py-0.5 flex-shrink-0`}>
                      {ability.type}
                    </Badge>
                  </div>

                  {/* Description - Responsive */}
                  <p className="text-xs sm:text-sm text-muted-foreground font-body leading-relaxed">
                    {ability.description}
                  </p>

                  {/* Key Performance Stats - Responsive */}
                  <div className="pt-1.5 sm:pt-2 border-t border-border/30">
                    <div className="text-[10px] sm:text-xs text-muted-foreground font-body mb-0.5 uppercase tracking-wide">
                      Key Performance
                    </div>
                    <div className="text-xs sm:text-sm font-body font-semibold text-foreground/90">
                      {ability.stats}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Synergy Stats - Responsive */}
      <div className="mt-6 sm:mt-8">
        <h3 className="text-base sm:text-lg font-display font-bold text-foreground uppercase tracking-wide mb-2 sm:mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            Synergy Stats
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
            <Card className="gradient-card border-2 border-primary/30 p-3 sm:p-4 md:p-5 text-center hover-lift transition-all duration-300 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20">
                <div className="text-2xl sm:text-3xl font-display font-black text-primary mb-0.5 sm:mb-1">
                    9.1
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground font-body uppercase tracking-wide">
                    Avg Impact Rating
                </div>
            </Card>
            <Card className="gradient-card border-2 border-accent/30 p-3 sm:p-4 md:p-5 text-center hover-lift transition-all duration-300 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20">
                <div className="text-2xl sm:text-3xl font-display font-black text-accent mb-0.5 sm:mb-1">
                    88%
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground font-body uppercase tracking-wide">
                    Success Rate (Signature)
                </div>
            </Card>
            <Card className="gradient-card border-2 border-success/30 p-3 sm:p-4 md:p-5 text-center hover-lift transition-all duration-300 hover:border-success/60 hover:shadow-lg hover:shadow-success/20">
                <div className="text-2xl sm:text-3xl font-display font-black text-success mb-0.5 sm:mb-1">
                    12x
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground font-body uppercase tracking-wide">
                    Game-Changing Moments
                </div>
            </Card>
        </div>
      </div>
      
    </div>
  );
};
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Target, Shield, Flame } from "lucide-react";

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
    <div className="container mx-auto px-6 py-12 bg-gradient-to-b from-transparent via-card/20 to-transparent">
      <div className="mb-8">
        <h2 className="text-3xl font-display font-bold text-foreground uppercase tracking-wide mb-2">
          Signature Abilities
        </h2>
        <p className="text-muted-foreground font-body">
          Career-defining performances transformed into special skills
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {abilities.map((ability, index) => {
          const Icon = ability.icon;
          return (
            <Card 
              key={ability.name} 
              className="gradient-card border-border/50 p-6 hover-lift group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/50 flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-display font-bold text-foreground uppercase tracking-wide">
                      {ability.name}
                    </h3>
                    <Badge className={`${getTypeBadgeColor(ability.type)} font-display text-xs uppercase px-2 py-0.5`}>
                      {ability.type}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {ability.description}
                  </p>

                  <div className="pt-2 border-t border-border/30">
                    <div className="text-xs text-muted-foreground font-body mb-1 uppercase tracking-wide">
                      Key Performance
                    </div>
                    <div className="text-sm font-display font-semibold text-foreground/90">
                      {ability.stats}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

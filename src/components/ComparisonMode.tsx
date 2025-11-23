import { useState } from "react";
import { X, Zap, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PlayerData {
  name: string;
  role: string;
  overall: number;
  potential: number;
  attributes: {
    power: number;
    precision: number;
    tempo: number;
    defense: number;
  };
}

interface ComparisonModeProps {
  onClose: () => void;
}

export const ComparisonMode = ({ onClose }: ComparisonModeProps) => {
  const [players] = useState<PlayerData[]>([
    {
      name: "Hardik Pandya",
      role: "Sentinel",
      overall: 87,
      potential: 92,
      attributes: { power: 92, precision: 84, tempo: 88, defense: 79 }
    },
    {
      name: "Select Player",
      role: "---",
      overall: 0,
      potential: 0,
      attributes: { power: 0, precision: 0, tempo: 0, defense: 0 }
    }
  ]);

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm animate-fade-in">
      <div className="container mx-auto px-6 py-8 h-full overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-display font-black text-foreground glow-text uppercase">
              Player Comparison
            </h2>
            <p className="text-muted-foreground font-body mt-2">
              Analyze and compare player statistics side by side
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:rotate-90"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {players.map((player, idx) => (
            <div
              key={idx}
              className="bg-gradient-card rounded-lg border border-border/50 p-6 space-y-6 animate-scale-in transition-all duration-500 hover:border-primary/70 hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Player Header */}
              <div className="text-center space-y-3">
                <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full border-4 border-primary/30 flex items-center justify-center transition-all duration-300 hover:border-primary/60 hover:scale-110">
                  <span className="text-5xl font-display font-black text-primary">
                    {player.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-3xl font-display font-black text-foreground uppercase tracking-wide">
                  {player.name}
                </h3>
                <Badge className="bg-success/20 text-success border-success/50 px-4 py-1.5 font-display font-bold uppercase">
                  {player.role}
                </Badge>
              </div>

              {/* Overall Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/50 rounded-lg p-4 border border-border/30 text-center transition-all duration-300 hover:bg-background/70">
                  <div className="text-xs text-muted-foreground font-body uppercase mb-1">
                    Overall
                  </div>
                  <div className="text-4xl font-display font-black text-primary glow-text">
                    {player.overall}
                  </div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-border/30 text-center transition-all duration-300 hover:bg-background/70">
                  <div className="text-xs text-muted-foreground font-body uppercase mb-1">
                    Potential
                  </div>
                  <div className="text-4xl font-display font-black text-accent glow-text">
                    {player.potential}
                  </div>
                </div>
              </div>

              {/* Attributes Comparison */}
              <div className="space-y-4">
                <h4 className="text-sm font-display font-bold text-muted-foreground uppercase tracking-wide">
                  Core Attributes
                </h4>
                
                {/* Power */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent" />
                      <span className="text-sm font-body text-foreground">Power</span>
                    </div>
                    <span className="text-sm font-display font-bold text-foreground">
                      {player.attributes.power}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-accent/60 transition-all duration-1000 ease-out"
                      style={{ width: `${player.attributes.power}%` }}
                    />
                  </div>
                </div>

                {/* Precision */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      <span className="text-sm font-body text-foreground">Precision</span>
                    </div>
                    <span className="text-sm font-display font-bold text-foreground">
                      {player.attributes.precision}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000 ease-out"
                      style={{ width: `${player.attributes.precision}%`, animationDelay: '0.2s' }}
                    />
                  </div>
                </div>

                {/* Tempo */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-success" />
                      <span className="text-sm font-body text-foreground">Tempo</span>
                    </div>
                    <span className="text-sm font-display font-bold text-foreground">
                      {player.attributes.tempo}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-success to-success/60 transition-all duration-1000 ease-out"
                      style={{ width: `${player.attributes.tempo}%`, animationDelay: '0.4s' }}
                    />
                  </div>
                </div>

                {/* Defense */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-info" />
                      <span className="text-sm font-body text-foreground">Defense</span>
                    </div>
                    <span className="text-sm font-display font-bold text-foreground">
                      {player.attributes.defense}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-info to-info/60 transition-all duration-1000 ease-out"
                      style={{ width: `${player.attributes.defense}%`, animationDelay: '0.6s' }}
                    />
                  </div>
                </div>
              </div>

              {/* Select Button (for second player) */}
              {idx === 1 && (
                <Button className="w-full bg-primary/20 text-primary border border-primary/50 hover:bg-primary/30 font-display font-bold uppercase transition-all duration-300 hover:scale-105">
                  Select Player to Compare
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

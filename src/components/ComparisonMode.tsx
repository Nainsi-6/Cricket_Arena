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
      <div className="container mx-auto px-6 py-4 h-full overflow-auto"> {/* Reduced vertical padding: py-8 -> py-4 */}
        
        {/* Header - Compressed */}
        <div className="flex justify-between items-center mb-6"> {/* Reduced margin: mb-8 -> mb-6 */}
          <div>
            {/* Reduced title font size: text-4xl -> text-3xl */}
            <h2 className="text-3xl font-display font-black text-foreground glow-text uppercase">
              Player Comparison
            </h2>
            {/* Reduced description font size: text-base -> text-sm. Reduced margin: mt-2 -> mt-1 */}
            <p className="text-sm text-muted-foreground font-body mt-1">
              Analyze and compare player statistics side by side
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:rotate-90"
          >
            <X className="w-5 h-5" /> {/* Reduced icon size: w-6 h-6 -> w-5 h-5 */}
          </Button>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6"> {/* Reduced gap: gap-8 -> gap-6 */}
          {players.map((player, idx) => (
            <div
              key={idx}
              // Reduced card padding: p-6 -> p-4. Reduced space-y: space-y-6 -> space-y-4
              className="bg-gradient-card rounded-lg border border-border/50 p-4 space-y-4 animate-scale-in transition-all duration-500 hover:border-primary/70 hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Player Header - Compressed */}
              <div className="text-center space-y-2"> {/* Reduced space-y: space-y-3 -> space-y-2 */}
                {/* Reduced circle size: w-32 h-32 -> w-24 h-24 */}
                <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full border-4 border-primary/30 flex items-center justify-center transition-all duration-300 hover:border-primary/60 hover:scale-110">
                  {/* Reduced initial size: text-5xl -> text-4xl */}
                  <span className="text-4xl font-display font-black text-primary">
                    {player.name.charAt(0)}
                  </span>
                </div>
                {/* Reduced name font size: text-3xl -> text-2xl */}
                <h3 className="text-2xl font-display font-black text-foreground uppercase tracking-wide">
                  {player.name}
                </h3>
                {/* Reduced badge size/padding */}
                <Badge className="bg-success/20 text-success border-success/50 px-3 py-1 font-display font-bold uppercase text-sm">
                  {player.role}
                </Badge>
              </div>

              {/* Overall Stats - Compressed */}
              <div className="grid grid-cols-2 gap-3"> {/* Reduced gap: gap-4 -> gap-3 */}
                <div className="bg-background/50 rounded-lg p-3 border border-border/30 text-center transition-all duration-300 hover:bg-background/70"> {/* Reduced padding: p-4 -> p-3 */}
                  <div className="text-xs text-muted-foreground font-body uppercase mb-1">
                    Overall
                  </div>
                  {/* Reduced stat size: text-4xl -> text-3xl */}
                  <div className="text-3xl font-display font-black text-primary glow-text">
                    {player.overall}
                  </div>
                </div>
                <div className="bg-background/50 rounded-lg p-3 border border-border/30 text-center transition-all duration-300 hover:bg-background/70">
                  <div className="text-xs text-muted-foreground font-body uppercase mb-1">
                    Potential
                  </div>
                  <div className="text-3xl font-display font-black text-accent glow-text">
                    {player.potential}
                  </div>
                </div>
              </div>

              {/* Attributes Comparison - Compressed */}
              <div className="space-y-3"> {/* Reduced space-y: space-y-4 -> space-y-3 */}
                <h4 className="text-xs font-display font-bold text-muted-foreground uppercase tracking-wide"> {/* Reduced font size: text-sm -> text-xs */}
                  Core Attributes
                </h4>
                
                {/* Power */}
                <div className="space-y-1"> {/* Reduced space-y: space-y-2 -> space-y-1 */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5"> {/* Reduced gap: gap-2 -> gap-1.5 */}
                      <Zap className="w-3.5 h-3.5 text-accent" /> {/* Reduced icon size: w-4 h-4 -> w-3.5 h-3.5 */}
                      <span className="text-sm font-body text-foreground">Power</span>
                    </div>
                    <span className="text-sm font-display font-bold text-foreground">
                      {player.attributes.power}
                    </span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden"> {/* Reduced bar height: h-2 -> h-1.5 */}
                    <div
                      className="h-full bg-gradient-to-r from-accent to-accent/60 transition-all duration-1000 ease-out"
                      style={{ width: `${player.attributes.power}%` }}
                    />
                  </div>
                </div>

                {/* Precision */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-primary" />
                      <span className="text-sm font-body text-foreground">Precision</span>
                    </div>
                    <span className="text-sm font-display font-bold text-foreground">
                      {player.attributes.precision}
                    </span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000 ease-out"
                      style={{ width: `${player.attributes.precision}%`, animationDelay: '0.2s' }}
                    />
                  </div>
                </div>

                {/* Tempo */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-success" />
                      <span className="text-sm font-body text-foreground">Tempo</span>
                    </div>
                    <span className="text-sm font-display font-bold text-foreground">
                      {player.attributes.tempo}
                    </span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-success to-success/60 transition-all duration-1000 ease-out"
                      style={{ width: `${player.attributes.tempo}%`, animationDelay: '0.4s' }}
                    />
                  </div>
                </div>

                {/* Defense */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-info" />
                      <span className="text-sm font-body text-foreground">Defense</span>
                    </div>
                    <span className="text-sm font-display font-bold text-foreground">
                      {player.attributes.defense}
                    </span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-info to-info/60 transition-all duration-1000 ease-out"
                      style={{ width: `${player.attributes.defense}%`, animationDelay: '0.6s' }}
                    />
                  </div>
                </div>
              </div>

              {/* Select Button (for second player) - Compressed padding and font size */}
              {idx === 1 && (
                <Button className="w-full py-2 bg-primary/10 text-primary border border-primary/50 hover:bg-primary/30 font-display font-bold uppercase transition-all duration-300 hover:scale-105 text-sm"> {/* Reduced padding and font size */}
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
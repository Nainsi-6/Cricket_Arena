import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Award, Target } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: any;
  unlocked: boolean;
}

const milestones: Milestone[] = [
  {
    year: "2016",
    title: "Debut",
    description: "International career begins",
    icon: Star,
    unlocked: true,
  },
  {
    year: "2017",
    title: "First Century",
    description: "Maiden ODI hundred vs Australia",
    icon: Target,
    unlocked: true,
  },
  {
    year: "2019",
    title: "World Cup Hero",
    description: "Match-winning performances in WC campaign",
    icon: Trophy,
    unlocked: true,
  },
  {
    year: "2021",
    title: "T20 Mastery",
    description: "Established as T20 powerhouse",
    icon: Award,
    unlocked: true,
  },
  {
    year: "2023",
    title: "Elite Status",
    description: "Top-ranked all-rounder across formats",
    icon: Trophy,
    unlocked: true,
  },
  {
    year: "2025",
    title: "Legend Tier",
    description: "Hall of Fame trajectory",
    icon: Star,
    unlocked: false,
  },
];

export const CareerProgression = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-gradient-to-b from-card/20 to-transparent">
      <div className="mb-8">
        <h2 className="text-3xl font-display font-bold text-foreground uppercase tracking-wide mb-2">
          Career Progression
        </h2>
        <p className="text-muted-foreground font-body">
          Journey to legendary status
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Connection line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />

        <div className="space-y-8">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isLeft = index % 2 === 0;

            return (
              <div 
                key={milestone.year}
                className={`relative flex items-center ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card */}
                <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className={`gradient-card border-border/50 p-6 hover-lift ${
                    milestone.unlocked ? 'border-primary/30' : 'border-border/20 opacity-60'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        milestone.unlocked 
                          ? 'bg-primary/20 border-2 border-primary/50' 
                          : 'bg-muted/20 border-2 border-border/30'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          milestone.unlocked ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-display font-bold text-foreground uppercase">
                            {milestone.title}
                          </h3>
                          {milestone.unlocked && (
                            <Badge className="bg-success/20 text-success border-success/50 text-xs font-display uppercase">
                              Unlocked
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground font-body">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Center node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-card border-4 border-background flex items-center justify-center z-10">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    milestone.unlocked 
                      ? 'bg-primary text-primary-foreground animate-glow-pulse' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <span className="text-xs font-display font-bold">
                      {milestone.year.slice(2)}
                    </span>
                  </div>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block w-5/12" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Summary */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <Card className="gradient-card border-primary/30 p-6 text-center">
          <div className="text-4xl font-display font-black text-primary mb-2">
            {milestones.filter(m => m.unlocked).length}
          </div>
          <div className="text-sm text-muted-foreground font-body uppercase tracking-wide">
            Milestones Unlocked
          </div>
        </Card>

        <Card className="gradient-card border-accent/30 p-6 text-center">
          <div className="text-4xl font-display font-black text-accent mb-2">
            9
          </div>
          <div className="text-sm text-muted-foreground font-body uppercase tracking-wide">
            Years Active
          </div>
        </Card>

        <Card className="gradient-card border-success/30 p-6 text-center">
          <div className="text-4xl font-display font-black text-success mb-2">
            85%
          </div>
          <div className="text-sm text-muted-foreground font-body uppercase tracking-wide">
            Progression Complete
          </div>
        </Card>
      </div>
    </div>
  );
};

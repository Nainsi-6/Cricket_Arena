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
    <div className="container mx-auto px-6 py-8 bg-gradient-to-b from-card/20 to-transparent">
      
      {/* Section Header */}
      <div className="mb-6 space-y-1"> 
        <h2 className="text-2xl font-display font-bold text-foreground uppercase tracking-wide mb-1">
          Career Progression
        </h2>
        <p className="text-muted-foreground font-body text-sm">
          Journey to legendary status
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Connection line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />

        {/* Milestones - reduced spacing */}
        <div className="space-y-2"> 
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
                {/* Card Container - REDUCED GAP from center line with responsive adjustments */}
                <div className={`w-full md:w-[46%] ${isLeft ? 'pl-16 md:pl-0 md:pr-4' : 'pl-16 md:pl-4'}`}>
                  <Card className={`gradient-card border-border/50 p-3 hover-lift transition-all duration-300 ${ 
                    milestone.unlocked 
                      ? 'border-primary/30 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20' 
                      : 'border-border/20 opacity-60'
                  }`}>
                    <div className="flex items-start gap-3"> 
                      
                      {/* Icon Container */}
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        milestone.unlocked 
                          ? 'bg-primary/20 border-2 border-primary/50' 
                          : 'bg-muted/20 border-2 border-border/30'
                      }`}>
                        <Icon className={`w-4 h-4 ${
                          milestone.unlocked ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-0.5"> 
                          <h3 className="text-base font-display font-bold text-foreground uppercase tracking-wide">
                            {milestone.title}
                          </h3>
                          {milestone.unlocked && (
                            <Badge className="bg-success/20 text-success border-success/50 text-[10px] font-display uppercase px-1.5 py-0.5">
                              Unlocked
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground font-body leading-tight">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Center node - showing last 2 digits of year */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-card border-4 border-background flex items-center justify-center z-10">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                    milestone.unlocked 
                      ? 'bg-primary text-primary-foreground animate-glow-pulse' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <span className="text-[10px] font-display font-bold">
                      {milestone.year.slice(-2)}
                    </span>
                  </div>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block w-[46%]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Summary - Compact styling with max width */}
      <div className="mt-6 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"> 
        <Card className="gradient-card border-primary/30 p-3 text-center hover-lift transition-all duration-300 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 flex-1 min-w-[140px] max-w-[200px]"> 
          <div className="text-2xl font-display font-black text-primary mb-0.5"> 
            {milestones.filter(m => m.unlocked).length}
          </div>
          <div className="text-[10px] text-muted-foreground font-body uppercase tracking-wider">
            Milestones Unlocked
          </div>
        </Card>

        <Card className="gradient-card border-accent/30 p-3 text-center hover-lift transition-all duration-300 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20 flex-1 min-w-[140px] max-w-[200px]">
          <div className="text-2xl font-display font-black text-accent mb-0.5">
            9
          </div>
          <div className="text-[10px] text-muted-foreground font-body uppercase tracking-wider">
            Years Active
          </div>
        </Card>

        <Card className="gradient-card border-success/30 p-3 text-center hover-lift transition-all duration-300 hover:border-success/60 hover:shadow-lg hover:shadow-success/20 flex-1 min-w-[140px] max-w-[200px]">
          <div className="text-2xl font-display font-black text-success mb-0.5">
            85%
          </div>
          <div className="text-[10px] text-muted-foreground font-body uppercase tracking-wider">
            Progression Complete
          </div>
        </Card>
      </div>
    </div>
  );
};
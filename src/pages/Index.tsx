import { useState } from "react";
import { PlayerHero } from "@/components/PlayerHero";
import { PlayerAttributes } from "@/components/PlayerAttributes";
import { PlayerAbilities } from "@/components/PlayerAbilities";
import { BattleLog } from "@/components/BattleLog";
import { CareerProgression } from "@/components/CareerProgression";
import { ComparisonMode } from "@/components/ComparisonMode";
import { PlayerStats } from "@/components/PlayerStats";
import { PlayerRecords } from "@/components/PlayerRecords";
import { PlayerMatches } from "@/components/PlayerMatches";
import { PlayerVideos } from "@/components/PlayerVideos";
import { PlayerNews } from "@/components/PlayerNews";
import { PlayerPhotos } from "@/components/PlayerPhotos";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {showComparison && <ComparisonMode onClose={() => setShowComparison(false)} />}
      
      {/* Hero Section */}
      <PlayerHero 
        name="Hardik Pandya"
        fullName="Hardik Himanshu Pandya"
        role="Sentinel"
        country="India"
        overall={87}
        potential={92}
        birthDate="October 11, 1993"
        birthPlace="Choryasi, Gujarat"
        age="32y 42d"
        battingStyle="Right hand Bat"
        bowlingStyle="Right arm Medium fast"
        teams={["India", "Mumbai Indians", "Gujarat Titans", "India A", "Baroda"]}
        onCompare={() => setShowComparison(true)}
      />

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="overview" className="w-full">
            <div className="overflow-x-auto">
              <TabsList className="inline-flex justify-start bg-transparent border-0 h-14 gap-1 min-w-full">
                <TabsTrigger 
                  value="overview" 
                  className="font-display font-semibold uppercase tracking-wide data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 text-sm whitespace-nowrap"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="stats" 
                  className="font-display font-semibold uppercase tracking-wide data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 text-sm whitespace-nowrap"
                >
                  Stats
                </TabsTrigger>
                <TabsTrigger 
                  value="records" 
                  className="font-display font-semibold uppercase tracking-wide data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 text-sm whitespace-nowrap"
                >
                  Records
                </TabsTrigger>
                <TabsTrigger 
                  value="matches" 
                  className="font-display font-semibold uppercase tracking-wide data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 text-sm whitespace-nowrap"
                >
                  Matches
                </TabsTrigger>
                <TabsTrigger 
                  value="videos" 
                  className="font-display font-semibold uppercase tracking-wide data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 text-sm whitespace-nowrap"
                >
                  Videos
                </TabsTrigger>
                <TabsTrigger 
                  value="news" 
                  className="font-display font-semibold uppercase tracking-wide data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 text-sm whitespace-nowrap"
                >
                  News
                </TabsTrigger>
                <TabsTrigger 
                  value="photos" 
                  className="font-display font-semibold uppercase tracking-wide data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 text-sm whitespace-nowrap"
                >
                  Photos
                </TabsTrigger>
                <TabsTrigger 
                  value="abilities" 
                  className="font-display font-semibold uppercase tracking-wide data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 text-sm whitespace-nowrap"
                >
                  Abilities
                </TabsTrigger>
                <TabsTrigger 
                  value="battles" 
                  className="font-display font-semibold uppercase tracking-wide data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 text-sm whitespace-nowrap"
                >
                  Battle Log
                </TabsTrigger>
                <TabsTrigger 
                  value="progression" 
                  className="font-display font-semibold uppercase tracking-wide data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 text-sm whitespace-nowrap"
                >
                  Progression
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="mt-0">
              <PlayerAttributes />
            </TabsContent>

            <TabsContent value="stats" className="mt-0">
              <PlayerStats />
            </TabsContent>

            <TabsContent value="records" className="mt-0">
              <PlayerRecords />
            </TabsContent>

            <TabsContent value="matches" className="mt-0">
              <PlayerMatches />
            </TabsContent>

            <TabsContent value="videos" className="mt-0">
              <PlayerVideos />
            </TabsContent>

            <TabsContent value="news" className="mt-0">
              <PlayerNews />
            </TabsContent>

            <TabsContent value="photos" className="mt-0">
              <PlayerPhotos />
            </TabsContent>

            <TabsContent value="abilities" className="mt-0">
              <PlayerAbilities />
            </TabsContent>

            <TabsContent value="battles" className="mt-0">
              <BattleLog />
            </TabsContent>

            <TabsContent value="progression" className="mt-0">
              <CareerProgression />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;

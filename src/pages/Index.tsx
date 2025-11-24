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
import { Menu, BarChart3, Trophy, Calendar, Video, Newspaper, Image, Zap, Swords, TrendingUp, LayoutGrid } from "lucide-react";

const Index = () => {
  const [showComparison, setShowComparison] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { value: "overview", label: "Overview", icon: LayoutGrid },
    { value: "stats", label: "Stats", icon: BarChart3 },
    { value: "records", label: "Records", icon: Trophy },
    { value: "matches", label: "Matches", icon: Calendar },
    { value: "videos", label: "Videos", icon: Video },
    { value: "news", label: "News", icon: Newspaper },
    { value: "photos", label: "Photos", icon: Image },
    { value: "abilities", label: "Abilities", icon: Zap },
    { value: "battles", label: "Battle Log", icon: Swords },
    { value: "progression", label: "Progression", icon: TrendingUp },
  ];

  const handleTabChange = (value) => {
    setActiveTab(value);
    setMobileMenuOpen(false);
  };

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
      <div className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Desktop Navigation */}
            <div className="hidden lg:block overflow-x-auto">
              <TabsList className="inline-flex justify-start bg-transparent border-0 h-14 gap-1 min-w-full">
                {tabs.map((tab) => (
                  <TabsTrigger 
                    key={tab.value}
                    value={tab.value} 
                    className="font-display font-semibold uppercase tracking-wide data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 text-sm whitespace-nowrap"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Mobile Navigation - Icon Dropdown */}
            <div className="lg:hidden">
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  {tabs.find(tab => tab.value === activeTab)?.icon && (
                    (() => {
                      const Icon = tabs.find(tab => tab.value === activeTab).icon;
                      return <Icon className="w-5 h-5 text-teal-400" />;
                    })()
                  )}
                  <span className="font-display font-semibold uppercase tracking-wide text-sm text-white">
                    {tabs.find(tab => tab.value === activeTab)?.label}
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg hover:bg-teal-500/20 transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu className={`w-6 h-6 text-teal-400 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`} />
                </button>
              </div>

              {/* Mobile Dropdown Menu */}
              {mobileMenuOpen && (
                <div className="absolute left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/60 shadow-2xl z-[100]">
                  <div className="container mx-auto px-4 py-5 max-h-[70vh] overflow-y-auto">
                    <div className="grid grid-cols-2 gap-3">
                      {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                          <button
                            key={tab.value}
                            onClick={() => handleTabChange(tab.value)}
                            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl transition-all duration-200 border ${
                              activeTab === tab.value
                                ? 'bg-teal-600/30 text-teal-400 shadow-lg shadow-teal-500/30 scale-105 border-teal-500/50'
                                : 'bg-slate-900/70 hover:bg-slate-800/80 hover:scale-105 border-slate-700/50 text-slate-300'
                            }`}
                          >
                            <Icon className={`w-6 h-6 ${activeTab === tab.value ? 'text-teal-400' : 'text-slate-400'}`} />
                            <span className="font-display font-semibold text-xs uppercase tracking-wide text-center">
                              {tab.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw, Users, Zap, Shield, ArrowDown, Volume2, VolumeX } from "lucide-react";
import heroImage from "@/assets/hardik-celebration.png";
import { useEffect, useRef, useState } from "react"; 

interface PlayerHeroProps {
  name: string;
  fullName: string;
  role: string;
  country: string;
  overall: number;
  potential: number;
  birthDate: string;
  birthPlace: string;
  age: string;
  battingStyle: string;
  bowlingStyle: string;
  teams: string[];
  onCompare?: () => void;
}

export const PlayerHero = ({ 
  name, 
  fullName,
  role, 
  country, 
  overall, 
  potential,
  birthDate,
  birthPlace,
  age,
  battingStyle,
  bowlingStyle,
  teams,
  onCompare
}: PlayerHeroProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const bgmRef = useRef<HTMLAudioElement | null>(null); 
  const [isMuted, setIsMuted] = useState(true); 

  // Function for smooth scrolling
  const scrollToBottom = () => {
    const scrollAmount = window.innerHeight; 

    window.scrollTo({
      top: scrollAmount,
      behavior: 'smooth'
    });
  };
  
  // Function to toggle BGM mute state
  const toggleMute = () => {
    if (bgmRef.current) {
      const newState = !isMuted;
      bgmRef.current.muted = newState;
      
      if (!newState && bgmRef.current.paused) {
          bgmRef.current.play().catch(error => console.error("Play resume failed:", error));
      }
      setIsMuted(newState);
    }
  };

  useEffect(() => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {});
        }
      });
    });

    if (bgmRef.current) {
        bgmRef.current.muted = true;
        bgmRef.current.play().catch(error => {
            const handleFallbackClick = () => {
                if (bgmRef.current && bgmRef.current.paused) {
                    bgmRef.current.muted = false;
                    bgmRef.current.play().then(() => {
                        setIsMuted(false); 
                        window.removeEventListener('click', handleFallbackClick);
                    }).catch(() => {});
                }
            };
            window.addEventListener('click', handleFallbackClick);
        });
    }
    
    return () => {
      window.removeEventListener('click', () => {});
    };
    
  }, []); 

  const VolumeIcon = isMuted ? VolumeX : Volume2;
  
  return (
    <div className="relative min-h-0 h-screen overflow-hidden"> 
      {/* Audio Tags */}
      <audio ref={audioRef} src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjGH0fPTgjMGHm7A7+OZUQ0PVqzn7K1aFgpBmN7xtmMdBzaM0vPTgjQGHmy+7t6WTA0RV6zn7K1aFgpAmN3wu2MdBzaM0vPTgjQGHmy+7t6WTA0RV6zn7K1aFglAmN3wu2MdBzaM0vPTgjQHH2y+7t6WTA0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTA0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2M=" />

      <audio 
        ref={bgmRef}
        src="/game-arena-music.mp3" 
        loop 
        autoPlay 
        muted 
        className="hidden" 
      />

      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rotate-45 animate-float hidden md:block" style={{ animationDuration: '6s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 border-2 border-accent/30 rotate-12 animate-float hidden md:block" style={{ animationDuration: '8s', animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-primary/20 -rotate-12 animate-float hidden md:block" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      
      {/* Scroll Down Arrows - Hidden on mobile */}
      <div className="hidden md:flex absolute top-1/2 right-8 transform -translate-y-1/2 flex-col items-center gap-3 z-10 cursor-pointer" onClick={scrollToBottom}>
        <ArrowDown className="w-6 h-6 text-primary/70 animate-bounce hover:text-primary transition-colors" style={{ animationDuration: '1.5s', animationDelay: '0s' }} />
        <ArrowDown className="w-6 h-6 text-accent/70 animate-bounce hover:text-accent transition-colors" style={{ animationDuration: '1.5s', animationDelay: '0.2s' }} />
        <ArrowDown className="w-6 h-6 text-primary/70 animate-bounce hover:text-primary transition-colors" style={{ animationDuration: '1.5s', animationDelay: '0.4s' }} />
      </div>

      {/* Container: Responsive padding */}
      <div className="relative container mx-auto px-3 sm:px-6 py-1">
        
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-2 sm:mb-3 animate-fade-in"> 
          <Button 
            variant="ghost" 
            className="gap-1 sm:gap-2 text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 group text-xs sm:text-sm px-2 sm:px-3"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display font-bold uppercase tracking-wider">Back</span>
          </Button>
          
          <Badge className="bg-muted/50 backdrop-blur-sm text-primary px-3 sm:px-6 py-1 sm:py-2 text-xs sm:text-base font-display border-2 border-primary/30 animate-glow-pulse shadow-lg shadow-primary/20">
            #{Math.floor(Math.random() * 10000).toString().padStart(5, '0')}
          </Badge>
          
          <div className="flex gap-2 sm:gap-3">
            {/* Volume Toggle Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className={`text-foreground/80 hover:text-success hover:bg-success/10 transition-all duration-300 hover:scale-110 w-8 h-8 sm:w-10 sm:h-10 ${!isMuted ? 'text-success animate-pulse' : ''}`}
              onClick={toggleMute}
            >
              <VolumeIcon className="w-4 h-4 sm:w-6 sm:h-6" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground/80 hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:rotate-12 hover:scale-110 group w-8 h-8 sm:w-10 sm:h-10"
              onClick={onCompare}
            >
              <Users className="w-4 h-4 sm:w-6 sm:h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:rotate-180 hover:scale-110 w-8 h-8 sm:w-10 sm:h-10"
            >
              <RefreshCw className="w-4 h-4 sm:w-6 sm:h-6" />
            </Button>
          </div>
        </div>

        {/* Main Content: Mobile stacks vertically, desktop side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
          
          {/* Left: Player Visual - Responsive sizing */}
          <div className="relative flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -bottom-8 sm:-bottom-16 left-1/2 -translate-x-1/2 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[radial-gradient(circle,hsl(var(--primary)/0.4),hsl(var(--primary)/0.1)_40%,transparent_70%)] animate-glow-pulse blur-xl" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 sm:w-96 h-2 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse blur-sm" />
              
              {/* Player card container: Mobile landscape (wider), Desktop portrait (taller) */}
              <div className="relative w-[320px] h-[240px] sm:w-[380px] sm:h-[520px] flex justify-center group perspective-1000 mt-auto"> 
                <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden border-0 sm:border-4 sm:border-primary/50 shadow-2xl shadow-black/50 sm:shadow-primary/20 transition-all duration-700 sm:group-hover:border-primary sm:group-hover:scale-105 sm:group-hover:shadow-[0_0_80px_hsl(var(--primary)/0.6)]">
                  <img 
                    src={heroImage} 
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    style={{ objectPosition: 'center top' }} 
                  />
                  
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-4 sm:w-8 h-4 sm:h-8 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-primary animate-pulse" />
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-4 sm:w-8 h-4 sm:h-8 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-4 sm:w-8 h-4 sm:h-8 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-accent animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-4 sm:w-8 h-4 sm:h-8 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-primary animate-pulse" style={{ animationDelay: '1.5s' }} />
                </div>

                {/* Floating stat indicators - Hidden on mobile */}
                <div className="hidden sm:block absolute -right-8 top-[10%] bg-primary/20 backdrop-blur-md border-2 border-primary/50 rounded-lg p-3 animate-float shadow-lg shadow-primary/20">
                  <Zap className="w-6 h-6 text-primary" />
                  <div className="text-xs font-display text-primary mt-1">PWR</div>
                </div>
                <div className="hidden sm:block absolute -left-8 top-[20%] bg-accent/20 backdrop-blur-md border-2 border-accent/50 rounded-lg p-3 animate-float shadow-lg shadow-accent/20" style={{ animationDelay: '1s' }}>
                  <Shield className="w-6 h-6 text-accent" />
                  <div className="text-xs font-display text-accent mt-1">DEF</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Player Info (Responsive) */}
          <div className="space-y-3 sm:space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            
            {/* Name section */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-accent glow-text uppercase tracking-tight leading-tight transition-all duration-500 hover:scale-105">
                {name.split(' ').map((word, i) => (
                  <span key={i} className="block hover:translate-x-2 transition-transform duration-300">
                    {word}
                  </span>
                ))}
              </h1>
              <p className="text-sm sm:text-lg text-muted-foreground font-body tracking-wide">{fullName}</p> 
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <Badge className="bg-success/30 text-success border-2 border-success/60 px-3 sm:px-4 py-1 sm:py-1.5 font-display font-black text-sm sm:text-base uppercase tracking-wider transition-all duration-300 hover:scale-110 hover:bg-success/40 hover:shadow-lg hover:shadow-success/30">
                  {role}
                </Badge>
                <span className="text-lg sm:text-xl text-primary/50">|</span>
                <span className="text-foreground/90 font-body font-semibold text-base sm:text-lg tracking-wide">{country}</span>
              </div>
            </div>

            {/* Stats Display */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="gradient-card rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-border/50 hover-lift transition-all duration-500 hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] group relative overflow-hidden">
                <div className="relative">
                  <div className="text-xs sm:text-sm text-muted-foreground font-body mb-1 sm:mb-2 uppercase tracking-widest flex items-center gap-1">
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-primary rounded-full animate-pulse" />
                    Overall
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-primary glow-text transition-all duration-300 group-hover:scale-110">{overall}</div> 
                  <div className="text-xs text-primary/60 font-display mt-0.5 sm:mt-1 uppercase tracking-wider">Rating</div>
                </div>
              </div>
              
              <div className="gradient-card rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-border/50 hover-lift transition-all duration-500 hover:border-accent hover:shadow-[0_0_30px_hsl(var(--accent)/0.4)] group relative overflow-hidden">
                <div className="relative">
                  <div className="text-xs sm:text-sm text-muted-foreground font-body mb-1 sm:mb-2 uppercase tracking-widest flex items-center gap-1">
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    Potential
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-accent glow-text-accent transition-all duration-300 group-hover:scale-110">{potential}</div>
                  <div className="text-xs text-accent/60 font-display mt-0.5 sm:mt-1 uppercase tracking-wider">Max</div>
                </div>
              </div>
            </div>

            {/* Detailed Info Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="space-y-0.5 sm:space-y-1 p-2 sm:p-3 bg-muted/30 backdrop-blur-sm rounded-lg border border-border/40 transition-all duration-300 hover:bg-muted/40 hover:border-primary/50 hover:scale-105 group">
                <div className="text-xs text-muted-foreground font-body uppercase tracking-widest">Born</div>
                <div className="text-xs sm:text-sm font-display font-bold text-foreground group-hover:text-primary transition-colors">{birthDate}</div>
                <div className="text-xs text-muted-foreground font-body">{birthPlace}</div>
              </div>
              <div className="space-y-0.5 sm:space-y-1 p-2 sm:p-3 bg-muted/30 backdrop-blur-sm rounded-lg border border-border/40 transition-all duration-300 hover:bg-muted/40 hover:border-primary/50 hover:scale-105 group">
                <div className="text-xs text-muted-foreground font-body uppercase tracking-widest">Age</div>
                <div className="text-xl sm:text-2xl font-display font-black text-foreground group-hover:text-primary transition-colors">{age}</div> 
              </div>
              <div className="space-y-0.5 sm:space-y-1 p-2 sm:p-3 bg-muted/30 backdrop-blur-sm rounded-lg border border-border/40 transition-all duration-300 hover:bg-muted/40 hover:border-accent/50 hover:scale-105 group">
                <div className="text-xs text-muted-foreground font-body uppercase tracking-widest">Batting</div>
                <div className="text-xs sm:text-sm font-display font-bold text-foreground group-hover:text-accent transition-colors">{battingStyle}</div>
              </div>
              <div className="space-y-0.5 sm:space-y-1 p-2 sm:p-3 bg-muted/30 backdrop-blur-sm rounded-lg border border-border/40 transition-all duration-300 hover:bg-muted/40 hover:border-accent/50 hover:scale-105 group">
                <div className="text-xs text-muted-foreground font-body uppercase tracking-widest">Bowling</div>
                <div className="text-xs sm:text-sm font-display font-bold text-foreground group-hover:text-accent transition-colors">{bowlingStyle}</div>
              </div>
            </div>

            {/* Teams */}
            <div className="bg-muted/40 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-border/40 transition-all duration-300 hover:bg-muted/50 hover:border-primary/50">
              <div className="text-xs text-muted-foreground font-body mb-2 sm:mb-3 uppercase tracking-widest flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                Career Teams
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {teams.map((team, idx) => (
                  <Badge 
                    key={idx}
                    className="bg-background/60 backdrop-blur-sm text-foreground border-2 border-border/50 px-2 sm:px-3 py-0.5 sm:py-1 font-body text-xs sm:text-sm transition-all duration-300 hover:bg-primary/20 hover:border-primary/60 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                  >
                    {team}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Target Anchor */}
      <div id="player-details-bottom" className="w-full h-1" />
      
    </div>
  );
};
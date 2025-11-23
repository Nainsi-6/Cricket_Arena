// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft, RefreshCw, Users } from "lucide-react";
// import heroImage from "@/assets/hardik-celebration.png";

// interface PlayerHeroProps {
//   name: string;
//   fullName: string;
//   role: string;
//   country: string;
//   overall: number;
//   potential: number;
//   birthDate: string;
//   birthPlace: string;
//   age: string;
//   battingStyle: string;
//   bowlingStyle: string;
//   teams: string[];
//   onCompare?: () => void;
// }

// export const PlayerHero = ({ 
//   name, 
//   fullName,
//   role, 
//   country, 
//   overall, 
//   potential,
//   birthDate,
//   birthPlace,
//   age,
//   battingStyle,
//   bowlingStyle,
//   teams,
//   onCompare
// }: PlayerHeroProps) => {
//   return (
//     <div className="relative min-h-[60vh] overflow-hidden">
//       {/* Cyber background effects */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.15),transparent_50%)]" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.15),transparent_50%)]" />
      
//       {/* Grid overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(25,35,45,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(25,35,45,0.5)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
      
//       <div className="relative container mx-auto px-6 py-8">
//         {/* Top Navigation */}
//         <div className="flex justify-between items-center mb-8 animate-fade-in">
//           <Button 
//             variant="ghost" 
//             className="gap-2 text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             <span className="font-display font-semibold text-sm">BACK</span>
//           </Button>
          
//           <Badge className="bg-muted/50 text-foreground/60 px-4 py-1.5 text-sm font-display border border-border/50 animate-glow-pulse">
//             #{Math.floor(Math.random() * 10000).toString().padStart(5, '0')}
//           </Badge>
          
//           <div className="flex gap-2">
//             <Button 
//               variant="ghost" 
//               size="icon" 
//               className="text-foreground/80 hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:rotate-180"
//               onClick={onCompare}
//             >
//               <Users className="w-5 h-5" />
//             </Button>
//             <Button 
//               variant="ghost" 
//               size="icon" 
//               className="text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:rotate-180"
//             >
//               <RefreshCw className="w-5 h-5" />
//             </Button>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left: Player Visual */}
//           <div className="relative flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
//             <div className="relative">
//               {/* Glowing platform */}
//               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[radial-gradient(circle,hsl(var(--primary)/0.3),transparent_70%)] animate-glow-pulse" />
              
//               {/* Concentric rings */}
//               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-2 rounded-full bg-primary/20 blur-sm animate-pulse" />
//               <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-64 h-1 rounded-full bg-primary/30 blur-sm animate-pulse" style={{ animationDelay: '0.3s' }} />
//               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-56 h-1 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: '0.6s' }} />
              
//               {/* Player image */}
//               <div className="relative w-80 h-[550px] flex items-end justify-center group">
//                 <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-primary/40 transition-all duration-500 group-hover:border-primary/70 group-hover:scale-105 group-hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)]">
//                   <img 
//                     src={heroImage} 
//                     alt={name}
//                     className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
//                     style={{ objectPosition: 'center 10%' }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                  
//                   {/* Scan line effect */}
//                   <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,hsl(var(--primary)/0.05)_50%)] bg-[length:100%_4px] animate-scan pointer-events-none" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right: Player Info */}
//           <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
//             <div className="space-y-3">
//               <h1 className="text-6xl md:text-7xl font-display font-black text-foreground glow-text uppercase tracking-wider transition-all duration-500 hover:scale-105 hover:text-primary">
//                 {name}
//               </h1>
//               <p className="text-lg text-muted-foreground font-body">{fullName}</p>
//               <div className="flex items-center gap-3 flex-wrap">
//                 <Badge className="bg-success/20 text-success border-success/50 px-4 py-1.5 font-display font-bold text-base uppercase transition-all duration-300 hover:scale-110 hover:bg-success/30">
//                   {role}
//                 </Badge>
//                 <span className="text-muted-foreground font-body text-lg">|</span>
//                 <span className="text-foreground/80 font-body font-medium text-lg">{country}</span>
//               </div>
//             </div>

//             {/* Stats Display */}
//             <div className="grid grid-cols-2 gap-6">
//               <div className="bg-gradient-card rounded-lg p-6 border border-border/50 hover-lift transition-all duration-500 hover:border-primary/70 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] group">
//                 <div className="text-sm text-muted-foreground font-body mb-2 uppercase tracking-wide">Overall Rating</div>
//                 <div className="text-6xl font-display font-black text-primary glow-text transition-all duration-300 group-hover:scale-110">{overall}</div>
//               </div>
              
//               <div className="bg-gradient-card rounded-lg p-6 border border-border/50 hover-lift transition-all duration-500 hover:border-accent/70 hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)] group">
//                 <div className="text-sm text-muted-foreground font-body mb-2 uppercase tracking-wide">Max Potential</div>
//                 <div className="text-6xl font-display font-black text-accent glow-text transition-all duration-300 group-hover:scale-110">{potential}</div>
//               </div>
//             </div>

//             {/* Detailed Info Grid */}
//             <div className="grid grid-cols-2 gap-4 pt-4">
//               <div className="space-y-1.5 p-4 bg-muted/20 rounded-lg border border-border/30 transition-all duration-300 hover:bg-muted/30 hover:border-primary/50">
//                 <div className="text-xs text-muted-foreground font-body uppercase tracking-wide">Born</div>
//                 <div className="text-base font-display font-bold text-foreground">{birthDate}</div>
//                 <div className="text-sm text-muted-foreground font-body">{birthPlace}</div>
//               </div>
//               <div className="space-y-1.5 p-4 bg-muted/20 rounded-lg border border-border/30 transition-all duration-300 hover:bg-muted/30 hover:border-primary/50">
//                 <div className="text-xs text-muted-foreground font-body uppercase tracking-wide">Age</div>
//                 <div className="text-2xl font-display font-bold text-foreground">{age}</div>
//               </div>
//               <div className="space-y-1.5 p-4 bg-muted/20 rounded-lg border border-border/30 transition-all duration-300 hover:bg-muted/30 hover:border-accent/50">
//                 <div className="text-xs text-muted-foreground font-body uppercase tracking-wide">Batting Style</div>
//                 <div className="text-base font-display font-bold text-foreground">{battingStyle}</div>
//               </div>
//               <div className="space-y-1.5 p-4 bg-muted/20 rounded-lg border border-border/30 transition-all duration-300 hover:bg-muted/30 hover:border-accent/50">
//                 <div className="text-xs text-muted-foreground font-body uppercase tracking-wide">Bowling Style</div>
//                 <div className="text-base font-display font-bold text-foreground">{bowlingStyle}</div>
//               </div>
//             </div>

//             {/* Teams */}
//             <div className="bg-muted/30 rounded-lg p-5 border border-border/30 transition-all duration-300 hover:bg-muted/40 hover:border-primary/50">
//               <div className="text-xs text-muted-foreground font-body mb-3 uppercase tracking-wide">Career Teams</div>
//               <div className="flex flex-wrap gap-2">
//                 {teams.map((team, idx) => (
//                   <Badge 
//                     key={idx}
//                     className="bg-background/50 text-foreground border-border/50 px-3 py-1.5 font-body text-sm transition-all duration-300 hover:bg-primary/20 hover:border-primary/50 hover:scale-105"
//                   >
//                     {team}
//                   </Badge>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw, Users, Zap, Shield, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hardik-celebration.png";
import { useEffect, useRef } from "react";

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
  const bgmRef = useRef<HTMLAudioElement | null>(null); // Reference for the BGM audio

  // Function for smooth scrolling to the bottom anchor
  const scrollToBottom = () => {
    const bottomElement = document.getElementById('player-details-bottom');
    bottomElement?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Function to start the background music
  const startBGM = () => {
    if (bgmRef.current) {
      if (bgmRef.current.paused) {
        bgmRef.current.play().catch(error => {
          // This error typically means the click was blocked by the browser.
          console.error("Music playback failed (Browser policy block):", error);
        });
      }
    }
  };

  useEffect(() => {
    // Hover sound effect setup
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {});
        }
      });
    });

    // START BGM ON FIRST CLICK ANYWHERE ON THE PAGE
    const handleInitialClick = () => {
      startBGM();
      window.removeEventListener('click', handleInitialClick);
    };

    window.addEventListener('click', handleInitialClick);

    // Cleanup function
    return () => {
      window.removeEventListener('click', handleInitialClick);
    };
    
  }, []); 

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hidden audio for button sound effects */}
      <audio ref={audioRef} src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjGH0fPTgjMGHm7A7+OZUQ0PVqzn7K1aFgpBmN7xtmMdBzaM0vPTgjQGHmy+7t6WTA0RV6zn7K1aFglAmN3wu2MdBzaM0vPTgjQHH2y+7t6WTA0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTA0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTA0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2MdBzeM0vPTgjQHH2y+7t6WTQ0RV6zn7K1aFglAmN3wu2M=" />

      {/* CONTINUOUS BACKGROUND MUSIC ELEMENT: Now set to a local project file path */}
      <audio 
        ref={bgmRef}
        src="/game-arena-music.mp3" 
        loop 
        className="hidden" 
      />
      {/* ⚠️ ACTION REQUIRED: Place your chosen MP3 file at this path: /assets/game-arena-music.mp3 */}

      {/* Animated particle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.2),transparent_60%)]" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)] animate-pulse" style={{ animationDuration: '4s' }} />
      
      {/* Floating hexagons */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rotate-45 animate-float" style={{ animationDuration: '6s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 border-2 border-accent/30 rotate-12 animate-float" style={{ animationDuration: '8s', animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-primary/20 -rotate-12 animate-float" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      
      {/* Animated Scroll Buttons (Top) */}
      <div className="absolute top-28 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        <Button
          variant="outline"
          size="icon"
          className="bg-transparent hover:bg-primary/20 border-primary/50 text-primary transition-all duration-300 animate-bounce group"
          onClick={scrollToBottom}
          style={{ animationDuration: '2s' }}
        >
          <ArrowDown className="w-5 h-5 group-hover:scale-125 transition-transform" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-transparent hover:bg-accent/20 border-accent/50 text-accent transition-all duration-300 animate-bounce group"
          onClick={scrollToBottom}
          style={{ animationDuration: '2s', animationDelay: '0.5s' }}
        >
          <ArrowDown className="w-5 h-5 group-hover:scale-125 transition-transform" />
        </Button>
      </div>

      {/* Container: Tightly packed content */}
      <div className="relative container mx-auto px-6 py-4">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-6 animate-fade-in">
          <Button 
            variant="ghost" 
            className="gap-2 text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display font-bold text-sm uppercase tracking-wider">Back</span>
          </Button>
          
          <Badge className="bg-muted/50 backdrop-blur-sm text-primary px-6 py-2 text-base font-display border-2 border-primary/30 animate-glow-pulse shadow-lg shadow-primary/20">
            #{Math.floor(Math.random() * 10000).toString().padStart(5, '0')}
          </Badge>
          
          <div className="flex gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground/80 hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:rotate-12 hover:scale-110 group"
              onClick={onCompare}
            >
              <Users className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:rotate-180 hover:scale-110"
            >
              <RefreshCw className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Player Visual */}
          <div className="relative flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Holographic platform (adjusted relative position) */}
              <div className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-[radial-gradient(circle,hsl(var(--primary)/0.4),hsl(var(--primary)/0.1)_40%,transparent_70%)] animate-glow-pulse blur-xl" />
              
              {/* Rotating outer ring */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-2 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse blur-sm" />
              
              {/* Player card container: Tighter height for single-view */}
              <div className="relative w-[320px] h-[450px] flex justify-center group perspective-1000 mt-auto -translate-y-12"> 
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-primary/50 transition-all duration-700 group-hover:border-primary group-hover:scale-105 group-hover:shadow-[0_0_80px_hsl(var(--primary)/0.6)] group-hover:rotate-y-5">
                  <img 
                    src={heroImage} 
                    alt={name}
                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                    style={{ objectPosition: 'center 5%' }} 
                  />
                  
                  {/* Multiple gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Scan line effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,hsl(var(--primary)/0.1)_50%)] bg-[length:100%_4px] animate-scan pointer-events-none opacity-60" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-primary animate-pulse" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-accent animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-primary animate-pulse" style={{ animationDelay: '1.5s' }} />
                </div>

                {/* Floating stat indicators */}
                <div className="absolute -right-8 top-1/4 bg-primary/20 backdrop-blur-md border-2 border-primary/50 rounded-lg p-3 animate-float shadow-lg shadow-primary/20">
                  <Zap className="w-6 h-6 text-primary" />
                  <div className="text-xs font-display text-primary mt-1">PWR</div>
                </div>
                <div className="absolute -left-8 top-1/3 bg-accent/20 backdrop-blur-md border-2 border-accent/50 rounded-lg p-3 animate-float shadow-lg shadow-accent/20" style={{ animationDelay: '1s' }}>
                  <Shield className="w-6 h-6 text-accent" />
                  <div className="text-xs font-display text-accent mt-1">DEF</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Player Info with improved hierarchy */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Name section */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-accent glow-text uppercase tracking-tight leading-tight transition-all duration-500 hover:scale-105">
                {name.split(' ').map((word, i) => (
                  <span key={i} className="block hover:translate-x-2 transition-transform duration-300">
                    {word}
                  </span>
                ))}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-body tracking-wide">{fullName}</p>
              <div className="flex items-center gap-4 flex-wrap">
                <Badge className="bg-success/30 text-success border-2 border-success/60 px-5 py-2 font-display font-black text-lg uppercase tracking-wider transition-all duration-300 hover:scale-110 hover:bg-success/40 hover:shadow-lg hover:shadow-success/30">
                  {role}
                </Badge>
                <span className="text-2xl text-primary/50">|</span>
                <span className="text-foreground/90 font-body font-semibold text-xl tracking-wide">{country}</span>
              </div>
            </div>

            {/* Stats Display */}
            <div className="grid grid-cols-2 gap-4">
              <div className="gradient-card rounded-2xl p-6 border-2 border-border/50 hover-lift transition-all duration-500 hover:border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-sm text-muted-foreground font-body mb-3 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    Overall
                  </div>
                  <div className="text-5xl md:text-6xl font-display font-black text-primary glow-text transition-all duration-300 group-hover:scale-110">{overall}</div>
                  <div className="text-xs text-primary/60 font-display mt-2 uppercase tracking-wider">Rating</div>
                </div>
              </div>
              
              <div className="gradient-card rounded-2xl p-6 border-2 border-border/50 hover-lift transition-all duration-500 hover:border-accent hover:shadow-[0_0_40px_hsl(var(--accent)/0.4)] group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-sm text-muted-foreground font-body mb-3 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    Potential
                  </div>
                  <div className="text-5xl md:text-6xl font-display font-black text-accent glow-text-accent transition-all duration-300 group-hover:scale-110">{potential}</div>
                  <div className="text-xs text-accent/60 font-display mt-2 uppercase tracking-wider">Max</div>
                </div>
              </div>
            </div>

            {/* Detailed Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 p-4 bg-muted/30 backdrop-blur-sm rounded-xl border-2 border-border/40 transition-all duration-300 hover:bg-muted/40 hover:border-primary/50 hover:scale-105 group">
                <div className="text-xs text-muted-foreground font-body uppercase tracking-widest">Born</div>
                <div className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">{birthDate}</div>
                <div className="text-sm text-muted-foreground font-body">{birthPlace}</div>
              </div>
              <div className="space-y-2 p-4 bg-muted/30 backdrop-blur-sm rounded-xl border-2 border-border/40 transition-all duration-300 hover:bg-muted/40 hover:border-primary/50 hover:scale-105 group">
                <div className="text-xs text-muted-foreground font-body uppercase tracking-widest">Age</div>
                <div className="text-3xl font-display font-black text-foreground group-hover:text-primary transition-colors">{age}</div>
              </div>
              <div className="space-y-2 p-4 bg-muted/30 backdrop-blur-sm rounded-xl border-2 border-border/40 transition-all duration-300 hover:bg-muted/40 hover:border-accent/50 hover:scale-105 group">
                <div className="text-xs text-muted-foreground font-body uppercase tracking-widest">Batting</div>
                <div className="text-base font-display font-bold text-foreground group-hover:text-accent transition-colors">{battingStyle}</div>
              </div>
              <div className="space-y-2 p-4 bg-muted/30 backdrop-blur-sm rounded-xl border-2 border-border/40 transition-all duration-300 hover:bg-muted/40 hover:border-accent/50 hover:scale-105 group">
                <div className="text-xs text-muted-foreground font-body uppercase tracking-widest">Bowling</div>
                <div className="text-base font-display font-bold text-foreground group-hover:text-accent transition-colors">{bowlingStyle}</div>
              </div>
            </div>

            {/* Teams - SMALL */}
            <div className="bg-muted/40 backdrop-blur-sm rounded-xl p-4 border-2 border-border/40 transition-all duration-300 hover:bg-muted/50 hover:border-primary/50">
              <div className="text-xs text-muted-foreground font-body mb-4 uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                Career Teams
              </div>
              <div className="flex flex-wrap gap-2">
                {teams.map((team, idx) => (
                  <Badge 
                    key={idx}
                    className="bg-background/60 backdrop-blur-sm text-foreground border-2 border-border/50 px-4 py-1.5 font-body text-sm transition-all duration-300 hover:bg-primary/20 hover:border-primary/60 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
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
      <div id="player-details-bottom" className="w-full h-10" />
      
    </div>
  );
};
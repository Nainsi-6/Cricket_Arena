import { Card } from "@/components/ui/card";
import hardikPortrait1 from "@/assets/hardik-portrait-1.png";
import hardikPortrait2 from "@/assets/hardik-portrait-2.png";
import hardikPortrait3 from "@/assets/hardik-portrait-3.png";
import hardikPortrait4 from "@/assets/hardik-portrait-4.png";
import action1 from "@/assets/hardik-action-1.png";
import celebration from "@/assets/hardik-celebration.png";
import bowling from "@/assets/hardik-bowling.png";
import team from "@/assets/hardik-team.png";
import casual1 from "@/assets/hardik-casual-1.png";
import casual2 from "@/assets/hardik-casual-2.png";
import trophy from "@/assets/hardik-trophy.png";
import field from "@/assets/hardik-field.png";

export const PlayerPhotos = () => {
  const photos = [
    { src: celebration, alt: "Hardik Pandya Celebration", category: "Match" },
    { src: action1, alt: "Hardik Pandya Action", category: "Action" },
    { src: bowling, alt: "Hardik Pandya Bowling", category: "Action" },
    { src: field, alt: "Hardik Pandya on Field", category: "Match" },
    { src: trophy, alt: "Hardik Pandya with Trophy", category: "Achievement" },
    { src: team, alt: "Hardik Pandya with Team", category: "Team" },
    { src: casual1, alt: "Hardik Pandya Portrait 1", category: "Portrait" },
    { src: casual2, alt: "Hardik Pandya Portrait 2", category: "Portrait" },
    { src: hardikPortrait1, alt: "Hardik Pandya 1", category: "Portrait" },
    { src: hardikPortrait2, alt: "Hardik Pandya 2", category: "Portrait" },
    { src: hardikPortrait3, alt: "Hardik Pandya 3", category: "Portrait" },
    { src: hardikPortrait4, alt: "Hardik Pandya 4", category: "Portrait" },
  ];

  const categoryColors: Record<string, string> = {
    "Match": "text-primary border-primary/50 bg-primary/10",
    "Action": "text-accent border-accent/50 bg-accent/10",
    "Achievement": "text-success border-success/50 bg-success/10",
    "Team": "text-info border-info/50 bg-info/10",
    "Portrait": "text-primary border-primary/50 bg-primary/10"
  };

  return (
    <div className="container mx-auto px-3 sm:px-6 py-6 sm:py-12">
      <div className="space-y-1 sm:space-y-2 animate-fade-in mb-4 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-foreground uppercase tracking-wider glow-text">
          Photo Gallery
        </h2>
        <p className="text-muted-foreground font-body text-sm sm:text-base md:text-lg">Action shots and memorable moments</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
        {photos.map((photo, idx) => (
          <Card 
            key={idx}
            className="bg-gradient-card border-border/50 overflow-hidden hover-lift group animate-fade-in cursor-pointer"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="aspect-[3/4] relative overflow-hidden">
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              
              {/* Category badge - Responsive */}
              <div className={`absolute top-2 sm:top-4 right-2 sm:right-4 ${categoryColors[photo.category]} backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border`}>
                <span className="text-[10px] sm:text-xs font-body font-semibold uppercase tracking-wide">
                  {photo.category}
                </span>
              </div>

              {/* Overlay on hover - Hidden on mobile, shown on desktop */}
              <div className="hidden sm:flex absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center">
                <div className="text-center">
                  <p className="text-foreground font-body font-bold text-base md:text-lg">
                    View Full Size
                  </p>
                </div>
              </div>
              
              {/* Scan line effect on hover - Desktop only */}
              <div className="hidden sm:block absolute inset-0 bg-[linear-gradient(transparent_50%,hsl(var(--primary)/0.05)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 animate-scan pointer-events-none" />
            </div>
          </Card>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-6 sm:mt-8 text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-body font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2 mx-auto">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Load More Photos
        </button>
      </div>
    </div>
  );
};
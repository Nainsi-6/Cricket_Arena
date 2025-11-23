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

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="space-y-2 animate-fade-in mb-8">
        <h2 className="text-4xl font-display font-black text-foreground uppercase tracking-wider glow-text">
          Photo Gallery
        </h2>
        <p className="text-muted-foreground font-body text-lg">Action shots and memorable moments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {photos.map((photo, idx) => (
          <Card 
            key={idx}
            className="bg-gradient-card border-border/50 overflow-hidden hover-lift group animate-fade-in"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="aspect-[3/4] relative overflow-hidden">
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              
              {/* Category badge */}
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/50">
                <span className="text-xs font-display font-bold text-primary uppercase tracking-wide">
                  {photo.category}
                </span>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-foreground font-display font-bold text-lg">
                    View Full Size
                  </p>
                </div>
              </div>
              
              {/* Scan line effect on hover */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,hsl(var(--primary)/0.05)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 animate-scan pointer-events-none" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, Clock, TrendingUp } from "lucide-react";

interface Video {
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  date: string;
  category: "Highlight" | "Century" | "Bowling" | "Fielding";
}

const videos: Video[] = [
  {
    title: "Hardik's Explosive 52* vs Australia - T20I Masterclass",
    thumbnail: "🏏",
    duration: "4:32",
    views: "2.5M",
    date: "2 days ago",
    category: "Highlight"
  },
  {
    title: "Match-Winning 71 vs England - ODI Classic",
    thumbnail: "🎯",
    duration: "6:18",
    views: "1.8M",
    date: "1 week ago",
    category: "Century"
  },
  {
    title: "3 Wickets vs Pakistan - Death Over Domination",
    thumbnail: "⚡",
    duration: "3:45",
    views: "3.2M",
    date: "2 weeks ago",
    category: "Bowling"
  },
  {
    title: "Best All-Round Performance - 67 Runs & 3 Wickets",
    thumbnail: "🔥",
    duration: "8:12",
    views: "4.1M",
    date: "3 weeks ago",
    category: "Highlight"
  },
  {
    title: "Incredible Boundary Catch - Stunning Fielding",
    thumbnail: "✨",
    duration: "0:42",
    views: "1.2M",
    date: "1 month ago",
    category: "Fielding"
  },
  {
    title: "Top 10 Sixes of the Season",
    thumbnail: "💥",
    duration: "5:23",
    views: "5.7M",
    date: "1 month ago",
    category: "Highlight"
  }
];

const categoryColors = {
  "Highlight": "primary",
  "Century": "accent",
  "Bowling": "success",
  "Fielding": "destructive"
};

export const PlayerVideos = () => {
  return (
    <div className="container mx-auto px-3 sm:px-6 py-4 sm:py-8">
      
      {/* Section Header - Responsive */}
      <div className="mb-4 sm:mb-8 space-y-1 sm:space-y-2 animate-fade-in">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-1.5 sm:w-2 h-8 sm:h-10 bg-gradient-to-b from-accent to-primary rounded-full" />
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-foreground uppercase tracking-tight glow-text-accent">
              Video Vault
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground font-body mt-0.5 sm:mt-1 tracking-wide">
              Epic Moments & Career Highlights
            </p>
          </div>
        </div>
      </div>

      {/* Video Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {videos.map((video, index) => (
          <Card 
            key={index}
            className="gradient-card border-2 border-border/50 overflow-hidden hover-lift group animate-fade-in cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
              {/* Emoji placeholder - Responsive size */}
              <div className="text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-500">{video.thumbnail}</div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Play button - Responsive size */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all shadow-lg shadow-primary/50">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground ml-0.5 sm:ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Duration badge - Responsive */}
              <div className="absolute bottom-1.5 sm:bottom-2 right-1.5 sm:right-2 bg-background/80 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-display font-bold flex items-center gap-0.5 sm:gap-1">
                <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                {video.duration}
              </div>

              {/* Category badge - Responsive */}
              <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2">
                <Badge className={`bg-${categoryColors[video.category]}/20 text-${categoryColors[video.category]} border-2 border-${categoryColors[video.category]}/50 font-display uppercase text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5`}>
                  {video.category}
                </Badge>
              </div>
            </div>

            {/* Video Info - Responsive padding and spacing */}
            <div className="p-3 sm:p-4 space-y-1.5 sm:space-y-2">
              <h3 className="text-sm sm:text-base font-display font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                {video.title}
              </h3>
              
              <div className="flex items-center justify-between text-[10px] sm:text-xs text-muted-foreground">
                <div className="flex items-center gap-0.5 sm:gap-1">
                  <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="font-body">{video.views} views</span>
                </div>
                <span className="font-body">{video.date}</span>
              </div>

              {/* Progress bar - Responsive height */}
              <div className="w-full h-0.5 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  style={{ width: `${Math.random() * 100}%` }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* View All Button - Responsive */}
      <div className="mt-6 sm:mt-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-black text-sm sm:text-base uppercase tracking-wider rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-1.5 sm:gap-2 mx-auto">
          <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          Load More Videos
        </button>
      </div>
    </div>
  );
};
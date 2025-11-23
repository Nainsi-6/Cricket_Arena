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
    // Reduced overall vertical padding: py-16 -> py-8
    <div className="container mx-auto px-6 py-8">
      
      {/* Section Header - Compressed */}
      <div className="mb-8 space-y-2 animate-fade-in"> {/* Reduced margin and space-y */}
        <div className="flex items-center gap-3"> {/* Reduced gap */}
          {/* Reduced decorative bar height: h-16 -> h-10 */}
          <div className="w-2 h-10 bg-gradient-to-b from-accent to-primary rounded-full" />
          <div>
            {/* Reduced header font size: text-5xl md:text-6xl -> text-3xl md:text-4xl */}
            <h2 className="text-3xl md:text-4xl font-display font-black text-foreground uppercase tracking-tight glow-text-accent">
              Video Vault
            </h2>
            {/* Reduced description font size: text-lg -> text-sm */}
            <p className="text-sm text-muted-foreground font-body mt-1 tracking-wide">
              Epic Moments & Career Highlights
            </p>
          </div>
        </div>
      </div>

      {/* Video Grid - Reduced gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Reduced gap: gap-6 -> gap-4 */}
        {videos.map((video, index) => (
          <Card 
            key={index}
            className="gradient-card border-2 border-border/50 overflow-hidden hover-lift group animate-fade-in cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
              {/* Emoji placeholder - Reduced size: text-8xl -> text-6xl */}
              <div className="text-6xl group-hover:scale-110 transition-transform duration-500">{video.thumbnail}</div>
              
              {/* Overlay (unchanged) */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Play button - Reduced size and padding */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all shadow-lg shadow-primary/50"> {/* Reduced size: w-16 h-16 -> w-12 h-12 */}
                  <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" /> {/* Reduced icon size: w-8 h-8 -> w-6 h-6 */}
                </div>
              </div>

              {/* Duration badge - Tighter padding */}
              <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded text-xs font-display font-bold flex items-center gap-1"> {/* Reduced bottom/right margin and py-1 -> py-0.5 */}
                <Clock className="w-3 h-3" />
                {video.duration}
              </div>

              {/* Category badge - Tighter padding */}
              <div className="absolute top-2 left-2"> {/* Reduced top/left margin */}
                <Badge className={`bg-${categoryColors[video.category]}/20 text-${categoryColors[video.category]} border-2 border-${categoryColors[video.category]}/50 font-display uppercase text-xs px-2 py-0.5`}> {/* Reduced py-1 -> py-0.5 */}
                  {video.category}
                </Badge>
              </div>
            </div>

            {/* Video Info - Reduced padding and spacing */}
            <div className="p-4 space-y-2"> {/* Reduced padding: p-5 -> p-4. Reduced space-y: space-y-3 -> space-y-2 */}
              <h3 className="text-base font-display font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug"> {/* Reduced font size: text-lg -> text-base. Tightened line-height: leading-tight -> leading-snug */}
                {video.title}
              </h3>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground"> {/* Reduced font size: text-sm -> text-xs */}
                <div className="flex items-center gap-1"> {/* Reduced gap: gap-1.5 -> gap-1 */}
                  <Eye className="w-3.5 h-3.5" /> {/* Reduced icon size: w-4 h-4 -> w-3.5 h-3.5 */}
                  <span className="font-body">{video.views} views</span>
                </div>
                <span className="font-body">{video.date}</span>
              </div>

              {/* Progress bar (simulated) - Height reduced */}
              <div className="w-full h-0.5 bg-muted rounded-full overflow-hidden"> {/* Reduced height: h-1 -> h-0.5 */}
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  style={{ width: `${Math.random() * 100}%` }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* View All Button - Compressed */}
      <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}> {/* Reduced margin: mt-12 -> mt-8 */}
        <button className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-black text-base uppercase tracking-wider rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2 mx-auto"> {/* Reduced padding, font size, and rounded size */}
          <TrendingUp className="w-4 h-4" /> {/* Reduced icon size */}
          Load More Videos
        </button>
      </div>
    </div>
  );
};
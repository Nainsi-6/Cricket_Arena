import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, TrendingUp, MessageSquare } from "lucide-react";

interface NewsArticle {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Breaking" | "Interview" | "Analysis" | "Update";
  reactions: number;
}

const newsArticles: NewsArticle[] = [
  {
    title: "Hardik Pandya Named Vice-Captain for Upcoming T20 Series",
    excerpt: "The all-rounder's consistent performances earn him a leadership role as India prepares for the crucial tournament.",
    date: "Nov 22, 2025",
    readTime: "3 min",
    category: "Breaking",
    reactions: 1240
  },
  {
    title: "Exclusive: Hardik Discusses Fitness Regiment and Future Goals",
    excerpt: "In an in-depth conversation, Pandya shares insights into his training routine and aspirations for the national team.",
    date: "Nov 18, 2025",
    readTime: "8 min",
    category: "Interview",
    reactions: 892
  },
  {
    title: "Tactical Breakdown: How Hardik Changed the Game Against Australia",
    excerpt: "Expert analysis of Pandya's match-winning performance and strategic impact in the recent T20I victory.",
    date: "Nov 21, 2025",
    readTime: "5 min",
    category: "Analysis",
    reactions: 2156
  },
  {
    title: "Hardik Pandya Achieves Career-Best T20I Rating",
    excerpt: "The all-rounder reaches new heights in ICC rankings following exceptional recent form across formats.",
    date: "Nov 15, 2025",
    readTime: "2 min",
    category: "Update",
    reactions: 1789
  },
  {
    title: "Behind the Scenes: Hardik's Pre-Match Preparation Ritual",
    excerpt: "An exclusive look at the routines and mindset that prepare one of cricket's most dynamic players for battle.",
    date: "Nov 12, 2025",
    readTime: "6 min",
    category: "Interview",
    reactions: 645
  },
  {
    title: "Statistical Deep Dive: Hardik's Impact in Death Overs",
    excerpt: "Numbers reveal why Pandya has become one of the most valuable players in limited-overs cricket.",
    date: "Nov 8, 2025",
    readTime: "7 min",
    category: "Analysis",
    reactions: 1432
  }
];

const categoryStyles = {
  "Breaking": "bg-destructive/20 text-destructive border-destructive/50",
  "Interview": "bg-accent/20 text-accent border-accent/50",
  "Analysis": "bg-primary/20 text-primary border-primary/50",
  "Update": "bg-success/20 text-success border-success/50"
};

export const PlayerNews = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Section Header */}
      <div className="mb-12 space-y-4 animate-fade-in">
        <div className="flex items-center gap-4">
          <div className="w-2 h-16 bg-gradient-to-b from-success to-primary rounded-full" />
          <div>
            <h2 className="text-5xl md:text-6xl font-display font-black text-foreground uppercase tracking-tight glow-text">
              News Feed
            </h2>
            <p className="text-lg text-muted-foreground font-body mt-2 tracking-wide">
              Latest Updates & Stories
            </p>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <Card className="gradient-card border-2 border-primary/50 p-8 md:p-10 mb-8 hover-lift group animate-fade-in cursor-pointer">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <Badge className={`${categoryStyles[newsArticles[0].category]} border-2 font-display uppercase text-sm px-3 py-1.5`}>
              {newsArticles[0].category}
            </Badge>
            <h3 className="text-3xl md:text-4xl font-display font-black text-foreground group-hover:text-primary transition-colors leading-tight">
              {newsArticles[0].title}
            </h3>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              {newsArticles[0].excerpt}
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="font-body">{newsArticles[0].date}</span>
              </div>
              <span className="font-body">{newsArticles[0].readTime} read</span>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span className="font-body">{newsArticles[0].reactions}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl group-hover:scale-110 transition-transform shadow-lg shadow-primary/30">
              📰
            </div>
          </div>
        </div>
      </Card>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsArticles.slice(1).map((article, index) => (
          <Card 
            key={index}
            className="gradient-card border-2 border-border/50 p-6 hover-lift group animate-slide-in-right cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <Badge className={`${categoryStyles[article.category]} border-2 font-display uppercase text-xs px-3 py-1`}>
                  {article.category}
                </Badge>
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {article.category === "Interview" ? "🎤" : 
                   article.category === "Analysis" ? "📊" : 
                   article.category === "Breaking" ? "🔥" : "📈"}
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
                {article.title}
              </h3>

              <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-border/30">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-body">{article.date}</span>
                  </div>
                  <span className="font-body">{article.readTime}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span className="font-body">{article.reactions}</span>
                </div>
              </div>

              <button className="w-full py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg font-display font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <button className="px-8 py-4 bg-gradient-to-r from-success to-primary text-primary-foreground font-display font-black text-lg uppercase tracking-wider rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-success/50 transition-all duration-300 flex items-center gap-3 mx-auto">
          <TrendingUp className="w-5 h-5" />
          More News
        </button>
      </div>
    </div>
  );
};

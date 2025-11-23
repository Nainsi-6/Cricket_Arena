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
    // Reduced overall vertical padding: py-16 -> py-8
    <div className="container mx-auto px-6 py-8">
      
      {/* Section Header - Compressed */}
      <div className="mb-8 space-y-2 animate-fade-in"> {/* Reduced margin and space-y */}
        <div className="flex items-center gap-3"> {/* Reduced gap */}
          {/* Reduced decorative bar height: h-16 -> h-10 */}
          <div className="w-2 h-10 bg-gradient-to-b from-success to-primary rounded-full" />
          <div>
            {/* Reduced header font size: text-5xl md:text-6xl -> text-3xl md:text-4xl */}
            <h2 className="text-3xl md:text-4xl font-display font-black text-foreground uppercase tracking-tight glow-text">
              News Feed
            </h2>
            {/* Reduced description font size: text-lg -> text-sm */}
            <p className="text-sm text-muted-foreground font-body mt-1 tracking-wide">
              Latest Updates & Stories
            </p>
          </div>
        </div>
      </div>

      {/* Featured Article - Compressed */}
      <Card className="gradient-card border-2 border-primary/50 p-6 md:p-8 mb-6 hover-lift group animate-fade-in cursor-pointer"> {/* Reduced padding and margin */}
        <div className="grid md:grid-cols-3 gap-6"> {/* Reduced gap */}
          <div className="md:col-span-2 space-y-3"> {/* Reduced space-y */}
            <Badge className={`${categoryStyles[newsArticles[0].category]} border-2 font-display uppercase text-xs px-3 py-1`}> {/* Reduced badge size/padding */}
              {newsArticles[0].category}
            </Badge>
            {/* Reduced title font size: text-3xl md:text-4xl -> text-2xl md:text-3xl */}
            <h3 className="text-2xl md:text-3xl font-display font-black text-foreground group-hover:text-primary transition-colors leading-snug"> {/* Tightened line height */}
              {newsArticles[0].title}
            </h3>
            {/* Reduced excerpt font size: text-lg -> text-sm. Tightened line height */}
            <p className="text-sm text-muted-foreground font-body leading-snug line-clamp-2">
              {newsArticles[0].excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1 border-t border-border/30"> {/* Reduced gap and font size */}
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span className="font-body">{newsArticles[0].date}</span>
              </div>
              <span className="font-body">{newsArticles[0].readTime} read</span>
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span className="font-body">{newsArticles[0].reactions}</span>
              </div>
            </div>
          </div>
          {/* Reduced Icon Size */}
          <div className="flex items-center justify-center md:justify-end order-first md:order-last">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl group-hover:scale-110 transition-transform shadow-lg shadow-primary/30"> {/* Reduced size and emoji size */}
              📰
            </div>
          </div>
        </div>
      </Card>

      {/* News Grid - Compressed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Reduced gap: gap-6 -> gap-4 */}
        {newsArticles.slice(1).map((article, index) => (
          <Card 
            key={index}
            className="gradient-card border-2 border-border/50 p-4 hover-lift group animate-slide-in-right cursor-pointer" // Reduced padding: p-6 -> p-4
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="space-y-3"> {/* Reduced space-y: space-y-4 -> space-y-3 */}
              <div className="flex items-start justify-between gap-3">
                <Badge className={`${categoryStyles[article.category]} border-2 font-display uppercase text-xs px-3 py-1`}>
                  {article.category}
                </Badge>
                {/* Reduced emoji size: text-4xl -> text-3xl */}
                <div className="text-3xl group-hover:scale-110 transition-transform">
                  {article.category === "Interview" ? "🎤" : 
                    article.category === "Analysis" ? "📊" : 
                    article.category === "Breaking" ? "🔥" : "📈"}
                </div>
              </div>

              {/* Reduced title font size: text-xl -> text-lg */}
              <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                {article.title}
              </h3>

              {/* Reduced excerpt font size: text-sm -> text-xs */}
              <p className="text-xs text-muted-foreground font-body leading-normal line-clamp-3">
                {article.excerpt}
              </p>

              {/* Footer Metrics - Compressed */}
              <div className="flex items-center justify-between pt-2 border-t border-border/30"> {/* Reduced padding: pt-3 -> pt-2 */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground"> {/* Reduced gap: gap-4 -> gap-3 */}
                  <div className="flex items-center gap-1"> {/* Reduced gap: gap-1.5 -> gap-1 */}
                    <Calendar className="w-3 h-3" /> {/* Reduced icon size: w-3.5 h-3.5 -> w-3 h-3 */}
                    <span className="font-body">{article.date}</span>
                  </div>
                  <span className="font-body">{article.readTime}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MessageSquare className="w-3 h-3" />
                  <span className="font-body">{article.reactions}</span>
                </div>
              </div>

              {/* Read Article Button - Compressed */}
              <button className="w-full py-1.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-md font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 group-hover:gap-2 mt-2"> {/* Reduced padding/font size/rounded size */}
                Read Article
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More Button - Compressed */}
      <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}> {/* Reduced margin: mt-12 -> mt-8 */}
        <button className="px-6 py-3 bg-gradient-to-r from-success to-primary text-primary-foreground font-display font-black text-base uppercase tracking-wider rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-success/50 transition-all duration-300 flex items-center gap-2 mx-auto"> {/* Reduced padding/font size/rounded size */}
          <TrendingUp className="w-4 h-4" />
          More News
        </button>
      </div>
    </div>
  );
};
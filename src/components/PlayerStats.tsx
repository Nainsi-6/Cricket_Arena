import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const PlayerStats = () => {
  const battingStats = [
    { format: "Tests", mat: 11, inns: 18, no: 1, runs: 532, hs: "108", ave: "31.29", bf: "720", sr: "73.88", hundreds: 1, fifties: 4, fours: 68, sixes: 12, ct: 7, st: 0 },
    { format: "ODIs", mat: 94, inns: 68, no: 10, runs: 1904, hs: "92*", ave: "32.82", bf: "1717", sr: "110.89", hundreds: 0, fifties: 11, fours: 141, sixes: 76, ct: 35, st: 0 },
    { format: "T20Is", mat: 120, inns: 94, no: 26, runs: 1860, hs: "71*", ave: "27.35", bf: "1319", sr: "141.01", hundreds: 0, fifties: 5, fours: 140, sixes: 96, ct: 57, st: 0 },
    { format: "FC", mat: 29, inns: 46, no: 1, runs: 1351, hs: "108", ave: "30.02", bf: "2382", sr: "56.71", hundreds: 1, fifties: 10, fours: 167, sixes: 24, ct: 14, st: 0 },
    { format: "List A", mat: 118, inns: 88, no: 15, runs: 2249, hs: "92*", ave: "30.80", bf: "2118", sr: "106.18", hundreds: 0, fifties: 13, fours: 161, sixes: 86, ct: 47, st: 0 },
    { format: "T20s", mat: 308, inns: 267, no: 76, runs: 5623, hs: "91", ave: "29.43", bf: "3953", sr: "142.24", hundreds: 0, fifties: 21, fours: 417, sixes: 299, ct: 144, st: 0 }
  ];

  const bowlingStats = [
    { format: "Tests", mat: 11, inns: 19, balls: 937, runs: 528, wkts: 17, bbi: "5/28", bbm: "6/50", ave: "31.05", econ: "3.38", sr: "55.1", fourW: 0, fiveW: 1, tenW: 0 },
    { format: "ODIs", mat: 94, inns: 88, balls: 3460, runs: 3231, wkts: 91, bbi: "4/24", bbm: "4/24", ave: "35.50", econ: "5.60", sr: "38.0", fourW: 1, fiveW: 0, tenW: 0 },
    { format: "T20Is", mat: 120, inns: 108, balls: 1901, runs: 2605, wkts: 98, bbi: "4/16", bbm: "4/16", ave: "26.58", econ: "8.22", sr: "19.3", fourW: 3, fiveW: 0, tenW: 0 },
    { format: "FC", mat: 29, inns: 39, balls: 2694, runs: 1486, wkts: 48, bbi: "5/28", bbm: "8/91", ave: "30.95", econ: "3.30", sr: "56.1", fourW: 0, fiveW: 3, tenW: 0 },
    { format: "List A", mat: 118, inns: 105, balls: 4330, runs: 3934, wkts: 110, bbi: "4/24", bbm: "4/24", ave: "35.76", econ: "5.45", sr: "39.3", fourW: 1, fiveW: 0, tenW: 0 },
    { format: "T20s", mat: 308, inns: 248, balls: 4183, runs: 5855, wkts: 208, bbi: "5/36", bbm: "5/36", ave: "28.14", econ: "8.39", sr: "20.1", fourW: 3, fiveW: 1, tenW: 0 }
  ];

  return (
    <div className="container mx-auto px-6 py-12 space-y-8">
      <div className="space-y-2 animate-fade-in">
        <h2 className="text-4xl font-display font-black text-foreground uppercase tracking-wider glow-text">
          Career Statistics
        </h2>
        <p className="text-muted-foreground font-body text-lg">Complete performance breakdown across all formats</p>
      </div>

      {/* Batting Stats */}
      <Card className="bg-gradient-card border-border/50 p-8 hover-lift animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-primary/20 text-primary border-primary/50 px-4 py-1.5 font-display font-bold text-lg uppercase">
              Batting & Fielding
            </Badge>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">Format</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">Mat</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">Inns</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">NO</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-primary uppercase tracking-wide">Runs</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">HS</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">Ave</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">BF</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-accent uppercase tracking-wide">SR</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">100s</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">50s</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">4s</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">6s</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">Ct</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">St</th>
                </tr>
              </thead>
              <tbody>
                {battingStats.map((stat, idx) => (
                  <tr key={idx} className="border-b border-border/30 hover:bg-muted/20 transition-colors duration-300">
                    <td className="py-4 px-3 font-display font-bold text-foreground">{stat.format}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.mat}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.inns}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.no}</td>
                    <td className="text-center py-4 px-3 font-display font-bold text-primary text-lg">{stat.runs}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.hs}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.ave}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.bf}</td>
                    <td className="text-center py-4 px-3 font-display font-bold text-accent">{stat.sr}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.hundreds}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.fifties}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.fours}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.sixes}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.ct}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.st}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      {/* Bowling Stats */}
      <Card className="bg-gradient-card border-border/50 p-8 hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/50 px-4 py-1.5 font-display font-bold text-lg uppercase">
              Bowling
            </Badge>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">Format</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">Mat</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">Inns</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">Balls</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">Runs</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-accent uppercase tracking-wide">Wkts</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">BBI</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">BBM</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">Ave</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-primary uppercase tracking-wide">Econ</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">SR</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">4w</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">5w</th>
                  <th className="text-center py-4 px-3 text-xs font-display font-bold text-muted-foreground uppercase tracking-wide">10w</th>
                </tr>
              </thead>
              <tbody>
                {bowlingStats.map((stat, idx) => (
                  <tr key={idx} className="border-b border-border/30 hover:bg-muted/20 transition-colors duration-300">
                    <td className="py-4 px-3 font-display font-bold text-foreground">{stat.format}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.mat}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.inns}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.balls}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.runs}</td>
                    <td className="text-center py-4 px-3 font-display font-bold text-accent text-lg">{stat.wkts}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.bbi}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.bbm}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.ave}</td>
                    <td className="text-center py-4 px-3 font-display font-bold text-primary">{stat.econ}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.sr}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.fourW}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.fiveW}</td>
                    <td className="text-center py-4 px-3 font-body text-foreground/80">{stat.tenW}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      <div className="text-center pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <a 
          href="#" 
          className="inline-block text-primary hover:text-primary/80 font-display font-bold text-lg uppercase tracking-wide transition-all duration-300 hover:scale-110"
        >
          View all stats →
        </a>
      </div>
    </div>
  );
};

import { BarChart3, Calendar, Flame, Layers, PlayCircle } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const metrics = [
  { label: "Monthly readers", value: "128.4K", change: "+12%" },
  { label: "Active series", value: "24", change: "+3" },
  { label: "Avg. time on page", value: "4m 28s", change: "+18%" }
];

const pipeline = [
  { title: "Future of audio blogs", status: "scheduled", date: "Apr 02" },
  { title: "AI-native storytelling", status: "draft", date: "Apr 06" },
  { title: "Design system deep dive", status: "review", date: "Apr 12" }
];

export default function Overview() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <Card key={metric.label}>
            <CardHeader>
              <CardTitle>{metric.label}</CardTitle>
              <Badge tone="success">{metric.change}</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-white">{metric.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <Card className="glass">
          <CardHeader>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">Content engine</p>
              <CardTitle>Editorial pipeline</CardTitle>
            </div>
            <Button variant="outline" size="sm">
              <Calendar size={16} />
              Schedule sprint
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pipeline.map((item) => (
                <div key={item.title} className="flex items-center justify-between rounded-xl bg-slate-900/70 p-3">
                  <div>
                    <p className="font-medium text-white">{item.title}</p>
                    <p className="text-xs text-slate-400">{item.date}</p>
                  </div>
                  <Badge tone={item.status === "scheduled" ? "success" : "warning"}>{item.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Creator momentum</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Flame size={18} className="text-orange-400" />
                <span>7-day publishing streak maintained</span>
              </div>
              <div className="flex items-center gap-3">
                <PlayCircle size={18} className="text-purple-400" />
                <span>3 videos ready for embeds</span>
              </div>
              <div className="flex items-center gap-3">
                <Layers size={18} className="text-blue-400" />
                <span>12 new assets in the media library</span>
              </div>
              <div className="flex items-center gap-3">
                <BarChart3 size={18} className="text-emerald-400" />
                <span>Engagement up 18% week-over-week</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { FileAudio2, FileText, Film, Image, UploadCloud } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const media = [
  { type: "Video", title: "Launch trailer", icon: Film, size: "128MB" },
  { type: "Audio", title: "Podcast intro", icon: FileAudio2, size: "22MB" },
  { type: "Image", title: "Hero editorial", icon: Image, size: "4.2MB" },
  { type: "Doc", title: "Press kit", icon: FileText, size: "2.1MB" }
];

export default function Media() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">Admin / Media</p>
          <h2 className="text-2xl font-semibold">Media library</h2>
        </div>
        <Button size="sm">
          <UploadCloud size={16} />
          Upload assets
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {media.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} tone="muted">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Icon size={18} className="text-purple-300" />
                  {item.type}
                </CardTitle>
                <span className="text-xs text-slate-400">{item.size}</span>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white">{item.title}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

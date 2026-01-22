import { FilePlus2, Filter, MoreHorizontal } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const posts = [
  {
    title: "The most magnetic blog landing",
    status: "published",
    author: "Aisha Hunt",
    updated: "2 hours ago",
    channel: "Design"
  },
  {
    title: "Audio-first storytelling playbook",
    status: "scheduled",
    author: "Devon Lee",
    updated: "Tomorrow",
    channel: "Podcast"
  },
  {
    title: "Inside the media kitchen",
    status: "draft",
    author: "Riley Wood",
    updated: "3 days ago",
    channel: "Ops"
  }
];

export default function Posts() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">Admin / Posts</p>
          <h2 className="text-2xl font-semibold">Blog posts</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter size={16} />
            Filters
          </Button>
          <Button size="sm">
            <FilePlus2 size={16} />
            New post
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Latest content</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-lg font-medium text-white">{post.title}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.channel}</span>
                    <span>•</span>
                    <span>{post.updated}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge tone={post.status === "published" ? "success" : post.status === "draft" ? "warning" : "default"}>
                    {post.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

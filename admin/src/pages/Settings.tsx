import { ShieldCheck, UserCog, Webhook } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-400">Admin / Settings</p>
        <h2 className="text-2xl font-semibold">Workspace settings</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCog size={18} />
              Brand profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Input placeholder="Publication name" defaultValue="Blogi Magazine" />
              <Input placeholder="Primary domain" defaultValue="blogi.dev" />
              <Button size="sm">Save settings</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck size={18} />
              Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-slate-300">
              <p>Enable SSO, rotate API keys, and enforce MFA.</p>
              <Button variant="outline" size="sm">Open security center</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Webhook size={18} />
              Integrations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-white">Webhooks & automation</p>
                <p className="text-sm text-slate-400">Trigger updates when posts publish or media changes.</p>
              </div>
              <Button size="sm">Configure</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

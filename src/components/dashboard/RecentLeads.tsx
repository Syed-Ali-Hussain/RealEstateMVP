import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Lead } from "@/types";
import { formatDistanceToNow } from "date-fns";

interface RecentLeadsProps {
  leads: Lead[];
}

const statusColors = {
  New: "bg-blue-100 text-blue-800",
  Nurturing: "bg-yellow-100 text-yellow-800", 
  Qualified: "bg-green-100 text-green-800",
  Won: "bg-success-light text-success",
  Lost: "bg-destructive/10 text-destructive",
};

export function RecentLeads({ leads }: RecentLeadsProps) {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Recent Leads</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leads.slice(0, 5).map((lead) => (
            <div key={lead.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {lead.first_name.charAt(0)}{lead.last_name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    {lead.first_name} {lead.last_name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {lead.source} • {formatDistanceToNow(new Date(lead.created_at), { addSuffix: true })}
                  </p>
                </div>
              </div>
              <div className="text-right space-y-1">
                <Badge 
                  variant="secondary" 
                  className={statusColors[lead.status]}
                >
                  {lead.status}
                </Badge>
                <p className="text-xs text-muted-foreground">
                  ${lead.budget_min?.toLocaleString()} - ${lead.budget_max?.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
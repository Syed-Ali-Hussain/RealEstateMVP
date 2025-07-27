import { useState } from "react";
import { DndContext, DragOverlay, DragStartEvent, DragEndEvent } from "@dnd-kit/core";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { mockLeads, mockStages } from "@/lib/mockData";
import { Lead } from "@/types";

const statusColors = {
  New: "bg-blue-100 text-blue-800",
  Nurturing: "bg-yellow-100 text-yellow-800", 
  Qualified: "bg-green-100 text-green-800",
  Won: "bg-success-light text-success",
  Lost: "bg-destructive/10 text-destructive",
};

// Simple mapping of status to stage for demo
const statusToStage = {
  "New": "1",
  "Nurturing": "2", 
  "Qualified": "3",
  "Won": "6",
  "Lost": "6"
};

export default function Pipeline() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [leads, setLeads] = useState(mockLeads);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
    
    // Handle lead movement between stages here
    // For now, this is just a visual demo
  };

  const getLeadsForStage = (stageId: string) => {
    // Simple demo mapping - in real app this would use actual stage relationships
    const statusMapping: Record<string, string[]> = {
      "1": ["New"],
      "2": ["Nurturing"],
      "3": ["Qualified"],
      "4": [],
      "5": [],
      "6": ["Won", "Lost"]
    };
    
    const statuses = statusMapping[stageId] || [];
    return leads.filter(lead => statuses.includes(lead.status));
  };

  const activeLead = activeId ? leads.find(lead => lead.id === activeId) : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Pipeline</h1>
        <p className="text-muted-foreground">
          Track leads through your sales pipeline
        </p>
      </div>

      {/* Pipeline Board */}
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 min-h-[600px]">
          {mockStages.map((stage) => {
            const stageLeads = getLeadsForStage(stage.id);
            
            return (
              <Card key={stage.id} className="flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center justify-between">
                    {stage.name}
                    <Badge variant="secondary">{stageLeads.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-3">
                  {stageLeads.map((lead) => (
                    <div
                      key={lead.id}
                      className="p-3 rounded-lg border bg-card hover:shadow-md transition-all duration-200 cursor-move"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-primary/10 text-primary text-xs">
                            {lead.first_name.charAt(0)}{lead.last_name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">
                            {lead.first_name} {lead.last_name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {lead.email}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Badge 
                          variant="secondary" 
                          className={`${statusColors[lead.status]} text-xs`}
                        >
                          {lead.status}
                        </Badge>
                        
                        {lead.budget_min && lead.budget_max && (
                          <p className="text-xs text-muted-foreground">
                            ${lead.budget_min.toLocaleString()} - ${lead.budget_max.toLocaleString()}
                          </p>
                        )}
                        
                        <p className="text-xs text-muted-foreground">
                          {lead.property_interest}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{lead.source}</span>
                          <span>{lead.buy_or_sell}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {stageLeads.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      <p className="text-sm">No leads in this stage</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <DragOverlay>
          {activeLead && (
            <div className="p-3 rounded-lg border bg-card shadow-lg w-64">
              <div className="flex items-center space-x-3 mb-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                    {activeLead.first_name.charAt(0)}{activeLead.last_name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {activeLead.first_name} {activeLead.last_name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {activeLead.email}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
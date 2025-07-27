import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock } from "lucide-react";
import { Task } from "@/types";
import { formatDistanceToNow, isAfter } from "date-fns";

interface TasksListProps {
  tasks: Task[];
}

export function TasksList({ tasks }: TasksListProps) {
  const openTasks = tasks.filter(task => task.status === 'open');

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Open Tasks
          <Badge variant="secondary">{openTasks.length}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {openTasks.slice(0, 5).map((task) => {
            const isOverdue = isAfter(new Date(), new Date(task.due_date));
            
            return (
              <div key={task.id} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="space-y-1 flex-1">
                  <p className="text-sm font-medium">{task.title}</p>
                  <div className="flex items-center text-xs text-muted-foreground space-x-2">
                    <Clock className="w-3 h-3" />
                    <span className={isOverdue ? "text-destructive" : ""}>
                      Due {formatDistanceToNow(new Date(task.due_date), { addSuffix: true })}
                    </span>
                  </div>
                </div>
                <Button size="sm" variant="ghost">
                  <CheckCircle className="w-4 h-4" />
                </Button>
              </div>
            );
          })}
          {openTasks.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-4">
              No open tasks
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
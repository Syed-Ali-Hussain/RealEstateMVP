import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  Target,
  Calendar,
  MessageSquare
} from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { LeadsBySourceChart } from "@/components/dashboard/LeadsBySourceChart";
import { ConversionFunnelChart } from "@/components/dashboard/ConversionFunnelChart";
import { RecentLeads } from "@/components/dashboard/RecentLeads";
import { TasksList } from "@/components/dashboard/TasksList";
import { 
  mockDashboardStats, 
  mockLeadsBySource, 
  mockConversionFunnel,
  mockLeads,
  mockTasks
} from "@/lib/mockData";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's your real estate CRM overview for today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Leads Today"
          value={mockDashboardStats.leadsToday}
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="This Month"
          value={mockDashboardStats.leadsThisMonth}
          icon={Calendar}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="90-Day Conversion"
          value={`${mockDashboardStats.conversionRate90Days}%`}
          icon={Target}
          trend={{ value: 3.2, isPositive: true }}
        />
        <StatsCard
          title="Avg Cost Per Lead"
          value={`$${mockDashboardStats.averageCPL}`}
          icon={DollarSign}
          trend={{ value: 5.1, isPositive: false }}
        />
        <StatsCard
          title="Open Tasks"
          value={mockDashboardStats.openTasks}
          icon={Clock}
          description="2 overdue"
        />
        <StatsCard
          title="Response Time"
          value={`${mockDashboardStats.avgTimeToFirstResponse}m`}
          icon={MessageSquare}
          description="Average first response"
        />
        <StatsCard
          title="This Week"
          value={mockDashboardStats.leadsThisWeek}
          icon={TrendingUp}
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="Qualified Leads"
          value="18"
          icon={Target}
          description="Ready for conversion"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LeadsBySourceChart data={mockLeadsBySource} />
        <ConversionFunnelChart data={mockConversionFunnel} />
      </div>

      {/* Activity Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentLeads leads={mockLeads} />
        <TasksList tasks={mockTasks} />
      </div>
    </div>
  );
}
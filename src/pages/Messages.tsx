import { useState } from "react";
import { Send, Search, Filter, Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockMessages, mockLeads } from "@/lib/mockData";
import { formatDistanceToNow } from "date-fns";

const statusColors = {
  queued: "bg-blue-100 text-blue-800",
  sent: "bg-green-100 text-green-800",
  delivered: "bg-success-light text-success",
  opened: "bg-purple-100 text-purple-800",
  clicked: "bg-orange-100 text-orange-800",
  failed: "bg-destructive/10 text-destructive",
};

export default function Messages() {
  const [selectedTab, setSelectedTab] = useState("inbox");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLead, setSelectedLead] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");

  const getLeadName = (leadId: string) => {
    const lead = mockLeads.find(l => l.id === leadId);
    return lead ? `${lead.first_name} ${lead.last_name}` : "Unknown";
  };

  const filteredMessages = mockMessages.filter(message => {
    const leadName = getLeadName(message.lead_id);
    return leadName.toLowerCase().includes(searchTerm.toLowerCase()) ||
           message.body.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const groupedMessages = filteredMessages.reduce((groups, message) => {
    const leadId = message.lead_id;
    if (!groups[leadId]) groups[leadId] = [];
    groups[leadId].push(message);
    return groups;
  }, {} as Record<string, typeof mockMessages>);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Messages</h1>
          <p className="text-muted-foreground">
            Manage communications with your leads
          </p>
        </div>
        <Button variant="gradient" size="lg">
          <Send className="w-5 h-5 mr-2" />
          New Blast
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Sent</p>
                <p className="text-3xl font-bold">{mockMessages.length}</p>
              </div>
              <Mail className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Open Rate</p>
                <p className="text-3xl font-bold">68%</p>
              </div>
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Response Rate</p>
                <p className="text-3xl font-bold">24%</p>
              </div>
              <Phone className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Threads</p>
                <p className="text-3xl font-bold">{Object.keys(groupedMessages).length}</p>
              </div>
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Message Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[600px]">
        {/* Conversations List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Conversations
              <Badge variant="secondary">{Object.keys(groupedMessages).length}</Badge>
            </CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {Object.entries(groupedMessages).map(([leadId, messages]) => {
              const latestMessage = messages[messages.length - 1];
              const leadName = getLeadName(leadId);
              
              return (
                <div
                  key={leadId}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                    selectedLead === leadId ? 'bg-primary/5 border-primary' : 'hover:bg-muted/50'
                  }`}
                  onClick={() => setSelectedLead(leadId)}
                >
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {leadName.split(' ').map(n => n.charAt(0)).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium truncate">{leadName}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatDistanceToNow(new Date(latestMessage.created_at), { addSuffix: true })}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">
                        {latestMessage.body}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {latestMessage.channel}
                        </Badge>
                        <Badge 
                          variant="secondary" 
                          className={`${statusColors[latestMessage.status]} text-xs`}
                        >
                          {latestMessage.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Message Thread */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>
              {selectedLead ? getLeadName(selectedLead) : 'Select a conversation'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {selectedLead ? (
              <>
                {/* Messages */}
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {groupedMessages[selectedLead]?.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.direction === 'outbound' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.direction === 'outbound'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        {message.subject && (
                          <p className="text-sm font-medium mb-1">{message.subject}</p>
                        )}
                        <p className="text-sm">{message.body}</p>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-xs opacity-70">
                            {formatDistanceToNow(new Date(message.created_at), { addSuffix: true })}
                          </p>
                          <Badge 
                            variant="secondary" 
                            className="text-xs"
                          >
                            {message.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* New Message */}
                <div className="border-t pt-4 space-y-3">
                  <Textarea
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="min-h-[80px]"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        SMS
                      </Button>
                    </div>
                    <Button>
                      <Send className="w-4 h-4 mr-2" />
                      Send
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Select a conversation to view messages</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
export type UserRole = 'Admin' | 'Agent' | 'Marketer' | 'Viewer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  created_at: string;
}

export type LeadSource = 'Meta' | 'Google' | 'SEO' | 'Manual';
export type LeadStatus = 'New' | 'Nurturing' | 'Qualified' | 'Won' | 'Lost';
export type BuyOrSell = 'Buy' | 'Sell' | 'Both';

export interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  source: LeadSource;
  campaign_id?: string;
  status: LeadStatus;
  assigned_to?: string;
  tags: string[];
  created_at: string;
  last_contacted_at?: string;
  expected_conversion_date: string;
  converted_at?: string;
  property_interest?: string;
  budget_min?: number;
  budget_max?: number;
  buy_or_sell: BuyOrSell;
  notes?: string;
}

export type CampaignPlatform = 'Meta' | 'Google' | 'SEO' | 'Email/SMS';
export type CampaignObjective = 'Leads' | 'Traffic';
export type CampaignStatus = 'Active' | 'Paused' | 'Completed' | 'Draft';

export interface Campaign {
  id: string;
  name: string;
  platform: CampaignPlatform;
  objective: CampaignObjective;
  budget?: number;
  start_date: string;
  end_date?: string;
  status: CampaignStatus;
  cpl?: number; // Cost per lead
  leads_count: number;
  created_at: string;
}

export interface AdAccount {
  id: string;
  platform: 'Meta' | 'Google';
  account_id: string;
  access_token: string;
  is_active: boolean;
  created_at: string;
}

export type DripGoal = 'Nurture' | 'Reactivation' | 'Post-visit';
export type DripTrigger = 'LeadCreated' | 'LeadStatusChange' | 'Manual';

export interface DripSequence {
  id: string;
  name: string;
  goal: DripGoal;
  trigger: DripTrigger;
  is_active: boolean;
  created_at: string;
}

export type MessageChannel = 'Email' | 'SMS';

export interface DripStep {
  id: string;
  drip_sequence_id: string;
  step_order: number;
  delay_minutes: number;
  channel: MessageChannel;
  subject?: string;
  body_template: string;
  ai_personalize: boolean;
  created_at: string;
}

export type MessageDirection = 'outbound' | 'inbound';
export type MessageStatus = 'queued' | 'sent' | 'failed' | 'delivered' | 'opened' | 'clicked';

export interface Message {
  id: string;
  lead_id: string;
  user_id?: string;
  channel: MessageChannel;
  direction: MessageDirection;
  subject?: string;
  body: string;
  sent_at?: string;
  status: MessageStatus;
  provider_message_id?: string;
  created_at: string;
}

export type TaskStatus = 'open' | 'done';

export interface Task {
  id: string;
  lead_id: string;
  assigned_to: string;
  title: string;
  due_date: string;
  status: TaskStatus;
  notes?: string;
  created_at: string;
}

export interface LandingPage {
  id: string;
  title: string;
  slug: string;
  seo_title?: string;
  seo_description?: string;
  keywords: string[];
  hero_heading: string;
  hero_subheading?: string;
  form_fields: Record<string, any>;
  thank_you_message: string;
  published: boolean;
  campaign_id?: string;
  created_at: string;
}

export type EventType = 
  | 'lead_created' 
  | 'message_sent' 
  | 'sequence_started' 
  | 'page_view' 
  | 'form_submitted' 
  | 'status_changed'
  | 'task_created'
  | 'task_completed'
  | 'campaign_created';

export interface Event {
  id: string;
  lead_id?: string;
  user_id?: string;
  type: EventType;
  payload: Record<string, any>;
  created_at: string;
}

export interface Pipeline {
  id: string;
  name: string;
  created_at: string;
}

export interface Stage {
  id: string;
  pipeline_id: string;
  name: string;
  order: number;
  created_at: string;
}

export interface LeadStageHistory {
  id: string;
  lead_id: string;
  pipeline_id: string;
  stage_id: string;
  entered_at: string;
  left_at?: string;
}

// Dashboard specific types
export interface DashboardStats {
  leadsToday: number;
  leadsThisWeek: number;
  leadsThisMonth: number;
  conversionRate90Days: number;
  averageCPL: number;
  openTasks: number;
  avgTimeToFirstResponse: number;
}

export interface LeadsBySource {
  source: LeadSource;
  count: number;
  percentage: number;
}

export interface ConversionFunnel {
  stage: LeadStatus;
  count: number;
  percentage: number;
}
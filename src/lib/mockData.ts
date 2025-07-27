import { 
  User, Lead, Campaign, DripSequence, DripStep, LandingPage, 
  Event, Pipeline, Stage, Task, Message, DashboardStats, 
  LeadsBySource, ConversionFunnel 
} from '@/types';

// Sample Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Admin',
    email: 'admin@realestate.com',
    role: 'Admin',
    phone: '(555) 123-4567',
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2', 
    name: 'Sarah Marketing',
    email: 'marketing@realestate.com',
    role: 'Marketer',
    phone: '(555) 234-5678',
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Mike Agent',
    email: 'mike@realestate.com', 
    role: 'Agent',
    phone: '(555) 345-6789',
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    name: 'Lisa Agent',
    email: 'lisa@realestate.com',
    role: 'Agent', 
    phone: '(555) 456-7890',
    created_at: '2024-01-01T00:00:00Z'
  }
];

// Sample Campaigns
export const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'FB Buyers Lead Gen – July',
    platform: 'Meta',
    objective: 'Leads',
    budget: 5000,
    start_date: '2024-07-01T00:00:00Z',
    end_date: '2024-07-31T23:59:59Z',
    status: 'Active',
    cpl: 45.50,
    leads_count: 89,
    created_at: '2024-06-25T00:00:00Z'
  },
  {
    id: '2', 
    name: 'Google Sellers – PPC',
    platform: 'Google',
    objective: 'Leads',
    budget: 3500,
    start_date: '2024-07-15T00:00:00Z',
    end_date: '2024-08-15T23:59:59Z',
    status: 'Active',
    cpl: 52.75,
    leads_count: 34,
    created_at: '2024-07-10T00:00:00Z'
  },
  {
    id: '3',
    name: 'SEO – Neighborhood Guides',
    platform: 'SEO',
    objective: 'Traffic',
    start_date: '2024-06-01T00:00:00Z',
    status: 'Active',
    cpl: 12.30,
    leads_count: 156,
    created_at: '2024-05-25T00:00:00Z'
  }
];

// Sample Leads
export const mockLeads: Lead[] = [
  {
    id: '1',
    first_name: 'Jennifer',
    last_name: 'Smith',
    email: 'jennifer.smith@email.com',
    phone: '(555) 111-2222',
    source: 'Meta',
    campaign_id: '1',
    status: 'Nurturing',
    assigned_to: '3',
    tags: ['first-time-buyer', 'urgent'],
    created_at: '2024-07-20T10:30:00Z',
    last_contacted_at: '2024-07-22T14:15:00Z',
    expected_conversion_date: '2024-10-18T00:00:00Z',
    property_interest: '3BR House in Downtown',
    budget_min: 400000,
    budget_max: 550000,
    buy_or_sell: 'Buy',
    notes: 'Looking for family home, prequalified with local lender'
  },
  {
    id: '2',
    first_name: 'Robert',
    last_name: 'Johnson',
    email: 'rob.johnson@email.com',
    phone: '(555) 333-4444',
    source: 'Google',
    campaign_id: '2',
    status: 'Qualified',
    assigned_to: '4',
    tags: ['seller', 'motivated'],
    created_at: '2024-07-18T16:45:00Z',
    last_contacted_at: '2024-07-25T09:30:00Z',
    expected_conversion_date: '2024-10-16T00:00:00Z',
    property_interest: 'Sell 4BR Colonial',
    budget_min: 650000,
    budget_max: 750000,
    buy_or_sell: 'Sell',
    notes: 'Relocating for work, needs quick sale'
  },
  {
    id: '3',
    first_name: 'Maria',
    last_name: 'Garcia',
    email: 'maria.garcia@email.com',
    phone: '(555) 555-6666',
    source: 'SEO',
    campaign_id: '3',
    status: 'New',
    assigned_to: '3',
    tags: ['investor'],
    created_at: '2024-07-25T08:15:00Z',
    expected_conversion_date: '2024-10-23T00:00:00Z',
    property_interest: 'Investment Properties',
    budget_min: 200000,
    budget_max: 400000,
    buy_or_sell: 'Buy',
    notes: 'Looking for rental investment opportunities'
  },
  {
    id: '4',
    first_name: 'David',
    last_name: 'Chen',
    email: 'david.chen@email.com',
    phone: '(555) 777-8888',
    source: 'Manual',
    status: 'Won',
    assigned_to: '4',
    tags: ['referral', 'premium'],
    created_at: '2024-05-15T11:20:00Z',
    last_contacted_at: '2024-07-10T13:45:00Z',
    expected_conversion_date: '2024-08-13T00:00:00Z',
    converted_at: '2024-07-20T16:30:00Z',
    property_interest: 'Luxury Condo Downtown',
    budget_min: 800000,
    budget_max: 1200000,
    buy_or_sell: 'Buy',
    notes: 'Closed on penthouse unit - excellent client!'
  }
];

// Sample Drip Sequences
export const mockDripSequences: DripSequence[] = [
  {
    id: '1',
    name: '90-day Buyer Nurture',
    goal: 'Nurture',
    trigger: 'LeadCreated',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Seller Follow-up Sequence',
    goal: 'Nurture', 
    trigger: 'LeadStatusChange',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z'
  }
];

// Sample Drip Steps
export const mockDripSteps: DripStep[] = [
  {
    id: '1',
    drip_sequence_id: '1',
    step_order: 1,
    delay_minutes: 0,
    channel: 'Email',
    subject: 'Welcome! Let\'s find your dream home',
    body_template: 'Hi {{first_name}}, thank you for your interest! I\'m excited to help you find the perfect home.',
    ai_personalize: false,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    drip_sequence_id: '1',
    step_order: 2,
    delay_minutes: 1440, // 24 hours
    channel: 'SMS',
    subject: '',
    body_template: 'Hi {{first_name}}! Just checking in - any questions about the home buying process?',
    ai_personalize: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    drip_sequence_id: '1',
    step_order: 3,
    delay_minutes: 4320, // 3 days
    channel: 'Email',
    subject: 'Market insights for {{property_interest}}',
    body_template: 'Hi {{first_name}}, here are some market insights for your area of interest...',
    ai_personalize: true,
    created_at: '2024-01-01T00:00:00Z'
  }
];

// Sample Landing Pages
export const mockLandingPages: LandingPage[] = [
  {
    id: '1',
    title: 'Buy a Home in [City]',
    slug: 'buy-home-city',
    seo_title: 'Buy Your Dream Home | Expert Real Estate Agent',
    seo_description: 'Find your perfect home with our expert real estate team. Browse listings, get market insights, and connect with top-rated agents.',
    keywords: ['buy home', 'real estate', 'houses for sale', 'property'],
    hero_heading: 'Find Your Dream Home Today',
    hero_subheading: 'Expert guidance. Local knowledge. Results you can trust.',
    form_fields: {
      fields: ['first_name', 'last_name', 'email', 'phone', 'buy_or_sell', 'budget_min', 'budget_max']
    },
    thank_you_message: 'Thank you! We\'ll be in touch within 24 hours to help you find your perfect home.',
    published: true,
    campaign_id: '1',
    created_at: '2024-06-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'Sell Your Home Fast',
    slug: 'sell-home-fast',
    seo_title: 'Sell Your Home Fast | Get Top Dollar | Free Market Analysis',
    seo_description: 'Sell your home quickly and for top dollar. Get a free market analysis and expert marketing strategy.',
    keywords: ['sell home', 'home value', 'real estate agent', 'market analysis'],
    hero_heading: 'Sell Your Home for Top Dollar',
    hero_subheading: 'Free market analysis. Expert marketing. Fast results.',
    form_fields: {
      fields: ['first_name', 'last_name', 'email', 'phone', 'property_address', 'timeline']
    },
    thank_you_message: 'Thank you! We\'ll provide your free market analysis within 24 hours.',
    published: true,
    campaign_id: '2',
    created_at: '2024-06-15T00:00:00Z'
  }
];

// Sample Pipelines & Stages  
export const mockPipelines: Pipeline[] = [
  {
    id: '1',
    name: 'Buyers 90-day',
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Sellers 90-day', 
    created_at: '2024-01-01T00:00:00Z'
  }
];

export const mockStages: Stage[] = [
  { id: '1', pipeline_id: '1', name: 'New Lead', order: 1, created_at: '2024-01-01T00:00:00Z' },
  { id: '2', pipeline_id: '1', name: 'Initial Contact', order: 2, created_at: '2024-01-01T00:00:00Z' },
  { id: '3', pipeline_id: '1', name: 'Viewing Scheduled', order: 3, created_at: '2024-01-01T00:00:00Z' },
  { id: '4', pipeline_id: '1', name: 'Offer Submitted', order: 4, created_at: '2024-01-01T00:00:00Z' },
  { id: '5', pipeline_id: '1', name: 'Under Contract', order: 5, created_at: '2024-01-01T00:00:00Z' },
  { id: '6', pipeline_id: '1', name: 'Closed', order: 6, created_at: '2024-01-01T00:00:00Z' }
];

// Sample Tasks
export const mockTasks: Task[] = [
  {
    id: '1',
    lead_id: '1',
    assigned_to: '3',
    title: 'Send property listings matching criteria',
    due_date: '2024-07-28T17:00:00Z',
    status: 'open',
    notes: 'Focus on 3BR homes under $550K in downtown area',
    created_at: '2024-07-25T10:00:00Z'
  },
  {
    id: '2',
    lead_id: '2',
    assigned_to: '4', 
    title: 'Schedule home evaluation',
    due_date: '2024-07-27T14:00:00Z',
    status: 'open',
    notes: 'Client wants quick evaluation for relocation',
    created_at: '2024-07-24T09:30:00Z'
  }
];

// Sample Messages
export const mockMessages: Message[] = [
  {
    id: '1',
    lead_id: '1',
    user_id: '3',
    channel: 'Email',
    direction: 'outbound',
    subject: 'Welcome! Let\'s find your dream home',
    body: 'Hi Jennifer, thank you for your interest! I\'m excited to help you find the perfect home.',
    sent_at: '2024-07-20T10:35:00Z',
    status: 'opened',
    created_at: '2024-07-20T10:35:00Z'
  },
  {
    id: '2',
    lead_id: '1',
    user_id: '3',
    channel: 'SMS',
    direction: 'outbound',
    subject: '',
    body: 'Hi Jennifer! Just checking in - any questions about the home buying process?',
    sent_at: '2024-07-21T10:35:00Z',
    status: 'delivered',
    created_at: '2024-07-21T10:35:00Z'
  }
];

// Sample Events
export const mockEvents: Event[] = [
  {
    id: '1',
    lead_id: '1',
    type: 'lead_created',
    payload: { source: 'Meta', campaign: 'FB Buyers Lead Gen – July' },
    created_at: '2024-07-20T10:30:00Z'
  },
  {
    id: '2',
    lead_id: '1',
    user_id: '3',
    type: 'message_sent',
    payload: { channel: 'Email', subject: 'Welcome! Let\'s find your dream home' },
    created_at: '2024-07-20T10:35:00Z'
  },
  {
    id: '3',
    lead_id: '2',
    type: 'status_changed',
    payload: { from: 'Nurturing', to: 'Qualified' },
    created_at: '2024-07-24T15:20:00Z'
  }
];

// Dashboard Data
export const mockDashboardStats: DashboardStats = {
  leadsToday: 7,
  leadsThisWeek: 23,
  leadsThisMonth: 89,
  conversionRate90Days: 18.5,
  averageCPL: 42.85,
  openTasks: 12,
  avgTimeToFirstResponse: 45 // minutes
};

export const mockLeadsBySource: LeadsBySource[] = [
  { source: 'Meta', count: 89, percentage: 45.2 },
  { source: 'Google', count: 34, percentage: 17.3 },
  { source: 'SEO', count: 56, percentage: 28.4 },
  { source: 'Manual', count: 18, percentage: 9.1 }
];

export const mockConversionFunnel: ConversionFunnel[] = [
  { stage: 'New', count: 45, percentage: 100 },
  { stage: 'Nurturing', count: 32, percentage: 71.1 },
  { stage: 'Qualified', count: 18, percentage: 40.0 },
  { stage: 'Won', count: 8, percentage: 17.8 },
  { stage: 'Lost', count: 5, percentage: 11.1 }
];

// Helper functions
export const getLeadsByStatus = (status: string) => 
  mockLeads.filter(lead => lead.status === status);

export const getLeadsByAgent = (agentId: string) =>
  mockLeads.filter(lead => lead.assigned_to === agentId);

export const getCampaignLeads = (campaignId: string) =>
  mockLeads.filter(lead => lead.campaign_id === campaignId);

export const getLeadEvents = (leadId: string) =>
  mockEvents.filter(event => event.lead_id === leadId);

export const getLeadMessages = (leadId: string) =>
  mockMessages.filter(message => message.lead_id === leadId);

export const getLeadTasks = (leadId: string) =>
  mockTasks.filter(task => task.lead_id === leadId);

export const getUserByRole = (role: string) =>
  mockUsers.filter(user => user.role === role);
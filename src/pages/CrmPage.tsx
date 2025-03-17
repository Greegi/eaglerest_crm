
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const salesData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

const pipelineData = [
  { name: 'Lead', value: 35 },
  { name: 'Meeting', value: 25 },
  { name: 'Proposal', value: 20 },
  { name: 'Negotiation', value: 15 },
  { name: 'Closed', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const deals = [
  { id: 1, name: 'Enterprise Software License', client: 'Acme Inc.', value: '$120,000', stage: 'Proposal', probability: '60%' },
  { id: 2, name: 'Cloud Migration Services', client: 'Globex Corp', value: '$85,000', stage: 'Negotiation', probability: '75%' },
  { id: 3, name: 'Security Consulting', client: 'Initech', value: '$45,000', stage: 'Meeting', probability: '40%' },
  { id: 4, name: 'Annual Support Contract', client: 'Massive Dynamic', value: '$62,000', stage: 'Closed', probability: '100%' },
];

const CrmPage = () => {
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">CRM</h1>
        <p className="text-muted-foreground">Client relationship management dashboard</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Revenue</CardTitle>
            <CardDescription>Current fiscal year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$842,500</div>
            <p className="text-sm text-green-500 flex items-center gap-1 mt-1">
              <span>↑ 12.5%</span>
              <span className="text-muted-foreground">from last year</span>
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Active Deals</CardTitle>
            <CardDescription>In progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
            <p className="text-sm text-muted-foreground mt-1">
              8 deals in negotiation phase
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Conversion Rate</CardTitle>
            <CardDescription>Leads to customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">28.6%</div>
            <p className="text-sm text-green-500 flex items-center gap-1 mt-1">
              <span>↑ 3.2%</span>
              <span className="text-muted-foreground">from last quarter</span>
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="deals">Deals</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Sales</CardTitle>
              <CardDescription>Revenue breakdown by month</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Sales Pipeline</CardTitle>
              <CardDescription>Distribution by stage</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pipelineData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pipelineData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="deals" className="mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Active Deals</CardTitle>
              <CardDescription>Current opportunities in pipeline</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="h-10 px-4 text-left font-medium">Deal Name</th>
                      <th className="h-10 px-4 text-left font-medium">Client</th>
                      <th className="h-10 px-4 text-left font-medium">Value</th>
                      <th className="h-10 px-4 text-left font-medium">Stage</th>
                      <th className="h-10 px-4 text-left font-medium">Probability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deals.map((deal) => (
                      <tr key={deal.id} className="border-b transition-colors hover:bg-muted/50">
                        <td className="p-4 align-middle font-medium">{deal.name}</td>
                        <td className="p-4 align-middle">{deal.client}</td>
                        <td className="p-4 align-middle">{deal.value}</td>
                        <td className="p-4 align-middle">
                          <Badge 
                            variant={deal.stage === 'Closed' ? 'default' : 'secondary'}
                            className="whitespace-nowrap"
                          >
                            {deal.stage}
                          </Badge>
                        </td>
                        <td className="p-4 align-middle">{deal.probability}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Add New Deal</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CrmPage;


import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Search, 
  Plus, 
  CheckCircle, 
  XCircle, 
  Clock, 
  AlertCircle,
  Filter,
  Download
} from 'lucide-react';

const trademarks = [
  { 
    id: 1, 
    name: 'Acme Pro', 
    registrationNumber: 'TM1234567',
    status: 'Registered', 
    type: 'Wordmark',
    classes: [9, 42], 
    filingDate: '2023-04-15',
    registrationDate: '2023-10-10',
    renewalDate: '2033-10-10'
  },
  { 
    id: 2, 
    name: 'TechFlow', 
    registrationNumber: 'TM7654321',
    status: 'Pending', 
    type: 'Wordmark',
    classes: [9, 35, 42], 
    filingDate: '2023-08-22',
    registrationDate: null,
    renewalDate: null
  },
  { 
    id: 3, 
    name: 'InnovateLogo', 
    registrationNumber: 'TM9876543',
    status: 'Registered', 
    type: 'Logo',
    classes: [9, 41], 
    filingDate: '2022-11-05',
    registrationDate: '2023-06-20',
    renewalDate: '2033-06-20'
  },
  { 
    id: 4, 
    name: 'DataSphere', 
    registrationNumber: 'TM5432167',
    status: 'Rejected', 
    type: 'Wordmark',
    classes: [42], 
    filingDate: '2023-01-18',
    registrationDate: null,
    renewalDate: null
  },
  { 
    id: 5, 
    name: 'CloudNexus', 
    registrationNumber: 'TM2345678',
    status: 'Registered', 
    type: 'Combined',
    classes: [9, 38, 42], 
    filingDate: '2022-09-30',
    registrationDate: '2023-03-15',
    renewalDate: '2033-03-15'
  },
];

const statusIcons = {
  'Registered': <CheckCircle className="h-4 w-4 text-green-500" />,
  'Pending': <Clock className="h-4 w-4 text-yellow-500" />,
  'Rejected': <XCircle className="h-4 w-4 text-red-500" />,
  'Expired': <AlertCircle className="h-4 w-4 text-gray-500" />
};

const statusColors = {
  'Registered': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
  'Pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
  'Rejected': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
  'Expired': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100'
};

const TrademarkNamesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredTrademarks = trademarks.filter(tm => 
    tm.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    tm.registrationNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Trademark Names</h1>
        <p className="text-muted-foreground">Manage and monitor your trademark portfolio</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search trademarks..." 
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="flex items-center gap-1">
            <Filter size={16} />
            <span className="hidden sm:inline">Filter</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            <Download size={16} />
            <span className="hidden sm:inline">Export</span>
          </Button>
          <Button className="flex items-center gap-1 ml-auto sm:ml-0">
            <Plus size={16} />
            <span>New Trademark</span>
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Trademark Portfolio</CardTitle>
          <CardDescription>Overview of all registered and pending trademarks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-hidden">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="h-10 px-4 text-left font-medium">Name</th>
                  <th className="h-10 px-4 text-left font-medium">Registration #</th>
                  <th className="h-10 px-4 text-left font-medium">Status</th>
                  <th className="h-10 px-4 text-left font-medium">Type</th>
                  <th className="h-10 px-4 text-left font-medium">Classes</th>
                  <th className="h-10 px-4 text-left font-medium">Filing Date</th>
                  <th className="h-10 px-4 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTrademarks.map((trademark) => (
                  <tr key={trademark.id} className="border-b transition-colors hover:bg-muted/50">
                    <td className="p-4 align-middle font-medium">{trademark.name}</td>
                    <td className="p-4 align-middle">{trademark.registrationNumber}</td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-2">
                        {statusIcons[trademark.status as keyof typeof statusIcons]}
                        <Badge 
                          className={statusColors[trademark.status as keyof typeof statusColors]}
                          variant="outline"
                        >
                          {trademark.status}
                        </Badge>
                      </div>
                    </td>
                    <td className="p-4 align-middle">{trademark.type}</td>
                    <td className="p-4 align-middle">
                      <div className="flex flex-wrap gap-1">
                        {trademark.classes.map(cls => (
                          <Badge key={cls} variant="outline">{cls}</Badge>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 align-middle">{trademark.filingDate}</td>
                    <td className="p-4 align-middle">
                      <Button variant="ghost" size="sm">View</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {filteredTrademarks.length} of {trademarks.length} trademarks
          </div>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </CardFooter>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Trademarks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{trademarks.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Registered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{trademarks.filter(tm => tm.status === 'Registered').length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{trademarks.filter(tm => tm.status === 'Pending').length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Upcoming Renewals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrademarkNamesPage;

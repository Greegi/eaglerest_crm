
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, MoreHorizontal } from 'lucide-react';

const clients = [
  { id: 1, name: 'Acme Inc.', contact: 'John Smith', email: 'john@acme.com', status: 'Active', lastContact: '2023-10-15' },
  { id: 2, name: 'Globex Corporation', contact: 'Jane Doe', email: 'jane@globex.com', status: 'Active', lastContact: '2023-10-12' },
  { id: 3, name: 'Soylent Corp', contact: 'Mike Johnson', email: 'mike@soylent.com', status: 'Inactive', lastContact: '2023-09-28' },
  { id: 4, name: 'Initech', contact: 'Tom Wilson', email: 'tom@initech.com', status: 'Active', lastContact: '2023-10-10' },
  { id: 5, name: 'Massive Dynamic', contact: 'Sarah Palmer', email: 'sarah@massive.com', status: 'Active', lastContact: '2023-10-14' },
];

const ClientsPage = () => {
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
        <p className="text-muted-foreground">Manage your client information</p>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search clients..." className="pl-8" />
        </div>
        
        <Button className="flex items-center gap-1">
          <Plus size={16} />
          <span>Add Client</span>
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Client List</CardTitle>
          <CardDescription>Manage and view all client details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="h-10 px-4 text-left font-medium">Name</th>
                  <th className="h-10 px-4 text-left font-medium">Contact</th>
                  <th className="h-10 px-4 text-left font-medium">Email</th>
                  <th className="h-10 px-4 text-left font-medium">Status</th>
                  <th className="h-10 px-4 text-left font-medium">Last Contact</th>
                  <th className="h-10 px-4 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.id} className="border-b transition-colors hover:bg-muted/50">
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${client.name}`} alt={client.name} />
                          <AvatarFallback>{client.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{client.name}</span>
                      </div>
                    </td>
                    <td className="p-4 align-middle">{client.contact}</td>
                    <td className="p-4 align-middle">{client.email}</td>
                    <td className="p-4 align-middle">
                      <Badge variant={client.status === 'Active' ? 'default' : 'secondary'}>
                        {client.status}
                      </Badge>
                    </td>
                    <td className="p-4 align-middle">{client.lastContact}</td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientsPage;

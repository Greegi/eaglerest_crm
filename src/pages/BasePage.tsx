
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BasePage = () => {
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome</h1>
        <p className="text-muted-foreground">Base template for your system</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle>Overview</CardTitle>
            <CardDescription>System statistics and information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Total Clients</p>
                <p className="text-2xl font-medium">142</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Active Projects</p>
                <p className="text-2xl font-medium">38</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Notes</p>
                <p className="text-2xl font-medium">256</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Trademarks</p>
                <p className="text-2xl font-medium">87</p>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">View Details</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest system updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">New client added</p>
                <p className="text-xs text-muted-foreground">Today, 10:30 AM</p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">CRM updated</p>
                <p className="text-xs text-muted-foreground">Yesterday, 3:45 PM</p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-sm font-medium">Knowledge base entry added</p>
                <p className="text-xs text-muted-foreground">Yesterday, 1:20 PM</p>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">See All Activity</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common system tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">Add New Client</Button>
              <Button variant="outline" className="w-full justify-start">Create Note</Button>
              <Button variant="outline" className="w-full justify-start">Update Knowledge Base</Button>
              <Button variant="outline" className="w-full justify-start">Register Trademark</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BasePage;

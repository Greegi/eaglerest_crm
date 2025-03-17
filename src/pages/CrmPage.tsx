
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SummaryCards from '@/components/crm/SummaryCards';
import SalesChart from '@/components/crm/SalesChart';
import PipelineChart from '@/components/crm/PipelineChart';
import DealsTable from '@/components/crm/DealsTable';
import { salesData, pipelineData, COLORS, deals } from '@/data/crmData';

const CrmPage = () => {
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">CRM</h1>
        <p className="text-muted-foreground">Панель управления отношениями с клиентами</p>
      </div>
      
      <SummaryCards />
      
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="dashboard">Панель управления</TabsTrigger>
          <TabsTrigger value="deals">Сделки</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <SalesChart data={salesData} />
          <PipelineChart data={pipelineData} colors={COLORS} />
        </TabsContent>
        
        <TabsContent value="deals" className="mt-6">
          <DealsTable deals={deals} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CrmPage;

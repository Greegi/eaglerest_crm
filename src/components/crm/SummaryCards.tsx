
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Общая выручка</CardTitle>
          <CardDescription>Текущий финансовый год</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">₽842,500</div>
          <p className="text-sm text-green-500 flex items-center gap-1 mt-1">
            <span>↑ 12.5%</span>
            <span className="text-muted-foreground">от прошлого года</span>
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Активные сделки</CardTitle>
          <CardDescription>В процессе</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">24</div>
          <p className="text-sm text-muted-foreground mt-1">
            8 сделок в фазе переговоров
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Коэффициент конверсии</CardTitle>
          <CardDescription>Лиды в клиенты</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">28.6%</div>
          <p className="text-sm text-green-500 flex items-center gap-1 mt-1">
            <span>↑ 3.2%</span>
            <span className="text-muted-foreground">от прошлого квартала</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCards;

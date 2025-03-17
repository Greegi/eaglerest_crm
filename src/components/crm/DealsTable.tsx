
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Deal {
  id: number;
  name: string;
  client: string;
  value: string;
  stage: string;
  probability: string;
}

interface DealsTableProps {
  deals: Deal[];
}

const DealsTable: React.FC<DealsTableProps> = ({ deals }) => {
  // Функция для определения варианта бейджа на основе этапа сделки
  const getBadgeVariant = (stage: string) => {
    switch (stage) {
      case 'Закрыто':
        return 'default';
      default:
        return 'secondary';
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Активные сделки</CardTitle>
        <CardDescription>Текущие возможности в воронке</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="h-10 px-4 text-left font-medium">Название сделки</th>
                <th className="h-10 px-4 text-left font-medium">Клиент</th>
                <th className="h-10 px-4 text-left font-medium">Стоимость</th>
                <th className="h-10 px-4 text-left font-medium">Этап</th>
                <th className="h-10 px-4 text-left font-medium">Вероятность</th>
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
                      variant={getBadgeVariant(deal.stage)}
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
        <Button className="ml-auto">Добавить новую сделку</Button>
      </CardFooter>
    </Card>
  );
};

export default DealsTable;


import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Search, Plus, FolderOpen, FileText, ChevronRight } from 'lucide-react';

const categories = [
  { id: 1, name: 'General', count: 12 },
  { id: 2, name: 'Technical', count: 28 },
  { id: 3, name: 'Legal', count: 15 },
  { id: 4, name: 'Financial', count: 9 },
  { id: 5, name: 'HR', count: 7 },
];

const articles = [
  { id: 1, title: 'Getting Started Guide', category: 'General', updated: '2023-10-15', views: 1245 },
  { id: 2, title: 'API Documentation', category: 'Technical', updated: '2023-10-10', views: 875 },
  { id: 3, title: 'Trademark Registration Process', category: 'Legal', updated: '2023-09-28', views: 456 },
  { id: 4, title: 'Invoicing Procedures', category: 'Financial', updated: '2023-10-05', views: 321 },
  { id: 5, title: 'Employee Onboarding', category: 'HR', updated: '2023-10-12', views: 198 },
  { id: 6, title: 'System Architecture Overview', category: 'Technical', updated: '2023-09-25', views: 735 },
];

const KnowledgeBasePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Knowledge Base</h1>
        <p className="text-muted-foreground">Centralized information repository</p>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search knowledge base..." className="pl-8" />
        </div>
        
        <Button className="flex items-center gap-1">
          <Plus size={16} />
          <span>New Article</span>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Categories</CardTitle>
              <CardDescription>Browse by topic</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 pt-2">
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start ${selectedCategory === null ? 'bg-muted' : ''}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  <FolderOpen className="mr-2 h-4 w-4" />
                  <span>All Articles</span>
                </Button>
                {categories.map((category) => (
                  <Button 
                    key={category.id}
                    variant="ghost" 
                    className={`w-full justify-start ${selectedCategory === category.id ? 'bg-muted' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <FolderOpen className="mr-2 h-4 w-4" />
                    <span>{category.name}</span>
                    <Badge variant="secondary" className="ml-auto">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>
                {selectedCategory === null 
                  ? 'All Articles' 
                  : categories.find(c => c.id === selectedCategory)?.name + ' Articles'}
              </CardTitle>
              <CardDescription>
                {selectedCategory === null 
                  ? `${articles.length} articles in total` 
                  : `${categories.find(c => c.id === selectedCategory)?.count} articles in this category`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {articles
                  .filter(article => selectedCategory === null || 
                    categories.find(c => c.id === selectedCategory)?.name === article.category)
                  .map((article) => (
                    <div key={article.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <h3 className="font-medium">{article.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">Last updated: {article.updated}</p>
                        </div>
                        <Badge>{article.category}</Badge>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex items-center justify-between text-sm">
                        <p className="text-muted-foreground">{article.views} views</p>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <span>Read Article</span>
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBasePage;

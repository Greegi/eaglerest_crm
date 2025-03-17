
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Plus, 
  Star, 
  Clock, 
  Tag, 
  StickyNote, 
  MoreVertical,
  CalendarDays
} from 'lucide-react';

const notes = [
  { 
    id: 1, 
    title: 'Client Meeting - Acme Inc', 
    content: 'Discussed new project timeline and requirements. Follow up next week about budget concerns.',
    tags: ['Meeting', 'Client'], 
    created: '2023-10-15',
    starred: true
  },
  { 
    id: 2, 
    title: 'Project Roadmap Ideas', 
    content: 'Brainstorming session for Q4 product features. Key focus areas: mobile optimization, payment integrations.',
    tags: ['Planning', 'Product'], 
    created: '2023-10-12',
    starred: false
  },
  { 
    id: 3, 
    title: 'Trademark Research', 
    content: 'Initial research for new product name trademark. Need to check availability in EU and US markets.',
    tags: ['Legal', 'Research'], 
    created: '2023-10-10',
    starred: true
  },
  { 
    id: 4, 
    title: 'Team Feedback Session', 
    content: 'Collected feedback from design team. Main concerns: timeline constraints and resource allocation.',
    tags: ['Team', 'Feedback'], 
    created: '2023-10-08',
    starred: false
  },
  { 
    id: 5, 
    title: 'Financial Report Analysis', 
    content: 'Q3 financial report analysis. Revenue up 12% YoY. Expenses slightly higher than projected due to new hires.',
    tags: ['Finance', 'Report'], 
    created: '2023-10-05',
    starred: false
  },
];

interface NoteCardProps {
  note: typeof notes[0];
}

const NoteCard = ({ note }: NoteCardProps) => {
  return (
    <Card className="h-full flex flex-col group transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{note.title}</CardTitle>
          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
        <CardDescription className="flex items-center gap-1">
          <CalendarDays className="h-3 w-3" />
          <span>{note.created}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm line-clamp-4">{note.content}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center gap-2 pt-2 border-t">
        {note.tags.map((tag, index) => (
          <Badge key={index} variant="outline">{tag}</Badge>
        ))}
        {note.starred && (
          <Button variant="ghost" size="icon" className="ml-auto">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const NotesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const starredNotes = filteredNotes.filter(note => note.starred);
  
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Notes</h1>
        <p className="text-muted-foreground">Capture and organize your thoughts</p>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search notes..." 
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Button className="flex items-center gap-1">
          <Plus size={16} />
          <span>New Note</span>
        </Button>
      </div>
      
      <Tabs defaultValue="all">
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="all" className="flex items-center gap-2">
              <StickyNote className="h-4 w-4" />
              <span>All Notes</span>
            </TabsTrigger>
            <TabsTrigger value="starred" className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>Starred</span>
            </TabsTrigger>
            <TabsTrigger value="recent" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Recent</span>
            </TabsTrigger>
            <TabsTrigger value="tags" className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <span>Tags</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.length > 0 ? (
              filteredNotes.map(note => (
                <NoteCard key={note.id} note={note} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <StickyNote className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No notes found</h3>
                <p className="text-muted-foreground">Try adjusting your search or create a new note</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="starred" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {starredNotes.length > 0 ? (
              starredNotes.map(note => (
                <NoteCard key={note.id} note={note} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <Star className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No starred notes</h3>
                <p className="text-muted-foreground">Star important notes to find them quickly</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="recent" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.slice().sort((a, b) => 
              new Date(b.created).getTime() - new Date(a.created).getTime()
            ).map(note => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="tags" className="mt-0">
          <div className="mb-6 flex flex-wrap gap-2">
            <Badge className="cursor-pointer py-1.5">Meeting</Badge>
            <Badge className="cursor-pointer py-1.5">Client</Badge>
            <Badge className="cursor-pointer py-1.5">Planning</Badge>
            <Badge className="cursor-pointer py-1.5">Product</Badge>
            <Badge className="cursor-pointer py-1.5">Legal</Badge>
            <Badge className="cursor-pointer py-1.5">Research</Badge>
            <Badge className="cursor-pointer py-1.5">Team</Badge>
            <Badge className="cursor-pointer py-1.5">Feedback</Badge>
            <Badge className="cursor-pointer py-1.5">Finance</Badge>
            <Badge className="cursor-pointer py-1.5">Report</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map(note => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NotesPage;

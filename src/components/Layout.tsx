
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { 
  Users, 
  CreditCard, 
  FileText, 
  Book, 
  Bookmark, 
  Copyright 
} from 'lucide-react';

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isActive: boolean;
}

const SidebarLink = ({ to, icon, children, isActive }: SidebarLinkProps) => (
  <Link to={to} className={cn("sidebar-link", isActive && "active")}>
    {icon}
    <span>{children}</span>
  </Link>
);

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div
      className={cn(
        "transition-all duration-500 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      {children}
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0 border-r border-border bg-card/50 backdrop-blur-sm">
        <div className="p-6">
          <h1 className="text-xl font-semibold tracking-tight">System</h1>
          <p className="text-sm text-muted-foreground">Information management</p>
        </div>
        
        <Separator className="mb-4" />
        
        <nav className="px-3 py-2 space-y-1">
          <SidebarLink 
            to="/" 
            icon={<FileText size={18} />} 
            isActive={location.pathname === '/'}>
            Base
          </SidebarLink>
          
          <SidebarLink 
            to="/clients" 
            icon={<Users size={18} />} 
            isActive={location.pathname === '/clients'}>
            Clients
          </SidebarLink>
          
          <SidebarLink 
            to="/crm" 
            icon={<CreditCard size={18} />} 
            isActive={location.pathname === '/crm'}>
            CRM
          </SidebarLink>
          
          <SidebarLink 
            to="/knowledge-base" 
            icon={<Book size={18} />} 
            isActive={location.pathname === '/knowledge-base'}>
            Knowledge Base
          </SidebarLink>
          
          <SidebarLink 
            to="/notes" 
            icon={<Bookmark size={18} />} 
            isActive={location.pathname === '/notes'}>
            Notes
          </SidebarLink>
          
          <SidebarLink 
            to="/trademark-names" 
            icon={<Copyright size={18} />} 
            isActive={location.pathname === '/trademark-names'}>
            Trademark Names
          </SidebarLink>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <main className="p-6 h-full">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
      </div>
    </div>
  );
};

export default Layout;

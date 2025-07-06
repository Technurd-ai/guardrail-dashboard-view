import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Shield, Menu, Home, AlertTriangle, Building, Search, Settings, Target, FileText, Database, Globe, Users } from "lucide-react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard", icon: Home },
    { path: "/owasp", label: "OWASP LLM Top 10", icon: AlertTriangle },
    { path: "/nist", label: "NIST AI Framework", icon: Building },
    { path: "/google-saif", label: "Google SAIF", icon: Shield },
    { path: "/mitre-atlas", label: "MITRE ATLAS", icon: Target },
    { path: "/iso-42001", label: "ISO/IEC 42001", icon: FileText },
    { path: "/nist-csf", label: "NIST CSF", icon: Database },
    { path: "/eu-ai-act", label: "EU AI Act", icon: Globe },
    { path: "/ieee-standards", label: "IEEE Standards", icon: Settings },
    { path: "/partnership-ai", label: "Partnership AI", icon: Users },
    { path: "/policy-mapping", label: "Policy Mapping", icon: Search },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">AI Compliance</span>
          </div>

          {/* Desktop Navigation - Show only main frameworks */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className="flex items-center gap-2 text-sm"
                  size="sm"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
            <Button variant="ghost" size="sm" className="text-sm">
              More...
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-2 mt-8">
                  {navItems.map((item) => (
                    <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                      <Button
                        variant={isActive(item.path) ? "default" : "ghost"}
                        className="w-full justify-start gap-2"
                        size="sm"
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import NavigationBar from "@/components/NavigationBar";
import { Link } from "react-router-dom";
import { 
  Shield, 
  AlertTriangle, 
  Building, 
  Search, 
  TrendingUp, 
  Users, 
  Globe, 
  Database,
  Target,
  FileText,
  Settings,
  Eye,
  Plus,
  ExternalLink
} from "lucide-react";

const Index = () => {
  const frameworks = [
    {
      id: "owasp",
      name: "OWASP LLM Top 10",
      description: "Critical security risks for Large Language Models",
      icon: AlertTriangle,
      color: "red",
      coverage: 85,
      vulnerabilities: 10,
      criticalIssues: 3,
      status: "Active",
      region: "🌍 Global",
      type: "Security Framework"
    },
    {
      id: "nist",
      name: "NIST AI RMF",
      description: "AI Risk Management Framework by NIST",
      icon: Building,
      color: "blue",
      coverage: 78,
      controls: 23,
      compliance: "92%",
      status: "Active",
      region: "🇺🇸 US Federal",
      type: "Risk Framework"
    },
    {
      id: "google-saif",
      name: "Google SAIF",
      description: "Secure AI Framework principles and practices",
      icon: Shield,
      color: "green",
      coverage: 72,
      principles: 6,
      implementation: "88%",
      status: "Active",
      region: "🌍 Global",
      type: "Governance Principles"
    },
    {
      id: "mitre-atlas",
      name: "MITRE ATLAS",
      description: "Adversarial Threat Landscape for AI Systems",
      icon: Target,
      color: "orange",
      coverage: 68,
      techniques: 14,
      tactics: 8,
      status: "Active",
      region: "🌍 Global",
      type: "Threat Knowledge Base"
    },
    {
      id: "iso-42001",
      name: "ISO/IEC 42001",
      description: "AI Management System international standard",
      icon: FileText,
      color: "purple",
      coverage: 75,
      requirements: 18,
      certification: "Pending",
      status: "Active",
      region: "🌍 International",
      type: "Management Standard"
    }
  ];

  const stats = [
    {
      title: "Total Frameworks",
      value: "5",
      change: "+2 this month",
      icon: Database,
      color: "blue"
    },
    {
      title: "Avg Compliance",
      value: "76%",
      change: "+12% from last month",
      icon: TrendingUp,
      color: "green"
    },
    {
      title: "Active Policies",
      value: "3",
      change: "2 real-time enabled",
      icon: Shield,
      color: "purple"
    },
    {
      title: "Protected Projects",
      value: "3",
      change: "All monitored",
      icon: Users,
      color: "orange"
    }
  ];

  const getFrameworkRoute = (id: string) => {
    switch (id) {
      case "owasp": return "/owasp";
      case "nist": return "/nist";
      case "google-saif": return "/google-saif";
      case "mitre-atlas": return "/mitre-atlas";
      case "iso-42001": return "/iso-42001";
      default: return "/policy-mapping";
    }
  };

  const getQuickActions = (framework: any) => {
    return [
      { label: "Create Policy", icon: Plus, primary: true },
      { label: "View Details", icon: Eye, primary: false },
      { label: "Configure", icon: Settings, primary: false }
    ];
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <NavigationBar />
        
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-12 w-12 text-blue-600" />
              <h1 className="text-5xl font-bold text-gray-900">AI Compliance Dashboard</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI safety and security framework compliance monitoring with real-time policy management
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
                    </div>
                    <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                      <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Framework Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">AI Security & Compliance Frameworks</h2>
              <Link to="/policy-mapping">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Settings className="h-4 w-4 mr-2" />
                  Manage Policies
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {frameworks.map((framework) => (
                <Card key={framework.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-gray-200 hover:border-l-blue-500">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Tooltip>
                          <TooltipTrigger>
                            <div className={`p-3 rounded-lg bg-${framework.color}-100 group-hover:bg-${framework.color}-200 transition-colors`}>
                              <framework.icon className={`h-6 w-6 text-${framework.color}-600`} />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{framework.type} - {framework.region}</p>
                          </TooltipContent>
                        </Tooltip>
                        <div>
                          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                            {framework.name}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {framework.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Tooltip>
                        <TooltipTrigger>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {framework.status}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Framework is actively monitored</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Coverage Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Coverage</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <span className="text-sm font-bold text-gray-900">{framework.coverage}%</span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Percentage of framework requirements covered by your policies</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <Progress value={framework.coverage} className="h-2" />
                    </div>

                    {/* Framework-specific metrics */}
                    <div className="grid grid-cols-2 gap-4 py-2">
                      {framework.id === "owasp" && (
                        <>
                          <div className="text-center">
                            <div className="text-lg font-bold text-red-600">{framework.vulnerabilities}</div>
                            <div className="text-xs text-gray-500">Total Risks</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-orange-600">{framework.criticalIssues}</div>
                            <div className="text-xs text-gray-500">Critical</div>
                          </div>
                        </>
                      )}
                      {framework.id === "nist" && (
                        <>
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-600">{framework.controls}</div>
                            <div className="text-xs text-gray-500">Controls</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-600">{framework.compliance}</div>
                            <div className="text-xs text-gray-500">Compliance</div>
                          </div>
                        </>
                      )}
                      {framework.id === "google-saif" && (
                        <>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-600">{framework.principles}</div>
                            <div className="text-xs text-gray-500">Principles</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-600">{framework.implementation}</div>
                            <div className="text-xs text-gray-500">Implemented</div>
                          </div>
                        </>
                      )}
                      {framework.id === "mitre-atlas" && (
                        <>
                          <div className="text-center">
                            <div className="text-lg font-bold text-orange-600">{framework.techniques}</div>
                            <div className="text-xs text-gray-500">Techniques</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-red-600">{framework.tactics}</div>
                            <div className="text-xs text-gray-500">Tactics</div>
                          </div>
                        </>
                      )}
                      {framework.id === "iso-42001" && (
                        <>
                          <div className="text-center">
                            <div className="text-lg font-bold text-purple-600">{framework.requirements}</div>
                            <div className="text-xs text-gray-500">Requirements</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-yellow-600">{framework.certification}</div>
                            <div className="text-xs text-gray-500">Status</div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Quick Actions */}
                    <div className="flex gap-2 pt-4 border-t">
                      {getQuickActions(framework).map((action, idx) => (
                        <Tooltip key={idx}>
                          <TooltipTrigger asChild>
                            <Button
                              variant={action.primary ? "default" : "outline"}
                              size="sm"
                              className="flex-1"
                              asChild={action.label === "View Details"}
                            >
                              {action.label === "View Details" ? (
                                <Link to={getFrameworkRoute(framework.id)}>
                                  <action.icon className="h-3 w-3 mr-1" />
                                  {action.label}
                                </Link>
                              ) : action.label === "Create Policy" ? (
                                <Link to="/policy-mapping">
                                  <action.icon className="h-3 w-3 mr-1" />
                                  {action.label}
                                </Link>
                              ) : (
                                <Link to="/policy-mapping">
                                  <action.icon className="h-3 w-3 mr-1" />
                                  {action.label}
                                </Link>
                              )}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              {action.label === "Create Policy" && "Create a new policy based on this framework"}
                              {action.label === "View Details" && "View detailed framework information and compliance status"}
                              {action.label === "Configure" && "Configure framework-specific settings and mappings"}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions Section */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Quick Actions</CardTitle>
              <CardDescription>Get started with AI compliance and security</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/policy-mapping">
                  <Button className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-left justify-start">
                    <div className="flex items-center gap-4">
                      <Plus className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Create New Policy</div>
                        <div className="text-sm opacity-90">Set up AI safety guardrails</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <Search className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Framework Explorer</div>
                        <div className="text-sm text-gray-600">Browse all compliance frameworks</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <Globe className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Real-time Protection</div>
                        <div className="text-sm text-gray-600">Configure live monitoring</div>
                      </div>
                    </div>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Index;

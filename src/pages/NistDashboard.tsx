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
  Eye, 
  TrendingUp, 
  Users, 
  Globe, 
  Database,
  Target,
  FileText,
  Settings,
  Plus,
  ExternalLink,
  CheckCircle,
  Activity
} from "lucide-react";

const NistDashboard = () => {
  const nistControls = [
    {
      id: "GV.1",
      name: "AI Risk Management",
      description: "Establish and maintain an AI risk management program",
      category: "Governance",
      compliance: 92,
      color: "blue",
      icon: Building,
      priority: "High",
      owaspMapping: "General security practices",
      mitreMapping: "Organizational threat model",
      isoMapping: "4.1 - Understanding the Organization",
      saifMapping: "Secure by Design principles"
    },
    {
      id: "MS.1",
      name: "Risk Measurement",
      description: "Measure and monitor AI risks",
      category: "Measurement",
      compliance: 85,
      color: "red",
      icon: AlertTriangle,
      priority: "Critical",
      owaspMapping: "All LLM vulnerabilities",
      mitreMapping: "T0051, T0054 - Threat analysis",
      isoMapping: "6.1 - Risk Assessment & Treatment",
      saifMapping: "Understand Limitations"
    },
    {
      id: "MG.1",
      name: "Risk Response",
      description: "Respond to identified AI risks",
      category: "Management",
      compliance: 78,
      color: "green",
      icon: Shield,
      priority: "High",
      owaspMapping: "Incident response planning",
      mitreMapping: "Active defense strategies",
      isoMapping: "8.3 - Control of Nonconforming Outputs",
      saifMapping: "Secure Deployment practices"
    },
    {
      id: "ID.1",
      name: "Identity Management",
      description: "Manage identities and access controls for AI systems",
      category: "Identification",
      compliance: 90,
      color: "purple",
      icon: Users,
      priority: "Medium",
      owaspMapping: "Authentication and authorization",
      mitreMapping: "Privilege escalation prevention",
      isoMapping: "5.1 - Resources",
      saifMapping: "Secure by Default implementation"
    }
  ];

  const stats = [
    {
      title: "Total Controls",
      value: "23",
      change: "+3 this month",
      icon: Database,
      color: "blue"
    },
    {
      title: "Avg Compliance",
      value: "95%",
      change: "+8% from last month",
      icon: TrendingUp,
      color: "green"
    },
    {
      title: "Active Policies",
      value: "5",
      change: "3 real-time enabled",
      icon: Shield,
      color: "purple"
    },
    {
      title: "Protected Projects",
      value: "8",
      change: "All monitored",
      icon: Users,
      color: "orange"
    }
  ];

  const frameworkAlignment = [
    {
      id: "nist",
      name: "NIST AI RMF",
      description: "AI Risk Management Framework by NIST",
      icon: Building,
      color: "blue",
      coverage: 92,
      controls: 23,
      compliance: "95%",
      status: "Primary Framework",
      region: "🇺🇸 US Federal",
      type: "Risk Framework"
    },
    {
      id: "iso-42001",
      name: "ISO/IEC 42001",
      description: "AI Management System international standard",
      icon: FileText,
      color: "purple",
      coverage: 88,
      requirements: 18,
      certification: "Ready",
      status: "Harmonized",
      region: "🌍 International",
      type: "Management Standard"
    },
    {
      id: "mitre-atlas",
      name: "MITRE ATLAS",
      description: "Adversarial Threat Landscape for AI Systems",
      icon: Target,
      color: "orange",
      coverage: 75,
      techniques: 14,
      tactics: 8,
      status: "Threat Informed",
      region: "🌍 Global",
      type: "Threat Intelligence"
    },
    {
      id: "owasp",
      name: "OWASP LLM Top 10",
      description: "Critical security risks for Large Language Models",
      icon: AlertTriangle,
      color: "red",
      coverage: 82,
      vulnerabilities: 10,
      criticalIssues: 3,
      status: "Security Focused",
      region: "🌍 Global",
      type: "Security Framework"
    },
    {
      id: "google-saif",
      name: "Google SAIF",
      description: "Secure AI Framework principles and practices",
      icon: Shield,
      color: "green",
      coverage: 85,
      principles: 6,
      implementation: "92%",
      status: "Best Practices",
      region: "🌍 Global",
      type: "Governance Principles"
    }
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <NavigationBar />
        
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building className="h-12 w-12 text-blue-600" />
              <h1 className="text-5xl font-bold text-gray-900">NIST AI Risk Management Framework</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI risk management with multi-framework integration and compliance alignment
            </p>
          </div>

          {/* Framework Alignment Overview */}
          <Card className="mb-8 border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-600" />
                Multi-Framework Alignment Dashboard
              </CardTitle>
              <CardDescription>How NIST AI RMF aligns with international standards and threat intelligence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {frameworkAlignment.map((framework) => (
                  <div key={framework.id} className="text-center p-6 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                    <Tooltip>
                      <TooltipTrigger>
                        <div className={`p-3 rounded-lg bg-${framework.color}-100 mb-3 mx-auto w-fit`}>
                          <framework.icon className={`h-6 w-6 text-${framework.color}-600`} />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="max-w-xs">
                          <p className="font-semibold">{framework.name}</p>
                          <p className="text-sm mt-1">{framework.description}</p>
                          <p className="text-xs mt-2">Region: {framework.region}</p>
                          <p className="text-xs">Type: {framework.type}</p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                    <div className={`text-2xl font-bold text-${framework.color}-600 mb-2`}>
                      {framework.coverage}%
                    </div>
                    <div className="text-sm font-medium text-gray-900 mb-3">{framework.name}</div>
                    <Progress value={framework.coverage} className="h-2 mb-2" />
                    <Badge variant="outline" className="text-xs">
                      {framework.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

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

          {/* NIST Controls Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">NIST AI RMF Controls</h2>
              <div className="flex gap-3">
                <Link to="/policy-mapping">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Create NIST Policy
                  </Button>
                </Link>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  NIST Guide
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {nistControls.map((control) => (
                <Card key={control.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-200 hover:border-l-blue-500">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Tooltip>
                          <TooltipTrigger>
                            <div className={`p-3 rounded-lg bg-${control.color}-100 group-hover:bg-${control.color}-200 transition-colors`}>
                              <control.icon className={`h-6 w-6 text-${control.color}-600`} />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="max-w-xs">
                              <p className="font-semibold">NIST AI RMF {control.id}</p>
                              <p className="text-sm mt-1">{control.description}</p>
                              <p className="text-xs mt-2 font-medium">Category: {control.category}</p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                        <div>
                          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                            {control.id}: {control.name}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {control.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant={control.priority === "Critical" ? "destructive" : control.priority === "High" ? "default" : "secondary"}>
                        {control.priority}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Compliance Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Compliance</span>
                        <span className="text-sm font-bold text-gray-900">{control.compliance}%</span>
                      </div>
                      <Progress value={control.compliance} className="h-2" />
                    </div>

                    {/* Framework Mappings */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Framework Alignments:</h4>
                      <div className="grid grid-cols-1 gap-1 text-xs">
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-red-50 rounded border text-left">
                              <span className="font-medium">OWASP:</span> {control.owaspMapping}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Alignment with OWASP LLM security practices</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-orange-50 rounded border text-left">
                              <span className="font-medium">MITRE:</span> {control.mitreMapping}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Integration with MITRE ATLAS threat intelligence</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-purple-50 rounded border text-left">
                              <span className="font-medium">ISO 42001:</span> {control.isoMapping}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Harmonization with ISO/IEC 42001 standard</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-green-50 rounded border text-left">
                              <span className="font-medium">SAIF:</span> {control.saifMapping}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Alignment with Google SAIF principles</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex gap-2 pt-4 border-t">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button size="sm" className="flex-1" asChild>
                            <Link to="/policy-mapping">
                              <Plus className="h-3 w-3 mr-1" />
                              Create Policy
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Create policy for NIST control {control.id}</p>
                        </TooltipContent>
                      </Tooltip>
                      
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Eye className="h-3 w-3 mr-1" />
                            Details
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View detailed control information and examples</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cross-Framework Integration Center */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Integrated Risk Management</CardTitle>
              <CardDescription>Create policies that combine NIST AI RMF with complementary frameworks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/policy-mapping">
                  <Button className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-left justify-start">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Building className="h-5 w-5" />
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-semibold">NIST + ISO 42001</div>
                        <div className="text-sm opacity-90">Risk + Management Systems</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Building className="h-5 w-5" />
                        <Target className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-semibold">NIST + MITRE ATLAS</div>
                        <div className="text-sm text-gray-600">Risk + Threat Intelligence</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <Globe className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Full Framework Suite</div>
                        <div className="text-sm text-gray-600">Complete compliance coverage</div>
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

export default NistDashboard;

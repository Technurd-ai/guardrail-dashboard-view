
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
  Lock,
  Activity,
  Zap
} from "lucide-react";

const NistCsfDashboard = () => {
  const csfFunctions = [
    {
      id: "ID",
      name: "Identify",
      description: "Develop understanding of cybersecurity risks to systems, people, assets, data, and capabilities",
      category: "Core Function",
      compliance: 88,
      color: "blue",
      icon: Eye,
      priority: "High",
      subcategories: 6,
      owaspMapping: "Asset identification and risk assessment",
      mitreMapping: "Reconnaissance and resource development",
      isoMapping: "4.1 - Understanding the Organization",
      nistAiMapping: "GV.1 - AI Risk Management"
    },
    {
      id: "PR",
      name: "Protect",
      description: "Develop and implement appropriate safeguards to ensure delivery of services",
      category: "Core Function",
      compliance: 92,
      color: "green",
      icon: Shield,
      priority: "Critical",
      subcategories: 6,
      owaspMapping: "Input validation and access controls",
      mitreMapping: "Defense evasion countermeasures",
      isoMapping: "A.9 - Access Control",
      nistAiMapping: "MS.1 - Risk Measurement"
    },
    {
      id: "DE",
      name: "Detect",
      description: "Develop and implement appropriate activities to identify cybersecurity events",
      category: "Core Function",
      compliance: 85,
      color: "orange",
      icon: AlertTriangle,
      priority: "High",
      subcategories: 3,
      owaspMapping: "Monitoring and detection of LLM attacks",
      mitreMapping: "T0051 - LLM Prompt Injection detection",
      isoMapping: "A.12 - Operations Security",
      nistAiMapping: "MG.1 - Risk Response"
    },
    {
      id: "RS",
      name: "Respond",
      description: "Develop and implement appropriate activities to take action regarding detected cybersecurity incidents",
      category: "Core Function",
      compliance: 78,
      color: "red",
      icon: Zap,
      priority: "Critical",
      subcategories: 5,
      owaspMapping: "Incident response for AI security events",
      mitreMapping: "Impact mitigation strategies",
      isoMapping: "A.16 - Information Security Incident Management",
      nistAiMapping: "GV.1 - Governance and oversight"
    },
    {
      id: "RC",
      name: "Recover",
      description: "Develop and implement appropriate activities to maintain resilience and restore capabilities",
      category: "Core Function",
      compliance: 82,
      color: "purple",
      icon: Activity,
      priority: "Medium",
      subcategories: 3,
      owaspMapping: "System recovery and continuity",
      mitreMapping: "Collection and exfiltration recovery",
      isoMapping: "A.17 - Information Security Aspects of Business Continuity",
      nistAiMapping: "MS.1 - Continuous monitoring"
    }
  ];

  const stats = [
    {
      title: "Core Functions",
      value: "5",
      change: "Complete framework",
      icon: Database,
      color: "blue"
    },
    {
      title: "Avg Compliance",
      value: "85%",
      change: "+5% this month",
      icon: TrendingUp,
      color: "green"
    },
    {
      title: "Active Controls",
      value: "23",
      change: "All categories covered",
      icon: Shield,
      color: "purple"
    },
    {
      title: "AI Integration",
      value: "100%",
      change: "Fully mapped to AI frameworks",
      icon: Target,
      color: "orange"
    }
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
        <NavigationBar />
        
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Lock className="h-12 w-12 text-cyan-600" />
              <h1 className="text-5xl font-bold text-gray-900">NIST Cybersecurity Framework</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cybersecurity framework with AI-specific adaptations and multi-framework integration
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

          {/* CSF Functions Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">NIST CSF Core Functions</h2>
              <div className="flex gap-3">
                <Link to="/policy-mapping">
                  <Button className="bg-cyan-600 hover:bg-cyan-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Create CSF Policy
                  </Button>
                </Link>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  NIST CSF Guide
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {csfFunctions.map((func) => (
                <Card key={func.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-cyan-200 hover:border-l-cyan-500">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg bg-${func.color}-100 group-hover:bg-${func.color}-200 transition-colors`}>
                          <func.icon className={`h-6 w-6 text-${func.color}-600`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-cyan-600 transition-colors">
                            {func.id}: {func.name}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {func.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant={func.priority === "Critical" ? "destructive" : "default"}>
                        {func.priority}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Compliance Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Implementation</span>
                        <span className="text-sm font-bold text-gray-900">{func.compliance}%</span>
                      </div>
                      <Progress value={func.compliance} className="h-2" />
                    </div>

                    {/* Function Metrics */}
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <div className="text-lg font-bold text-gray-900">{func.subcategories}</div>
                      <div className="text-sm text-gray-600">Subcategories</div>
                    </div>

                    {/* Framework Mappings */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">AI Framework Alignments:</h4>
                      <div className="grid grid-cols-1 gap-1 text-xs">
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-red-50 rounded border text-left truncate">
                              <span className="font-medium">OWASP:</span> {func.owaspMapping}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>OWASP LLM Top 10 alignment: {func.owaspMapping}</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-blue-50 rounded border text-left truncate">
                              <span className="font-medium">NIST AI:</span> {func.nistAiMapping}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>NIST AI RMF mapping: {func.nistAiMapping}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex gap-2 pt-4 border-t">
                      <Button size="sm" className="flex-1" asChild>
                        <Link to="/policy-mapping">
                          <Plus className="h-3 w-3 mr-1" />
                          Policy
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-3 w-3 mr-1" />
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Integration Actions */}
          <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-900">Cybersecurity + AI Integration</CardTitle>
              <CardDescription>Combine NIST CSF with AI-specific frameworks for comprehensive protection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/policy-mapping">
                  <Button className="w-full h-16 bg-cyan-600 hover:bg-cyan-700 text-left justify-start">
                    <div className="flex items-center gap-4">
                      <Lock className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">CSF + AI Frameworks</div>
                        <div className="text-sm opacity-90">Complete security coverage</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <Building className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Enterprise Integration</div>
                        <div className="text-sm text-gray-600">Organization-wide policies</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <Globe className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Compliance Suite</div>
                        <div className="text-sm text-gray-600">All frameworks unified</div>
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

export default NistCsfDashboard;


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
  Scale,
  Activity,
  Gavel
} from "lucide-react";

const EuAiActDashboard = () => {
  const aiActRequirements = [
    {
      id: "HIGH_RISK",
      name: "High-Risk AI Systems",
      description: "Systems that pose significant risks to health, safety, or fundamental rights",
      category: "Risk Classification",
      compliance: 75,
      color: "red",
      icon: AlertTriangle,
      priority: "Critical",
      requirements: 12,
      owaspMapping: "All LLM vulnerabilities apply",
      mitreMapping: "Comprehensive threat coverage",
      isoMapping: "A.18 - Compliance",
      nistMapping: "Complete RMF implementation"
    },
    {
      id: "GENERAL_PURPOSE",
      name: "General Purpose AI",
      description: "Foundation models and general-purpose AI systems requirements",
      category: "Foundation Models",
      compliance: 82,
      color: "orange",
      icon: Database,
      priority: "High",
      requirements: 8,
      owaspMapping: "Training data and model security",
      mitreMapping: "ML supply chain attacks",
      isoMapping: "A.15 - Supplier Relationships",
      nistMapping: "AI lifecycle management"
    },
    {
      id: "TRANSPARENCY",
      name: "Transparency Obligations",
      description: "Information requirements and transparency for AI systems",
      category: "Governance",
      compliance: 88,
      color: "blue",
      icon: Eye,
      priority: "Medium",
      requirements: 6,
      owaspMapping: "Model interpretability",
      mitreMapping: "Attribution and provenance",
      isoMapping: "A.7 - Human Resource Security",
      nistMapping: "Explainability and interpretability"
    },
    {
      id: "CONFORMITY",
      name: "Conformity Assessment",
      description: "Procedures to demonstrate compliance with AI Act requirements",
      category: "Assessment",
      compliance: 70,
      color: "purple",
      icon: Scale,
      priority: "High",
      requirements: 10,
      owaspMapping: "Security testing and validation",
      mitreMapping: "Adversarial testing",
      isoMapping: "A.14 - System Acquisition",
      nistMapping: "Verification and validation"
    },
    {
      id: "PROHIBITED",
      name: "Prohibited AI Practices",
      description: "AI systems and practices that are banned under the EU AI Act",
      category: "Prohibition",
      compliance: 95,
      color: "red",
      icon: Gavel,
      priority: "Critical",
      requirements: 4,
      owaspMapping: "Manipulation and deception prevention",
      mitreMapping: "Malicious use prevention",
      isoMapping: "A.6 - Organization of Information Security",
      nistMapping: "Trustworthy AI principles"
    }
  ];

  const stats = [
    {
      title: "Requirements",
      value: "40+",
      change: "Comprehensive coverage",
      icon: FileText,
      color: "blue"
    },
    {
      title: "Avg Compliance",
      value: "80%",
      change: "+15% this quarter",
      icon: TrendingUp,
      color: "green"
    },
    {
      title: "High-Risk Systems",
      value: "3",
      change: "Under assessment",
      icon: AlertTriangle,
      color: "red"
    },
    {
      title: "EU Market Ready",
      value: "85%",
      change: "On track for compliance",
      icon: Globe,
      color: "purple"
    }
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
        <NavigationBar />
        
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Scale className="h-12 w-12 text-purple-600" />
              <h1 className="text-5xl font-bold text-gray-900">EU AI Act Compliance</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive EU AI Act compliance framework with risk-based approach and multi-framework integration
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

          {/* AI Act Requirements Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">EU AI Act Requirements</h2>
              <div className="flex gap-3">
                <Link to="/policy-mapping">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Create AI Act Policy
                  </Button>
                </Link>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  AI Act Guide
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiActRequirements.map((req) => (
                <Card key={req.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-200 hover:border-l-purple-500">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg bg-${req.color}-100 group-hover:bg-${req.color}-200 transition-colors`}>
                          <req.icon className={`h-6 w-6 text-${req.color}-600`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                            {req.name}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {req.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant={req.priority === "Critical" ? "destructive" : "default"}>
                        {req.priority}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Compliance Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Compliance</span>
                        <span className="text-sm font-bold text-gray-900">{req.compliance}%</span>
                      </div>
                      <Progress value={req.compliance} className="h-2" />
                    </div>

                    {/* Requirements Count */}
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <div className="text-lg font-bold text-gray-900">{req.requirements}</div>
                      <div className="text-sm text-gray-600">Requirements</div>
                    </div>

                    {/* Framework Mappings */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Framework Alignments:</h4>
                      <div className="grid grid-cols-1 gap-1 text-xs">
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-red-50 rounded border text-left truncate">
                              <span className="font-medium">OWASP:</span> {req.owaspMapping}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>OWASP alignment: {req.owaspMapping}</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-blue-50 rounded border text-left truncate">
                              <span className="font-medium">NIST:</span> {req.nistMapping}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>NIST AI RMF mapping: {req.nistMapping}</p>
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

          {/* Compliance Actions */}
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-900">EU Market Compliance</CardTitle>
              <CardDescription>Ensure AI Act compliance with integrated framework approach</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/policy-mapping">
                  <Button className="w-full h-16 bg-purple-600 hover:bg-purple-700 text-left justify-start">
                    <div className="flex items-center gap-4">
                      <Scale className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Full Compliance Suite</div>
                        <div className="text-sm opacity-90">All requirements covered</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <AlertTriangle className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">High-Risk Assessment</div>
                        <div className="text-sm text-gray-600">Risk classification</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <Globe className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Market Readiness</div>
                        <div className="text-sm text-gray-600">EU deployment ready</div>
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

export default EuAiActDashboard;

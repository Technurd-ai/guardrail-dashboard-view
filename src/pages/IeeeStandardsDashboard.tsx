
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
  Zap,
  Activity,
  Cpu
} from "lucide-react";

const IeeeStandardsDashboard = () => {
  const ieeeStandards = [
    {
      id: "IEEE2857",
      name: "IEEE 2857 - Privacy Engineering",
      description: "Privacy engineering and risk management for AI systems",
      category: "Privacy & Ethics",
      compliance: 88,
      color: "blue",
      icon: Shield,
      priority: "High",
      clauses: 15,
      owaspMapping: "Data privacy and protection",
      mitreMapping: "Data collection and privacy attacks",
      isoMapping: "A.18.1 - Compliance with Legal Requirements",
      nistMapping: "Privacy risk assessment"
    },
    {
      id: "IEEE2830",
      name: "IEEE 2830 - Technical Ethics",
      description: "Technical standard for ethical design processes in AI",
      category: "Ethics",
      compliance: 82,
      color: "green",
      icon: Users,
      priority: "High",
      clauses: 12,
      owaspMapping: "Ethical AI development practices",
      mitreMapping: "Bias and fairness considerations",
      isoMapping: "A.7.2 - Terms and Conditions of Employment",
      nistMapping: "Fairness and bias management"
    },
    {
      id: "IEEE2857",
      name: "IEEE 2857 - AI System Transparency",
      description: "Standard for transparency of autonomous systems",
      category: "Transparency",
      compliance: 75,
      color: "orange",
      icon: Eye,
      priority: "Medium",
      clauses: 10,
      owaspMapping: "Model interpretability requirements",
      mitreMapping: "Attribution and explainability",
      isoMapping: "A.12.4 - Logging and Monitoring",
      nistMapping: "Explainable AI implementation"
    },
    {
      id: "IEEE2812",
      name: "IEEE 2812 - Performance Metrics",
      description: "Performance and reliability metrics for AI systems",
      category: "Performance",
      compliance: 90,
      color: "purple",
      icon: Activity,
      priority: "High",
      clauses: 18,
      owaspMapping: "Model performance monitoring",
      mitreMapping: "Performance degradation attacks",
      isoMapping: "A.12.1 - Operational Procedures",
      nistMapping: "Continuous monitoring and assessment"
    },
    {
      id: "IEEE2854",
      name: "IEEE 2854 - Algorithmic Bias",
      description: "Standard for algorithmic bias considerations in AI",
      category: "Fairness",
      compliance: 78,
      color: "red",
      icon: AlertTriangle,
      priority: "Critical",
      clauses: 14,
      owaspMapping: "Bias in training data and outputs",
      mitreMapping: "Poisoning attacks and bias manipulation",
      isoMapping: "A.6.1 - Information Security Roles",
      nistMapping: "Bias detection and mitigation"
    }
  ];

  const stats = [
    {
      title: "IEEE Standards",
      value: "15+",
      change: "AI-focused standards",
      icon: FileText,
      color: "blue"
    },
    {
      title: "Avg Compliance",
      value: "83%",
      change: "+7% this quarter",
      icon: TrendingUp,
      color: "green"
    },
    {
      title: "Technical Areas",
      value: "8",
      change: "Comprehensive coverage",
      icon: Cpu,
      color: "purple"
    },
    {
      title: "Industry Adoption",
      value: "92%",
      change: "Widely recognized",
      icon: Globe,
      color: "orange"
    }
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
        <NavigationBar />
        
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Cpu className="h-12 w-12 text-emerald-600" />
              <h1 className="text-5xl font-bold text-gray-900">IEEE AI Standards</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading technical standards for AI systems development and deployment
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

          {/* IEEE Standards Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">IEEE AI Standards</h2>
              <div className="flex gap-3">
                <Link to="/policy-mapping">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Create IEEE Policy
                  </Button>
                </Link>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  IEEE Standards
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ieeeStandards.map((standard) => (
                <Card key={standard.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-emerald-200 hover:border-l-emerald-500">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg bg-${standard.color}-100 group-hover:bg-${standard.color}-200 transition-colors`}>
                          <standard.icon className={`h-6 w-6 text-${standard.color}-600`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">
                            {standard.name}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {standard.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant={standard.priority === "Critical" ? "destructive" : "default"}>
                        {standard.priority}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Compliance Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Implementation</span>
                        <span className="text-sm font-bold text-gray-900">{standard.compliance}%</span>
                      </div>
                      <Progress value={standard.compliance} className="h-2" />
                    </div>

                    {/* Clauses Count */}
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <div className="text-lg font-bold text-gray-900">{standard.clauses}</div>
                      <div className="text-sm text-gray-600">Standard Clauses</div>
                    </div>

                    {/* Framework Mappings */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Framework Alignments:</h4>
                      <div className="grid grid-cols-1 gap-1 text-xs">
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-red-50 rounded border text-left truncate">
                              <span className="font-medium">OWASP:</span> {standard.owaspMapping}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>OWASP alignment: {standard.owaspMapping}</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-blue-50 rounded border text-left truncate">
                              <span className="font-medium">NIST:</span> {standard.nistMapping}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>NIST mapping: {standard.nistMapping}</p>
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

          {/* Technical Integration */}
          <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-900">Technical Standards Integration</CardTitle>
              <CardDescription>Combine IEEE standards with comprehensive AI frameworks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/policy-mapping">
                  <Button className="w-full h-16 bg-emerald-600 hover:bg-emerald-700 text-left justify-start">
                    <div className="flex items-center gap-4">
                      <Cpu className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Technical Compliance</div>
                        <div className="text-sm opacity-90">IEEE + AI frameworks</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <Shield className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Ethics & Privacy</div>
                        <div className="text-sm text-gray-600">Comprehensive coverage</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <Globe className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Industry Standards</div>
                        <div className="text-sm text-gray-600">Best practices</div>
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

export default IeeeStandardsDashboard;


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
  Heart,
  Activity,
  HandHeart
} from "lucide-react";

const PartnershipAiDashboard = () => {
  const partnershipTenets = [
    {
      id: "SAFETY",
      name: "Safety-Critical Applications",
      description: "AI systems should be safe and beneficial for society",
      category: "Safety & Reliability",
      compliance: 92,
      color: "red",
      icon: Shield,
      priority: "Critical",
      principles: 6,
      owaspMapping: "Security vulnerabilities and safety risks",
      mitreMapping: "Adversarial attacks on safety systems",
      isoMapping: "A.17 - Business Continuity Management",
      nistMapping: "Safety and reliability assessment"
    },
    {
      id: "FAIRNESS",
      name: "Fairness & Non-discrimination",
      description: "AI should treat all individuals and groups fairly",
      category: "Ethics & Fairness",
      compliance: 85,
      color: "blue",
      icon: Users,
      priority: "High",
      principles: 8,
      owaspMapping: "Bias in model outputs and decisions",
      mitreMapping: "Demographic and fairness attacks",
      isoMapping: "A.7.2 - Terms and Conditions of Employment",
      nistMapping: "Bias detection and mitigation"
    },
    {
      id: "ACCOUNTABILITY",
      name: "Accountability & Governance",
      description: "Clear accountability structures for AI system decisions",
      category: "Governance",
      compliance: 88,
      color: "purple",
      icon: Building,
      priority: "High",
      principles: 5,
      owaspMapping: "Audit trails and decision logging",
      mitreMapping: "Attribution and forensics",
      isoMapping: "A.5 - Information Security Policies",
      nistMapping: "Governance and oversight"
    },
    {
      id: "TRANSPARENCY",
      name: "Transparency & Explainability",
      description: "AI systems should be understandable and transparent",
      category: "Transparency",
      compliance: 78,
      color: "green",
      icon: Eye,
      priority: "Medium",
      principles: 7,
      owaspMapping: "Model interpretability and explainability",
      mitreMapping: "Adversarial explanation attacks",
      isoMapping: "A.12.4 - Logging and Monitoring",
      nistMapping: "Explainable AI requirements"
    },
    {
      id: "PRIVACY",
      name: "Privacy & Data Rights",
      description: "Respect for individual privacy and data protection",
      category: "Privacy",
      compliance: 90,
      color: "orange",
      icon: Heart,
      priority: "Critical",
      principles: 9,
      owaspMapping: "Data privacy and information leakage",
      mitreMapping: "Privacy attacks and data extraction",
      isoMapping: "A.18.1 - Compliance with Legal Requirements",
      nistMapping: "Privacy risk management"
    },
    {
      id: "HUMAN_VALUES",
      name: "Human Values & Rights",
      description: "AI should respect and promote human values and rights",
      category: "Human Rights",
      compliance: 82,
      color: "pink",
      icon: HandHeart,
      priority: "High",
      principles: 10,
      owaspMapping: "Human oversight and control mechanisms",
      mitreMapping: "Manipulation and deception attacks",
      isoMapping: "A.6 - Organization of Information Security",
      nistMapping: "Human-AI team performance"
    }
  ];

  const stats = [
    {
      title: "Core Tenets",
      value: "6",
      change: "Comprehensive principles",
      icon: HandHeart,
      color: "pink"
    },
    {
      title: "Avg Implementation",
      value: "86%",
      change: "+12% this quarter",
      icon: TrendingUp,
      color: "green"
    },
    {
      title: "Ethical Principles",
      value: "45",
      change: "All areas covered",
      icon: Heart,
      color: "red"
    },
    {
      title: "Industry Adoption",
      value: "78%",
      change: "Growing acceptance",
      icon: Globe,
      color: "blue"
    }
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
        <NavigationBar />
        
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HandHeart className="h-12 w-12 text-pink-600" />
              <h1 className="text-5xl font-bold text-gray-900">Partnership on AI Tenets</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborative principles for beneficial AI development with focus on human values and societal benefit
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

          {/* Partnership Tenets Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Partnership on AI Tenets</h2>
              <div className="flex gap-3">
                <Link to="/policy-mapping">
                  <Button className="bg-pink-600 hover:bg-pink-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Ethics Policy
                  </Button>
                </Link>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Partnership Guide
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipTenets.map((tenet) => (
                <Card key={tenet.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-pink-200 hover:border-l-pink-500">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg bg-${tenet.color}-100 group-hover:bg-${tenet.color}-200 transition-colors`}>
                          <tenet.icon className={`h-6 w-6 text-${tenet.color}-600`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-pink-600 transition-colors">
                            {tenet.name}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {tenet.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant={tenet.priority === "Critical" ? "destructive" : "default"}>
                        {tenet.priority}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Implementation Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Implementation</span>
                        <span className="text-sm font-bold text-gray-900">{tenet.compliance}%</span>
                      </div>
                      <Progress value={tenet.compliance} className="h-2" />
                    </div>

                    {/* Principles Count */}
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <div className="text-lg font-bold text-gray-900">{tenet.principles}</div>
                      <div className="text-sm text-gray-600">Key Principles</div>
                    </div>

                    {/* Framework Mappings */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Framework Alignments:</h4>
                      <div className="grid grid-cols-1 gap-1 text-xs">
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-red-50 rounded border text-left truncate">
                              <span className="font-medium">OWASP:</span> {tenet.owaspMapping}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>OWASP alignment: {tenet.owaspMapping}</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-blue-50 rounded border text-left truncate">
                              <span className="font-medium">NIST:</span> {tenet.nistMapping}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>NIST mapping: {tenet.nistMapping}</p>
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

          {/* Ethical AI Actions */}
          <Card className="bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200">
            <CardHeader>
              <CardTitle className="text-2xl text-pink-900">Ethical AI Implementation</CardTitle>
              <CardDescription>Build responsible AI systems with Partnership on AI principles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/policy-mapping">
                  <Button className="w-full h-16 bg-pink-600 hover:bg-pink-700 text-left justify-start">
                    <div className="flex items-center gap-4">
                      <HandHeart className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Human-Centered AI</div>
                        <div className="text-sm opacity-90">Values-driven development</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <Heart className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Responsible Innovation</div>
                        <div className="text-sm text-gray-600">Ethical by design</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <Globe className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Societal Benefit</div>
                        <div className="text-sm text-gray-600">Community impact</div>
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

export default PartnershipAiDashboard;

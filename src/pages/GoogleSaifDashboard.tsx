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
  Activity,
  Lock,
  Zap
} from "lucide-react";

const GoogleSaifDashboard = () => {
  const saifPrinciples = [
    {
      id: "secure-by-design",
      name: "Secure by Design",
      description: "Incorporate security considerations from the outset",
      icon: Lock,
      color: "blue",
      coverage: 92,
      owaspMapping: "LLM03 - Excessive Agency",
      mitreMapping: "AML.T0048 - Societal Harm",
      isoMapping: "A.14.2.5 - Secure system engineering",
      nistMapping: "GV.1 - AI Risk Management"
    },
    {
      id: "secure-by-default",
      name: "Secure by Default",
      description: "Implement secure configurations as the standard",
      icon: Shield,
      color: "green",
      coverage: 88,
      owaspMapping: "LLM02 - Insecure Output Handling",
      mitreMapping: "AML.T0049 - Amplifying Biases",
      isoMapping: "A.8.2.3 - Handling of assets",
      nistMapping: "GV.3 - AI Risk Tolerance"
    },
    {
      id: "secure-deployment",
      name: "Secure Deployment",
      description: "Ensure security throughout the deployment lifecycle",
      icon: CheckCircle,
      color: "purple",
      coverage: 95,
      owaspMapping: "LLM07 - Insufficient Data Validation",
      mitreMapping: "AML.T0024 - Exfiltration via ML Model",
      isoMapping: "A.18.1.4 - Privacy and protection of PII",
      nistMapping: "MS.1 - Risk Measurement"
    },
    {
      id: "understand-limitations",
      name: "Understand Limitations",
      description: "Acknowledge and address the limitations of AI systems",
      icon: AlertTriangle,
      color: "orange",
      coverage: 85,
      owaspMapping: "LLM01 - Prompt Injection",
      mitreMapping: "AML.T0051 - LLM Prompt Injection",
      isoMapping: "A.12.2.1 - Controls against malware",
      nistMapping: "MG.1 - Risk Response"
    },
    {
      id: "privacy-first",
      name: "Privacy First",
      description: "Prioritize privacy and data protection",
      icon: Eye,
      color: "red",
      coverage: 90,
      owaspMapping: "LLM06 - Sensitive Information Disclosure",
      mitreMapping: "AML.T0025 - Data from ML Model Repository",
      isoMapping: "A.9.2.1 - Information handling and storage",
      nistMapping: "GV.4 - AI Data Management"
    },
    {
      id: "human-centered",
      name: "Human-Centered",
      description: "Keep human oversight and control in AI systems",
      icon: Users,
      color: "blue",
      coverage: 80,
      owaspMapping: "LLM09 - Overreliance",
      mitreMapping: "AML.T0048 - Societal Harm",
      isoMapping: "A.6.1.1 - Information security roles",
      nistMapping: "MG.2 - Risk Treatment"
    }
  ];

  const stats = [
    {
      title: "Principles Implemented",
      value: "6",
      change: "All active",
      icon: Shield,
      color: "green"
    },
    {
      title: "Framework Coverage",
      value: "88%",
      change: "+10% from last month",
      icon: TrendingUp,
      color: "blue"
    },
    {
      title: "Active Policies",
      value: "4",
      change: "3 real-time enabled",
      icon: Lock,
      color: "purple"
    },
    {
      title: "Protected Projects",
      value: "5",
      change: "All monitored",
      icon: Users,
      color: "orange"
    }
  ];

  const frameworkEcosystem = [
    {
      id: "google-saif",
      name: "Google SAIF",
      description: "Secure AI Framework principles and practices",
      icon: Shield,
      color: "green",
      coverage: 90,
      principles: 6,
      implementation: "95%",
      status: "Primary Framework",
      region: "🌍 Global",
      type: "Governance Principles"
    },
    {
      id: "nist",
      name: "NIST AI RMF",
      description: "AI Risk Management Framework by NIST",
      icon: Building,
      color: "blue",
      coverage: 85,
      controls: 23,
      compliance: "88%",
      status: "Risk Aligned",
      region: "🇺🇸 US Federal",
      type: "Risk Framework"
    },
    {
      id: "iso-42001",
      name: "ISO/IEC 42001",
      description: "AI Management System international standard",
      icon: FileText,
      color: "purple",
      coverage: 82,
      requirements: 18,
      certification: "Compliant",
      status: "Standards Aligned",
      region: "🌍 International",
      type: "Management Standard"
    },
    {
      id: "mitre-atlas",
      name: "MITRE ATLAS",
      description: "Adversarial Threat Landscape for AI Systems",
      icon: Target,
      color: "orange",
      coverage: 78,
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
      coverage: 88,
      vulnerabilities: 10,
      criticalIssues: 3,
      status: "Security Enhanced",
      region: "🌍 Global",
      type: "Security Framework"
    }
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <NavigationBar />
        
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-12 w-12 text-green-600" />
              <h1 className="text-5xl font-bold text-gray-900">Google Secure AI Framework</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI security principles with multi-framework integration and best practices
            </p>
          </div>

          {/* Framework Ecosystem Overview */}
          <Card className="mb-8 border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-green-600" />
                Framework Ecosystem Integration
              </CardTitle>
              <CardDescription>How Google SAIF principles integrate with global AI security and governance frameworks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {frameworkEcosystem.map((framework) => (
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
                          <p className="text-xs mt-1">Status: {framework.status}</p>
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

          {/* SAIF Principles Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">SAIF Principles & Framework Integration</h2>
              <div className="flex gap-3">
                <Link to="/policy-mapping">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Create SAIF Policy
                  </Button>
                </Link>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  SAIF Guide
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {saifPrinciples.map((principle) => (
                <Card key={principle.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-200 hover:border-l-green-500">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Tooltip>
                          <TooltipTrigger>
                            <div className={`p-3 rounded-lg bg-${principle.color}-100 group-hover:bg-${principle.color}-200 transition-colors`}>
                              <principle.icon className={`h-6 w-6 text-${principle.color}-600`} />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="max-w-xs">
                              <p className="font-semibold">{principle.name}</p>
                              <p className="text-sm mt-1">{principle.description}</p>
                              <div className="mt-2 pt-2 border-t">
                                <p className="text-xs font-medium">Framework Alignment:</p>
                                <p className="text-xs">MITRE ATLAS: {principle.mitreMapping}</p>
                                <p className="text-xs">ISO 42001: {principle.isoMapping}</p>
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                        <div>
                          <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                            {principle.name}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {principle.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Tooltip>
                        <TooltipTrigger>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {principle.coverage}%
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Policy Coverage: {principle.coverage}%</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Coverage Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Implementation</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <span className="text-sm font-bold text-gray-900">{principle.coverage}%</span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Percentage of principle implemented</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <Progress value={principle.coverage} className="h-2" />
                    </div>

                    {/* Framework Mappings */}
                    <div className="grid grid-cols-2 gap-2">
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="text-center p-2 bg-orange-50 rounded border">
                            <div className="text-sm font-bold text-orange-600">MITRE</div>
                            <div className="text-xs text-gray-600">Mapped</div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>MITRE ATLAS Mapping: {principle.mitreMapping}</p>
                        </TooltipContent>
                      </Tooltip>
                      
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="text-center p-2 bg-purple-50 rounded border">
                            <div className="text-sm font-bold text-purple-600">ISO</div>
                            <div className="text-xs text-gray-600">Aligned</div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>ISO/IEC 42001 Control: {principle.isoMapping}</p>
                        </TooltipContent>
                      </Tooltip>
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
                          <p>Create a policy to enforce {principle.name}</p>
                        </TooltipContent>
                      </Tooltip>
                      
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Settings className="h-3 w-3 mr-1" />
                            Configure
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Configure settings for {principle.name}</p>
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
                          <p>View detailed information about {principle.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Multi-Framework Policy Creation Center */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-900">Secure AI Framework Integration Hub</CardTitle>
              <CardDescription>Create comprehensive policies combining SAIF principles with global standards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/policy-mapping">
                  <Button className="w-full h-16 bg-green-600 hover:bg-green-700 text-left justify-start">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Shield className="h-5 w-5" />
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-semibold">SAIF + ISO 42001</div>
                        <div className="text-sm opacity-90">Security + Management</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Shield className="h-5 w-5" />
                        <Target className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-semibold">SAIF + MITRE ATLAS</div>
                        <div className="text-sm text-gray-600">Security + Threat Intelligence</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <Globe className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Complete Framework</div>
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

export default GoogleSaifDashboard;


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import NavigationBar from "@/components/NavigationBar";
import { Link } from "react-router-dom";
import { 
  FileText, 
  AlertTriangle, 
  Building, 
  Eye, 
  TrendingUp, 
  Users, 
  Globe, 
  Database,
  Shield,
  Target,
  Settings,
  Plus,
  ExternalLink,
  Activity,
  CheckCircle,
  Award,
  Lock
} from "lucide-react";

const Iso42001Dashboard = () => {
  const isoStats = [
    {
      title: "Total Requirements",
      value: "18",
      change: "All covered",
      icon: FileText,
      color: "purple"
    },
    {
      title: "Compliance Score",
      value: "88%",
      change: "+12% this month",
      icon: Award,
      color: "green"
    },
    {
      title: "Certification Status",
      value: "Ready",
      change: "Audit prepared",
      icon: CheckCircle,
      color: "blue"
    },
    {
      title: "Policy Coverage",
      value: "95%",
      change: "Fully documented",
      icon: Shield,
      color: "orange"
    }
  ];

  const isoRequirements = [
    {
      id: "4.1",
      name: "Understanding the Organization",
      description: "Context of the organization and AI management system",
      section: "Context",
      compliance: 92,
      color: "purple",
      icon: Building,
      priority: "High",
      owaspMapping: "General governance alignment",
      mitreMapping: "Organizational context for threat modeling",
      nistMapping: "GV.1 - AI Risk Management",
      saifMapping: "Secure by Design principles"
    },
    {
      id: "6.1",
      name: "Risk Assessment & Treatment",
      description: "AI-specific risk identification and mitigation planning",
      section: "Planning",
      compliance: 85,
      color: "red",
      icon: AlertTriangle,
      priority: "Critical",
      owaspMapping: "All LLM vulnerabilities",
      mitreMapping: "T0051, T0054 - Threat analysis",
      nistMapping: "MS.1 - Risk Measurement",
      saifMapping: "Understand Limitations"
    },
    {
      id: "7.1",
      name: "Resources & Competence",
      description: "Ensuring adequate resources and AI competencies",
      section: "Support",
      compliance: 78,
      color: "blue",
      icon: Users,
      priority: "Medium",
      owaspMapping: "Training for secure development",
      mitreMapping: "Defense capability building",
      nistMapping: "GV.2 - AI Risk Governance",
      saifMapping: "Secure Deployment practices"
    },
    {
      id: "8.1",
      name: "AI System Development",
      description: "Planning and control of AI system development processes",
      section: "Operation",
      compliance: 90,
      color: "green",
      icon: Database,
      priority: "High",
      owaspMapping: "LLM02 - Insecure Output Handling",
      mitreMapping: "T0024 - Model exfiltration prevention",
      nistMapping: "MS.3 - Risk Monitoring",
      saifMapping: "Secure by Default implementation"
    }
  ];

  const frameworkHarmonization = [
    {
      id: "iso-42001",
      name: "ISO/IEC 42001",
      description: "AI Management System international standard",
      icon: FileText,
      color: "purple",
      coverage: 100,
      requirements: 18,
      certification: "Ready",
      status: "Primary Standard",
      region: "🌍 International",
      type: "Management Standard"
    },
    {
      id: "nist",
      name: "NIST AI RMF",
      description: "AI Risk Management Framework by NIST",
      icon: Building,
      color: "blue",
      coverage: 88,
      controls: 23,
      compliance: "92%",
      status: "Harmonized",
      region: "🇺🇸 US Federal",
      type: "Risk Framework"
    },
    {
      id: "owasp",
      name: "OWASP LLM Top 10",
      description: "Critical security risks for Large Language Models",
      icon: AlertTriangle,
      color: "red",
      coverage: 75,
      vulnerabilities: 10,
      criticalIssues: 3,
      status: "Security Integrated",
      region: "🌍 Global",
      type: "Security Framework"
    },
    {
      id: "mitre-atlas",
      name: "MITRE ATLAS",
      description: "Adversarial Threat Landscape for AI Systems",
      icon: Target,
      color: "orange",
      coverage: 70,
      techniques: 14,
      tactics: 8,
      status: "Threat Informed",
      region: "🌍 Global",
      type: "Threat Intelligence"
    },
    {
      id: "google-saif",
      name: "Google SAIF",
      description: "Secure AI Framework principles and practices",
      icon: Shield,
      color: "green",
      coverage: 82,
      principles: 6,
      implementation: "88%",
      status: "Best Practices",
      region: "🌍 Global",
      type: "Governance Principles"
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
              <FileText className="h-12 w-12 text-purple-600" />
              <h1 className="text-5xl font-bold text-gray-900">ISO/IEC 42001:2023</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI Management System International Standard with comprehensive framework harmonization
            </p>
          </div>

          {/* Framework Harmonization Overview */}
          <Card className="mb-8 border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-purple-600" />
                Framework Harmonization Dashboard
              </CardTitle>
              <CardDescription>How ISO/IEC 42001 harmonizes with global AI security and governance frameworks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {frameworkHarmonization.map((framework) => (
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
                          <p className="text-xs mt-1">Relationship: {framework.status}</p>
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
            {isoStats.map((stat, index) => (
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

          {/* ISO Requirements Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">ISO/IEC 42001 Requirements & Framework Integration</h2>
              <div className="flex gap-3">
                <Link to="/policy-mapping">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Create ISO Policy
                  </Button>
                </Link>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  ISO Standard
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {isoRequirements.map((requirement) => (
                <Card key={requirement.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-200 hover:border-l-purple-500">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Tooltip>
                          <TooltipTrigger>
                            <div className={`p-3 rounded-lg bg-${requirement.color}-100 group-hover:bg-${requirement.color}-200 transition-colors`}>
                              <requirement.icon className={`h-6 w-6 text-${requirement.color}-600`} />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="max-w-xs">
                              <p className="font-semibold">ISO/IEC 42001 - Section {requirement.id}</p>
                              <p className="text-sm mt-1">{requirement.description}</p>
                              <p className="text-xs mt-2 font-medium">Section: {requirement.section}</p>
                              <p className="text-xs">Priority: {requirement.priority}</p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                        <div>
                          <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                            {requirement.id}: {requirement.name}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {requirement.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant={requirement.priority === "Critical" ? "destructive" : requirement.priority === "High" ? "default" : "secondary"}>
                        {requirement.priority}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Compliance Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Compliance</span>
                        <span className="text-sm font-bold text-gray-900">{requirement.compliance}%</span>
                      </div>
                      <Progress value={requirement.compliance} className="h-2" />
                    </div>

                    {/* Framework Mappings */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Framework Alignments:</h4>
                      <div className="grid grid-cols-1 gap-1 text-xs">
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-red-50 rounded border text-left">
                              <span className="font-medium">OWASP:</span> {requirement.owaspMapping}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Alignment with OWASP LLM security practices</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-orange-50 rounded border text-left">
                              <span className="font-medium">MITRE:</span> {requirement.mitreMapping}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Integration with MITRE ATLAS threat intelligence</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-blue-50 rounded border text-left">
                              <span className="font-medium">NIST:</span> {requirement.nistMapping}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Harmonization with NIST AI Risk Management Framework</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-green-50 rounded border text-left">
                              <span className="font-medium">SAIF:</span> {requirement.saifMapping}
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
                          <p>Create policy for ISO requirement {requirement.id}</p>
                        </TooltipContent>
                      </Tooltip>
                      
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Eye className="h-3 w-3 mr-1" />
                            Audit Trail
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View compliance evidence and documentation</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certification-Ready Policy Creation */}
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-900">Certification-Ready AI Management</CardTitle>
              <CardDescription>Create comprehensive policies that ensure ISO/IEC 42001 compliance with integrated framework coverage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/policy-mapping">
                  <Button className="w-full h-16 bg-purple-600 hover:bg-purple-700 text-left justify-start">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <FileText className="h-5 w-5" />
                        <Building className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-semibold">ISO + NIST Integration</div>
                        <div className="text-sm opacity-90">Management + Risk</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <FileText className="h-5 w-5" />
                        <Target className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-semibold">ISO + MITRE ATLAS</div>
                        <div className="text-sm text-gray-600">Management + Threats</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <Award className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Full Certification</div>
                        <div className="text-sm text-gray-600">All frameworks harmonized</div>
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

export default Iso42001Dashboard;

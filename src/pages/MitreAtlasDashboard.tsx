
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import NavigationBar from "@/components/NavigationBar";
import { Link } from "react-router-dom";
import { 
  Target, 
  AlertTriangle, 
  Building, 
  Eye, 
  TrendingUp, 
  Users, 
  Globe, 
  Database,
  Shield,
  FileText,
  Settings,
  Plus,
  ExternalLink,
  Activity,
  Crosshair,
  Zap
} from "lucide-react";

const MitreAtlasDashboard = () => {
  const atlasStats = [
    {
      title: "Total Techniques",
      value: "14",
      change: "+2 this quarter",
      icon: Target,
      color: "orange"
    },
    {
      title: "Active Tactics",
      value: "8",
      change: "Full coverage",
      icon: Crosshair,
      color: "red"
    },
    {
      title: "Threat Coverage",
      value: "85%",
      change: "+15% improvement",
      icon: Shield,
      color: "green"
    },
    {
      title: "Detection Rate",
      value: "92%",
      change: "Real-time monitoring",
      icon: Activity,
      color: "blue"
    }
  ];

  const atlasTechniques = [
    {
      id: "T0051",
      name: "LLM Prompt Injection",
      description: "Adversarial prompts designed to manipulate model behavior",
      tactic: "Initial Access",
      severity: "Critical",
      color: "red",
      icon: Target,
      detectionRate: 88,
      mitigationCoverage: 75,
      owaspMapping: "LLM01 - Prompt Injection",
      isoMapping: "A.14.2.5 - Secure system engineering",
      nistMapping: "MS.3 - Risk Monitoring"
    },
    {
      id: "T0054",
      name: "LLM Jailbreak",
      description: "Techniques to bypass safety guardrails and content filters",
      tactic: "Defense Evasion",
      severity: "High",
      color: "orange",
      icon: AlertTriangle,
      detectionRate: 82,
      mitigationCoverage: 70,
      owaspMapping: "LLM01 - Prompt Injection",
      isoMapping: "A.12.2.1 - Controls against malware",
      nistMapping: "MG.1 - Risk Response"
    },
    {
      id: "T0024",
      name: "Exfiltration via ML Model",
      description: "Using ML models to extract sensitive information",
      tactic: "Exfiltration",
      severity: "Critical",
      color: "red",
      icon: Database,
      detectionRate: 75,
      mitigationCoverage: 85,
      owaspMapping: "LLM06 - Sensitive Information Disclosure",
      isoMapping: "A.18.1.4 - Privacy and protection of PII",
      nistMapping: "MS.1 - Risk Measurement"
    },
    {
      id: "T0048",
      name: "Societal Harm",
      description: "Techniques that cause broader societal negative impacts",
      tactic: "Impact",
      severity: "High",
      color: "orange",
      icon: Users,
      detectionRate: 78,
      mitigationCoverage: 68,
      owaspMapping: "LLM02 - Insecure Output Handling",
      isoMapping: "A.6.1.1 - Information security roles",
      nistMapping: "GV.1 - AI Risk Management"
    }
  ];

  const frameworkIntegration = [
    {
      id: "mitre-atlas",
      name: "MITRE ATLAS",
      description: "Adversarial Threat Landscape for AI Systems",
      icon: Target,
      color: "orange",
      coverage: 100,
      techniques: 14,
      tactics: 8,
      status: "Primary Framework",
      region: "🌍 Global",
      type: "Threat Intelligence"
    },
    {
      id: "owasp",
      name: "OWASP LLM Top 10",
      description: "Critical security risks for Large Language Models",
      icon: AlertTriangle,
      color: "red",
      coverage: 85,
      vulnerabilities: 10,
      criticalIssues: 3,
      status: "Security Aligned",
      region: "🌍 Global",
      type: "Security Framework"
    },
    {
      id: "nist",
      name: "NIST AI RMF",
      description: "AI Risk Management Framework by NIST",
      icon: Building,
      color: "blue",
      coverage: 75,
      controls: 23,
      compliance: "80%",
      status: "Risk Informed",
      region: "🇺🇸 US Federal",
      type: "Risk Framework"
    },
    {
      id: "iso-42001",
      name: "ISO/IEC 42001",
      description: "AI Management System international standard",
      icon: FileText,
      color: "purple",
      coverage: 70,
      requirements: 18,
      certification: "Mapped",
      status: "Standards Aligned",
      region: "🌍 International",
      type: "Management Standard"
    },
    {
      id: "google-saif",
      name: "Google SAIF",
      description: "Secure AI Framework principles and practices",
      icon: Shield,
      color: "green",
      coverage: 78,
      principles: 6,
      implementation: "82%",
      status: "Security Enhanced",
      region: "🌍 Global",
      type: "Governance Principles"
    }
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <NavigationBar />
        
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Target className="h-12 w-12 text-orange-600" />
              <h1 className="text-5xl font-bold text-gray-900">MITRE ATLAS</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Adversarial Threat Landscape for Artificial Intelligence Systems with comprehensive framework integration
            </p>
          </div>

          {/* Framework Integration Overview */}
          <Card className="mb-8 border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-orange-600" />
                Threat Intelligence Framework Integration
              </CardTitle>
              <CardDescription>How MITRE ATLAS threat intelligence integrates with security and governance frameworks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {frameworkIntegration.map((framework) => (
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
                          <p className="text-xs mt-1">Integration: {framework.status}</p>
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
            {atlasStats.map((stat, index) => (
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

          {/* ATLAS Techniques Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">ATLAS Techniques & Framework Mapping</h2>
              <div className="flex gap-3">
                <Link to="/policy-mapping">
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Create ATLAS Policy
                  </Button>
                </Link>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  ATLAS Matrix
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {atlasTechniques.map((technique) => (
                <Card key={technique.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-200 hover:border-l-orange-500">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Tooltip>
                          <TooltipTrigger>
                            <div className={`p-3 rounded-lg bg-${technique.color}-100 group-hover:bg-${technique.color}-200 transition-colors`}>
                              <technique.icon className={`h-6 w-6 text-${technique.color}-600`} />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="max-w-xs">
                              <p className="font-semibold">MITRE ATLAS {technique.id}</p>
                              <p className="text-sm mt-1">{technique.description}</p>
                              <p className="text-xs mt-2 font-medium">Tactic: {technique.tactic}</p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                        <div>
                          <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">
                            {technique.id}: {technique.name}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {technique.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant={technique.severity === "Critical" ? "destructive" : "secondary"}>
                        {technique.severity}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Detection & Mitigation Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Detection</span>
                          <span className="text-sm font-bold text-gray-900">{technique.detectionRate}%</span>
                        </div>
                        <Progress value={technique.detectionRate} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Mitigation</span>
                          <span className="text-sm font-bold text-gray-900">{technique.mitigationCoverage}%</span>
                        </div>
                        <Progress value={technique.mitigationCoverage} className="h-2" />
                      </div>
                    </div>

                    {/* Framework Mappings */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Framework Mappings:</h4>
                      <div className="grid grid-cols-1 gap-1 text-xs">
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-red-50 rounded border text-left">
                              <span className="font-medium">OWASP:</span> {technique.owaspMapping}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Maps to OWASP LLM Top 10 vulnerability</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-purple-50 rounded border text-left">
                              <span className="font-medium">ISO 42001:</span> {technique.isoMapping}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Aligns with ISO/IEC 42001 control</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="p-2 bg-blue-50 rounded border text-left">
                              <span className="font-medium">NIST:</span> {technique.nistMapping}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Corresponds to NIST AI RMF function</p>
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
                          <p>Create policy to detect and mitigate {technique.name}</p>
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
                          <p>View detailed technique information and examples</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Threat-Informed Policy Creation */}
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-900">Threat-Informed AI Security</CardTitle>
              <CardDescription>Create comprehensive policies informed by ATLAS threat intelligence and integrated frameworks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/policy-mapping">
                  <Button className="w-full h-16 bg-orange-600 hover:bg-orange-700 text-left justify-start">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Target className="h-5 w-5" />
                        <AlertTriangle className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-semibold">ATLAS + OWASP</div>
                        <div className="text-sm opacity-90">Threat + Security Focus</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Target className="h-5 w-5" />
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-semibold">ATLAS + ISO 42001</div>
                        <div className="text-sm text-gray-600">Threat + Management</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <Globe className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Complete Threat Model</div>
                        <div className="text-sm text-gray-600">All frameworks integrated</div>
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

export default MitreAtlasDashboard;

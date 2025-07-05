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
  Code,
  Lock,
  Zap,
  Activity
} from "lucide-react";

const OwaspDashboard = () => {
  const vulnerabilities = [
    {
      id: "llm01",
      name: "Prompt Injection",
      description: "Manipulating the model through crafted prompts",
      detailedDescription: "Exploiting vulnerabilities by injecting malicious prompts that alter the model's behavior, leading to unauthorized actions or information disclosure.",
      severity: "Critical",
      likelihood: "High",
      impact: "Critical",
      exploitability: "High",
      riskScore: 9.5,
      color: "red",
      icon: Code,
      mitreMapping: "T0051 - LLM Prompt Injection",
      isoMapping: "A.14.2.5 - Secure system engineering"
    },
    {
      id: "llm02",
      name: "Insecure Output Handling",
      description: "Failing to validate or sanitize model outputs",
      detailedDescription: "Neglecting to validate or sanitize the outputs from the LLM, which can lead to the execution of unintended code or commands, data breaches, or system compromise.",
      severity: "High",
      likelihood: "Medium",
      impact: "High",
      exploitability: "Medium",
      riskScore: 7.8,
      color: "orange",
      icon: Eye,
      mitreMapping: "T0048 - Societal Harm",
      isoMapping: "A.8.2.3 - Handling of assets"
    },
    {
      id: "llm03",
      name: "Training Data Poisoning",
      description: "Compromising model integrity through data manipulation",
      detailedDescription: "Introducing malicious data into the training dataset, which can bias the model's behavior, cause it to produce incorrect or harmful outputs, or create backdoors for later exploitation.",
      severity: "Critical",
      likelihood: "Low",
      impact: "Critical",
      exploitability: "Low",
      riskScore: 8.2,
      color: "red",
      icon: Database,
      mitreMapping: "T0025 - Data from ML Model Repository",
      isoMapping: "A.11.2.1 - Information handling procedures"
    },
    {
      id: "llm04",
      name: "Inadequate Access Controls",
      description: "Insufficiently restricting access to the LLM",
      detailedDescription: "Failing to implement proper access controls, allowing unauthorized users or systems to interact with the LLM, potentially leading to data breaches, system compromise, or misuse of the model.",
      severity: "High",
      likelihood: "Medium",
      impact: "High",
      exploitability: "Medium",
      riskScore: 7.5,
      color: "orange",
      icon: Lock,
      mitreMapping: "T0024 - Exfiltration via ML Model",
      isoMapping: "A.9.2.1 - Management of access rights"
    },
    {
      id: "llm05",
      name: "Supply Chain Vulnerabilities",
      description: "Exploiting weaknesses in third-party components",
      detailedDescription: "Utilizing vulnerable third-party libraries, models, or services in the LLM's supply chain, which can introduce security flaws, backdoors, or malicious functionality into the system.",
      severity: "Medium",
      likelihood: "Medium",
      impact: "Medium",
      exploitability: "Medium",
      riskScore: 6.8,
      color: "yellow",
      icon: Link2,
      mitreMapping: "T0019 - Data Manipulation",
      isoMapping: "A.15.1.1 - Information security policy for supplier relationships"
    }
  ];

  const stats = [
    {
      title: "Total Vulnerabilities",
      value: vulnerabilities.length.toString(),
      change: "+1 this month",
      icon: AlertTriangle,
      color: "red"
    },
    {
      title: "Critical Risks",
      value: vulnerabilities.filter(v => v.severity === "Critical").length.toString(),
      change: "+0",
      icon: AlertTriangle,
      color: "red"
    },
    {
      title: "Average Risk Score",
      value: (vulnerabilities.reduce((acc, v) => acc + v.riskScore, 0) / vulnerabilities.length).toFixed(1),
      change: "+0.2",
      icon: TrendingUp,
      color: "orange"
    },
    {
      title: "Policies Enabled",
      value: "3",
      change: "+1 real-time",
      icon: Shield,
      color: "green"
    }
  ];

  const frameworkComparison = [
    {
      id: "owasp",
      name: "OWASP LLM Top 10",
      description: "Critical security risks for Large Language Models",
      icon: AlertTriangle,
      color: "red",
      coverage: 90,
      vulnerabilities: 10,
      criticalIssues: 3,
      status: "Primary Framework",
      region: "🌍 Global",
      type: "Security Framework"
    },
    {
      id: "mitre-atlas",
      name: "MITRE ATLAS",
      description: "Adversarial Threat Landscape for AI Systems",
      icon: Target,
      color: "orange",
      coverage: 85,
      techniques: 14,
      tactics: 8,
      status: "Complementary",
      region: "🌍 Global",
      type: "Threat Intelligence"
    },
    {
      id: "nist",
      name: "NIST AI RMF",
      description: "AI Risk Management Framework by NIST",
      icon: Building,
      color: "blue",
      coverage: 75,
      controls: 23,
      compliance: "88%",
      status: "Regulatory Alignment",
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
      certification: "In Progress",
      status: "Certification Ready",
      region: "🌍 International",
      type: "Management Standard"
    },
    {
      id: "google-saif",
      name: "Google SAIF",
      description: "Secure AI Framework principles and practices",
      icon: Shield,
      color: "green",
      coverage: 82,
      principles: 6,
      implementation: "90%",
      status: "Best Practices",
      region: "🌍 Global",
      type: "Governance Principles"
    }
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
        <NavigationBar />
        
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="h-12 w-12 text-red-600" />
              <h1 className="text-5xl font-bold text-gray-900">OWASP LLM Top 10</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Critical security risks for Large Language Model applications with framework integration
            </p>
          </div>

          {/* Framework Integration Overview */}
          <Card className="mb-8 border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-red-600" />
                Framework Integration Overview
              </CardTitle>
              <CardDescription>How OWASP LLM Top 10 aligns with other AI security frameworks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {frameworkComparison.map((framework) => (
                  <div key={framework.id} className="text-center p-6 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                    <Tooltip>
                      <TooltipTrigger>
                        <div className={`p-3 rounded-lg bg-${framework.color}-100 mb-3 mx-auto w-fit`}>
                          <framework.icon className={`h-6 w-6 text-${framework.color}-600`} />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{framework.description}</p>
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

          {/* Vulnerabilities Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">LLM Security Vulnerabilities</h2>
              <div className="flex gap-3">
                <Link to="/policy-mapping">
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Create OWASP Policy
                  </Button>
                </Link>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  OWASP Guide
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vulnerabilities.map((vuln) => (
                <Card key={vuln.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-200 hover:border-l-red-500">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Tooltip>
                          <TooltipTrigger>
                            <div className={`p-3 rounded-lg bg-${vuln.color}-100 group-hover:bg-${vuln.color}-200 transition-colors`}>
                              <vuln.icon className={`h-6 w-6 text-${vuln.color}-600`} />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="max-w-xs">
                              <p className="font-semibold mb-2">{vuln.name}</p>
                              <p className="text-sm">{vuln.detailedDescription}</p>
                              <div className="mt-2 pt-2 border-t">
                                <p className="text-xs font-medium">Framework Alignment:</p>
                                <p className="text-xs">MITRE ATLAS: {vuln.mitreMapping}</p>
                                <p className="text-xs">ISO 42001: {vuln.isoMapping}</p>
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                        <div>
                          <CardTitle className="text-lg group-hover:text-red-600 transition-colors">
                            {vuln.name}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {vuln.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Tooltip>
                          <TooltipTrigger>
                            <Badge variant={vuln.severity === "Critical" ? "destructive" : "secondary"}>
                              {vuln.severity}
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Risk Level: {vuln.severity}</p>
                            <p>Likelihood: {vuln.likelihood}</p>
                            <p>Impact: {vuln.impact}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Risk Assessment */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Risk Score</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <span className="text-sm font-bold text-gray-900">{vuln.riskScore}/10</span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div>
                              <p>CVSS-based risk assessment</p>
                              <p>Likelihood: {vuln.likelihood}</p>
                              <p>Impact: {vuln.impact}</p>
                              <p>Exploitability: {vuln.exploitability}</p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <Progress value={vuln.riskScore * 10} className="h-2" />
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
                          <p>MITRE ATLAS Mapping: {vuln.mitreMapping}</p>
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
                          <p>ISO/IEC 42001 Control: {vuln.isoMapping}</p>
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
                          <p>Create a policy to protect against {vuln.name}</p>
                        </TooltipContent>
                      </Tooltip>
                      
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="sm" className="flex-1" asChild>
                            <Link to="/policy-mapping">
                              <Settings className="h-3 w-3 mr-1" />
                              Configure
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Configure guardrails for {vuln.name}</p>
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
                          <p>View detailed information about {vuln.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cross-Framework Action Center */}
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-2xl text-red-900">Multi-Framework Policy Creation</CardTitle>
              <CardDescription>Create comprehensive policies that address OWASP, MITRE ATLAS, and ISO 42001 requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/policy-mapping">
                  <Button className="w-full h-16 bg-red-600 hover:bg-red-700 text-left justify-start">
                    <div className="flex items-center gap-4">
                      <Shield className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">OWASP + MITRE Policy</div>
                        <div className="text-sm opacity-90">Security + Threat Intelligence</div>
                      </div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/policy-mapping">
                  <Button variant="outline" className="w-full h-16 text-left justify-start border-2">
                    <div className="flex items-center gap-4">
                      <FileText className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">OWASP + ISO 42001</div>
                        <div className="text-sm text-gray-600">Security + Management</div>
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

export default OwaspDashboard;

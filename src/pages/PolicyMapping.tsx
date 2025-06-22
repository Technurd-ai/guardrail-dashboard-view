import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import NavigationBar from "@/components/NavigationBar";
import { Settings, AlertTriangle, Shield, Eye, Database, Code, Users, Lock, Plus, Edit, Trash2, Copy, Activity, CheckCircle, XCircle, Globe, Zap, Clock, Link2, ExternalLink } from "lucide-react";

const PolicyMapping = () => {
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [policyMode, setPolicyMode] = useState("input");
  const [showRealTimeConfig, setShowRealTimeConfig] = useState(false);

  const policies = [
    {
      id: "policy-tr-default",
      name: "TR Guard default policy",
      description: "Default policy for prompt injection and security guardrails",
      guardrails: ["Prompt Injection", "NSFW Content", "Toxicity"],
      projects: 1,
      mode: "Input",
      status: "Active",
      createdAt: "27-05-2025 15:33",
      lastEdited: "27-05-2025 16:10",
      effectiveness: 85,
      frameworkCoverage: {
        "nist": 85,
        "iso27001": 75,
        "owasp": 90,
        "googleSaif": 80,
        "mitreAtlas": 70
      },
      realTimeProtection: {
        enabled: true,
        endpoint: "https://api.trguard.com/v1/scan",
        responseTime: "< 50ms",
        throughput: "10,000 req/min"
      }
    },
    {
      id: "policy-2baaa78d",
      name: "bank-customer-support",
      description: "Banking customer support policy with PII protection",
      guardrails: ["PII Protection", "Financial Data", "Customer Privacy"],
      projects: 1,
      mode: "Input",
      status: "Active",
      createdAt: "11-06-2025 02:46",
      lastEdited: "11-06-2025 02:46",
      effectiveness: 92,
      frameworkCoverage: {
        "nist": 95,
        "iso27001": 90,
        "owasp": 85,
        "googleSaif": 88,
        "mitreAtlas": 80
      },
      realTimeProtection: {
        enabled: true,
        endpoint: "https://api.trguard.com/v1/scan",
        responseTime: "< 30ms",
        throughput: "15,000 req/min"
      }
    },
    {
      id: "policy-62798f9e",
      name: "Retail-internal-bot",
      description: "Internal retail bot with comprehensive guardrails",
      guardrails: ["Prompt Injection", "PII Protection", "NSFW Content", "Toxicity"],
      projects: 1,
      mode: "Input",
      status: "Active",
      createdAt: "20-06-2025 08:44",
      lastEdited: "20-06-2025 09:36",
      effectiveness: 78,
      frameworkCoverage: {
        "nist": 80,
        "iso27001": 70,
        "owasp": 85,
        "googleSaif": 75,
        "mitreAtlas": 85
      },
      realTimeProtection: {
        enabled: false,
        endpoint: "",
        responseTime: "",
        throughput: ""
      }
    }
  ];

  const frameworks = [
    {
      id: "nist",
      name: "NIST AI RMF",
      region: "🇺🇸",
      type: "Framework",
      status: "Active",
      description: "NIST AI Risk Management Framework",
      color: "blue",
      coverage: 87
    },
    {
      id: "iso27001",
      name: "ISO 42001",
      region: "🌍",
      type: "Standard",
      status: "Active",
      description: "ISO/IEC 42001 AI Management System",
      color: "green",
      coverage: 78
    },
    {
      id: "owasp",
      name: "OWASP LLM Top 10",
      region: "🌍",
      type: "Security Framework",
      status: "Active",
      description: "OWASP Large Language Model Top 10",
      color: "red",
      coverage: 90
    },
    {
      id: "googleSaif",
      name: "Google SAIF",
      region: "🌍",
      type: "Governance Principles",
      status: "Active",
      description: "Secure AI Framework by Google",
      color: "purple",
      coverage: 81
    },
    {
      id: "mitreAtlas",
      name: "MITRE ATLAS",
      region: "🌍",
      type: "Threat Knowledge Base",
      status: "Active",
      description: "Adversarial Threat Landscape for AI Systems",
      color: "orange",
      coverage: 75
    }
  ];

  const guardrailTypes = [
    {
      id: "prompt-injection",
      name: "Prompt Injection",
      description: "Prevents manipulation of GenAI models by stopping prompt injection attacks",
      icon: Code,
      severity: "Critical",
      defaultSensitivity: 80,
      frameworks: {
        nist: ["MS.3 - Risk Monitoring", "MG.1 - Risk Response"],
        iso27001: ["A.12.2.1 - Controls against malware", "A.14.2.5 - Secure system engineering"],
        owasp: ["LLM01 - Prompt Injection"],
        googleSaif: ["Secure by Design", "Understand Limitations"],
        mitreAtlas: ["AML.T0051 - LLM Prompt Injection", "AML.T0054 - LLM Jailbreak"]
      }
    },
    {
      id: "pii-protection",
      name: "PII (Personally Identifiable Info)",
      description: "Detects and prevents exposure of personal information",
      icon: Lock,
      severity: "Critical",
      defaultSensitivity: 90,
      frameworks: {
        nist: ["GV.3 - AI Risk Tolerance", "MS.1 - Risk Measurement"],
        iso27001: ["A.18.1.4 - Privacy and protection of PII"],
        owasp: ["LLM06 - Sensitive Information Disclosure"],
        googleSaif: ["Secure by Default", "Secure Deployment"],
        mitreAtlas: ["AML.T0024 - Exfiltration via ML Model", "AML.T0025 - Data from ML Model Repository"]
      }
    },
    {
      id: "nsfw-content",
      name: "NSFW (Sexual Content)",
      description: "Filters inappropriate and sexual content",
      icon: Eye,
      severity: "High",
      defaultSensitivity: 75,
      frameworks: {
        nist: ["GV.1 - AI Risk Management"],
        iso27001: ["A.8.2.3 - Handling of assets"],
        owasp: ["LLM02 - Insecure Output Handling"],
        googleSaif: ["Secure by Design"],
        mitreAtlas: ["AML.T0048 - Societal Harm"]
      }
    },
    {
      id: "toxicity",
      name: "Toxicity",
      description: "Detects and prevents toxic, harmful, or offensive content",
      icon: AlertTriangle,
      severity: "High",
      defaultSensitivity: 85,
      frameworks: {
        nist: ["GV.1 - AI Risk Management", "MG.2 - Risk Treatment"],
        iso27001: ["A.6.1.1 - Information security roles and responsibilities"],
        owasp: ["LLM02 - Insecure Output Handling", "LLM09 - Overreliance"],
        googleSaif: ["Secure by Design", "Secure by Default"],
        mitreAtlas: ["AML.T0048 - Societal Harm", "AML.T0049 - Amplifying Biases"]
      }
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "destructive";
      case "High": return "destructive";
      case "Medium": return "default";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    return status === "Active" ? <CheckCircle className="h-4 w-4 text-green-600" /> : <XCircle className="h-4 w-4 text-red-600" />;
  };

  const getFrameworkColor = (frameworkId: string) => {
    const framework = frameworks.find(f => f.id === frameworkId);
    return framework?.color || "gray";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <NavigationBar />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header with Action Buttons */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Settings className="h-8 w-8 text-purple-600" />
              <h1 className="text-4xl font-bold text-gray-900">Policy Management</h1>
            </div>
            <p className="text-xl text-gray-600">
              Configure and manage AI safety policies with framework compliance mapping and real-time protection
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={() => setShowRealTimeConfig(!showRealTimeConfig)}
              className="flex items-center gap-2"
            >
              <Zap className="h-4 w-4" />
              Real-time Config
            </Button>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="h-4 w-4 mr-2" />
                  New Policy
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Create New Policy with Framework Coverage</DialogTitle>
                  <DialogDescription>
                    Define a policy with guardrails and see real-time framework coverage mapping
                  </DialogDescription>
                </DialogHeader>
                <CreatePolicyForm 
                  guardrailTypes={guardrailTypes} 
                  frameworks={frameworks}
                  policyMode={policyMode}
                  setPolicyMode={setPolicyMode}
                  onClose={() => setIsCreateDialogOpen(false)}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Real-time Protection Configuration Panel */}
        {showRealTimeConfig && (
          <Card className="mb-8 border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-600" />
                Real-time Protection Configuration
              </CardTitle>
              <CardDescription>Configure how your policies protect live applications</CardDescription>
            </CardHeader>
            <CardContent>
              <RealTimeProtectionConfig policies={policies} />
            </CardContent>
          </Card>
        )}

        {/* Framework Coverage Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Framework Coverage Overview
            </CardTitle>
            <CardDescription>How well your policies address each compliance framework</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {frameworks.map((framework) => (
                <div key={framework.id} className="text-center p-6 border rounded-lg bg-white shadow-sm">
                  <div className={`text-4xl font-bold text-${framework.color}-600 mb-2`}>
                    {framework.coverage}%
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-3">{framework.name}</div>
                  <Progress value={framework.coverage} className="h-3" />
                  <div className="text-xs text-gray-500 mt-2">
                    {Math.round(framework.coverage * policies.length / 100)} of {policies.length} policies mapped
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="policies" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="policies">Your Policies</TabsTrigger>
            <TabsTrigger value="frameworks">All Frameworks</TabsTrigger>
            <TabsTrigger value="guardrails">Guardrail Catalog</TabsTrigger>
            <TabsTrigger value="mapping">Framework Mapping</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Policies Tab */}
          <TabsContent value="policies" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Active Policies ({policies.length})</CardTitle>
                    <CardDescription>Manage your AI safety policies and their configurations</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Catalogue</Button>
                    <Button variant="outline" size="sm">Your Policies</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Policy Name</TableHead>
                      <TableHead>Policy ID</TableHead>
                      <TableHead>Guardrails</TableHead>
                      <TableHead>Framework Coverage</TableHead>
                      <TableHead>Real-time Status</TableHead>
                      <TableHead>Projects</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {policies.map((policy) => (
                      <TableRow key={policy.id} className="hover:bg-gray-50">
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-purple-600" />
                            <div>
                              <div className="font-medium">{policy.name}</div>
                              <div className="text-sm text-gray-500">{policy.description}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="font-mono text-xs">
                            {policy.id}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {policy.guardrails.slice(0, 2).map((guardrail, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {guardrail}
                              </Badge>
                            ))}
                            {policy.guardrails.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{policy.guardrails.length - 2}
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {Object.entries(policy.frameworkCoverage).slice(0, 3).map(([framework, coverage]) => (
                              <Badge key={framework} className={`text-xs bg-${getFrameworkColor(framework)}-100 text-${getFrameworkColor(framework)}-800`}>
                                {coverage}%
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {policy.realTimeProtection.enabled ? (
                              <div className="flex items-center gap-1">
                                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-green-700">Live</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-1">
                                <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                                <span className="text-xs text-gray-500">Offline</span>
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{policy.projects}</TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* All Frameworks Tab */}
          <TabsContent value="frameworks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  LLMs Frameworks & Standards
                </CardTitle>
                <CardDescription>Comprehensive list of AI/ML security and governance frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Region</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Coverage</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {frameworks.map((framework) => (
                      <TableRow key={framework.id}>
                        <TableCell className="font-medium">{framework.name}</TableCell>
                        <TableCell>{framework.region}</TableCell>
                        <TableCell>{framework.type}</TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {framework.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={framework.coverage} className="w-20 h-2" />
                            <span className="text-sm">{framework.coverage}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Guardrails Catalog Tab */}
          <TabsContent value="guardrails" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guardrailTypes.map((guardrail) => (
                <Card key={guardrail.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <guardrail.icon className="h-6 w-6 text-purple-600" />
                        <div>
                          <CardTitle className="text-lg">{guardrail.name}</CardTitle>
                          <CardDescription className="mt-1">{guardrail.description}</CardDescription>
                        </div>
                      </div>
                      <Badge variant={getSeverityColor(guardrail.severity)}>{guardrail.severity}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Default Sensitivity</span>
                        <span className="text-sm font-bold">{guardrail.defaultSensitivity}%</span>
                      </div>
                      <Progress value={guardrail.defaultSensitivity} className="h-2" />
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Framework Coverage:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(guardrail.frameworks).map(([frameworkId, mappings]) => {
                          const framework = frameworks.find(f => f.id === frameworkId);
                          return (
                            <div key={frameworkId} className={`p-2 rounded border text-xs bg-${framework?.color || 'gray'}-50 border-${framework?.color || 'gray'}-200`}>
                              <div className="font-medium">{framework?.name}</div>
                              <div className="text-xs text-gray-600">{(mappings as string[]).length} controls</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Framework Mapping Tab */}
          <TabsContent value="mapping" className="space-y-6">
            <FrameworkMappingView 
              guardrailTypes={guardrailTypes} 
              frameworks={frameworks}
              policies={policies}
            />
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Total Policies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">{policies.length}</div>
                  <p className="text-sm text-gray-500">Active policies</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Avg. Effectiveness</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">
                    {Math.round(policies.reduce((acc, p) => acc + p.effectiveness, 0) / policies.length)}%
                  </div>
                  <p className="text-sm text-gray-500">Across all policies</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Framework Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">
                    {Math.round(frameworks.reduce((acc, f) => acc + f.coverage, 0) / frameworks.length)}%
                  </div>
                  <p className="text-sm text-gray-500">Overall compliance</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Real-time Protection Configuration Component
const RealTimeProtectionConfig = ({ policies }: any) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-green-200">
          <CardHeader className="text-center">
            <CardTitle className="text-green-600">Live Protection Status</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {policies.filter((p: any) => p.realTimeProtection.enabled).length}
            </div>
            <p className="text-sm text-gray-600">Policies Active</p>
          </CardContent>
        </Card>
        
        <Card className="border-blue-200">
          <CardHeader className="text-center">
            <CardTitle className="text-blue-600">Avg Response Time</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">&lt; 35ms</div>
            <p className="text-sm text-gray-600">Across all policies</p>
          </CardContent>
        </Card>
        
        <Card className="border-purple-200">
          <CardHeader className="text-center">
            <CardTitle className="text-purple-600">Total Throughput</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">25K</div>
            <p className="text-sm text-gray-600">Requests/minute</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Integration Example: Customer Chatbot Protection</h3>
        <Card className="bg-gray-50">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Users className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium">1. Customer Input</h4>
                  <p className="text-sm text-gray-600">User types message in chatbot on customer website</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="h-px w-full bg-gray-300"></div>
                <div className="mx-4 text-gray-400">→</div>
                <div className="h-px w-full bg-gray-300"></div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Shield className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">2. Real-time Scan</h4>
                  <p className="text-sm text-gray-600">Input sent to TR Guard API for policy-based scanning</p>
                  <div className="mt-2 p-2 bg-white rounded border text-xs">
                    <code>POST https://api.trguard.com/v1/scan</code>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="h-px w-full bg-gray-300"></div>
                <div className="mx-4 text-gray-400">→</div>
                <div className="h-px w-full bg-gray-300"></div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">3. Framework-based Decision</h4>
                  <p className="text-sm text-gray-600">Policy evaluates against configured frameworks (NIST, OWASP, etc.)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Enhanced Create Policy Form Component
const CreatePolicyForm = ({ guardrailTypes, frameworks, policyMode, setPolicyMode, onClose }: any) => {
  const [selectedGuardrails, setSelectedGuardrails] = useState<string[]>([]);
  const [policyName, setPolicyName] = useState("");
  const [policyDescription, setPolicyDescription] = useState("");
  const [frameworkCoverage, setFrameworkCoverage] = useState<Record<string, number>>({});

  const toggleGuardrail = (guardrailId: string) => {
    setSelectedGuardrails(prev => {
      const newSelection = prev.includes(guardrailId) 
        ? prev.filter(id => id !== guardrailId)
        : [...prev, guardrailId];
      
      // Recalculate framework coverage
      calculateFrameworkCoverage(newSelection);
      return newSelection;
    });
  };

  const calculateFrameworkCoverage = (selectedIds: string[]) => {
    const coverage: Record<string, number> = {};
    
    frameworks.forEach((framework: any) => {
      let totalMappings = 0;
      let coveredMappings = 0;
      
      guardrailTypes.forEach((guardrail: any) => {
        const frameworkMappings = guardrail.frameworks[framework.id] || [];
        totalMappings += frameworkMappings.length;
        
        if (selectedIds.includes(guardrail.id)) {
          coveredMappings += frameworkMappings.length;
        }
      });
      
      coverage[framework.id] = totalMappings > 0 ? Math.round((coveredMappings / totalMappings) * 100) : 0;
    });
    
    setFrameworkCoverage(coverage);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column - Policy Configuration */}
      <div className="lg:col-span-2 space-y-6">
        {/* General Info */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-purple-600 mb-2">General Info</h3>
            <p className="text-sm text-gray-600 mb-4">Provide your policy name and description</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Policy Name</label>
              <Input 
                placeholder="my_policy_1" 
                value={policyName}
                onChange={(e) => setPolicyName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Policy Description</label>
              <Textarea 
                placeholder="Enter Policy Description"
                value={policyDescription}
                onChange={(e) => setPolicyDescription(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Policy Details */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Policy Details</h3>
            <p className="text-sm text-gray-600 mb-4">
              Choose between running the same defense configuration on all API requests via a unified policy, 
              or configuring different defenses for user inputs vs LLM outputs.
            </p>
          </div>

          <div className="flex gap-4">
            <Button 
              variant={policyMode === "input" ? "default" : "outline"}
              onClick={() => setPolicyMode("input")}
              className="flex items-center gap-2"
            >
              <Database className="h-4 w-4" />
              Input
            </Button>
            <Button 
              variant={policyMode === "output" ? "default" : "outline"}
              onClick={() => setPolicyMode("output")}
              className="flex items-center gap-2"
            >
              Output
            </Button>
          </div>
        </div>

        {/* Select Guardrails */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Select Guardrails</h3>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Guardrail
            </Button>
          </div>
          <p className="text-sm text-gray-600">These are the active guardrails enforced by your policy.</p>

          <div className="space-y-3">
            {guardrailTypes.map((guardrail) => (
              <GuardrailConfigCard 
                key={guardrail.id}
                guardrail={guardrail}
                frameworks={frameworks}
                isSelected={selectedGuardrails.includes(guardrail.id)}
                onToggle={() => toggleGuardrail(guardrail.id)}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button className="bg-purple-600 hover:bg-purple-700">Save Policy</Button>
        </div>
      </div>

      {/* Right Column - Framework Coverage Preview */}
      <div className="space-y-6">
        <Card className="sticky top-4">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Framework Coverage Preview
            </CardTitle>
            <CardDescription>Real-time coverage as you select guardrails</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {frameworks.map((framework: any) => (
              <div key={framework.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{framework.name}</span>
                  <span className="text-sm font-bold">{frameworkCoverage[framework.id] || 0}%</span>
                </div>
                <Progress value={frameworkCoverage[framework.id] || 0} className="h-2" />
              </div>
            ))}
            
            {selectedGuardrails.length > 0 && (
              <div className="mt-6 pt-4 border-t">
                <h4 className="text-sm font-semibold mb-2">Selected Guardrails Impact:</h4>
                <div className="space-y-2">
                  {selectedGuardrails.map(guardrailId => {
                    const guardrail = guardrailTypes.find((g: any) => g.id === guardrailId);
                    return (
                      <div key={guardrailId} className="text-xs bg-purple-50 p-2 rounded">
                        <div className="font-medium">{guardrail?.name}</div>
                        <div className="text-gray-600">
                          Covers {Object.keys(guardrail?.frameworks || {}).length} frameworks
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Enhanced Guardrail Configuration Card
const GuardrailConfigCard = ({ guardrail, frameworks, isSelected, onToggle }: any) => {
  const [sensitivity, setSensitivity] = useState([guardrail.defaultSensitivity]);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`border rounded-lg p-4 ${isSelected ? 'border-purple-200 bg-purple-50' : 'border-gray-200'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <guardrail.icon className={`h-5 w-5 ${isSelected ? 'text-purple-600' : 'text-gray-400'}`} />
          <div>
            <div className="font-medium">{guardrail.name}</div>
            <div className="text-sm text-gray-500">{guardrail.description}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Switch checked={isSelected} onCheckedChange={onToggle} />
          {isSelected && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Less' : 'More'}
            </Button>
          )}
        </div>
      </div>

      {isSelected && (
        <div className="mt-4 pt-4 border-t space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {Object.entries(guardrail.frameworks).map(([frameworkId, mappings]) => {
              const framework = frameworks.find((f: any) => f.id === frameworkId);
              return (
                <div key={frameworkId} className={`p-2 rounded text-xs bg-${framework?.color || 'gray'}-50 border border-${framework?.color || 'gray'}-200`}>
                  <div className="font-medium">{framework?.name}</div>
                  <div className="text-gray-600">{(mappings as string[]).length} controls</div>
                </div>
              );
            })}
          </div>

          {isExpanded && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Flagging Sensitivity</label>
                <div className="px-3">
                  <Slider
                    value={sensitivity}
                    onValueChange={setSensitivity}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>L1</span>
                    <span>L2</span>
                    <span>L3</span>
                    <span>L4</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  L{Math.ceil(sensitivity[0] / 25)} - {sensitivity[0] >= 75 ? 'Critical impact, immediate action required.' : 'Standard monitoring level'}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">SAIF Layer</label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Model</Button>
                  <Button variant="default" size="sm">Application</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Enhanced Framework Mapping View Component
const FrameworkMappingView = ({ guardrailTypes, frameworks, policies }: any) => {
  return (
    <div className="space-y-6">
      {frameworks.map((framework: any) => (
        <Card key={framework.id}>
          <CardHeader>
            <CardTitle className={`text-${framework.color}-600`}>{framework.name}</CardTitle>
            <CardDescription>
              Coverage: {framework.coverage}% across your policies | Type: {framework.type}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {guardrailTypes.map((guardrail: any) => {
                const frameworkMappings = guardrail.frameworks[framework.id] || [];
                return (
                  <div key={guardrail.id} className={`p-3 border rounded-lg bg-${framework.color}-50 border-${framework.color}-200`}>
                    <div className="flex items-center gap-2 mb-2">
                      <guardrail.icon className={`h-4 w-4 text-${framework.color}-600`} />
                      <span className="font-medium text-sm">{guardrail.name}</span>
                    </div>
                    <div className="space-y-1">
                      {frameworkMappings.map((mapping: string, idx: number) => (
                        <div key={idx} className="text-xs text-gray-700">
                          • {mapping}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PolicyMapping;

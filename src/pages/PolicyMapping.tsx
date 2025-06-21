
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
import { Settings, AlertTriangle, Shield, Eye, Database, Code, Users, Lock, Plus, Edit, Trash2, Copy, Activity, CheckCircle, XCircle } from "lucide-react";

const PolicyMapping = () => {
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [policyMode, setPolicyMode] = useState("input");

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
      effectiveness: 85
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
      effectiveness: 92
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
      effectiveness: 78
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
        owasp: ["LLM01 - Prompt Injection"],
        nist: ["MS.3 - Risk Monitoring", "MG.1 - Risk Response"],
        saif: ["Secure by Design", "Understand Limitations"]
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
        owasp: ["LLM06 - Sensitive Information Disclosure"],
        nist: ["GV.3 - AI Risk Tolerance", "MS.1 - Risk Measurement"],
        saif: ["Secure by Default", "Secure Deployment"]
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
        owasp: ["LLM02 - Insecure Output Handling"],
        nist: ["GV.1 - AI Risk Management"],
        saif: ["Secure by Design"]
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
        owasp: ["LLM02 - Insecure Output Handling", "LLM09 - Overreliance"],
        nist: ["GV.1 - AI Risk Management", "MG.2 - Risk Treatment"],
        saif: ["Secure by Design", "Secure by Default"]
      }
    }
  ];

  const frameworkMapping = {
    owasp: { name: "OWASP LLM Top 10", color: "red", coverage: 85 },
    nist: { name: "NIST AI Framework", color: "blue", coverage: 78 },
    saif: { name: "Google SAIF", color: "green", coverage: 92 }
  };

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
              Configure and manage AI safety policies with framework compliance mapping
            </p>
          </div>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                New Policy
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Policy</DialogTitle>
                <DialogDescription>
                  Define a policy with guardrails for your AI applications
                </DialogDescription>
              </DialogHeader>
              <CreatePolicyForm 
                guardrailTypes={guardrailTypes} 
                policyMode={policyMode}
                setPolicyMode={setPolicyMode}
                onClose={() => setIsCreateDialogOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </div>

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(frameworkMapping).map(([key, framework]) => (
                <div key={key} className="text-center p-6 border rounded-lg bg-white shadow-sm">
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
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="policies">Your Policies</TabsTrigger>
            <TabsTrigger value="guardrails">Guardrail Catalog</TabsTrigger>
            <TabsTrigger value="frameworks">Framework Mapping</TabsTrigger>
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
                      <TableHead>Projects</TableHead>
                      <TableHead>Mode</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created At</TableHead>
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
                        <TableCell>{policy.projects}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{policy.mode}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(policy.status)}
                            {policy.status}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-gray-500">
                          {policy.createdAt}
                        </TableCell>
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
                      <div className="space-y-2">
                        {Object.entries(guardrail.frameworks).map(([framework, mappings]) => (
                          <div key={framework} className={`p-2 rounded border text-xs bg-${frameworkMapping[framework as keyof typeof frameworkMapping].color}-50 border-${frameworkMapping[framework as keyof typeof frameworkMapping].color}-200`}>
                            <div className="font-medium">{frameworkMapping[framework as keyof typeof frameworkMapping].name}</div>
                            <div className="mt-1">
                              {(mappings as string[]).map((mapping, idx) => (
                                <div key={idx}>• {mapping}</div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Framework Mapping Tab */}
          <TabsContent value="frameworks" className="space-y-6">
            <FrameworkMappingView 
              guardrailTypes={guardrailTypes} 
              frameworkMapping={frameworkMapping}
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
                    {Math.round((frameworkMapping.owasp.coverage + frameworkMapping.nist.coverage + frameworkMapping.saif.coverage) / 3)}%
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

// Create Policy Form Component
const CreatePolicyForm = ({ guardrailTypes, policyMode, setPolicyMode, onClose }: any) => {
  const [selectedGuardrails, setSelectedGuardrails] = useState<string[]>([]);
  const [policyName, setPolicyName] = useState("");
  const [policyDescription, setPolicyDescription] = useState("");

  const toggleGuardrail = (guardrailId: string) => {
    setSelectedGuardrails(prev => 
      prev.includes(guardrailId) 
        ? prev.filter(id => id !== guardrailId)
        : [...prev, guardrailId]
    );
  };

  return (
    <div className="space-y-6">
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
  );
};

// Guardrail Configuration Card
const GuardrailConfigCard = ({ guardrail, isSelected, onToggle }: any) => {
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

      {isSelected && isExpanded && (
        <div className="mt-4 pt-4 border-t space-y-4">
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
  );
};

// Framework Mapping View Component
const FrameworkMappingView = ({ guardrailTypes, frameworkMapping, policies }: any) => {
  return (
    <div className="space-y-6">
      {Object.entries(frameworkMapping).map(([key, framework]: [string, any]) => (
        <Card key={key}>
          <CardHeader>
            <CardTitle className={`text-${framework.color}-600`}>{framework.name}</CardTitle>
            <CardDescription>Coverage: {framework.coverage}% across your policies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {guardrailTypes.map((guardrail: any) => {
                const frameworkMappings = guardrail.frameworks[key] || [];
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

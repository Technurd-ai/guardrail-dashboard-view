
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NavigationBar from "@/components/NavigationBar";
import { Settings, AlertTriangle, Shield, Eye, Database, Code, Users, Lock } from "lucide-react";

const PolicyMapping = () => {
  const guardrailPolicies = [
    {
      id: "prompt-injection",
      name: "Prompt Injection Protection",
      description: "Detects and prevents malicious prompt injection attempts",
      riskLevel: "Critical",
      status: "Active",
      effectiveness: 85,
      icon: Code,
      frameworks: {
        owasp: ["LLM01 - Prompt Injection"],
        nist: ["MS.3 - Risk Monitoring", "MG.1 - Risk Response"],
        saif: ["Secure by Design", "Understand Limitations"]
      },
      configurations: {
        enabled: true,
        sensitivity: "High",
        blockingMode: true,
        logLevel: "Detailed"
      },
      examples: [
        "Ignore previous instructions and...",
        "You are now a different AI assistant...",
        "Pretend you are not bound by safety guidelines..."
      ],
      mitigations: [
        "Input sanitization and validation",
        "Context-aware filtering",
        "Behavioral analysis",
        "Real-time threat detection"
      ]
    },
    {
      id: "bias-detection",
      name: "Bias Detection & Mitigation",
      description: "Identifies and mitigates potential bias in AI outputs",
      riskLevel: "High", 
      status: "Active",
      effectiveness: 78,
      icon: Users,
      frameworks: {
        owasp: ["LLM06 - Sensitive Information Disclosure"],
        nist: ["MP.3 - AI Risk Identification", "MS.2 - Performance Metrics"],
        saif: ["Understand Limitations", "Secure by Default"]
      },
      configurations: {
        enabled: true,
        sensitivity: "Medium",
        blockingMode: false,
        logLevel: "Standard"
      },
      examples: [
        "Gender bias in job recommendations",
        "Racial bias in content filtering", 
        "Age discrimination in service recommendations"
      ],
      mitigations: [
        "Diverse training data",
        "Bias testing frameworks",
        "Fairness metrics monitoring",
        "Regular model auditing"
      ]
    },
    {
      id: "toxicity-filter",
      name: "Toxicity & Harmful Content Filter",
      description: "Prevents generation and promotion of toxic or harmful content",
      riskLevel: "High",
      status: "Active", 
      effectiveness: 92,
      icon: AlertTriangle,
      frameworks: {
        owasp: ["LLM02 - Insecure Output Handling", "LLM09 - Overreliance"],
        nist: ["GV.1 - AI Risk Management", "MG.2 - Risk Treatment"],
        saif: ["Secure by Design", "Secure by Default"]
      },
      configurations: {
        enabled: true,
        sensitivity: "High",
        blockingMode: true,
        logLevel: "Detailed"
      },
      examples: [
        "Hate speech and harassment",
        "Violence and self-harm content",
        "Illegal activity instructions"
      ],
      mitigations: [
        "Multi-layer content filtering",
        "Sentiment analysis",
        "Context-aware moderation",
        "Human-in-the-loop review"
      ]
    },
    {
      id: "pii-protection", 
      name: "PII & Data Protection",
      description: "Prevents exposure of personally identifiable information",
      riskLevel: "Critical",
      status: "Active",
      effectiveness: 95,
      icon: Lock,
      frameworks: {
        owasp: ["LLM06 - Sensitive Information Disclosure", "LLM03 - Training Data Poisoning"],
        nist: ["GV.3 - AI Risk Tolerance", "MS.1 - Risk Measurement"],
        saif: ["Secure by Default", "Secure Deployment"]
      },
      configurations: {
        enabled: true,
        sensitivity: "High", 
        blockingMode: true,
        logLevel: "Comprehensive"
      },
      examples: [
        "Social Security Numbers",
        "Credit card information",
        "Personal addresses and phone numbers"
      ],
      mitigations: [
        "Data masking and anonymization",
        "Entity recognition and filtering",
        "Differential privacy techniques",
        "Access control and encryption"
      ]
    }
  ];

  const frameworkMapping = {
    owasp: {
      name: "OWASP LLM Top 10", 
      color: "red",
      coverage: 85
    },
    nist: {
      name: "NIST AI Framework",
      color: "blue", 
      coverage: 78
    },
    saif: {
      name: "Google SAIF",
      color: "green",
      coverage: 92
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Critical": return "destructive";
      case "High": return "destructive";
      case "Medium": return "default";
      default: return "secondary";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800 border-green-200";
      case "Inactive": return "bg-red-100 text-red-800 border-red-200";
      case "Monitoring": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getFrameworkColor = (framework: string) => {
    const colors = {
      owasp: "text-red-600 bg-red-50 border-red-200",
      nist: "text-blue-600 bg-blue-50 border-blue-200", 
      saif: "text-green-600 bg-green-50 border-green-200"
    };
    return colors[framework as keyof typeof colors] || "text-gray-600 bg-gray-50 border-gray-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <NavigationBar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="h-8 w-8 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-900">Policy Guardrails Mapping</h1>
          </div>
          <p className="text-xl text-gray-600">
            Configure and map AI safety guardrails to compliance frameworks
          </p>
        </div>

        {/* Framework Coverage Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Framework Coverage by Guardrails</CardTitle>
            <CardDescription>How well your policy guardrails address each compliance framework</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(frameworkMapping).map(([key, framework]) => (
                <div key={key} className="text-center p-4 border rounded-lg">
                  <div className={`text-3xl font-bold text-${framework.color}-600 mb-2`}>
                    {framework.coverage}%
                  </div>
                  <div className="text-sm text-gray-600 mb-3">{framework.name}</div>
                  <Progress value={framework.coverage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Guardrail Policies */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="prompt-injection">Prompt Injection</TabsTrigger>
            <TabsTrigger value="bias-detection">Bias Detection</TabsTrigger>
            <TabsTrigger value="toxicity-filter">Toxicity Filter</TabsTrigger>
            <TabsTrigger value="pii-protection">PII Protection</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {guardrailPolicies.map((policy) => (
                <Card key={policy.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <policy.icon className="h-6 w-6 text-purple-600" />
                        <div>
                          <CardTitle className="text-lg">{policy.name}</CardTitle>
                          <CardDescription className="mt-1">{policy.description}</CardDescription>
                        </div>
                      </div>
                      <Badge variant={getRiskColor(policy.riskLevel)}>{policy.riskLevel}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Effectiveness</span>
                        <span className="text-sm font-bold">{policy.effectiveness}%</span>
                      </div>
                      <Progress value={policy.effectiveness} className="h-2" />
                      
                      <div className={`px-3 py-1 rounded-md text-sm font-medium border ${getStatusColor(policy.status)}`}>
                        Status: {policy.status}
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-2">Framework Mapping:</h4>
                        <div className="space-y-2">
                          {Object.entries(policy.frameworks).map(([framework, mappings]) => (
                            <div key={framework} className={`p-2 rounded border text-xs ${getFrameworkColor(framework)}`}>
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
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {guardrailPolicies.map((policy) => (
            <TabsContent key={policy.id} value={policy.id} className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <policy.icon className="h-8 w-8 text-purple-600" />
                    <div>
                      <CardTitle className="text-2xl">{policy.name}</CardTitle>
                      <CardDescription className="text-lg mt-1">{policy.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Configuration Settings */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Current Configuration</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {Object.entries(policy.configurations).map(([key, value]) => (
                        <div key={key} className="p-3 border rounded-lg bg-white">
                          <div className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          <div className="text-lg font-bold mt-1">
                            {typeof value === 'boolean' ? (value ? 'Enabled' : 'Disabled') : value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Framework Mappings */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Framework Mappings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Object.entries(policy.frameworks).map(([framework, mappings]) => (
                        <Card key={framework} className={`border-2 ${getFrameworkColor(framework)}`}>
                          <CardHeader>
                            <CardTitle className="text-lg">{frameworkMapping[framework as keyof typeof frameworkMapping].name}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-1 text-sm">
                              {(mappings as string[]).map((mapping, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-current">•</span>
                                  {mapping}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Examples and Mitigations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Threat Examples</h3>
                      <div className="space-y-2">
                        {policy.examples.map((example, idx) => (
                          <div key={idx} className="p-3 border rounded-lg bg-red-50 border-red-200 text-red-800">
                            <span className="text-red-600 font-bold">⚠ </span>
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Mitigation Strategies</h3>
                      <div className="space-y-2">
                        {policy.mitigations.map((mitigation, idx) => (
                          <div key={idx} className="p-3 border rounded-lg bg-green-50 border-green-200 text-green-800">
                            <span className="text-green-600 font-bold">✓ </span>
                            {mitigation}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default PolicyMapping;

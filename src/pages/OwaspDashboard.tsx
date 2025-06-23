
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import NavigationBar from "@/components/NavigationBar";
import { AlertTriangle, Shield, Eye, Lock, Database, Code, Users, FileText, Zap, Bug, Settings, Plus, Info } from "lucide-react";

const OwaspDashboard = () => {
  const owaspTop10 = [
    {
      id: "LLM01",
      title: "Prompt Injection",
      description: "Manipulating LLM through crafted inputs to cause unintended actions",
      riskLevel: "Critical",
      status: "Vulnerable",
      compliance: 45,
      icon: Code,
      examples: ["Direct prompt injection", "Indirect prompt injection via external sources"],
      mitigations: ["Input validation", "Privilege controls", "Segregation of external content"],
      impact: "Complete system compromise, data theft, unauthorized actions",
      detectability: "Difficult to detect without proper monitoring",
      exploitability: "High - can be exploited with crafted prompts",
      technicalDetails: "Occurs when untrusted input is used to modify the LLM's behavior through prompt manipulation"
    },
    {
      id: "LLM02", 
      title: "Insecure Output Handling",
      description: "Insufficient validation of LLM outputs before downstream use",
      riskLevel: "High",
      status: "Needs Review", 
      compliance: 70,
      icon: FileText,
      examples: ["Cross-site scripting", "Code injection", "Server-side request forgery"],
      mitigations: ["Output encoding", "Input validation", "Zero-trust approach"],
      impact: "Code execution, data manipulation, system compromise",
      detectability: "Medium - can be detected through output analysis",
      exploitability: "Medium - requires specific output conditions",
      technicalDetails: "LLM outputs are treated as trusted content without proper validation or encoding"
    },
    {
      id: "LLM03",
      title: "Training Data Poisoning", 
      description: "Manipulating training data to introduce vulnerabilities or biases",
      riskLevel: "High",
      status: "Compliant",
      compliance: 85,
      icon: Database,
      examples: ["Backdoor attacks", "Data poisoning", "Model manipulation"],
      mitigations: ["Data validation", "Anomaly detection", "Secure data sources"],
      impact: "Model behavior manipulation, biased outputs, backdoor activation",
      detectability: "Very difficult - requires deep model analysis",
      exploitability: "Low - requires access to training pipeline",
      technicalDetails: "Malicious data introduced during training phase to compromise model integrity"
    },
    {
      id: "LLM04",
      title: "Model Denial of Service",
      description: "Causing resource exhaustion through resource-heavy operations", 
      riskLevel: "Medium",
      status: "Compliant",
      compliance: 90,
      icon: Zap,
      examples: ["Resource exhaustion", "Queue flooding", "Variable-length inputs"],
      mitigations: ["Rate limiting", "Resource monitoring", "Input validation"],
      impact: "Service unavailability, performance degradation, increased costs",
      detectability: "Easy - through resource monitoring",
      exploitability: "High - simple to execute with large inputs",
      technicalDetails: "Attackers send resource-intensive queries to overwhelm the LLM service"
    },
    {
      id: "LLM05",
      title: "Supply Chain Vulnerabilities",
      description: "Vulnerabilities in third-party datasets, models, or platforms",
      riskLevel: "Medium", 
      status: "Needs Review",
      compliance: 65,
      icon: Shield,
      examples: ["Compromised pre-trained models", "Malicious plugins", "Outdated components"],
      mitigations: ["Model verification", "Regular updates", "Security scanning"],
      impact: "Inherited vulnerabilities, compromised model behavior, supply chain attacks",
      detectability: "Medium - requires security scanning and verification",
      exploitability: "Medium - depends on supply chain compromise",
      technicalDetails: "Vulnerabilities inherited from third-party components, models, or training data"
    },
    {
      id: "LLM06",
      title: "Sensitive Information Disclosure",
      description: "LLM inadvertently revealing confidential data in outputs",
      riskLevel: "High",
      status: "Vulnerable", 
      compliance: 40,
      icon: Eye,
      examples: ["Training data leakage", "PII exposure", "Confidential information"],
      mitigations: ["Data sanitization", "Output filtering", "Access controls"],
      impact: "Privacy violations, regulatory non-compliance, data breaches",
      detectability: "Medium - requires output monitoring",
      exploitability: "Medium - requires specific prompting techniques",
      technicalDetails: "Model memorizes and reproduces sensitive information from training data"
    },
    {
      id: "LLM07",
      title: "Insecure Plugin Design",
      description: "LLM plugins lacking proper access controls and validation",
      riskLevel: "High",
      status: "Needs Review",
      compliance: 60,
      icon: Bug,
      examples: ["Insufficient access control", "Input validation gaps", "Privilege escalation"],
      mitigations: ["Strict input validation", "Access controls", "Plugin sandboxing"],
      impact: "Unauthorized access, privilege escalation, system compromise",
      detectability: "Medium - through security testing",
      exploitability: "Medium - requires plugin interaction",
      technicalDetails: "Plugins extend LLM capabilities but may introduce security vulnerabilities"
    },
    {
      id: "LLM08", 
      title: "Excessive Agency",
      description: "LLM systems granted excessive functionality or permissions",
      riskLevel: "Medium",
      status: "Compliant",
      compliance: 80,
      icon: Users,
      examples: ["Unrestricted functionality", "Excessive permissions", "Lack of human oversight"],
      mitigations: ["Principle of least privilege", "Human oversight", "Functionality limits"],
      impact: "Unintended actions, system damage, unauthorized operations",
      detectability: "Medium - through permission auditing",
      exploitability: "Low - requires specific conditions",
      technicalDetails: "LLM systems given more autonomy and permissions than necessary for their function"
    },
    {
      id: "LLM09",
      title: "Overreliance",
      description: "Systems or people over-relying on LLM outputs without oversight",
      riskLevel: "Medium", 
      status: "Needs Review",
      compliance: 75,
      icon: AlertTriangle,
      examples: ["Automation bias", "Lack of verification", "Critical decision dependency"],
      mitigations: ["Human verification", "Output validation", "Fallback mechanisms"],
      impact: "Poor decision making, system failures, loss of human expertise",
      detectability: "Difficult - requires process analysis",
      exploitability: "Low - indirect exploitation through poor decisions",
      technicalDetails: "Excessive trust in LLM outputs without proper human oversight or validation"
    },
    {
      id: "LLM10",
      title: "Model Theft",
      description: "Unauthorized access to proprietary LLM models",
      riskLevel: "Medium",
      status: "Compliant", 
      compliance: 88,
      icon: Lock,
      examples: ["Model extraction", "Side-channel attacks", "Unauthorized access"],
      mitigations: ["Access controls", "Model obfuscation", "Monitoring and logging"],
      impact: "IP theft, competitive disadvantage, unauthorized model replication",
      detectability: "Medium - through access monitoring",
      exploitability: "Low - requires significant resources",
      technicalDetails: "Attackers attempt to steal or replicate proprietary model weights and architecture"
    }
  ];

  const handleCreatePolicy = (vulnId: string) => {
    console.log(`Creating policy for ${vulnId}`);
    // Navigate to policy creation with pre-filled vulnerability
  };

  const handleConfigureGuardrails = (vulnId: string) => {
    console.log(`Configuring guardrails for ${vulnId}`);
    // Navigate to guardrail configuration
  };

  const handleViewDetails = (vulnId: string) => {
    console.log(`Viewing details for ${vulnId}`);
    // Show detailed vulnerability information
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
      case "Vulnerable": return "bg-red-100 text-red-800 border-red-200";
      case "Needs Review": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Compliant": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <NavigationBar />
        
        <div className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <h1 className="text-4xl font-bold text-gray-900">OWASP LLM Top 10</h1>
            </div>
            <p className="text-xl text-gray-600">
              Security risks specific to Large Language Model applications and their mitigations
            </p>
          </div>

          {/* Overall Compliance Summary */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Overall OWASP LLM Compliance</CardTitle>
              <CardDescription>Summary of compliance across all OWASP LLM Top 10 categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="text-center cursor-help">
                      <div className="text-3xl font-bold text-red-600">2</div>
                      <div className="text-sm text-gray-600">Vulnerable</div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      <strong>Vulnerable Systems:</strong> These vulnerabilities require immediate attention. 
                      They have low compliance scores and pose significant security risks to your LLM applications.
                    </p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="text-center cursor-help">
                      <div className="text-3xl font-bold text-yellow-600">4</div>
                      <div className="text-sm text-gray-600">Needs Review</div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      <strong>Needs Review:</strong> These areas require assessment and potential improvement. 
                      Consider implementing additional security measures and monitoring.
                    </p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="text-center cursor-help">
                      <div className="text-3xl font-bold text-green-600">4</div>
                      <div className="text-sm text-gray-600">Compliant</div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      <strong>Compliant:</strong> These vulnerabilities are well-managed with good compliance scores. 
                      Continue monitoring and maintaining current security measures.
                    </p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="text-center cursor-help">
                      <div className="text-3xl font-bold text-blue-600">70%</div>
                      <div className="text-sm text-gray-600">Avg Compliance</div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      <strong>Average Compliance:</strong> Overall security posture across all OWASP LLM Top 10 categories. 
                      Target 85%+ for strong security posture.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardContent>
          </Card>

          {/* OWASP LLM Top 10 Items */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {owaspTop10.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <item.icon className="h-6 w-6 text-blue-600 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="max-w-sm space-y-2">
                            <p><strong>Impact:</strong> {item.impact}</p>
                            <p><strong>Detectability:</strong> {item.detectability}</p>
                            <p><strong>Exploitability:</strong> {item.exploitability}</p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                      <div>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <CardTitle className="text-lg cursor-help">{item.id}: {item.title}</CardTitle>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="max-w-md space-y-2">
                              <p><strong>Technical Details:</strong></p>
                              <p className="text-sm">{item.technicalDetails}</p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                        <CardDescription className="mt-1">{item.description}</CardDescription>
                      </div>
                    </div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Badge variant={getRiskColor(item.riskLevel)} className="cursor-help">
                          {item.riskLevel}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          <strong>Risk Level:</strong> {item.riskLevel === "Critical" ? "Immediate action required" : 
                          item.riskLevel === "High" ? "High priority for remediation" : "Monitor and assess regularly"}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Compliance Score</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="text-sm font-bold cursor-help">{item.compliance}%</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            <strong>Compliance Score:</strong> Measures how well your current security measures 
                            address this vulnerability. Higher scores indicate better protection.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Progress value={item.compliance} className="h-2" />
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className={`px-3 py-1 rounded-md text-sm font-medium border cursor-help ${getStatusColor(item.status)}`}>
                          Status: {item.status}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          <strong>Status:</strong> {item.status === "Vulnerable" ? "Requires immediate attention and remediation" :
                          item.status === "Needs Review" ? "Should be assessed and potentially improved" :
                          "Currently well-protected with adequate security measures"}
                        </p>
                      </TooltipContent>
                    </Tooltip>

                    {/* Quick Actions */}
                    <div className="flex gap-2 pt-2 border-t">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleCreatePolicy(item.id)}
                            className="flex items-center gap-1"
                          >
                            <Plus className="h-3 w-3" />
                            Policy
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Create a security policy specifically for this vulnerability</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleConfigureGuardrails(item.id)}
                            className="flex items-center gap-1"
                          >
                            <Settings className="h-3 w-3" />
                            Guardrails
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Configure automated guardrails and protection measures</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => handleViewDetails(item.id)}
                            className="flex items-center gap-1"
                          >
                            <Info className="h-3 w-3" />
                            Details
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View detailed information and remediation guidance</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>

                    <div>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <h4 className="text-sm font-semibold mb-2 cursor-help">Common Examples:</h4>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Real-world scenarios where this vulnerability commonly occurs</p>
                        </TooltipContent>
                      </Tooltip>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {item.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-gray-400">•</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <h4 className="text-sm font-semibold mb-2 cursor-help">Key Mitigations:</h4>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Recommended security measures to address this vulnerability</p>
                        </TooltipContent>
                      </Tooltip>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {item.mitigations.map((mitigation, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-500">✓</span>
                            {mitigation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default OwaspDashboard;

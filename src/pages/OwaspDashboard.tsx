
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import NavigationBar from "@/components/NavigationBar";
import { AlertTriangle, Shield, Eye, Lock, Database, Code, Users, FileText, Zap, Bug } from "lucide-react";

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
      mitigations: ["Input validation", "Privilege controls", "Segregation of external content"]
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
      mitigations: ["Output encoding", "Input validation", "Zero-trust approach"]
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
      mitigations: ["Data validation", "Anomaly detection", "Secure data sources"]
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
      mitigations: ["Rate limiting", "Resource monitoring", "Input validation"]
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
      mitigations: ["Model verification", "Regular updates", "Security scanning"]
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
      mitigations: ["Data sanitization", "Output filtering", "Access controls"]
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
      mitigations: ["Strict input validation", "Access controls", "Plugin sandboxing"]
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
      mitigations: ["Principle of least privilege", "Human oversight", "Functionality limits"]
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
      mitigations: ["Human verification", "Output validation", "Fallback mechanisms"]
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
      mitigations: ["Access controls", "Model obfuscation", "Monitoring and logging"]
    }
  ];

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
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">2</div>
                <div className="text-sm text-gray-600">Vulnerable</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">4</div>
                <div className="text-sm text-gray-600">Needs Review</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">4</div>
                <div className="text-sm text-gray-600">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">70%</div>
                <div className="text-sm text-gray-600">Avg Compliance</div>
              </div>
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
                    <item.icon className="h-6 w-6 text-blue-600" />
                    <div>
                      <CardTitle className="text-lg">{item.id}: {item.title}</CardTitle>
                      <CardDescription className="mt-1">{item.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={getRiskColor(item.riskLevel)}>{item.riskLevel}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Compliance Score</span>
                    <span className="text-sm font-bold">{item.compliance}%</span>
                  </div>
                  <Progress value={item.compliance} className="h-2" />
                  
                  <div className={`px-3 py-1 rounded-md text-sm font-medium border ${getStatusColor(item.status)}`}>
                    Status: {item.status}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Common Examples:</h4>
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
                    <h4 className="text-sm font-semibold mb-2">Key Mitigations:</h4>
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
  );
};

export default OwaspDashboard;

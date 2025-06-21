
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import NavigationBar from "@/components/NavigationBar";
import { Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const Index = () => {
  const complianceData = [
    { framework: "OWASP LLM Top 10", score: 85, status: "good", issues: 2 },
    { framework: "NIST AI Framework", score: 72, status: "warning", issues: 5 },
    { framework: "Google SAIF", score: 90, status: "excellent", issues: 1 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "bg-green-500";
      case "good": return "bg-blue-500";
      case "warning": return "bg-yellow-500";
      default: return "bg-red-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent": return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "good": return <CheckCircle className="h-5 w-5 text-blue-600" />;
      case "warning": return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      default: return <XCircle className="h-5 w-5 text-red-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <NavigationBar />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">AI Security Compliance Dashboard</h1>
          </div>
          <p className="text-xl text-gray-600">
            Monitor and manage AI security compliance across OWASP LLM Top 10, NIST AI Framework, and Google SAIF
          </p>
        </div>

        {/* Overall Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {complianceData.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{item.framework}</CardTitle>
                {getStatusIcon(item.status)}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">{item.score}%</div>
                <Progress value={item.score} className="mb-2" />
                <Badge variant={item.issues > 3 ? "destructive" : item.issues > 1 ? "default" : "secondary"}>
                  {item.issues} issues
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Framework Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                OWASP LLM Top 10
              </CardTitle>
              <CardDescription>
                Security risks specific to Large Language Model applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Critical Issues</span>
                  <span className="text-red-600 font-semibold">2</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Medium Issues</span>
                  <span className="text-yellow-600 font-semibold">3</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Compliance Score</span>
                  <span className="text-green-600 font-semibold">85%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                NIST AI Framework
              </CardTitle>
              <CardDescription>
                National Institute of Standards and Technology AI Risk Management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Govern Function</span>
                  <span className="text-blue-600 font-semibold">78%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Map Function</span>
                  <span className="text-green-600 font-semibold">82%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Measure Function</span>
                  <span className="text-yellow-600 font-semibold">65%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                Google SAIF
              </CardTitle>
              <CardDescription>
                Secure AI Framework for enterprise AI systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Security by Design</span>
                  <span className="text-green-600 font-semibold">92%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Threat Detection</span>
                  <span className="text-green-600 font-semibold">88%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Response & Recovery</span>
                  <span className="text-blue-600 font-semibold">90%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Policy Guardrails Quick View */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Policy Guardrails Status</CardTitle>
            <CardDescription>
              Current status of AI safety and security guardrails across your systems
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 border rounded-lg bg-red-50 border-red-200">
                <h4 className="font-semibold text-red-800">Prompt Injection</h4>
                <p className="text-sm text-red-600 mt-1">High Risk Detected</p>
                <div className="mt-2 text-xs text-red-500">3 vulnerabilities found</div>
              </div>
              <div className="p-4 border rounded-lg bg-yellow-50 border-yellow-200">
                <h4 className="font-semibold text-yellow-800">Bias Detection</h4>
                <p className="text-sm text-yellow-600 mt-1">Medium Risk</p>
                <div className="mt-2 text-xs text-yellow-500">2 issues identified</div>
              </div>
              <div className="p-4 border rounded-lg bg-orange-50 border-orange-200">
                <h4 className="font-semibold text-orange-800">Toxicity Filter</h4>
                <p className="text-sm text-orange-600 mt-1">Needs Attention</p>
                <div className="mt-2 text-xs text-orange-500">1 configuration issue</div>
              </div>
              <div className="p-4 border rounded-lg bg-green-50 border-green-200">
                <h4 className="font-semibold text-green-800">PII Protection</h4>
                <p className="text-sm text-green-600 mt-1">Compliant</p>
                <div className="mt-2 text-xs text-green-500">All checks passed</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;

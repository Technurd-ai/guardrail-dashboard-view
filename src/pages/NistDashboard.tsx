
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import NavigationBar from "@/components/NavigationBar";
import { Building, Target, BarChart3, Shield } from "lucide-react";

const NistDashboard = () => {
  const nistFunctions = [
    {
      id: "GOVERN",
      title: "Govern",
      description: "Cultivate a culture of risk management and design approaches for trustworthy AI",
      compliance: 78,
      icon: Shield,
      subcategories: [
        { id: "GV.1", title: "AI Risk Management", compliance: 85, description: "Organization has governance structure for AI risk management" },
        { id: "GV.2", title: "Risk Management Process", compliance: 75, description: "AI risk management is integrated into broader ERM" },
        { id: "GV.3", title: "AI Risk Tolerance", compliance: 70, description: "Organization's risk tolerance is determined and communicated" },
        { id: "GV.4", title: "Responsible AI", compliance: 80, description: "Responsibility for AI risk management is assigned" },
        { id: "GV.5", title: "Impact Assessment", compliance: 82, description: "Processes for AI impact assessment are established" }
      ]
    },
    {
      id: "MAP",
      title: "Map", 
      description: "Identify and assess AI risks in the context of business operations",
      compliance: 82,
      icon: Target,
      subcategories: [
        { id: "MP.1", title: "AI System Context", compliance: 88, description: "Context and purpose of AI systems are defined and documented" },
        { id: "MP.2", title: "AI System Categorization", compliance: 85, description: "AI systems are categorized based on risk and impact" },
        { id: "MP.3", title: "AI Risk Identification", compliance: 78, description: "AI risks are identified and documented" },
        { id: "MP.4", title: "Risk Sources", compliance: 80, description: "Sources of AI risk are identified and assessed" },
        { id: "MP.5", title: "Impact Analysis", compliance: 82, description: "Potential impacts of AI systems are analyzed" }
      ]
    },
    {
      id: "MEASURE",
      title: "Measure",
      description: "Establish metrics and methods to assess AI system performance and risks",
      compliance: 65,
      icon: BarChart3,
      subcategories: [
        { id: "MS.1", title: "Risk Measurement", compliance: 70, description: "Methods for measuring AI risks are established" },
        { id: "MS.2", title: "Performance Metrics", compliance: 68, description: "AI system performance is measured and monitored" },
        { id: "MS.3", title: "Risk Monitoring", compliance: 60, description: "AI risks are continuously monitored" },
        { id: "MS.4", title: "Measurement Validation", compliance: 62, description: "Measurement processes are validated and verified" },
        { id: "MS.5", title: "Risk Reporting", compliance: 65, description: "AI risk measurements are reported to stakeholders" }
      ]
    },
    {
      id: "MANAGE", 
      title: "Manage",
      description: "Allocate resources to manage AI risks based on priorities and risk tolerance",
      compliance: 72,
      icon: Building,
      subcategories: [
        { id: "MG.1", title: "Risk Response", compliance: 75, description: "Responses to identified AI risks are implemented" },
        { id: "MG.2", title: "Risk Treatment", compliance: 70, description: "AI risks are treated according to organizational priorities" },
        { id: "MG.3", title: "Risk Communication", compliance: 68, description: "AI risk information is communicated to stakeholders" },
        { id: "MG.4", title: "Risk Monitoring", compliance: 74, description: "Effectiveness of risk responses is monitored" },
        { id: "MG.5", title: "Continuous Improvement", compliance: 73, description: "AI risk management processes are continuously improved" }
      ]
    }
  ];

  const getComplianceColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600"; 
    return "text-red-600";
  };

  const getComplianceStatus = (score: number) => {
    if (score >= 80) return { status: "Compliant", variant: "default" as const };
    if (score >= 60) return { status: "Needs Improvement", variant: "default" as const };
    return { status: "Non-Compliant", variant: "destructive" as const };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <NavigationBar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Building className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">NIST AI Risk Management Framework</h1>
          </div>
          <p className="text-xl text-gray-600">
            National Institute of Standards and Technology AI Risk Management Framework (AI RMF 1.0)
          </p>
        </div>

        {/* Overall Framework Compliance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Overall NIST AI Framework Compliance</CardTitle>
            <CardDescription>Summary compliance across all four core functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {nistFunctions.map((func) => (
                <div key={func.id} className="text-center p-4 border rounded-lg">
                  <func.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <div className={`text-3xl font-bold ${getComplianceColor(func.compliance)}`}>
                    {func.compliance}%
                  </div>
                  <div className="text-sm text-gray-600">{func.title}</div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">74%</div>
              <div className="text-lg text-gray-600">Overall Framework Compliance</div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Function Analysis */}
        <div className="space-y-8">
          {nistFunctions.map((func) => (
            <Card key={func.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <func.icon className="h-6 w-6 text-blue-600" />
                    <div>
                      <CardTitle className="text-xl">{func.title} Function</CardTitle>
                      <CardDescription className="mt-1">{func.description}</CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${getComplianceColor(func.compliance)}`}>
                      {func.compliance}%
                    </div>
                    <Badge variant={getComplianceStatus(func.compliance).variant}>
                      {getComplianceStatus(func.compliance).status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress value={func.compliance} className="h-3" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {func.subcategories.map((sub) => (
                      <div key={sub.id} className="p-4 border rounded-lg bg-white">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-sm">{sub.id}</h4>
                          <span className={`text-sm font-bold ${getComplianceColor(sub.compliance)}`}>
                            {sub.compliance}%
                          </span>
                        </div>
                        <h5 className="font-medium text-sm mb-2">{sub.title}</h5>
                        <p className="text-xs text-gray-600 mb-3">{sub.description}</p>
                        <Progress value={sub.compliance} className="h-1" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Implementation Recommendations */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Implementation Recommendations</CardTitle>
            <CardDescription>Priority actions to improve NIST AI Framework compliance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-red-700">High Priority Actions</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    Improve AI risk monitoring processes (MS.3 - 60%)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    Validate measurement processes (MS.4 - 62%)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    Enhance risk communication mechanisms (MG.3 - 68%)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-yellow-700">Medium Priority Actions</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold">•</span>
                    Establish AI risk tolerance levels (GV.3 - 70%)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold">•</span>
                    Improve performance measurement systems (MS.2 - 68%)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold">•</span>
                    Enhance risk treatment processes (MG.2 - 70%)
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NistDashboard;

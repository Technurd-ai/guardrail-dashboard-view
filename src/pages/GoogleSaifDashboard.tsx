
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import NavigationBar from "@/components/NavigationBar";
import { Shield, Lock, Eye, Wrench, AlertTriangle, CheckCircle } from "lucide-react";

const GoogleSaifDashboard = () => {
  const saifPillars = [
    {
      id: "secure-by-design",
      title: "Secure by Design",
      description: "Build security into AI systems from the ground up",
      compliance: 92,
      icon: Lock,
      principles: [
        { name: "Security from inception", status: "Implemented", score: 95 },
        { name: "Secure development lifecycle", status: "Implemented", score: 90 },
        { name: "Security architecture review", status: "Implemented", score: 88 },
        { name: "Threat modeling", status: "In Progress", score: 85 },
        { name: "Secure coding practices", status: "Implemented", score: 98 }
      ],
      keyControls: [
        "Multi-layered security architecture",
        "Zero-trust access controls", 
        "Encryption at rest and in transit",
        "Secure API design",
        "Regular security reviews"
      ]
    },
    {
      id: "secure-by-default",
      title: "Secure by Default", 
      description: "Default configurations prioritize security over convenience",
      compliance: 88,
      icon: Shield,
      principles: [
        { name: "Default security settings", status: "Implemented", score: 90 },
        { name: "Minimal permissions", status: "Implemented", score: 85 },
        { name: "Secure communication", status: "Implemented", score: 92 },
        { name: "Data protection defaults", status: "Implemented", score: 88 },
        { name: "Audit logging enabled", status: "In Progress", score: 82 }
      ],
      keyControls: [
        "Principle of least privilege",
        "Automatic security updates",
        "Default encryption enabled",
        "Secure configuration baselines",
        "Comprehensive logging"
      ]
    },
    {
      id: "secure-deployment",
      title: "Secure Deployment",
      description: "Maintain security throughout the deployment lifecycle", 
      compliance: 90,
      icon: Wrench,
      principles: [
        { name: "Deployment security checks", status: "Implemented", score: 88 },
        { name: "Environment hardening", status: "Implemented", score: 92 },
        { name: "Continuous monitoring", status: "Implemented", score: 90 },
        { name: "Incident response", status: "Implemented", score: 85 },
        { name: "Recovery procedures", status: "Implemented", score: 95 }
      ],
      keyControls: [
        "Automated security testing",
        "Infrastructure as code",
        "Container security",
        "Network segmentation", 
        "Backup and recovery"
      ]
    },
    {
      id: "understand-limitations",
      title: "Understand Limitations",
      description: "Acknowledge and address AI system limitations and risks",
      compliance: 85,
      icon: Eye,
      principles: [
        { name: "Model limitations documented", status: "Implemented", score: 88 },
        { name: "Bias assessment", status: "In Progress", score: 78 },
        { name: "Performance boundaries", status: "Implemented", score: 90 },
        { name: "Failure mode analysis", status: "In Progress", score: 80 },
        { name: "User education", status: "Implemented", score: 89 }
      ],
      keyControls: [
        "Regular model evaluation",
        "Bias detection and mitigation",
        "Performance monitoring",
        "User training programs",
        "Clear usage guidelines"
      ]
    }
  ];

  const threatCategories = [
    {
      category: "Adversarial Attacks",
      risk: "High",
      status: "Mitigated",
      description: "Protection against adversarial inputs and model attacks"
    },
    {
      category: "Data Poisoning", 
      risk: "Medium",
      status: "Monitored",
      description: "Detection and prevention of training data manipulation"
    },
    {
      category: "Model Extraction",
      risk: "Medium", 
      status: "Mitigated",
      description: "Protection against model theft and reverse engineering"
    },
    {
      category: "Privacy Attacks",
      risk: "High",
      status: "Mitigated", 
      description: "Protection against membership inference and data reconstruction"
    }
  ];

  const getComplianceColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-blue-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Implemented": return "bg-green-100 text-green-800 border-green-200";
      case "In Progress": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Mitigated": return "bg-green-100 text-green-800 border-green-200";
      case "Monitored": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getRiskBadgeVariant = (risk: string) => {
    switch (risk) {
      case "High": return "destructive" as const;
      case "Medium": return "default" as const;
      case "Low": return "secondary" as const;
      default: return "secondary" as const;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <NavigationBar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-900">Google SAIF Framework</h1>
          </div>
          <p className="text-xl text-gray-600">
            Secure AI Framework - Google's approach to AI security across the full AI lifecycle
          </p>
        </div>

        {/* Overall SAIF Compliance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Overall SAIF Compliance</CardTitle>
            <CardDescription>Security posture across all SAIF pillars</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {saifPillars.map((pillar) => (
                <div key={pillar.id} className="text-center p-4 border rounded-lg">
                  <pillar.icon className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <div className={`text-3xl font-bold ${getComplianceColor(pillar.compliance)}`}>
                    {pillar.compliance}%
                  </div>
                  <div className="text-sm text-gray-600">{pillar.title}</div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">89%</div>
              <div className="text-lg text-gray-600">Overall SAIF Compliance</div>
              <Badge variant="default" className="mt-2">Excellent Security Posture</Badge>
            </div>
          </CardContent>
        </Card>

        {/* SAIF Pillars Detail */}
        <div className="space-y-8">
          {saifPillars.map((pillar) => (
            <Card key={pillar.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <pillar.icon className="h-6 w-6 text-green-600" />
                    <div>
                      <CardTitle className="text-xl">{pillar.title}</CardTitle>
                      <CardDescription className="mt-1">{pillar.description}</CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${getComplianceColor(pillar.compliance)}`}>
                      {pillar.compliance}%
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto mt-1" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Progress value={pillar.compliance} className="h-3" />
                  
                  {/* Principles */}
                  <div>
                    <h4 className="font-semibold mb-3">Security Principles</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {pillar.principles.map((principle, idx) => (
                        <div key={idx} className="p-3 border rounded-lg bg-white">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium text-sm">{principle.name}</h5>
                            <span className={`text-xs font-bold ${getComplianceColor(principle.score)}`}>
                              {principle.score}%
                            </span>
                          </div>
                          <div className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(principle.status)}`}>
                            {principle.status}
                          </div>
                          <Progress value={principle.score} className="h-1 mt-2" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Controls */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Security Controls</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {pillar.keyControls.map((control, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          {control}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Threat Landscape */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>AI Threat Landscape</CardTitle>
            <CardDescription>Current threat categories and mitigation status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {threatCategories.map((threat, idx) => (
                <div key={idx} className="p-4 border rounded-lg bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{threat.category}</h4>
                    <Badge variant={getRiskBadgeVariant(threat.risk)}>{threat.risk} Risk</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{threat.description}</p>
                  <div className={`px-3 py-1 rounded-md text-sm font-medium border ${getStatusColor(threat.status)}`}>
                    Status: {threat.status}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Security Recommendations */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Security Enhancement Recommendations</CardTitle>
            <CardDescription>Priority actions to further strengthen SAIF implementation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-700">Improvement Opportunities</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    Complete bias assessment processes (78%)
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    Enhance failure mode analysis (80%)
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    Improve audit logging coverage (82%)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-green-700">Best Practices</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Excellent secure coding practices (98%)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Strong recovery procedures (95%)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Robust environment hardening (92%)
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

export default GoogleSaifDashboard;

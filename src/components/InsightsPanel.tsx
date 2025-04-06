import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertTriangle,
  ArrowUpCircle,
  Award,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Route,
  ThumbsUp,
  Wallet,
  XCircle,
} from "lucide-react";
import React from "react";

// Define TypeScript interfaces for the insights data
interface ExpectedAveragePay {
  amount: string;
  country: string;
}

interface MissingRequirements {
  skills: string[];
  degrees: string[];
  experience: string[];
}

interface InsightsData {
  isEligible: boolean;
  remarks: string;
  strengths: string[];
  areasToImprove: string[];
  missingRequirements: MissingRequirements;
  expectedAveragePay: ExpectedAveragePay;
  roadmapToSuccess: string[];
}

interface InsightsPanelProps {
  insights: InsightsData | null;
}

const InsightsPanel: React.FC<InsightsPanelProps> = ({ insights }) => {
  if (!insights) return null;

  const {
    isEligible,
    remarks,
    strengths,
    areasToImprove,
    missingRequirements,
    expectedAveragePay,
    roadmapToSuccess,
  } = insights;

  // Check if there are any missing requirements
  const hasMissingSkills = missingRequirements?.skills?.length > 0;
  const hasMissingDegrees = missingRequirements?.degrees?.length > 0;
  const hasMissingExperience = missingRequirements?.experience?.length > 0;

  return (
    <div className="mt-8 grid grid-cols-1 gap-8">
      <Card
        className={`shadow-lg ${
          isEligible ? "border-green-500" : "border-red-400"
        } border-2`}
      >
        <CardHeader
          className={`${isEligible ? "bg-green-50" : "bg-red-50"} rounded-t-lg`}
        >
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl flex items-center gap-2">
              {isEligible ? (
                <>
                  <CheckCircle2 className="text-green-600" size={24} />
                  <span className="text-green-800">Job Match Analysis</span>
                </>
              ) : (
                <>
                  <XCircle className="text-red-600" size={24} />
                  <span className="text-red-800">Job Match Analysis</span>
                </>
              )}
            </CardTitle>
            <Badge
              variant="outline"
              className={`${
                isEligible
                  ? "bg-green-100 text-green-800 border-green-200"
                  : "bg-red-100 text-red-800 border-red-200"
              } 
                px-3 py-1 text-sm font-medium`}
            >
              {isEligible ? "Eligible" : "Not Eligible"}
            </Badge>
          </div>
          <CardDescription className="text-gray-700 mt-2">
            {remarks}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6 space-y-6">
          {/* Compensation Section */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="text-blue-700" size={20} />

              <h3 className="font-semibold text-blue-800">
                Expected Compensation
              </h3>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-blue-700 font-medium text-lg">
                {expectedAveragePay?.amount || "Not specified"}
              </p>
              {expectedAveragePay?.country && (
                <div className="flex items-center gap-1 text-sm text-blue-600">
                  <MapPin size={16} />
                  <span>{expectedAveragePay.country}</span>
                </div>
              )}
            </div>
          </div>

          {/* Strengths & Areas to Improve */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Strengths */}
            {strengths && strengths.length > 0 && (
              <Card className="shadow-sm border-green-200">
                <CardHeader className="pb-2 pt-4 bg-green-50">
                  <CardTitle className="text-base flex items-center gap-2">
                    <ThumbsUp size={18} className="text-green-600" />
                    <span className="text-green-800">Your Strengths</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-3">
                  <ul className="space-y-2">
                    {strengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Areas to Improve */}
            {areasToImprove && areasToImprove.length > 0 && (
              <Card className="shadow-sm border-amber-200">
                <CardHeader className="pb-2 pt-4 bg-amber-50">
                  <CardTitle className="text-base flex items-center gap-2">
                    <ArrowUpCircle size={18} className="text-amber-600" />
                    <span className="text-amber-800">Areas to Improve</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-3">
                  <ul className="space-y-2">
                    {areasToImprove.map((area, index) => (
                      <li key={index} className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{area}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Missing Requirements Section */}
          {!isEligible &&
            (hasMissingSkills || hasMissingDegrees || hasMissingExperience) && (
              <Alert
                variant="destructive"
                className="bg-red-50 border-red-200 text-red-800"
              >
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <AlertTitle className="text-red-800 font-semibold mb-2">
                  Missing Requirements
                </AlertTitle>
                <AlertDescription className="text-red-700">
                  The following requirements were not found in your resume.
                </AlertDescription>
              </Alert>
            )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {/* Missing Skills */}
            {hasMissingSkills && (
              <Card className="shadow-sm border-red-200">
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Award size={18} className="text-red-600" />
                    <span>Missing Skills</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {missingRequirements.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-red-50 text-red-800 border-red-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Missing Degrees */}
            {hasMissingDegrees && (
              <Card className="shadow-sm border-red-200">
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-base flex items-center gap-2">
                    <GraduationCap size={18} className="text-red-600" />
                    <span>Missing Education</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {missingRequirements.degrees.map((degree, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-red-50 text-red-800 border-red-200"
                      >
                        {degree}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Missing Experience */}
            {hasMissingExperience && (
              <Card className="shadow-sm border-red-200">
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Briefcase size={18} className="text-red-600" />
                    <span>Missing Experience</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="flex flex-col gap-2">
                    {missingRequirements.experience.map((exp, index) => (
                      <div
                        key={index}
                        className="text-sm text-red-800 bg-red-50 px-3 py-2 rounded-md border border-red-200"
                      >
                        {exp}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Roadmap to Success */}
          {roadmapToSuccess && roadmapToSuccess.length > 0 && (
            <Card className="shadow-md border-blue-300 mt-6">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <Route className="text-blue-600" size={20} />
                  <span className="text-blue-800">Roadmap to Success</span>
                </CardTitle>
                <CardDescription className="text-blue-700">
                  Follow these recommendations to improve your chances
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ol className="space-y-3 pl-2">
                  {roadmapToSuccess.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mr-3 font-semibold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          )}

          {/* Success Message for Eligible Candidates */}
          {isEligible && (
            <Alert className="bg-green-50 border-green-200 text-green-800">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <AlertTitle className="text-green-800 font-semibold">
                Great Match!
              </AlertTitle>
              <AlertDescription className="text-green-700">
                Your profile matches the requirements for this position.
                Consider applying!
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default InsightsPanel;

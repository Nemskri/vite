import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import {
  Award,
  Ban,
  Briefcase,
  FileText,
  GraduationCap,
  Loader2,
  Upload,
} from "lucide-react";
import { useState } from "react";
import { JobDescriptionModal } from "./InsightsModal";
import InsightsPanel from "./InsightsPanel";

const ResumeParser = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeData, setResumeData] = useState<any>(null);
  const [isParsing, setIsParsing] = useState(false);
  const [isFetchingInsights, setIsFetchingInsights] = useState(false);
  const [parseSuccess, setParseSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [insights, setInsights] = useState<any>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
      setParseSuccess(false);
    }
  };

  const handleParse = async () => {
    if (!resumeFile) return;

    setIsParsing(true);
    try {
      const formData = new FormData();
      formData.append("file", resumeFile);
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER}/extract-content`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResumeData(data);
      setParseSuccess(true);
    } catch (error) {
      console.error("Error parsing resume:", error);
    } finally {
      setIsParsing(false);
    }
  };

  const handleReset = () => {
    setResumeFile(null);
    setResumeData(null);
    setParseSuccess(false);
    setInsights(null);
  };

  const handleGetInsights = () => {
    setIsModalOpen(true);
  };

  const handleModalSubmit = async (jobDescription: string) => {
    setIsFetchingInsights(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/get-insights`,
        {
          resumeData,
          jobDescription,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Insights Received:", response.data);
      setInsights(response.data);
    } catch (error) {
      console.error("Error fetching insights:", error);
    } finally {
      setIsFetchingInsights(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen relative">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        Resume Parser
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-1 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="bg-gray-800 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Upload size={20} /> Upload Resume
            </CardTitle>
            <CardDescription className="text-gray-200">
              Supports PDF, DOCX, or TXT formats
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="border-2 border-dashed rounded-lg p-6 text-center bg-white hover:bg-gray-50 transition-colors cursor-pointer">
              <input
                type="file"
                id="resume-upload"
                className="hidden"
                accept=".pdf,.docx,.txt"
                onChange={handleFileChange}
              />
              <label htmlFor="resume-upload" className="cursor-pointer">
                <FileText className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600 font-medium">
                  Drag & drop or click to upload
                </p>
              </label>
            </div>

            {resumeFile && (
              <div className="mt-4 space-y-4">
                <p className="text-sm text-gray-700">
                  Selected:{" "}
                  <span className="font-semibold">{resumeFile.name}</span>
                </p>
                <div className="flex gap-3">
                  <Button
                    onClick={handleParse}
                    disabled={isParsing}
                    className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    {isParsing ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}
                    {isParsing ? "Parsing..." : "Parse Resume"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleReset}
                    className="shrink-0 border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600"
                  >
                    <Ban size={16} className="mr-2" />
                    Clear
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          {parseSuccess ? (
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-gray-800 rounded-t-lg">
                <TabsTrigger
                  value="overview"
                  className="text-white data-[state=active]:bg-blue-600"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="text-white data-[state=active]:bg-blue-600"
                >
                  <Briefcase className="mr-2 h-4 w-4" /> Experience
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="text-white data-[state=active]:bg-blue-600"
                >
                  <GraduationCap className="mr-2 h-4 w-4" /> Education
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="text-white data-[state=active]:bg-blue-600"
                >
                  <Award className="mr-2 h-4 w-4" /> Skills
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card className="shadow-md">
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="text-2xl">
                      {resumeData.name}
                    </CardTitle>
                    <CardDescription className="flex flex-col gap-1 text-gray-600">
                      <span>{resumeData.email}</span>
                      <span>{resumeData.phone}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">Summary</h3>
                    <p className="text-gray-700 mb-4">{resumeData.summary}</p>

                    <h3 className="font-semibold text-lg mb-2">Key Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.map((skill: string, index: number) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-blue-100 text-blue-800"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience">
                <Card className="shadow-md">
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="text-2xl">Work Experience</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    {resumeData.experience.map((exp: any, index: number) => (
                      <div
                        key={index}
                        className="border-l-4 border-blue-500 pl-4 pb-4 hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="font-semibold text-lg text-gray-800">
                          {exp.title}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {exp.company} | {exp.period}
                        </p>
                        <p className="mt-2 text-gray-700">{exp.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education">
                <Card className="shadow-md">
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="text-2xl">Education</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    {resumeData.education.map((edu: any, index: number) => (
                      <div
                        key={index}
                        className="border-l-4 border-blue-500 pl-4 pb-2 hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="font-semibold text-gray-800">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {edu.institution} | {edu.year}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills">
                <Card className="shadow-md">
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="text-2xl">Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.map((skill: string, index: number) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-blue-100 text-blue-800 text-sm py-1 px-2"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ) : (
            <Card className="h-full flex items-center justify-center shadow-lg">
              <CardContent className="text-center p-10">
                {isParsing ? (
                  <div className="space-y-4">
                    <Loader2 className="h-12 w-12 text-blue-500 animate-spin mx-auto" />
                    <p className="text-gray-600 font-medium">
                      Parsing your resume, please wait...
                    </p>
                  </div>
                ) : (
                  <>
                    <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      No Resume Parsed Yet
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Upload a resume and click "Parse Resume" to see your
                      career data come to life!
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {parseSuccess && (
        <div className="mt-8 w-full bg-green-50 border border-green-200 shadow-md rounded-lg p-4">
          <div className="flex items-center text-green-800 font-semibold text-sm mb-2">
            <FileText className="h-5 w-5 mr-2" />
            Resume Parsed Successfully
          </div>
          <p className="text-green-700 text-sm">
            Your resume has been analyzed. Explore the details above and click
            "Get Insights" for more analysis.
          </p>
          <div className="mt-4">
            <Button
              onClick={handleGetInsights}
              className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white py-2 rounded-md font-medium"
              disabled={isFetchingInsights}
            >
              {isFetchingInsights ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              {isFetchingInsights ? "Fetching Insights..." : "Get Insights"}
            </Button>
          </div>
        </div>
      )}

      <JobDescriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
      />

      {isFetchingInsights && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Loader2 className="h-12 w-12 text-blue-500 animate-spin mb-4" />
            <p className="text-gray-700 font-medium">
              Analyzing your eligibility, please wait...
            </p>
          </div>
        </div>
      )}

      {insights && <InsightsPanel insights={insights} />}
    </div>
  );
};

export default ResumeParser;

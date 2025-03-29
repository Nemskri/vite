import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import {
  Award,
  Briefcase,
  ChevronUp,
  FileText,
  GraduationCap,
  Upload,
} from "lucide-react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Mock data for skills
const skillsData = [
  { name: "JavaScript", value: 85 },
  { name: "React", value: 80 },
  { name: "CSS", value: 70 },
  { name: "HTML", value: 90 },
  { name: "Node.js", value: 65 },
];

const ResumeParser = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeData, setResumeData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [parseSuccess, setParseSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
      setParseSuccess(false);
    }
  };

  const handleParse = async () => {
    if (!resumeFile) return;

    setIsLoading(true);
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
    setIsLoading(false);
    setParseSuccess(true);
  };

  const handleReset = () => {
    setResumeFile(null);
    setResumeData(null);
    setParseSuccess(false);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Resume Parser</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload size={20} /> Upload Resume
            </CardTitle>
            <CardDescription>
              Upload your resume in PDF, DOCX, or TXT format
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
              <input
                type="file"
                id="resume-upload"
                className="hidden"
                accept=".pdf,.docx,.txt"
                onChange={handleFileChange}
              />
              <label htmlFor="resume-upload" className="cursor-pointer">
                <FileText className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  Click to browse or drag and drop
                </p>
              </label>
            </div>

            {resumeFile && (
              <div className="mt-4">
                <p className="text-sm">
                  Selected file:{" "}
                  <span className="font-medium">{resumeFile.name}</span>
                </p>
                <div className="flex gap-2 mt-2">
                  <Button
                    onClick={handleParse}
                    disabled={isLoading}
                    className="w-full"
                  >
                    {isLoading ? "Parsing..." : "Parse Resume"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleReset}
                    className="shrink-0"
                  >
                    <ChevronUp size={16} />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          {parseSuccess ? (
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="experience">
                  <Briefcase className="mr-2 h-4 w-4" /> Experience
                </TabsTrigger>
                <TabsTrigger value="education">
                  <GraduationCap className="mr-2 h-4 w-4" /> Education
                </TabsTrigger>
                <TabsTrigger value="skills">
                  <Award className="mr-2 h-4 w-4" /> Skills
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>{resumeData.name}</CardTitle>
                    <CardDescription className="flex flex-col gap-1">
                      <span>{resumeData.email}</span>
                      <span>{resumeData.phone}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-medium mb-2">Summary</h3>
                    <p className="text-gray-700 mb-4">{resumeData.summary}</p>

                    <h3 className="font-medium mb-2">Key Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.map((skill: string, index: number) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience">
                <Card>
                  <CardHeader>
                    <CardTitle>Work Experience</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {resumeData.experience.map((exp: any, index: number) => (
                      <div
                        key={index}
                        className="border-l-2 border-gray-200 pl-4 pb-2"
                      >
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-gray-600">
                          {exp.company} | {exp.period}
                        </p>
                        <p className="mt-2 text-gray-700">{exp.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education">
                <Card>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {resumeData.education.map((edu: any, index: number) => (
                      <div
                        key={index}
                        className="border-l-2 border-gray-200 pl-4 pb-2"
                      >
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-gray-600">
                          {edu.institution} | {edu.year}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills">
                <Card>
                  <CardHeader>
                    <CardTitle>Skills Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={skillsData}
                          layout="vertical"
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" domain={[0, 100]} />
                          <YAxis dataKey="name" type="category" width={100} />
                          <Tooltip />
                          <Bar
                            dataKey="value"
                            fill="#8884d8"
                            radius={[0, 4, 4, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="mt-6 space-y-4">
                      {skillsData.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500">
                              {skill.value}%
                            </span>
                          </div>
                          <Progress value={skill.value} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="text-center p-10">
                {isLoading ? (
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
                  </div>
                ) : (
                  <>
                    <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">
                      No Resume Parsed Yet
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Upload a resume and click "Parse Resume" to extract
                      information and visualize your career data.
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {parseSuccess && (
        <Alert className="mt-6">
          <AlertTitle className="flex items-center">
            <FileText className="h-4 w-4 mr-2" /> Resume Parsed Successfully
          </AlertTitle>
          <AlertDescription>
            Your resume has been analyzed. You can now view the extracted
            information in the tabs above.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default ResumeParser;

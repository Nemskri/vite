import { adwiteeya } from "@/adwiteeya";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Briefcase,
  Calendar,
  FileText,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

export default function Adwiteeya() {
  const [resumeData, setResumeData] = useState(adwiteeya);
  const [open, setOpen] = useState(false);
  const [jsonText, setJsonText] = useState(JSON.stringify(adwiteeya, null, 2));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === "e") {
        e.preventDefault(); // stop browser's default find-in-page shortcut
        setOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* <div className="flex justify-end mb-3">
        <Button
          className="display-none"
          variant="outline"
          size="sm"
          onClick={() => setOpen(true)}
        >
          Edit JSON
        </Button>
      </div> */}

      <Card className="max-w-[794px] mx-auto bg-white text-gray-800 font-inter text-sm leading-tight shadow-sm border-purple-100 print:p-0 print:max-w-full print:border-gray-200 print:shadow-none overflow-hidden">
        <CardContent className="p-0">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-5 rounded-none mb-0 shadow-none">
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-left">
                  {resumeData.personal_info.name}
                </h1>
                <p className="text-sm italic mt-1 text-purple-100 text-left whitespace-pre-line">
                  {resumeData.career_objective}
                </p>
              </div>
              <div className="flex flex-col gap-1 text-xs">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-purple-200" />
                  <a
                    href={`mailto:${resumeData.personal_info.email}`}
                    className="text-purple-100 hover:underline text-left"
                  >
                    {resumeData.personal_info.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-purple-200" />
                  <a
                    href={`tel:${resumeData.personal_info.phone}`}
                    className="text-purple-100 hover:underline text-left"
                  >
                    {resumeData.personal_info.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin size={14} className="text-purple-200" />
                  <span className="text-purple-100 text-left">
                    {resumeData.personal_info.linkedin}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-purple-200" />
                  <span className="text-purple-100 text-left">
                    {resumeData.personal_info.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="border-t border-purple-100 print:border-gray-200">
            <div className="bg-purple-700 text-white p-2">
              <CardTitle className="flex items-center gap-2 text-base font-semibold text-left">
                <Briefcase size={16} />
                Professional Experience
              </CardTitle>
            </div>
            <div className="p-3">
              {resumeData.professional_experience.map((exp, index) => (
                <div
                  key={index}
                  className={`mb-3 p-3 ${
                    index % 2 === 0 ? "bg-white" : "bg-purple-50"
                  } rounded-md text-left`}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 w-full">
                      <div className="flex-grow">
                        <h3 className="text-base font-bold text-purple-800 text-left">
                          {exp.company}
                        </h3>
                        <span className="mx-1 text-gray-700 font-medium text-left">
                          {exp.role}
                        </span>
                      </div>
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-medium whitespace-nowrap text-left mt-1 sm:mt-0 sm:ml-4">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                  {exp.achievements && (
                    <ul className="list-disc pl-5 space-y-1 text-xs">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-700 text-left">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="border-t border-purple-100 print:border-gray-200 break-before-page">
            <div className="bg-purple-700 text-white p-2">
              <CardTitle className="flex items-center gap-2 text-base font-semibold text-left ">
                <Lightbulb size={16} />
                Skills & Tools
              </CardTitle>
            </div>
            <div className="p-3 space-y-3">
              <div>
                <h4 className="text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide text-left">
                  Skills
                </h4>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {resumeData.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-purple-600 text-white text-xs py-0.5 px-2 print:bg-gray-100 print:text-gray-800 text-left"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide text-left">
                  Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {resumeData.tools.map((tool, index) => (
                    <Badge
                      key={index}
                      className="bg-purple-100 text-purple-800 text-xs py-0.5 px-2 print:bg-gray-100 print:text-gray-800 text-left"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Publication */}
          <div className="border-t border-purple-100 print:border-gray-200">
            <div className="bg-purple-700 text-white p-2">
              <CardTitle className="flex items-center gap-2 text-base font-semibold text-left">
                <FileText size={16} />
                Publication
              </CardTitle>
            </div>
            <div className="p-3">
              <div className="bg-purple-50 p-2 rounded-md">
                <div className="font-medium italic text-purple-800 text-base text-left">
                  {resumeData.publication.title}
                </div>
                <div className="text-xs text-gray-600 mt-1 text-left">
                  {resumeData.publication.journal},{" "}
                  {resumeData.publication.year}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="border-t border-purple-100 print:border-gray-200">
            <div className="bg-purple-700 text-white p-2">
              <CardTitle className="flex items-center gap-2 text-base font-semibold text-left">
                <BookOpen size={16} />
                Education
              </CardTitle>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {resumeData.education.map((edu, index) => (
                  <div
                    key={index}
                    className="p-3 border rounded-lg hover:shadow transition duration-200 ease-in-out"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <div className="font-semibold text-purple-800 text-sm leading-snug">
                        {edu.degree || edu.exam}
                      </div>
                      {edu.year && (
                        <div className="flex items-center text-gray-600 text-xs whitespace-nowrap">
                          <Calendar size={12} className="mr-1" />
                          {edu.year}
                        </div>
                      )}
                    </div>
                    {edu.institution && (
                      <div className="text-gray-700 text-xs mb-1 text-left">
                        {edu.institution}
                      </div>
                    )}
                    {(edu.percentage || edu.percentile || edu.rank) && (
                      <div className="flex flex-wrap text-purple-600 text-xs gap-x-2">
                        {edu.percentage && <span>{edu.percentage}</span>}
                        {edu.percentile && (
                          <span>{edu.percentile} percentile</span>
                        )}
                        {edu.rank && <span>Rank: {edu.rank}</span>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="border-t border-purple-100 print:border-gray-200">
            <div className="bg-purple-700 text-white p-2">
              <CardTitle className="flex items-center gap-2 text-base font-semibold text-left">
                <BookOpen size={16} />
                Education
              </CardTitle>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {resumeData.education.map((edu, index) => (
                  <div
                    key={index}
                    className="p-3 border rounded-lg hover:shadow transition duration-200 ease-in-out"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <div className="font-semibold text-purple-800 text-sm leading-snug">
                        {edu.degree || edu.exam}
                      </div>
                      {edu.year && (
                        <div className="flex items-center text-gray-600 text-xs whitespace-nowrap">
                          <Calendar size={12} className="mr-1" />
                          {edu.year}
                        </div>
                      )}
                    </div>
                    {edu.institution && (
                      <div className="text-gray-700 text-xs mb-1 text-left">
                        {edu.institution}
                      </div>
                    )}
                    {(edu.percentage || edu.percentile || edu.rank) && (
                      <div className="flex flex-wrap text-purple-600 text-xs gap-x-2">
                        {edu.percentage && <span>{edu.percentage}</span>}
                        {edu.percentile && (
                          <span>{edu.percentile} percentile</span>
                        )}
                        {edu.rank && <span>Rank: {edu.rank}</span>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Resume JSON</DialogTitle>
          </DialogHeader>
          <textarea
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            className="w-full h-96 font-mono text-sm border rounded p-2"
          />
          <div className="flex justify-end gap-2 mt-3">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                try {
                  const parsed = JSON.parse(jsonText);
                  setResumeData(parsed);
                  setOpen(false);
                } catch {
                  alert("❌ Invalid JSON format. Please fix it before saving.");
                }
              }}
            >
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

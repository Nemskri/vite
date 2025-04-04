import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming shadcn/ui setup
import {
  Briefcase,
  Code,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Resume = () => {
  const data = {
    personal_info: {
      name: "KALPESH MARU",
      address: "Mumbai",
      phone: "+91 9664195496",
      email: "kalpeshmaru2019@gmail.com",
      linkedin: "https://www.linkedin.com/in/kalpesh-maru-a0a4a9202",
      portfolio: "Portfolio link",
      github: "GitHub link",
    },
    professional_summary:
      "Versatile Full Stack Software Engineer with 2+ years of experience spanning mobile development, IoT solutions, and AI/ML applications. Demonstrated success in leading complex projects from inception to completion, with particular expertise in developing AI-driven platforms and customer service solutions for industry leaders like Tata Motors, Godfrey Phillips, and Emami. Quick learner who rapidly adapts to new technologies and frameworks. Proven leadership skills with experience managing technical teams and delivering high-quality solutions that meet business objectives.",
    work_experience: [
      {
        position: "Senior Software Developer / Team Lead",
        company: "Code-B",
        location: "Mumbai",
        duration: "May 2023 - Present",
        responsibilities: [
          "Led development of Mple.ai, an AI-driven training platform for enterprise sales teams",
          "Architected and developed multiple AI-powered applications including video dubbing services and text-to-video generation tools",
          "Designed and implemented SelecIOT dashboard for real-time energy consumption monitoring from IoT sensors",
          "Developed mobile applications with complex functionalities including geofencing, chat systems, and survey reward platforms",
          "Managed technical teams throughout project lifecycles, ensuring timely delivery and quality standards",
          "Integrated multiple AI/ML models into production applications (TTS, STT, Translation, LipSync)",
          "Collaborated with cross-functional teams to align technical solutions with business requirements",
          "Developed POCs for AI-driven customer service call audits for major corporations like Tata Motors, Godfrey Phillips, and Emami",
        ],
        key_projects: [
          {
            name: "Mple.ai",
            description:
              "AI-driven training platform for enterprise sales teams featuring roleplays, evaluations, and coaching",
            role: "Team Lead",
            technologies: [
              "React",
              "Node.js",
              "AI/ML integration",
              "Cloud Services",
            ],
          },
          {
            name: "Midgenie/Dubair",
            description:
              "Video dubbing service that uses ML models for text-to-speech, speech-to-text, and lip-syncing",
            technologies: ["LLM", "Whisper", "DINET-Model", "Video Processing"],
            role: "Lead Developer",
          },
          {
            name: "Text-to-Video Generator",
            role: "Lead Developer",

            description:
              "POC for creating story videos from text using AI models",
            technologies: ["Stable Diffusion", "LLM", "TTS", "FFMPEG"],
          },
          {
            name: "SelecIOT",
            description:
              "Dashboard for real-time energy consumption monitoring from IoT sensors",

            technologies: [
              "IoT Hub (Azure)",
              "IoTCore (AWS)",
              "React",
              "Data Visualization",
            ],
          },
          {
            name: "Mobile Applications",
            description:
              "Suite of mobile apps including Geofence (employee attendance), I-Call (suicide helpline chat app), and Craudnautics (survey rewards apps)",
            technologies: [
              "React Native",
              "Geolocation API",
              "Chat functionality",
            ],
          },
          {
            name: "AI Call Audit - Tata Motors",
            description:
              "POC for automating customer service call audits using AI to analyze call quality and compliance",
            role: "Lead Developer",
            technologies: ["Python", "Whisper", "NLP", "Google Cloud Platform"],
          },
          {
            name: "AI Call Analytics - Godfrey Phillips",
            description:
              "POC for real-time call analytics to improve customer service operations with sentiment analysis",
            role: "Lead Developer",
            technologies: ["Node.js", "LLM", "Speech-to-Text", "AWS"],
          },
          {
            name: "Call Audit System - Emami",
            description:
              "POC for auditing customer service calls to identify pain points and training opportunities",
            role: "Lead Developer",
            technologies: ["React", "Flask", "AI/ML", "Azure"],
          },
        ],
      },
      {
        position: "Financial Advisor",
        company: "Nippon India Mutual Fund",
        location: "Navi Mumbai",
        duration: "Oct 2021 - Apr 2022",
        responsibilities: [
          "Managed investor portfolios and provided financial guidance",
          "Pitched new investment schemes based on client objectives and financial conditions",
          "Assisted clients with user interface for investment operations",
        ],
      },
      {
        position: "Project Engineer",
        company: "Duracool Airconditioning",
        location: "Mumbai",
        duration: "Aug 2019 - Nov 2020",
        responsibilities: [
          "Managed HVAC installation projects for multiple client sites",
          "Handled documentation, billing, and project closure processes",
          "Coordinated with stakeholders to ensure timely project completion",
        ],
      },
    ],
    skills: {
      programming_languages: ["JavaScript/TypeScript", "Python", "Swift"],
      frontend: ["React", "Next.js", "React Native", "Tailwind", "Angular"],
      backend: [
        "Node.js",
        "Express.js",
        "NestJS",
        "Flask",
        "REST API development",
      ],
      cloud_services: [
        "AWS (IoTCore)",
        "Azure (IoT Hub)",
        "Google Cloud Platform",
      ],
      databases: ["PostgreSQL", "MongoDB"],
      ai_ml: [
        "LLM integration",
        "Speech-to-Text (Whisper)",
        "Text-to-Speech",
        "Stable Diffusion",
        "Video processing",
        "Natural Language Processing (NLP)",
        "Sentiment Analysis",
      ],
      other_technical: [
        "IoT systems",
        "FFMPEG",
        "CI/CD pipelines",
        "Git version control",
      ],
      soft_skills: [
        "Team leadership",
        "Project management",
        "Rapid technology adoption",
        "Problem-solving",
        "Client communication",
        "Cross-functional collaboration",
      ],
    },
    education: [
      {
        degree: "BE (Mechanical Engg.)",
        institution: "M.H. Saboo Siddik College of Engineering",
        duration: "2015 - 2019",
        percentage_cgpi: "8.26",
      },
      {
        degree: "HSC",
        year: "2015",
        institution: "Wilson College of Science & Arts",
        percentage_cgpi: "71.08",
      },
      {
        degree: "SSC",
        year: "2013",
        institution: "Lady Engineer High School",
        percentage_cgpi: "78.73",
      },
    ],
    core_competencies: [
      "Full-stack application development",
      "AI/ML integration and deployment",
      "IoT system architecture",
      "Mobile application development",
      "Technical team leadership",
      "Rapid technology adoption",
      "Project lifecycle management",
    ],
    career_highlights: [
      "Successfully led the development of Mple.ai, an AI-driven enterprise training platform from concept to launch",
      "Integrated multiple ML models (TTS, STT, LLM, Lip-Sync) into production applications",
      "Designed and implemented IoT monitoring dashboard with real-time data visualization",
      "Rapidly transitioned from mechanical engineering to software development, demonstrating exceptional learning ability",
      "Developed complex mobile applications with geolocation, chat, and rewards functionality",
      "Created AI-driven call audit POCs for Tata Motors, Godfrey Phillips, and Emami",
    ],
    languages: ["English", "Hindi", "Marathi", "Gujarati"],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 print:bg-white print:p-0">
      {/* Header */}
      <header className="mb-8 pb-4 border-b-2 border-indigo-500">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-indigo-700 mb-2 text-left">
              {data.personal_info.name}
            </h1>
            <p className="text-gray-700 text-md leading-relaxed text-left">
              {data.professional_summary}
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-indigo-50 p-4 rounded-lg">
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3 text-gray-800">
                <Mail className="w-5 h-5 text-indigo-600" />
                <span className="text-sm">{data.personal_info.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <Phone className="w-5 h-5 text-indigo-600" />
                <span className="text-sm">{data.personal_info.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <MapPin className="w-5 h-5 text-indigo-600" />
                <span className="text-sm">{data.personal_info.address}</span>
              </div>
              <div className="flex gap-4 pt-2">
                <a
                  href={data.personal_info.linkedin}
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={data.personal_info.github}
                  target="_blank"
                  className="text-gray-800 hover:text-gray-900"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={data.personal_info.portfolio}
                  target="_blank"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-8">
          {/* Work Experience */}
          <section>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center gap-2 text-left">
              <Briefcase className="w-6 h-6" /> Work Experience
            </h2>
            {data.work_experience.map((exp, index) => (
              <Card
                key={index}
                className="mb-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader className="bg-indigo-50">
                  <CardTitle className="text-xl text-indigo-700 text-left">
                    {exp.position}
                  </CardTitle>
                  <p className="text-gray-600 text-left">
                    {exp.company} | {exp.location} | {exp.duration}
                  </p>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 text-left">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                  {exp.key_projects && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-indigo-600 text-left">
                        Key Projects:
                      </h4>
                      {exp.key_projects.map((project, i) => (
                        <div
                          key={i}
                          className="mt-3 pl-4 border-l-2 border-indigo-200"
                        >
                          <p className="font-medium text-gray-800 text-left">
                            {project.name} -{" "}
                            <span className="text-indigo-600">
                              {project.role}
                            </span>
                          </p>
                          <p className="text-gray-600 text-left">
                            {project.description}
                          </p>
                          <p className="text-sm text-gray-500 mt-1 text-left">
                            <span className="font-medium">Tech:</span>{" "}
                            {project.technologies.join(", ")}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center gap-2 text-left">
              <GraduationCap className="w-6 h-6" /> Education
            </h2>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                {data.education.map((edu, index) => (
                  <div
                    key={index}
                    className={`py-4 ${
                      index !== data.education.length - 1
                        ? "border-b border-indigo-100"
                        : ""
                    }`}
                  >
                    <p className="font-semibold text-gray-800 text-left">
                      {edu.degree}
                    </p>
                    <p className="text-gray-600 text-left">
                      {edu.institution} | {edu.duration || edu.year}
                    </p>
                    <p className="text-indigo-600 text-left mt-1">
                      CGPI/Percentage: {edu.percentage_cgpi}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center gap-2 text-left">
              <Code className="w-6 h-6" /> Skills
            </h2>
            <Card className="shadow-lg">
              <CardContent className="pt-6">
                {Object.entries(data.skills).map(([category, skills]) => (
                  <div key={category} className="mb-6">
                    <h3 className="font-semibold text-gray-800 capitalize text-lg border-b border-indigo-200 pb-1 text-left">
                      {category.replace("_", " ")}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm hover:bg-indigo-200 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>

          {/* Core Competencies */}
          <section>
            <h2 className="text-xl font-semibold text-indigo-700 mb-3 text-left">
              Core Competencies
            </h2>
            <Card className="shadow-lg bg-white">
              <CardContent className="pt-6">
                <ul className="list-none space-y-2 text-left">
                  {data.core_competencies.map((comp, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                      {comp}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Career Highlights */}
          <section>
            <h2 className="text-xl font-semibold text-indigo-700 mb-3 text-left">
              Career Highlights
            </h2>
            <Card className="shadow-lg bg-white">
              <CardContent className="pt-6">
                <ul className="list-none space-y-2 text-left">
                  {data.career_highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-xl font-semibold text-indigo-700 mb-3 text-left">
              Languages
            </h2>
            <Card className="shadow-lg bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {data.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;

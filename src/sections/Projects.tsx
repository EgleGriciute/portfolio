import portfolioProject01 from "@/assets/images/portfolio-project-01.png";
import portfolioProject02 from "@/assets/images/portfolio-project-02.png";
import portfolioProject03 from "@/assets/images/portfolio-project-03.png";

import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    testType: "Automation testing",
    year: "2025",
    title: "Automation Exercise",
    results: [
      { title: "Simulated real user scenarios and validated UI elements efficiently;" },
      { title: "Focused on frontend behavior with real-time reloading and debugging;" },
      { title: "Utilized for API testing, ensured seamless backend communication;" },
    ],
    link: "https://github.com/EgleGriciute?tab=repositories&q=automation-exercise&type=&language=&sort=",
    image: portfolioProject01,
  },
  {
    testType: "Automation testing",
    year: "2025",
    title: "Parabank",
    results: [
      { title: "Executed functional, end-to-end, parallel tests;" },
      { title: "Created accounts, transfers, bill payments, loans;" },
      { title: "Powered CI/CD pipeline workflow by GitHub Actions;" },
    ],
    link: "https://github.com/EgleGriciute?tab=repositories&q=parabank&type=&language=&sort=",
    image: portfolioProject03,
  },
  {
    testType: "Exploratory testing",
    year: "2025",
    title: "ToDoList",
    results: [
      { title: "Created detailed test cases covering core functionality;" },
      { title: "Documented detected bugs with steps to reproduce;" },
      { title: "Identified functional defects;" },
    ],
    link: "https://github.com/EgleGriciute/manual-testing/tree/main/toDoList",
    image: portfolioProject02,
  }
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="Below are some of the featured projects that highlight my testing skills and accomplishments."
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.testType}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Source code</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={`Image of ${project.title}`}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

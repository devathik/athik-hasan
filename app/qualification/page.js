import { Suspense } from "react";
import dynamic from "next/dynamic";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const QualificationHero = dynamic(() =>
  import("../components/qualification/QualificationHero")
);
const Education = dynamic(() =>
  import("../components/qualification/Education")
);
const Experience = dynamic(() =>
  import("../components/qualification/Experience")
);
const Certifications = dynamic(() =>
  import("../components/qualification/Certifications")
);
const Skills = dynamic(() => import("../components/qualification/Skills"));

export const metadata = {
  title: "Qualifications - Athik Hasan | MERN Stack Developer",
  description:
    "Explore my educational background, work experience, certifications, and technical skills.",
};

export default function QualificationPage() {
  return (
    <div className="space-y-20">
      <QualificationHero />

      <Suspense fallback={<LoadingSpinner />}>
        <Education />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Experience />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Certifications />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Skills />
      </Suspense>
    </div>
  );
}

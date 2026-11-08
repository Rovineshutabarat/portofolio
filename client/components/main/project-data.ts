export type ProjectImage = {
  name: string;
  url: string;
};

export type Project = {
  title: string;
  categories: string[];
  description: string;
  images: ProjectImage[];
  technologies: string[];
  frame: "browser" | "phone";
  features: string[];
  link: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: "Study Box",
    categories: ["Web Application"],
    description:
      "An online learning platform featuring course management, user roles, progress tracking, and content delivery.",
    images: [
      { name: "Study Box", url: "/lms.png" },
      { name: "Study Box", url: "/pln.png" },
      { name: "Study Box", url: "/pln.png" },
      { name: "Study Box", url: "/pln.png" },
      { name: "Study Box", url: "/pln.png" },
    ],
    technologies: ["Next.js", "Express.js", "PostgreSQL", "JWT"],
    frame: "browser",
    features: [
      "Course management",
      "Role-based access control",
      "Progress tracking",
    ],
    link: "",
    github: "https://github.com/Rovineshutabarat/e-course",
  },
  {
    title: "AnemiScan",
    categories: ["Mobile Application"],
    description:
      "A mobile application for anemia screening used by Puskesmas officers, featuring patient screening, lab result verification, and data synchronization.",
    images: [
      { name: "AnemiScan", url: "/anemiscan.jpeg" },
      { name: "AnemiScan", url: "/pln.png" },
    ],
    technologies: ["Flutter", "Dart", "REST API"],
    frame: "phone",
    features: [
      "Screening with suspect, pending, and verified status",
      "Lab result verification",
      "End-of-shift data synchronization",
    ],
    link: "",
    github: "#",
  },
  {
    title: "PLN ULP Medan Baru Visitor Registration",
    categories: ["Web Application"],
    description:
      "An official visit registration system for PLN ULP Medan Baru, enabling customers to register visits and check their status online.",
    images: [
      { name: "PLN ULP Medan Baru Visitor Registration", url: "/pln.png" },
    ],
    technologies: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
    frame: "browser",
    features: [
      "Online visit registration",
      "Visit status checking",
      "Service information and FAQ",
    ],
    link: "",
    github: "https://github.com/Rovineshutabarat/web-kunjungan-pln-medan-baru",
  },
  {
    title: "Banana Ripeness Classifier",
    categories: ["Machine Learning"],
    description:
      "A machine learning application to classify banana ripeness levels using the K-Nearest Neighbors algorithm.",
    images: [
      {
        name: "Banana Ripeness Classifier",
        url: "https://github.com/Rovineshutabarat/banana-ripeness-classifier/raw/main/client/public/preview.png",
      },
    ],
    technologies: ["Python", "Scikit-learn", "KNN", "Flask"],
    frame: "browser",
    features: [
      "Image-based classification",
      "KNN prediction with confidence score",
      "Ripeness level and storage recommendation",
    ],
    link: "#",
    github: "https://github.com/Rovineshutabarat/banana-ripeness-classifier",
  },
];

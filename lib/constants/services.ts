import {
  BarChart3,
  Code2,
  Smartphone,
  Shield,
  Cloud,
  LucideIcon,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  color: string;
  features: [];
  href: string;
}

export const services = [
  {
    title: "Data Analytics",
    description:
      "End-to-end data collection using CAPI applications (ODK, KoboToolbox), survey implementation, impact evaluations, and statistical analysis.",
    image: "/images/home/rawpixel-com-597440-unsplash-2048x1367 (1).jpg",
    icon: BarChart3,
    color: "teal",
    features: [
      {
        title: "Survey Design & Implementation",
        description:
          "Comprehensive survey design, sampling strategies, and field data collection using CAPI tools like ODK and KoboToolbox.",
        items: [
          "Household surveys",
          "School-base assestments",
          "Enterprise surveys",
          "Health facility surveys",
        ],
      },

      {
        title: "Impact Evaluations & M&E Systems",
        description:
          "Design and execution of impact evaluations, along with development of monitoring and evaluation systems for social protection programs.",
        items: [
          "Randomized Control Trials (RCTs)",
          "Quasi-experimental designs",
          "Dashboard development",
          "Real-time data monitoring",
        ],
      },
      {
        title: "Data Cleaning & Statistical Analysis",
        description:
          "Advanced data cleaning, management, and statistical analysis using software like STATA and SPSS to derive actionable insights.",
        items: [
          "Data validation & quality checks",
          "Descriptive & inferential statistics",
          "Regression analysis",
          "Data visualization with PowerBI",
        ],
      },
      {
        title: "Training & Capacity Building",
        description:
          "Specialized training programs in data collection methodologies, statistical software (STATA, SPSS), and data analysis techniques.",
        items: [
          "Customized training workshops",
          "Hands-on software training",
          "Remote and on-site options",
          "Comprehensive training materials",
        ],
      },
      {
        title: "Dashboard Development & Visualization",
        description:
          "Creation of interactive dashboards and visualizations to facilitate data-driven decision-making using tools like PowerBI.",
        items: [
          "Custom dashboard design",
          "KPI tracking",
          "Interactive reports",
          "Data storytelling",
        ],
      },
      {
        title: "Data Management & Storage Solutions",
        description:
          "Secure data management solutions including cloud storage, database design, and data governance frameworks to ensure data integrity and accessibility.",
        items: [
          "Cloud-based storage solutions",
          "Database design & management",
          "Data security protocols",
          "Backup & recovery plans",
        ],
      },
    ],
    href: "/services/data-analytics",
  },
  {
    title: "Software Solutions",
    description:
      "Custom software development, openIMIS health insurance management, Microsoft Dynamics 365 ERP implementation, and enterprise systems.",
    image: "/images/home/rawpixel-com-597440-unsplash-2048x1367 (1).jpg",
    icon: Code2,
    color: "orange",
    features: [
      "openIMIS Implementation & Customization",
      "Microsoft Dynamics 365 & Business Central",
      "Custom MIS Development (Kaarange MIS)",
    ],
    href: "/services/software-solutions",
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications, including specialized data collection tools for field research and surveys.",
    image: "/images/home/rawpixel-com-597440-unsplash-2048x1367 (1).jpg",
    icon: Smartphone,
    color: "blue",
    features: [
      {
        title: "Custom Software Development",
        description:
          "Tailored mobile applications designed to meet specific business needs, enhancing user engagement and operational efficiency.",
        items: [
          "Cross-platform apps (iOS & Android)",
          "User-centric design",
          "Performance optimization",
          "App maintenance & updates",
        ],
      },
      {
        title: "OpenIMIS Implementation",
        description:
          "Health protection management platform for beneficiary registration, claims processing, and data sharing.",
        items: [
          "Lao PDR",
          "Nigeria (KADCHMA)",
          "Fiji",
          "Social protection extension",
        ],
      },
      {
        title: "Kaarange MIS",
        description:
          "Management Information System for cash and in-kind transfers, developed for World Bank projects.",
        items: [
          "Beneficiary enrollment",
          "Mobile disbursement",
          "Reporting & analytics",
          "User access controls",
          "Payroll generation",
        ],
      },
      {
        title: "Microsoft Dynamics 365 & Business Central",
        description:
          "Enterprise Resource Planning (ERP) solutions to streamline business processes, improve data visibility, and enhance decision-making.",
        items: [
          "Finance & accounting",
          "Supply chain management",
          "Customer relationship management (CRM)",
          "Human resources management",
        ],
      },
      {
        title: "Microsoft 365 Suite",
        description:
          "Implementation and management of Microsoft 365 tools to enhance collaboration and productivity across organizations.",
        items: [
          "Teams & SharePoint",
          "Exchange Online",
          "OneDrive for Business",
          "Power Platform integration",
        ],
      },
      {
        title: "Web Security & Filtering",
        description:
          "Robust cybersecurity solutions to protect web applications and data from threats, ensuring secure online operations.",
        items: [
          "Firewall implementation",
          "Intrusion detection systems",
          "Regular security audits",
          "Employee training on cybersecurity best practices",
        ],
      },
    ],
    href: "/services/mobile-development",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your digital assets with enterprise-grade security solutions, from network protection to comprehensive security audits.",
    image: "/images/home/rawpixel-com-597440-unsplash-2048x1367 (1).jpg",
    icon: Shield,
    color: "purple",
    features: [
      {
        title: "Cloud Migration",
        description:
          "Seamless migration of your existing infrastructure to secure cloud platforms, ensuring minimal downtime and data integrity.",
        items: [
          "Assessment & planning",
          "Data migration",
          "Cloud configuration",
          "Post-migration support",
        ],
      },
      {
        title: "Infrastructure Management",
        description:
          "Comprehensive management of your IT infrastructure to ensure optimal performance, security, and reliability.",
        items: [
          "Network monitoring",
          "System updates & patches",
          "Performance optimization",
          "24/7 support",
        ],
      },
      {
        title: "DevOps Services",
        description:
          "Implementing DevOps practices to streamline software development and deployment, enhancing collaboration between development and operations teams.",
        items: [
          "CI/CD pipeline setup",
          "Infrastructure as Code (IaC)",
          "Automated testing",
          "Monitoring & logging",
        ],
      },
      {
        title: "Cost Optimization",
        description:
          "Strategies and solutions to optimize your IT spending while maintaining high levels of security and performance.",
        items: [
          "Resource utilization analysis",
          "Cost-effective cloud solutions",
          "Budget planning",
          "Vendor management",
        ],
      },
    ],
    href: "/services/cybersecurity",
  },
  {
    title: "Microsoft 365 Solutions",
    description:
      "Complete Microsoft 365 implementation, migration, and management services to enhance productivity and collaboration across your organization.",
    image: "/images/home/rawpixel-com-597440-unsplash-2048x1367 (1).jpg",
    icon: Cloud,
    color: "blue",
    features: [
      "Microsoft 365 Migration & Setup",
      "SharePoint & Teams Implementation",
      "Exchange Online Configuration",
    ],
    href: "/services/microsoft-365",
  },
];

export const servicesFAQ = [
  {
    question: "What services does 2M Corp offer?",
    answer:
      "We provide comprehensive technology solutions including Data Analytics & Surveys, Custom Software Development, Mobile App Development, Cybersecurity Services, and Microsoft 365 Implementation. Our services cover the entire project lifecycle from consultation and design to deployment and ongoing support.",
  },
  {
    question: "Do you provide training for the systems you implement?",
    answer:
      "Yes, we offer comprehensive training programs tailored to your team's needs. This includes hands-on workshops, user manuals, video tutorials, and ongoing technical support. We ensure your staff is fully equipped to use and maintain the systems we deploy, with both on-site and remote training options available.",
  },
  {
    question: "Can you integrate your solutions with existing systems?",
    answer:
      "Absolutely. We specialize in seamless integration with existing infrastructure. Whether it's connecting our custom software with your ERP, integrating data collection tools with your databases, or linking Microsoft 365 with legacy systems, we ensure smooth interoperability while maintaining data integrity and security.",
  },
  {
    question: "What is your approach to data security and privacy?",
    answer:
      "Data security is paramount in all our services. We implement industry-standard encryption, secure data transmission protocols, regular security audits, and compliance with international data protection regulations including GDPR. All our systems include role-based access controls, audit trails, and secure backup procedures.",
  },
  {
    question: "Do you offer maintenance and support after project completion?",
    answer:
      "Yes, we provide comprehensive post-deployment support packages including system maintenance, bug fixes, security updates, performance optimization, and technical helpdesk services. Our support plans range from basic email support to 24/7 dedicated assistance, customized to your organization's needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project duration varies based on scope and complexity. Simple mobile app development may take 6-12 weeks, while enterprise ERP implementations can span 6-12 months. Survey projects typically run 2-6 months depending on sample size. We provide detailed project timelines during initial consultation and maintain transparent communication throughout.",
  },
  {
    question: "What technologies and platforms do you work with?",
    answer:
      "We work with a wide range of technologies including Microsoft Dynamics 365, openIMIS, ODK, KoboToolbox, PowerBI, React, Node.js, Python, and various database systems. For mobile development, we create both native (iOS/Android) and cross-platform applications. Our team stays current with emerging technologies to provide cutting-edge solutions.",
  },
  {
    question: "Can you handle projects remotely or do you need to be on-site?",
    answer:
      "We offer both remote and on-site services depending on project requirements. Many projects can be executed remotely with regular virtual meetings and collaboration tools. For data collection projects, system deployments, and training programs, we provide on-site support across Africa. We maintain a flexible hybrid approach to best serve our clients.",
  },
];

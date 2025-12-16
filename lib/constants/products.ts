export const Products = [
  {
    id: "microsoft",
    title: "Microsoft Solutions",
    slug: "microsoft",
    description:
      "As a Microsoft Certified Partner, 2M Corp delivers comprehensive Microsoft solutions including Microsoft 365, Dynamics 365, Azure, and more. Transform your business with enterprise-grade technology backed by local expertise.",
    icon: "UserGroupIcon",
    color: "blue",
    badge: "Certified Partner",
    products: [
      {
        id: "microsoft-365",
        title: "Microsoft 365",
        slug: "microsoft-365",
        tagline: "Productivity & collaboration tools",
        description:
          "Complete cloud-based productivity suite including Office apps, Teams, SharePoint, and enterprise security.",

        featured: true,
        status: "active",
      },
      {
        id: "windows-365",
        title: "Windows 365",
        slug: "windows-365",
        tagline: "Cloud PC solution",
        description:
          "Stream your Windows experience from the Microsoft cloud to any device.",

        featured: false,
        status: "active",
      },
      {
        id: "dynamics-365",
        title: "Dynamics 365",
        slug: "dynamics-365",
        tagline: "Business applications",
        description:
          "Intelligent business applications that help you run your entire business and deliver greater results. Connect your sales, service, finance, and operations teams on one platform",
        featured: true,
        status: "active",
      },
      {
        id: "power-platform",
        title: "Power Platform",
        slug: "power-platform",
        tagline: "Low-code development",
        description:
          "Build apps, automate workflows, and analyze data with Power Apps, Power Automate, and Power BI.",
        featured: false,
        status: "active",
      },
      {
        id: "azure-services",
        title: "Azure Services",
        slug: "azure-services",
        tagline: "Cloud infrastructure",
        description:
          "Comprehensive cloud computing platform with IaaS, PaaS, and SaaS capabilities.",
        featured: false,
        status: "active",
      },
    ],
  },
  {
    id: "fortinet",
    title: "Fortinet Security",
    slug: "fortinet",
    description: "Enterprise cybersecurity solutions",
    icon: "ShieldCheckIcon",
    color: "navy",
    badge: "Authorized Partner",
    products: [
      {
        id: "fortinet",
        title: "Security Fabric",
        slug: "fortinet",
        tagline: "Complete security platform",
        description:
          "Integrated cybersecurity platform delivering broad, integrated, and automated protection.",
        featured: true,
        status: "active",
      },
      {
        id: "fortinet-fortigate",
        title: "FortiGate Firewalls",
        slug: "fortinet-fortigate",
        tagline: "Next-gen firewall protection",
        description:
          "Industry-leading next-generation firewall with advanced threat protection.",
        featured: true,
        status: "active",
      },
      {
        id: "fortinet-fortimail",
        title: "FortiMail",
        slug: "fortinet-fortimail",
        tagline: "Email security solution",
        description:
          "Comprehensive email security protecting against spam, phishing, and malware.",
        featured: false,
        status: "active",
      },
      {
        id: "fortinet-forticlient",
        title: "FortiClient",
        slug: "fortinet-forticlient",
        tagline: "Endpoint protection",
        description:
          "Integrated endpoint security with VPN, vulnerability scanning, and threat defense.",
        featured: false,
        status: "active",
      },
    ],
  },
  {
    id: "palo-alto",
    title: "Palo Alto Networks",
    slug: "palo-alto",
    description:
      "Industry-leading cybersecurity platform with AI-powered threat prevention, cloud security, and zero trust architecture. Protect your organization with the world's most advanced security solutions.",
    icon: "ShieldCheckIcon",
    color: "navy",
    badge: "Authorized Partner",
    products: [
      {
        id: "palo-alto",
        title: "Security Overview",
        slug: "palo-alto",
        tagline: "Complete cybersecurity suite",
        description:
          "Comprehensive cybersecurity solutions protecting networks, cloud, and endpoints.",
        featured: true,
        status: "active",
      },
      {
        id: "palo-alto-strata",
        title: "Strata (Network)",
        slug: "palo-alto-strata",
        tagline: "Next-gen firewall security",
        description:
          "Network security platform with ML-powered threat prevention.",
        featured: false,
        status: "active",
      },
      {
        id: "palo-alto-prisma",
        title: "Prisma (Cloud)",
        slug: "palo-alto-prisma",
        tagline: "Cloud security platform",
        description:
          "Comprehensive cloud-native security platform (CNAPP) for multi-cloud environments.",
        featured: false,
        status: "active",
      },
      {
        id: "palo-alto-cortex",
        title: "Cortex (Operations)",
        slug: "palo-alto-cortex",
        tagline: "Security operations",
        description:
          "AI-driven security operations platform with XDR and XSOAR capabilities.",
        featured: false,
        status: "active",
      },
    ],
  },
  {
    id: "sophos",
    title: "Sophos Security",
    slug: "sophos",
    description:
      "Next-generation cybersecurity powered by synchronized security. Protect endpoints, networks, email, and cloud with products that work together and share threat intelligence in real-time.",
    icon: "ShieldCheckIcon",
    color: "navy",
    badge: "Authorized Partner",
    products: [
      {
        id: "sophos",
        title: "Security Overview",
        slug: "sophos",
        tagline: "Synchronized protection",
        description:
          "AI-powered cybersecurity solutions with synchronized security technology.",
        featured: true,
        status: "active",
      },
      {
        id: "sophos-intercept-x",
        title: "Intercept X",
        slug: "sophos-intercept-x",
        tagline: "Endpoint protection",
        description:
          "Advanced endpoint protection with deep learning AI and exploit prevention.",
        featured: true,
        status: "active",
      },
      {
        id: "sophos-firewall",
        title: "Sophos Firewall",
        slug: "sophos-firewall",
        tagline: "Network security",
        description:
          "Next-gen firewall with TLS inspection, IPS, and synchronized security.",
        featured: false,
        status: "active",
      },
      {
        id: "sophos-email-security",
        title: "Email Security",
        slug: "sophos-email-security",
        tagline: "Advanced email protection",
        description:
          "Cloud-based email security protecting against phishing and malware.",
        featured: false,
        status: "active",
      },
    ],
  },
  {
    id: "untangle",
    title: "Untangle NG Firewall",
    slug: "untangle",
    description:
      "Enterprise-grade network security made simple and affordable for small to medium businesses. Complete protection with firewall, web filtering, VPN, threat prevention, and more—all in one easy-to-manage solution.",
    icon: "ShieldCheckIcon",
    color: "navy",
    badge: "Authorized Partner",
    products: [
      {
        id: "untangle",
        title: "NG Firewall",
        slug: "untangle",
        tagline: "Complete gateway security",
        description:
          "Comprehensive network security gateway for small and medium businesses.",
        featured: false,
        status: "active",
      },
      {
        id: "untangle-hardware",
        title: "Hardware Appliances",
        slug: "untangle-hardware",
        tagline: "z2, z4, z6 models",
        description:
          "Purpose-built hardware appliances for various business sizes.",
        featured: false,
        status: "active",
      },
      {
        id: "untangle-virtual",
        title: "Virtual Appliance",
        slug: "untangle-virtual",
        tagline: "VM deployment option",
        description:
          "Virtual machine deployment for flexible infrastructure integration.",
        featured: false,
        status: "active",
      },
    ],
  },
  {
    id: "bitdefender",
    title: "Bitdefender",
    slug: "bitdefender",
    description:
      "Industry-leading cybersecurity with advanced machine learning and behavioral analysis. Protect endpoints, networks, and cloud workloads with unified threat defense platform.",
    icon: "ShieldCheckIcon",
    color: "navy",
    badge: "Authorized Partner",
    products: [
      {
        id: "bitdefender-gravityzone",
        title: "GravityZone",
        slug: "bitdefender-gravityzone",
        tagline: "Endpoint security platform",
        description:
          "Unified endpoint protection and enterprise security platform.",
        featured: true,
        status: "active",
      },
      {
        id: "bitdefender-edr-xdr",
        title: "Enterprise Security",
        slug: "bitdefender-edr-xdr",
        tagline: "EDR & XDR solutions",
        description:
          "Advanced detection and response with extended visibility.",
        featured: false,
        status: "active",
      },
      {
        id: "bitdefender-cloud-security",
        title: "Cloud Security",
        slug: "bitdefender-cloud-security",
        tagline: "Multi-cloud protection",
        description:
          "Comprehensive security for cloud workloads and containers.",
        featured: false,
        status: "active",
      },
      {
        id: "bitdefender-mdr",
        title: "MDR Services",
        slug: "bitdefender-mdr",
        tagline: "Managed detection & response",
        description: "24/7 managed detection and response services.",
        featured: false,
        status: "active",
      },
    ],
  },
  {
    id: "health",
    title: "Health Solutions",
    slug: "health-solutions",
    description: "Digital health insurance & EMR platforms",
    icon: "HeartIcon",
    color: "teal",
    products: [
      {
        id: "openimis",
        title: "openIMIS",
        slug: "openimis",
        tagline: "Health insurance management",
        description:
          "Open-source health insurance management information system for social protection.",
        featured: true,
        status: "active",
      },
      {
        id: "kaarange-mis",
        title: "Kaarange MIS",
        slug: "kaarange-mis",
        tagline: "Social protection system",
        description:
          "Management information system for social protection programs.",
        featured: false,
        status: "active",
      },
      {
        id: "openmrs",
        title: "OpenMRS",
        slug: "openmrs",
        tagline: "Open source medical records",
        description:
          "Community-developed electronic medical record system platform.",
        featured: true,
        status: "active",
      },
      {
        id: "gnu-health",
        title: "GNU Health",
        slug: "gnu-health",
        tagline: "Hospital information system",
        description: "Comprehensive hospital and health information system.",
        featured: false,
        status: "active",
      },
      {
        id: "fhir-integration",
        title: "FHIR Integration",
        slug: "fhir-integration",
        tagline: "Healthcare data interoperability",
        description:
          "Fast Healthcare Interoperability Resources integration services.",
        featured: false,
        status: "active",
      },
    ],
  },
  {
    id: "hr-payroll",
    title: "HR & Payroll",
    slug: "hr-payroll",
    description:
      "Transform your HR operations with our comprehensive, modular HRMS platform. Built on Odoo 15, our solution manages the complete employee lifecycle from recruitment to retirement, with powerful automation, analytics, and compliance tools.",
    icon: "UserGroupIcon",
    color: "purple",
    products: [
      {
        id: "hrms-platform",
        title: "HRMS Platform",
        slug: "hrms-platform",
        tagline: "Employee lifecycle management",
        description:
          "Complete employee lifecycle management with modular HR system.",
        featured: true,
        status: "active",
      },
      {
        id: "hrms-payroll",
        title: "Payroll Processing",
        slug: "hrms-payroll",
        tagline: "Automated salary processing",
        description:
          "Automated salary calculations, payslip generation, and payroll accounting.",
        featured: false,
        status: "active",
      },
      {
        id: "hrms-attendance",
        title: "Leave & Attendance",
        slug: "hrms-attendance",
        tagline: "Biometric attendance tracking",
        description:
          "ZK biometric attendance integration with leave management system.",
        featured: false,
        status: "active",
      },
      {
        id: "hrms-performance",
        title: "Performance Management",
        slug: "hrms-performance",
        tagline: "Employee development",
        description:
          "Employee appraisals, skills tracking, and training management.",
        featured: false,
        status: "active",
      },
    ],
  },
];

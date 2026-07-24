export type ProjectFact = {
  label: string;
  value: string;
};

export type ProjectHighlight = {
  value: string;
  label: string;
};

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  title?: string;
};

export type ProjectDocument = {
  title: string;
  description: string;
  type: "PDF" | "PPTX" | "DOCX" | "XLSX";
  file: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  service: string;
  industry: string;
  client: string;
  year: string;
  image: string;
  description: string;
  services: string[];
  featured: boolean;

  overview: {
    summary: string;
    facts: ProjectFact[];
  };

  challenge: {
    title: string;
    description: string;
    points: string[];
  };

  solution: {
    title: string;
    description: string;
    points: string[];
  };

  deliverables: string[];

  outcome: {
    description: string;
    highlights: ProjectHighlight[];
  };

  gallery: ProjectGalleryItem[];

  documents?: ProjectDocument[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "book-treasures",
    title: "Book Treasures",
    subtitle: "Business Planning and Financial Strategy",
    service: "Business Plan",
    industry: "Retail & Education",
    client: "Book Treasures",
    year: "2025",
    image: "/images/projects/book-treasures/hero.jpg",
    description:
      "A funding-ready business plan for a community-focused children's bookstore, ecommerce platform, and literacy hub.",
    services: [
      "Business Planning",
      "Market Research",
      "Financial Forecasting",
    ],
    featured: true,

    overview: {
      summary:
        "Book Treasures was developed as a community-focused children's bookstore combining physical retail, ecommerce, educational programming, and literacy-based events. The business plan established a clear commercial model while preserving the company's wider mission of improving access to books and encouraging childhood literacy.",
      facts: [
        {
          label: "Client",
          value: "Book Treasures",
        },
        {
          label: "Industry",
          value: "Retail & Education",
        },
        {
          label: "Primary Service",
          value: "Business Plan",
        },
        {
          label: "Business Model",
          value: "Retail, Ecommerce & Events",
        },
        {
          label: "Project Year",
          value: "2025",
        },
      ],
    },

    challenge: {
      title: "Turning a community mission into a sustainable business",
      description:
        "The client needed to demonstrate that a purpose-driven children's bookstore could operate as a financially sustainable business. The concept required a structured strategy that balanced product sales, ecommerce, community programming, and educational partnerships.",
      points: [
        "Define revenue streams beyond traditional in-store book sales.",
        "Identify the core customer segments and their purchasing needs.",
        "Position the bookstore against large online and national retailers.",
        "Develop realistic startup costs and long-term financial forecasts.",
        "Present the concept clearly to lenders and potential funding partners.",
      ],
    },

    solution: {
      title: "A diversified retail and literacy-focused business model",
      description:
        "We created a comprehensive business plan that positioned Book Treasures as both a retail destination and a community literacy resource. The strategy combined physical and online sales with events, reading programs, school partnerships, and educational activities.",
      points: [
        "Developed a structured retail and ecommerce operating model.",
        "Completed target-market and competitor research.",
        "Outlined reading events, literacy programs, and local partnerships.",
        "Created an integrated marketing and customer-acquisition strategy.",
        "Prepared startup requirements and five-year financial projections.",
      ],
    },

    deliverables: [
      "Executive Summary",
      "Company Overview",
      "Industry Analysis",
      "Target Market Analysis",
      "Competitor Analysis",
      "Marketing Strategy",
      "Operations Plan",
      "Funding Strategy",
      "Startup Budget",
      "Five-Year Financial Forecast",
    ],

    outcome: {
      description:
        "The completed plan gave the client a clear roadmap for launching and growing the business. It brought the retail, ecommerce, and community-programming elements together in one professional document suitable for operational planning and funding discussions.",
      highlights: [
        {
          value: "5-Year",
          label: "Financial forecast",
        },
        {
          value: "3",
          label: "Core revenue channels",
        },
        {
          value: "10",
          label: "Major deliverables",
        },
      ],
    },

        gallery: [
          {
            src: "/images/projects/book-treasures/cover.jpg",
            alt: "Professional cover page of the completed Book Treasures business plan.",
            title: "Business Plan Cover",
          },
          {
            src: "/images/projects/book-treasures/section-1.jpg",
            alt: "Executive summary outlining the business concept, objectives, and strategy.",
            title: "Executive Summary",
          },
          {
            src: "/images/projects/book-treasures/section-2.jpg",
            alt: "Market analysis showing industry research, customer segments, and competitive positioning.",
            title: "Market Analysis",
          },
          {
            src: "/images/projects/book-treasures/section-3.jpg",
            alt: "Five-year financial projections including revenue forecasts and profitability analysis.",
            title: "Financial Forecast",
          },
        ],

        documents: [
          {
            title: "Complete Business Plan",
            description:
              "Explore the complete funding-ready business plan, featuring market research, business strategy, operational planning, and five-year financial projections.",
            type: "PDF",
            file: "/documents/book-treasures/deliverable.pdf",
          },
        ],
  },

   {
    id: 2,
    slug: "humdinger",
    title: "Humdinger",
    subtitle: "Lean Ecommerce Launch Strategy",
    service: "Business Plan",
    industry: "Ecommerce & Apparel",
    client: "Humdinger",
    year: "2025",
    image: "/images/projects/humdinger/hero.jpg",
    description:
      "A practical launch strategy for an inventory-light print-on-demand apparel business.",
    services: [
      "Business Strategy",
      "Market Analysis",
      "Startup Forecasting",
    ],
    featured: true,

    overview: {
      summary:
        "Humdinger is an ecommerce apparel concept built around a print-on-demand operating model. The project focused on creating a lean launch strategy that reduced inventory exposure while giving the business a clear path for customer acquisition, brand development, and product expansion.",
      facts: [
        {
          label: "Client",
          value: "Humdinger",
        },
        {
          label: "Industry",
          value: "Ecommerce & Apparel",
        },
        {
          label: "Primary Service",
          value: "Business Plan",
        },
        {
          label: "Business Model",
          value: "Print-on-Demand Ecommerce",
        },
        {
          label: "Project Year",
          value: "2025",
        },
      ],
    },

    challenge: {
      title: "Launching an apparel brand without heavy inventory costs",
      description:
        "The client needed a realistic strategy for entering a competitive ecommerce market while keeping startup costs and unsold inventory risk under control. The plan also needed to explain how the brand would attract customers and differentiate itself.",
      points: [
        "Validate the print-on-demand operating model.",
        "Define a focused customer profile and brand position.",
        "Identify suitable ecommerce and fulfillment channels.",
        "Develop realistic assumptions for traffic, conversion, and sales.",
        "Create a phased path from launch to product-line expansion.",
      ],
    },

    solution: {
      title: "A low-overhead and scalable ecommerce framework",
      description:
        "We created a lean business model centered on outsourced production, digital customer acquisition, and controlled product testing. The strategy allowed the client to launch with limited fixed costs and expand based on proven customer demand.",
      points: [
        "Structured the print-on-demand supply and fulfillment workflow.",
        "Defined the target audience and competitive positioning.",
        "Created a digital marketing and content strategy.",
        "Developed pricing, sales, and startup-cost assumptions.",
        "Outlined growth stages for new designs and product categories.",
      ],
    },

    deliverables: [
      "Executive Summary",
      "Business Model",
      "Brand Positioning",
      "Market Analysis",
      "Competitor Review",
      "Customer Profiles",
      "Marketing Strategy",
      "Operations Plan",
      "Startup Budget",
      "Sales Forecast",
    ],

    outcome: {
      description:
        "The final plan provided a clear and practical launch roadmap. It gave the client a structured way to test products, control costs, build an online audience, and scale the apparel range as demand developed.",
      highlights: [
        {
          value: "Lean",
          label: "Inventory-light model",
        },
        {
          value: "Digital",
          label: "Customer acquisition strategy",
        },
        {
          value: "Phased",
          label: "Growth roadmap",
        },
      ],
    },

    gallery: [
        {
          src: "/images/projects/humdinger/cover.jpg",
          alt: "Professional cover page of the completed Humdinger business plan.",
          title: "Business Plan Cover",
        },
        {
          src: "/images/projects/humdinger/section-1.jpg",
          alt: "Brand strategy outlining the target audience, positioning, and value proposition.",
          title: "Brand Strategy",
        },
        {
          src: "/images/projects/humdinger/section-2.jpg",
          alt: "Market analysis highlighting industry trends, competitors, and customer insights.",
          title: "Market Analysis",
        },
        {
          src: "/images/projects/humdinger/section-3.jpg",
          alt: "Startup financial forecast showing projected sales, expenses, and profitability.",
          title: "Startup Forecast",
        },
      ],

      documents: [
        {
          title: "Complete Business Plan",
          description:
            "Explore the complete business plan, including the ecommerce strategy, market research, operational framework, and startup financial projections prepared for Humdinger.",
          type: "PDF",
          file: "/documents/humdinger/deliverable.pdf",
        },
      ],
  },

 {
    id: 3,
    slug: "spud-queens",
    title: "Spud Queens",
    subtitle: "Food Truck Growth and Funding Plan",
    service: "Business Plan",
    industry: "Food & Hospitality",
    client: "Spud Queens",
    year: "2025",
    image: "/images/projects/spud-queens/hero.jpg",
    description:
      "A growth-focused plan for a loaded baked potato food truck, catering service, and future storefront.",
    services: [
      "Business Planning",
      "Funding Strategy",
      "Financial Projections",
    ],
    featured: true,

    overview: {
      summary:
        "Spud Queens is a food-service concept specializing in loaded baked potatoes through a mobile food truck, event catering, and a planned future storefront. The project required a funding-ready business plan that connected the brand concept with a realistic launch and expansion strategy.",
      facts: [
        {
          label: "Client",
          value: "Spud Queens",
        },
        {
          label: "Industry",
          value: "Food & Hospitality",
        },
        {
          label: "Primary Service",
          value: "Business Plan",
        },
        {
          label: "Funding Requirement",
          value: "$150,000",
        },
        {
          label: "Business Model",
          value: "Food Truck, Catering & Retail",
        },
      ],
    },

    challenge: {
      title: "Building a scalable food concept from a mobile launch",
      description:
        "The client needed to show how the business could begin with a food truck, develop recurring catering revenue, and eventually grow into a permanent location. The plan also needed to justify the funding requirement and demonstrate operational viability.",
      points: [
        "Define a clear launch strategy for the food truck.",
        "Organize menu pricing and product-level assumptions.",
        "Explain how catering would complement daily food-truck sales.",
        "Develop staffing and operating requirements.",
        "Present a credible funding request and use-of-funds plan.",
      ],
    },

    solution: {
      title: "A phased growth plan supported by practical financials",
      description:
        "We developed a business plan that connected the mobile food-truck model with catering and future storefront expansion. The strategy included startup requirements, menu positioning, operations, staffing, marketing, and five-year financial projections.",
      points: [
        "Created a phased food truck, catering, and storefront strategy.",
        "Organized menu categories and average selling-price assumptions.",
        "Developed local marketing and event-partnership strategies.",
        "Prepared staffing and operational growth plans.",
        "Built funding, revenue, expense, and cash-flow projections.",
      ],
    },

    deliverables: [
      "Executive Summary",
      "Company Description",
      "Menu and Pricing Strategy",
      "Industry Research",
      "Target Market Analysis",
      "Competitor Analysis",
      "Marketing Plan",
      "Food Truck Operations Plan",
      "Staffing Plan",
      "Funding Request",
      "Use of Funds",
      "Five-Year Financial Model",
    ],

    outcome: {
      description:
        "The finished business plan presented Spud Queens as a structured and scalable food-service company rather than only a single food truck. It provided a clear funding narrative and an operational roadmap for launch and expansion.",
      highlights: [
        {
          value: "$150K",
          label: "External funding request",
        },
        {
          value: "$180K",
          label: "Total startup funding",
        },
        {
          value: "3",
          label: "Planned revenue channels",
        },
      ],
    },

    gallery: [
      {
        src: "/images/projects/spud-queens/cover.jpg",
        alt: "Professional cover page of the completed Spud Queens business plan.",
        title: "Business Plan Cover",
      },
      {
        src: "/images/projects/spud-queens/section-1.jpg",
        alt: "Menu strategy outlining product offerings, pricing structure, and revenue opportunities.",
        title: "Menu Strategy",
      },
      {
        src: "/images/projects/spud-queens/section-2.jpg",
        alt: "Market analysis highlighting customer demographics, competitors, and growth opportunities.",
        title: "Market Analysis",
      },
      {
        src: "/images/projects/spud-queens/section-3.jpg",
        alt: "Five-year financial projections covering revenue, expenses, and profitability.",
        title: "Financial Projections",
      },
    ],

    documents: [
      {
        title: "Complete Business Plan",
        description:
          "Explore the complete funding-ready business plan, including the launch strategy, market research, operational plan, funding request, and five-year financial projections prepared for Spud Queens.",
        type: "PDF",
        file: "/documents/spud-queens/deliverable.pdf",
      },
    ],
  },

  {
    id: 4,
    slug: "wine-down-bistro",
    title: "Wine Down Wine Bar & Bistro",
    subtitle: "Hospitality Launch and Financial Planning",
    service: "Business Plan",
    industry: "Hospitality",
    client: "Wine Down Wine Bar & Bistro",
    year: "2025",
    image: "/images/projects/wine-down-bistro/hero.jpg",
    description:
      "A comprehensive business plan for an upscale wine bar and casual dining concept.",
    services: [
      "Market Research",
      "Operations Planning",
      "Financial Modeling",
    ],
    featured: true,

    overview: {
      summary:
        "Wine Down Wine Bar & Bistro is an upscale but approachable hospitality concept offering wine, food, beer, and non-alcoholic beverages. The project focused on transforming the concept into a lender-ready plan supported by startup requirements, operations planning, and detailed financial projections.",
      facts: [
        {
          label: "Client",
          value: "Wine Down Wine Bar & Bistro",
        },
        {
          label: "Industry",
          value: "Hospitality",
        },
        {
          label: "Primary Service",
          value: "Business Plan",
        },
        {
          label: "Startup Requirement",
          value: "$660,000",
        },
        {
          label: "Business Model",
          value: "Wine Bar & Bistro",
        },
      ],
    },

    challenge: {
      title: "Presenting an ambitious hospitality concept to lenders",
      description:
        "The concept required substantial startup funding and needed to demonstrate that its location, menu, pricing, staffing, and revenue assumptions could support a sustainable operation. The plan also had to clearly separate buildout costs from ongoing working capital.",
      points: [
        "Organize the complete startup budget and funding structure.",
        "Define the food, wine, beer, and non-alcoholic revenue streams.",
        "Develop an efficient staffing and operating plan.",
        "Support the concept with market and competitor research.",
        "Build realistic lender-focused financial projections.",
      ],
    },

    solution: {
      title: "A lender-ready plan connecting concept and financial viability",
      description:
        "We developed a detailed business plan that translated the hospitality vision into a practical operating and financial model. It included the funding structure, use of funds, revenue assumptions, staffing, marketing, and long-term financial performance.",
      points: [
        "Structured the $660,000 startup requirement and funding mix.",
        "Developed revenue forecasts across food and beverage categories.",
        "Created staffing, service, and operating assumptions.",
        "Prepared market-positioning and customer-acquisition strategies.",
        "Built five-year profit, cash-flow, and balance-sheet projections.",
      ],
    },

    deliverables: [
      "Executive Summary",
      "Business Concept",
      "Industry Analysis",
      "Local Market Research",
      "Customer Segmentation",
      "Competitor Analysis",
      "Menu and Revenue Strategy",
      "Marketing Plan",
      "Operations Plan",
      "Personnel Plan",
      "Funding Structure",
      "Use of Funds",
      "Five-Year Financial Model",
    ],

    outcome: {
      description:
        "The completed plan gave the client a comprehensive document for lender discussions and launch planning. It clearly connected the customer experience with the capital requirements, operating structure, and projected financial performance.",
      highlights: [
        {
          value: "$660K",
          label: "Total startup requirement",
        },
        {
          value: "$500K",
          label: "Planned bank financing",
        },
        {
          value: "$1.34M",
          label: "Projected fifth-year revenue",
        },
      ],
    },

    gallery: [
      {
        src: "/images/projects/wine-down-bistro/cover.jpg",
        alt: "Professional cover page of the completed Wine Down Wine Bar & Bistro business plan.",
        title: "Business Plan Cover",
      },
      {
        src: "/images/projects/wine-down-bistro/section-1.jpg",
        alt: "Business concept outlining the restaurant vision, customer experience, and service model.",
        title: "Business Concept",
      },
      {
        src: "/images/projects/wine-down-bistro/section-2.jpg",
        alt: "Market research highlighting the target audience, competitors, and local hospitality opportunities.",
        title: "Market Research",
      },
      {
        src: "/images/projects/wine-down-bistro/section-3.jpg",
        alt: "Five-year financial model including revenue forecasts, expenses, and profitability projections.",
        title: "Financial Model",
      },
    ],

    documents: [
      {
        title: "Complete Business Plan",
        description:
          "Explore the complete lender-ready business plan, including market research, operational strategy, funding requirements, and five-year financial projections prepared for Wine Down Wine Bar & Bistro.",
        type: "PDF",
        file: "/documents/wine-down-bistro/deliverable.pdf",
      },
    ],
  },

  {
    id: 5,
    slug: "launch-lab-sports",
    title: "Launch Lab Sports",
    subtitle: "Investor Strategy and Capital-Raise Presentation",
    service: "Investor Pitch Deck",
    industry: "Sports & Entertainment",
    client: "Launch Lab Sports",
    year: "2025",
    image: "/images/projects/launch-lab-sports/hero.jpg",
    description:
      "An investor presentation for a large-scale sports, hospitality, and entertainment destination.",
    services: [
      "Pitch Deck Design",
      "Investment Strategy",
      "Financial Storytelling",
    ],
    featured: false,

    overview: {
      summary:
        "Launch Lab Sports is a large-scale sports, entertainment, and hospitality destination planned for Camp Hill, Pennsylvania. The project required an investor presentation that communicated the development vision, market opportunity, operating model, property strategy, and investment proposition.",
      facts: [
        {
          label: "Client",
          value: "Launch Lab Sports",
        },
        {
          label: "Industry",
          value: "Sports & Entertainment",
        },
        {
          label: "Primary Service",
          value: "Investor Pitch Deck",
        },
        {
          label: "Facility Size",
          value: "106,947 sq. ft.",
        },
        {
          label: "Location",
          value: "Camp Hill, Pennsylvania",
        },
      ],
    },

    challenge: {
      title: "Communicating a complex destination investment clearly",
      description:
        "The project combined real estate, sports programming, memberships, hospitality, entertainment, and multiple revenue streams. Investors needed to quickly understand the scale of the opportunity, the market demand, the operating economics, and the dual-asset investment structure.",
      points: [
        "Simplify a complex multi-use facility into a clear investor story.",
        "Present the market size and regional demand convincingly.",
        "Explain the relationship between real estate and operating revenue.",
        "Visualize utilization, revenue, and EBITDA scenarios.",
        "Communicate project progress and investment readiness.",
      ],
    },

    solution: {
      title: "A focused investor narrative built around scale and recurring revenue",
      description:
        "We created a visually structured pitch deck that led investors from the market opportunity through the facility experience, business model, financial potential, development progress, and funding proposition.",
      points: [
        "Clarified the dual real-estate and operating-business opportunity.",
        "Organized the facility experience and core revenue channels.",
        "Presented utilization-based financial scenarios.",
        "Highlighted regional growth and customer demand.",
        "Converted development milestones into an investor-readiness story.",
      ],
    },

    deliverables: [
      "Investor Narrative",
      "Executive Summary",
      "Market Opportunity",
      "Facility Experience",
      "Business Model",
      "Revenue Strategy",
      "Utilization Scenarios",
      "Financial Highlights",
      "Investment Proposition",
      "Use of Funds",
      "Progress to Date",
      "Team Presentation",
      "Pitch Deck Design",
    ],

    outcome: {
      description:
        "The final presentation transformed a large and complex development concept into a concise investor story. It clearly presented the facility, market demand, recurring-revenue potential, financial opportunity, and the value of participating in both the property and operating business.",
      highlights: [
        {
          value: "106,947",
          label: "Square-foot facility",
        },
        {
          value: "350K+",
          label: "Projected annual visitors",
        },
        {
          value: "$9M–$13M",
          label: "Revenue at 55% utilization",
        },
        {
          value: "$4M–$6M",
          label: "Projected stabilized EBITDA",
        },
      ],
    },

    gallery: [
      {
        src: "/images/projects/launch-lab-sports/cover.jpg",
        alt: "Professional cover slide of the Launch Lab Sports investor pitch deck.",
        title: "Investor Deck Cover",
      },
      {
        src: "/images/projects/launch-lab-sports/section-1.jpg",
        alt: "Market opportunity highlighting regional demand, demographics, and investment potential.",
        title: "Market Opportunity",
      },
      {
        src: "/images/projects/launch-lab-sports/section-2.jpg",
        alt: "Facility experience showcasing the sports, entertainment, and hospitality destination.",
        title: "Facility Experience",
      },
      {
        src: "/images/projects/launch-lab-sports/section-3.jpg",
        alt: "Financial opportunity illustrating utilization scenarios, projected revenue, and EBITDA.",
        title: "Financial Opportunity",
      },
    ],

    documents: [
      {
        title: "Investor Pitch Deck",
        description:
          "Explore the complete investor presentation, including the market opportunity, business model, financial projections, investment strategy, and development roadmap prepared for Launch Lab Sports.",
        type: "PDF",
        file: "/documents/launch-lab-sports/deliverable.pdf",
      },
    ],
  },
  // Other projects...
];
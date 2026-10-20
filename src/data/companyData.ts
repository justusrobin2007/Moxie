export interface ProjectItem {
  id: string;
  srNo: number;
  title: string;
  category: 'Substation & Grid' | 'Renewable Solar' | 'Data Centre' | 'Industrial & Agro' | 'Commercial & Healthcare' | 'CEIG Inspection';
  scope: string;
  clientOrDeveloper: string;
  state: 'Tamil Nadu' | 'Telangana' | 'Andhra Pradesh' | 'Andaman & Nicobar';
  locationDetail: string;
  costInLakhs?: number; // In Lakhs as documented in brochure
  year: number;
  status: 'Completed' | 'Under Execution';
  verifiedInBrochure: boolean;
  highlights: string[];
  imageUrl?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: 'Civil Infrastructure' | 'Electrical Turnkey' | 'MEP & Building' | 'Fire & Life Safety' | 'Statutory & CEIG';
  shortDesc: string;
  fullDesc: string;
  voltageClass?: string;
  standards: string[];
  deliverables: string[];
  scopePoints: string[];
  projectExamples: string[];
  imageUrl?: string;
}

export interface VerificationItem {
  id: string;
  field: string;
  status: 'Verified by Brochure' | 'Client to Confirm' | 'Clarified Relation';
  brochureSource: string;
  currentValue: string;
  notes: string;
}

export const COMPANY_INFO = {
  name: "Moxie Infratech Pvt Ltd",
  shortName: "MIPL",
  tagline: "Reliable. Scalable. Built to Last.",
  coreIdea: "Engineering the infrastructure that moves industry.",
  foundingAge: "7+ Years of Registered Engineering Operations",
  statesActive: ["Tamil Nadu", "Telangana", "Andhra Pradesh", "Andaman & Nicobar"],
  primaryCapabilities: "EHV Substation Civil Works & Electrical Turnkey EPC",
  
  leadership: [
    {
      name: "Mr. P. Srinivasa Prakash",
      credentials: "B.E. (EEE)",
      role: "Managing Director",
      experienceYears: "22+ Years",
      domain: "Industrial & Power Sector Segments",
      summary: "Extensive background in design and erection of HV & EHV substations (up to 400kV) and EHV transmission lines. Previously led and successfully executed industrial and power projects exceeding ₹350+ Crores as SBU lead.",
      keyStrengths: [
        "HV & EHV Substation Design up to 400kV",
        "EHV Line Engineering & Erection",
        "Strategic Business Unit (SBU) Leadership",
        "Mega-Project Budgeting & Turnkey Execution (>₹350 Cr Track Record)"
      ]
    },
    {
      name: "Dr. G. Subashini",
      credentials: "B.PT., CPC, CPC-H",
      role: "Director (Admin & HR)",
      experienceYears: "21+ Years",
      domain: "Quality & Project Management",
      summary: "Over two decades of multidisciplinary experience across MNC organizations. Holds Six Sigma Green Belt certification in quality and specialized medical coding credentials (CPC, CPC-H). Leads organizational governance, quality stabilization, and administrative operations.",
      keyStrengths: [
        "Six Sigma Green Belt Quality Standardization",
        "MNC-grade Administrative Protocols",
        "Workforce Training & Project Management",
        "Compliance & HR Operations"
      ]
    }
  ],

  keyPersonnel: [
    { name: "Mr. Vetriselvan", role: "Manager", department: "Electrical Department" },
    { name: "Mr. Bosco", role: "Manager", department: "Electrical Department" },
    { name: "Mr. Arun Kumar", role: "Sr. Engineer", department: "Electrical Department" },
    { name: "Mr. Parri", role: "Manager", department: "Administration & Accounts" }
  ],

  offices: [
    {
      city: "Chennai",
      type: "Registered Corporate Office",
      address: "3/485, Mogappair West, Chennai - 600037, Tamil Nadu",
      phone: "+91 8220223232",
      email: "moxieinfratech@gmail.com",
      mapQuery: "3/485, Mogappair West, Chennai 600037",
      isPrimary: true
    },
    {
      city: "Coimbatore",
      type: "Regional Engineering Office",
      address: "11/91, Kamatchipuram, Ondipudur Post, Coimbatore - 641 016, Tamil Nadu",
      phone: "+91 8220223232",
      email: "moxieinfratech@gmail.com",
      mapQuery: "11/91, Kamatchipuram, Ondipudur, Coimbatore 641016",
      isPrimary: false
    }
  ],

  coreValues: [
    {
      title: "Customer Delight",
      description: "To surpass customer expectations by functioning as a transparent, responsive, customer-controlled project delivery unit."
    },
    {
      title: "Professionalism",
      description: "An unyielding commitment towards technical integrity, engineering accuracy, and complete transparency in contractual execution."
    },
    {
      title: "Pursuit of Excellence",
      description: "Striving relentlessly to optimize methods, adopt technological upgrades, and set higher industry standards in safety and durability."
    }
  ],

  commitments: [
    "Integrated planning of all civil, structural, and electrical services for coordinated operation.",
    "Introduction of modern construction technologies with direct lifecycle cost benefits.",
    "Strict adherence to Cost, Quality, and Time as the foundational pillars of project delivery.",
    "New benchmarks in MEP and substation civil execution through Six Sigma quality control.",
    "Responsible engineering practices that actively minimize wastage of water, energy, and construction materials."
  ]
};

export const VERIFIED_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    srNo: 1,
    title: "11kV Feeder Bay Installation - NLC Solar Power Plant",
    category: "Renewable Solar",
    scope: "11kV Feeder bay erection, testing, and commissioning for utility solar generation",
    clientOrDeveloper: "M/s. Bondada Engineering Ltd",
    state: "Tamil Nadu",
    locationDetail: "Neyveli Lignite Corporation (NLC) Solar Park, Tamil Nadu",
    costInLakhs: 117.95,
    year: 2025,
    status: "Under Execution",
    verifiedInBrochure: true,
    highlights: ["11kV Switchyard Bay", "Protection Relays Integration", "CEIG Clearance Prep"]
  },
  {
    id: "proj-2",
    srNo: 2,
    title: "11kV Underground Cabling Network - NLC Solar Plant",
    category: "Renewable Solar",
    scope: "11kV Underground power and control cable trenching, laying, and terminations",
    clientOrDeveloper: "M/s. Bondada Engineering Ltd",
    state: "Tamil Nadu",
    locationDetail: "NLC Solar Power Plant, Tamil Nadu",
    costInLakhs: 35.10,
    year: 2025,
    status: "Under Execution",
    verifiedInBrochure: true,
    highlights: ["Underground XLPE Cabling", "High-stress Joints & Terminations", "Cable Ducting & Trenching"]
  },
  {
    id: "proj-3",
    srNo: 3,
    title: "Testing & CEIG Statutory Inspection - NLC Solar Plant",
    category: "CEIG Inspection",
    scope: "Pre-commissioning statutory testing, insulation testing, and CEIG approval facilitation",
    clientOrDeveloper: "M/s. Bondada Engineering Ltd",
    state: "Tamil Nadu",
    locationDetail: "NLC Solar Power Plant, Tamil Nadu",
    costInLakhs: 3.25,
    year: 2025,
    status: "Under Execution",
    verifiedInBrochure: true,
    highlights: ["CEIG Inspectorate Certification", "Relay Calibration", "Safety Earthing Verification"]
  },
  {
    id: "proj-4",
    srNo: 4,
    title: "Turnkey Electrical & Plumbing Systems - Athira Hospital",
    category: "Commercial & Healthcare",
    scope: "End-to-end turnkey MEP, hospital electrical distribution, sanitary and PHE works",
    clientOrDeveloper: "M/s. Athira Hospital",
    state: "Tamil Nadu",
    locationDetail: "Athira Hospital Campus, Tamil Nadu",
    costInLakhs: 47.00,
    year: 2024,
    status: "Under Execution",
    verifiedInBrochure: true,
    highlights: ["Critical Care Isolated Power", "Sanitary & Drainage Networks", "Emergency Generator Coupling"]
  },
  {
    id: "proj-5",
    srNo: 5,
    title: "Modern Feed Mill Industrial Electrification & Commissioning",
    category: "Industrial & Agro",
    scope: "Complete erection, testing, and commissioning of electrical power systems at feed processing facility",
    clientOrDeveloper: "M/s. Abricate",
    state: "Tamil Nadu",
    locationDetail: "Feed Processing Facility, Tamil Nadu",
    costInLakhs: 27.35,
    year: 2025,
    status: "Under Execution",
    verifiedInBrochure: true,
    highlights: ["Motor Control Centres", "Process Automation Feeders", "Plant Power Factor Correction"]
  },
  {
    id: "proj-6",
    srNo: 6,
    title: "33/110kV Solar Pooling Substation - Sirungattur",
    category: "Substation & Grid",
    scope: "Comprehensive civil foundation works, switchyard structures, and 33/110kV pooling substation integration",
    clientOrDeveloper: "M/s. Excell Power Projects",
    state: "Tamil Nadu",
    locationDetail: "Sirungattur Solar Park, Tamil Nadu",
    costInLakhs: 201.02,
    year: 2025,
    status: "Under Execution",
    verifiedInBrochure: true,
    highlights: ["33/110kV Transformer Foundations", "Control Room RCC Construction", "Gantry Tower Bases"]
  },
  {
    id: "proj-7",
    srNo: 7,
    title: "TNEB 110kV Bay Expansion Work - Sirungattur",
    category: "Substation & Grid",
    scope: "110kV Grid interconnection bay construction compliant with TANGEDCO / TNEB utility specifications",
    clientOrDeveloper: "M/s. Excell Power Projects",
    state: "Tamil Nadu",
    locationDetail: "Sirungattur, Tamil Nadu",
    costInLakhs: 25.00,
    year: 2025,
    status: "Under Execution",
    verifiedInBrochure: true,
    highlights: ["TNEB Utility Grid Standards", "Bay Equipment Foundations", "Safety Grounding Mat"]
  },
  {
    id: "proj-8",
    srNo: 8,
    title: "33/110kV Solar Pooling Substation - Mondipatti",
    category: "Substation & Grid",
    scope: "Full civil execution for 33/110kV hybrid GIS solar pooling substation, transformer pads, and control buildings",
    clientOrDeveloper: "M/s. Excell Power Projects",
    state: "Tamil Nadu",
    locationDetail: "Mondipatti, Tamil Nadu",
    costInLakhs: 272.93,
    year: 2024,
    status: "Completed",
    verifiedInBrochure: true,
    highlights: ["Hybrid GIS Platform", "Heavy Transformer Raft Foundation", "Oil Containment Pit & Firewalls"]
  },
  {
    id: "proj-9",
    srNo: 9,
    title: "TNEB 110kV Bay Work - Mondipatti",
    category: "Substation & Grid",
    scope: "110/220kV AIS substation 110kV bay civil works, switchyard equipment stands, and ducting",
    clientOrDeveloper: "M/s. Excell Power Projects",
    state: "Tamil Nadu",
    locationDetail: "Mondipatti, Tamil Nadu",
    costInLakhs: 14.20,
    year: 2024,
    status: "Completed",
    verifiedInBrochure: true,
    highlights: ["110kV AIS Switchyard Bay", "Precast Trenching with Covers", "Security Perimeter Interfacing"]
  },
  {
    id: "proj-10",
    srNo: 10,
    title: "33/110kV Solar Pooling Substation - Pennagaram",
    category: "Substation & Grid",
    scope: "Full civil construction and switchyard yard preparation for high-capacity solar pooling station",
    clientOrDeveloper: "M/s. Excell Power Projects",
    state: "Tamil Nadu",
    locationDetail: "Pennagaram, Tamil Nadu",
    costInLakhs: 175.21,
    year: 2025,
    status: "Under Execution",
    verifiedInBrochure: true,
    highlights: ["Substation Site Grading", "33/110kV Equipment Plinths", "Earthing Grid Integration"]
  },
  {
    id: "proj-11",
    srNo: 11,
    title: "Statutory CEIG Inspection & Testing - Multi-City Cluster",
    category: "CEIG Inspection",
    scope: "Statutory electrical testing and Chief Electrical Inspectorate certification across multiple regional facilities",
    clientOrDeveloper: "M/s. Reliance Industries Ltd",
    state: "Tamil Nadu",
    locationDetail: "Chennai, Madurai, Salem & Pondicherry Hubs",
    costInLakhs: 7.25,
    year: 2024,
    status: "Completed",
    verifiedInBrochure: true,
    highlights: ["CEIG Regulatory Approvals", "Multi-City Dispatch", "High-Voltage Testing Protocol"]
  },
  {
    id: "proj-12",
    srNo: 12,
    title: "Statutory CEIG Inspection & Testing Follow-up Cluster",
    category: "CEIG Inspection",
    scope: "Ongoing annual and capacity-addition CEIG inspection across commercial assets",
    clientOrDeveloper: "M/s. Reliance Industries Ltd",
    state: "Tamil Nadu",
    locationDetail: "Chennai, Madurai, Salem & Pondicherry Hubs",
    costInLakhs: 4.25,
    year: 2025,
    status: "Under Execution",
    verifiedInBrochure: true,
    highlights: ["Safety Earthing Verification", "Transformer Oil BDV Testing", "Protection Scheme Audit"]
  },
  {
    id: "proj-13",
    srNo: 13,
    title: "CEIG Inspection & Testing - Krishnagiri Facility",
    category: "CEIG Inspection",
    scope: "Statutory industrial power testing and electrical safety certification",
    clientOrDeveloper: "M/s. Good Crop Industries",
    state: "Tamil Nadu",
    locationDetail: "Krishnagiri, Tamil Nadu",
    costInLakhs: 0.90,
    year: 2025,
    status: "Under Execution",
    verifiedInBrochure: true,
    highlights: ["Industrial Sub-station Inspection", "Earthing Resistance Test", "Clearance Certificate Issued"]
  },
  {
    id: "proj-14",
    srNo: 14,
    title: "Statutory CEIG Inspection & Testing - Island Facilities",
    category: "CEIG Inspection",
    scope: "Critical remote testing and statutory electrical audit of offshore infrastructure",
    clientOrDeveloper: "M/s. Reliance Industries Ltd",
    state: "Andaman & Nicobar",
    locationDetail: "Port Blair & Outlying Hubs, Andaman & Nicobar Islands",
    costInLakhs: 3.20,
    year: 2025,
    status: "Under Execution",
    verifiedInBrochure: true,
    highlights: ["Island Logistics Mobilization", "Tropical Humidity Insulation Testing", "CEIG Compliance Dossier"]
  },
  {
    id: "proj-15",
    srNo: 15,
    title: "Internal Road, Storm Drainage & Waist Slab - JIO Data Centre",
    category: "Data Centre",
    scope: "Civil infrastructure, high-load internal concrete roads, engineered storm water drains, and heavy waist slab works for hyperscale facility",
    clientOrDeveloper: "M/s. Reliance Industries Ltd",
    state: "Tamil Nadu",
    locationDetail: "JIO Data Centre, Siruseri IT Corridor, Chennai",
    costInLakhs: 39.02,
    year: 2024,
    status: "Completed",
    verifiedInBrochure: true,
    highlights: ["Hyperscale Data Centre Yard", "High-Axle-Load Concrete Road", "Heavy-Duty Storm Water Culverts"]
  },
  {
    id: "proj-16",
    srNo: 16,
    title: "Trichy MCN Building Fire Fighting Water Storage & Plant Structure",
    category: "Data Centre",
    scope: "Construction of underground fire-fighting reservoir, overhead tank, and associated pump house building for telecom server hall",
    clientOrDeveloper: "M/s. Reliance Industries Ltd",
    state: "Tamil Nadu",
    locationDetail: "MCN Building - Server Hall, Trichy, Tamil Nadu",
    costInLakhs: 60.76,
    year: 2025,
    status: "Under Execution",
    verifiedInBrochure: true,
    highlights: ["Underground Water Retention Tank", "Dedicated Fire Pump House", "RCC Elevated Overhead Reservoir"]
  },
  {
    id: "proj-17",
    srNo: 17,
    title: "Electrification of AT Pole Manufacturing Factory",
    category: "Industrial & Agro",
    scope: "Complete factory electrification, heavy crane bus ducts, motor wiring, and main switchboard installation",
    clientOrDeveloper: "M/s. Bondada Engineering Ltd",
    state: "Telangana",
    locationDetail: "Industrial Development Area, Hyderabad, Telangana",
    costInLakhs: 22.36,
    year: 2025,
    status: "Completed",
    verifiedInBrochure: true,
    highlights: ["Heavy Industrial Electrification", "High-Bay Factory Lighting", "Shop Floor Busbar Trunking"]
  },
  {
    id: "proj-18",
    srNo: 18,
    title: "Supply of Industrial Electrical Panels",
    category: "Industrial & Agro",
    scope: "Supply of low voltage distribution and motor control panels for heavy cement manufacturing facility",
    clientOrDeveloper: "M/s. Chettinad Cements",
    state: "Tamil Nadu",
    locationDetail: "Cement Manufacturing Complex, Tamil Nadu",
    costInLakhs: 33.65,
    year: 2025,
    status: "Completed",
    verifiedInBrochure: true,
    highlights: ["Heavy-duty LV Panels", "Enclosure IP54 Rated", "Factory Acceptance Testing"]
  },
  {
    id: "proj-19",
    srNo: 19,
    title: "Supply of Panels - Annual Rate Contract (ARC)",
    category: "Industrial & Agro",
    scope: "Annual rate contract for ongoing supply of distribution and motor control panel boards",
    clientOrDeveloper: "M/s. Chettinad Cements",
    state: "Tamil Nadu",
    locationDetail: "Cement Manufacturing Complex, Tamil Nadu",
    costInLakhs: undefined, // Cost open under ARC
    year: 2025,
    status: "Under Execution",
    verifiedInBrochure: true,
    highlights: ["ARC Delivery Schedule", "Standardized Modular Switchgear", "Preventive Spares Support"]
  },
  {
    id: "proj-20",
    srNo: 20,
    title: "Electrification of Environmental Controlled Poultry Shed",
    category: "Industrial & Agro",
    scope: "Automated climate-control wiring, sensor loops, ventilation power, and emergency standby power",
    clientOrDeveloper: "M/s. Kasturi Poultry Farms",
    state: "Tamil Nadu",
    locationDetail: "Tamil Nadu",
    costInLakhs: 27.99,
    year: 2024,
    status: "Completed",
    verifiedInBrochure: true,
    highlights: ["Automated Climate Control Electrification", "Dual Source Auto-Changeover", "High-Moisture Conduit Layout"]
  },
  {
    id: "proj-21",
    srNo: 21,
    title: "Corporate Administration Office Electrical Fitout",
    category: "Commercial & Healthcare",
    scope: "LV distribution, architectural lighting design, small power sockets, and UPS wiring for corporate office",
    clientOrDeveloper: "M/s. Kothari Petrochemical Ltd",
    state: "Tamil Nadu",
    locationDetail: "Tamil Nadu",
    costInLakhs: 2.63,
    year: 2025,
    status: "Completed",
    verifiedInBrochure: true,
    highlights: ["Office Power Distribution", "Precision LED Lighting", "Structured Networking Points"]
  },
  {
    id: "proj-22",
    srNo: 22,
    title: "Electrical & Plumbing Infrastructure - Large Agro Breeding Farm",
    category: "Industrial & Agro",
    scope: "Combined electrical power installation and sanitary/water distribution network",
    clientOrDeveloper: "M/s. Sri Nadiambal Breeding Farm",
    state: "Tamil Nadu",
    locationDetail: "Tamil Nadu",
    costInLakhs: 28.00,
    year: 2025,
    status: "Completed",
    verifiedInBrochure: true,
    highlights: ["Integrated Electrical & PHE", "High Pressure Water Distribution", "Pumping Stations"]
  }
];

export const CLIENT_LOGOS = [
  { name: "Reliance Industries Ltd", type: "Fortune 500 Infrastructure & Telecom" },
  { name: "Bondada Engineering Ltd", type: "EPC Infrastructure Leader" },
  { name: "Excell Power Projects", type: "Utility Substation Developers" },
  { name: "Chettinad Cements", type: "Heavy Industrial Manufacturing" },
  { name: "NLC India Ltd (Solar)", type: "Navratna PSU Power Generation" },
  { name: "Kothari Petrochemicals", type: "Petrochemicals & Process Plant" },
  { name: "Andhra Pradesh Government", type: "Public Infrastructure & T&D" },
  { name: "Lotus Wireless India", type: "Transmission & Distribution" },
  { name: "Keystone India Pvt Ltd", type: "Engineering & Construction" },
  { name: "Athira Hospital", type: "Healthcare Infrastructure" }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "substation-civil",
    slug: "substation-civil-works",
    title: "Substation Civil Works (11kV to 765kV)",
    category: "Civil Infrastructure",
    voltageClass: "11kV to 765kV Capabilities",
    shortDesc: "End-to-end civil execution for EHV electrical substations, hybrid GIS switchyards, and utility pooling infrastructure.",
    fullDesc: "Moxie Infratech provides turnkey civil engineering solutions engineered specifically for extra-high-voltage (EHV) substations, high-voltage switchyards, and renewable pooling stations. From deep geotechnical site grading to heavy-duty transformer plinths and blast-resistant firewall containment systems, our civil teams deliver robust, regulation-compliant infrastructure built to withstand dynamic seismic, thermal, and short-circuit mechanical stresses.",
    standards: ["IS 456 (Plain & Reinforced Concrete)", "IS 875 (Design Loads)", "IEC 61936-1 (Power Installations)", "CBIP Manual (Substations)"],
    deliverables: [
      "Precision Site Grading & Earthworks (Soil excavation, compaction, sub-grade stabilization)",
      "Heavy Equipment & Transformer Foundations (Pile, raft, and isolated footing systems)",
      "Gas Insulated Substation (GIS) & Hybrid GIS Hall Foundations",
      "Control Room Buildings (RCC & Pre-Engineered Building / PEB structures)",
      "Cable Trenching with RCC / Precast covers and drainage integration",
      "Perimeter Security Walls, Heavy Culverts, Access Roads & Guardhouses",
      "Switchyard Yard Gravelling, Oil Containment Pits, Firewalls & Lightning Protection"
    ],
    scopePoints: [
      "Sub-grade preparation and dynamic load calculation for power transformers",
      "Specialized GIS indoor hall floor levelling with laser tolerances",
      "Oil containment pits with connected drainage and oil-water separation sumps",
      "RCC cable trenches with hot-dip galvanized steel angle edging and precast slabs",
      "EHV yard gravelling (100mm-150mm clean granite ballast) for step-and-touch potential safety"
    ],
    projectExamples: [
      "33/110kV Hybrid GIS Solar Pooling Substation, Mondipatti (₹272.93 Lakhs)",
      "33/110kV Solar Pooling Substation, Sirungattur (₹201.02 Lakhs)",
      "33/110kV Solar Pooling Substation, Pennagaram (₹175.21 Lakhs)",
      "110/220kV AIS Substation Bay Expansion, Mondipatti (₹14.20 Lakhs)"
    ]
  },
  {
    id: "electrical-turnkey",
    slug: "electrical-infrastructure-turnkey",
    title: "Electrical Infrastructure & Electrification",
    category: "Electrical Turnkey",
    voltageClass: "Up to 33kV & EHV Substations up to 400kV Leadership",
    shortDesc: "Complete industrial electrification, HT/LT power distribution, plant design, and switchgear installation.",
    fullDesc: "We provide comprehensive electrical turnkey contracting encompassing design calculations, procurement support, erection, testing, and commissioning. Led by technical directors with over two decades of HV/EHV substation engineering experience, Moxie delivers high-reliability industrial power distribution networks that guarantee maximum uptime and optimal power factor.",
    standards: ["IS 732 (Code of Practice for Electrical Wiring)", "IS 3043 (Earthing Practice)", "IEEE 80 (Substation Grounding)", "Central Electricity Authority (CEA) Regulations"],
    deliverables: [
      "HT/LT Electrical Power Distribution Networks up to 33kV",
      "Substation Plant Design (Transformers, Generators, Switchgear)",
      "Power Factor Correction (APFC) & Harmonic Filtration",
      "Clean Earth Systems, Chemical Earthing & Safety Grounding Mats",
      "Busbar Trunking, High-Ampacity Cable Trays & Ladder Racks",
      "Captive Power Plants (Diesel Generators / Solar PV Synchronization)",
      "Online UPS Systems and Dual-Source Emergency / Normal Power Segregation"
    ],
    scopePoints: [
      "Fault current calculations, protection relay coordination, and breaker sizing",
      "High-voltage cable terminations (heat shrink & cold shrink kits) with partial discharge verification",
      "Industrial lighting lux calculations and energy-efficient LED deployment",
      "Temporary power distribution networks for mega industrial construction phases",
      "Power quality audits and power conditioning design for sensitive electronic loads"
    ],
    projectExamples: [
      "11kV Feeder Bay & Underground Cabling - NLC Solar Power Plant (₹153 Lakhs)",
      "Factory Electrification & AT Pole Production Facility, Hyderabad (₹22.36 Lakhs)",
      "Feed Processing Mill Electrical Erection & Commissioning, TN (₹27.35 Lakhs)",
      "Environmental Controlled Facility Electrification, Kasturi Farms (₹27.99 Lakhs)"
    ]
  },
  {
    id: "mep-phe",
    slug: "turnkey-mep-phe-services",
    title: "Turnkey MEP & Public Health Engineering (PHE)",
    category: "MEP & Building",
    shortDesc: "Integrated mechanical, electrical, and plumbing solutions for commercial complexes, data centres, and industrial plants.",
    fullDesc: "Moxie Infratech executes integrated MEP and PHE systems designed to coordinate seamlessly across civil structures. We handle entire water lifecycle management—from raw water treatment plants (WTP) to hydro-pneumatic booster networks, rainwater harvesting, sewage disposal (STP), and industrial effluent routing (ETP).",
    standards: ["National Building Code of India (NBC 2016)", "Uniform Plumbing Code (UPC-I)", "CPHEEO Manual on Water Supply & Sewerage"],
    deliverables: [
      "Engineering Design Calculations for Hydraulic & Drainage Loads",
      "Storm Water Collection, Retention Ponds & Sustainable Disposal Systems",
      "Internal & External Sewerage, Soil, Waste & Vent Piping",
      "Water Softening, Reverse Osmosis & Water Treatment Systems (WTP)",
      "Effluent Treatment (ETP) and Sewage Treatment Plants (STP)",
      "Hydro-Pneumatic Pumping & Dual-Gravity Treated Water Distribution",
      "Rainwater Harvesting, Ground Recharge Wells & Finished Level Coordination"
    ],
    scopePoints: [
      "Precise hydraulic sizing to eliminate pressure drops and water hammer effects",
      "Acoustic insulation and vibration isolation for booster pump skids",
      "High-density polyethylene (HDPE) and UPVC piping joint electrofusion",
      "Integration with Building Management Systems (BMS) for automated leak detection and tank level telemetry"
    ],
    projectExamples: [
      "JIO Data Centre Internal Roads & Storm Water Drainage Network, Siruseri (₹39.02 Lakhs)",
      "Turnkey MEP & Hospital Sanitary Systems, Athira Hospital (₹47.00 Lakhs)",
      "Integrated Electrical & Plumbing Systems, Sri Nadiambal Agro Complex (₹28.00 Lakhs)"
    ]
  },
  {
    id: "fire-safety",
    slug: "fire-fighting-alarm-systems",
    title: "Fire Protection & Addressable Alarm Systems",
    category: "Fire & Life Safety",
    shortDesc: "Life safety systems including wet risers, automatic sprinklers, fire pump rooms, and addressable detection networks.",
    fullDesc: "Safeguarding mission-critical industrial assets, substations, and high-rise commercial structures through comprehensive active fire protection. Our engineering covers dedicated underground fire storage reservoirs, multi-stage fire pumping stations (jockey, main electric, diesel standby), deluge water spray systems for transformers, and intelligent analog/digital addressable alarm arrays.",
    standards: ["NFPA 13, 15 & 72", "IS 15105 (Design & Installation of Fixed Automatic Sprinkler Systems)", "NBC Fire & Life Safety Part IV"],
    deliverables: [
      "Dedicated Fire Water Underground Retention Tanks & RCC Overhead Reservoirs",
      "Fire Hydrant Networks, External Yard Hydrants, Hose Reels & Landing Valves",
      "Automatic High-Velocity Water Spray (HVWS) for Power Transformers",
      "Multi-Pump Skid Arrays (Jockey Pump, Main Motor Pump, Diesel Standby Engine)",
      "Analog & Digital Addressable Fire Alarm Systems (FAS) with Multi-Criteria Detectors",
      "Integration with HVAC Fire Dampers, Smoke Evacuation & BMS",
      "Public Address & Voice Alarm (PA/VA) Systems and High-Decibel Hooters"
    ],
    scopePoints: [
      "Hydraulic calculation using Hazen-Williams methodology to guarantee nozzle pressure",
      "Transformer deluge systems designed to control high-energy mineral oil conflagrations",
      "Zonal addressable loop architecture with fault-isolator modules every 20 devices",
      "Fail-safe automatic start controllers for diesel emergency pumps with battery redundancy"
    ],
    projectExamples: [
      "Trichy MCN Server Hall Underground Fire Tank, OH Reservoir & Building (₹60.76 Lakhs)",
      "Fire Hydrant & Safety Deluge Network for Substation Transformers"
    ]
  },
  {
    id: "statutory-ceig",
    slug: "statutory-ceig-inspection-testing",
    title: "Testing, Commissioning & CEIG Statutory Compliance",
    category: "Statutory & CEIG",
    voltageClass: "HT/LT & EHV Grid Interfaces",
    shortDesc: "Pre-commissioning diagnostic testing, relay calibration, and Chief Electrical Inspectorate (CEIG) government clearances.",
    fullDesc: "Obtaining statutory electrical approvals and ensuring absolute operational safety before energization. Moxie Infratech's testing division performs exhaustive primary and secondary injection tests, insulation resistance audits, earth electrode grid dissipation checks, and transformer oil breakdown voltage (BDV) analyses, followed by complete liaison with the Chief Electrical Inspector to Government (CEIG).",
    standards: ["Central Electricity Authority (Safety Requirements) Regulations", "Indian Electricity Rules 1956", "IS 2026 (Power Transformers)"],
    deliverables: [
      "Preparation of Statutory CEIG Drawing Submissions & Single Line Diagrams (SLD)",
      "Pre-Commissioning Insulation Resistance (Megger) & Polarization Index (PI) Testing",
      "Earth Pit Resistance Testing & Earth Continuity Certification",
      "Transformer Ratio, Vector Group, Winding Resistance & Oil BDV Diagnostics",
      "Numeric & Microprocessor Protection Relay Calibration (Overcurrent, Earth Fault, Differential)",
      "High Potential (Hi-Pot) Withstand Testing on HT Cables and Switchgear",
      "Facilitation of Official CEIG Physical Inspection and Safety Energization Certificate"
    ],
    scopePoints: [
      "Calibrated test kits with NABL traceable calibration certificates",
      "Multi-region deployment across South India and Island territories (Andaman & Nicobar)",
      "Rapid resolution of inspectorate compliance observations and sign-offs"
    ],
    projectExamples: [
      "Reliance Industries Cluster CEIG Inspections - Chennai, Madurai, Salem, Pondicherry (2024 & 2025)",
      "Reliance Industries CEIG Inspection - Andaman & Nicobar Island Assets (2025)",
      "NLC Solar Power Plant Statutory Testing & CEIG Clearance (2025)",
      "Good Crop Industries HT Substation CEIG Inspection, Krishnagiri (2025)"
    ]
  }
];

export const INDUSTRIES_SERVED = [
  {
    id: "power-utilities",
    title: "Power Utilities & Transmission Grids",
    icon: "Zap",
    metric: "11kV to 765kV Capabilities",
    desc: "Turnkey civil substation development, 110kV/220kV bay works, and switchyard modernization adhering to state transmission utility standards (TNEB, TANGEDCO, AP Transco, TG Transco).",
    verifiedReferences: ["TNEB 110kV Bay - Mondipatti", "TNEB 110kV Bay - Sirungattur", "AP Govt. Utilities"]
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy (Solar & Wind Pooling)",
    icon: "Sun",
    metric: "Multi-Megawatt Pooling Substations",
    desc: "End-to-end civil foundations, hybrid GIS platforms, HT underground cabling, and transformer yards for large-scale solar power plants and wind pooling hubs.",
    verifiedReferences: ["33/110kV Hybrid GIS Substation, Mondipatti", "NLC Solar Power Plant", "33/110kV Substation, Pennagaram"]
  },
  {
    id: "data-centres",
    title: "Data Centres & Mission-Critical Facilities",
    icon: "Server",
    metric: "Tier III / IV Grade Civil Infrastructure",
    desc: "High-axle internal concrete roads, deep storm drainage, heavy equipment waist slabs, and specialized fire containment reservoirs for hyperscale telecom and server hall facilities.",
    verifiedReferences: ["Reliance Industries JIO Data Centre, Siruseri", "Reliance Industries MCN Server Hall, Trichy"]
  },
  {
    id: "industrial-plants",
    title: "Heavy Industrial & Process Plants",
    icon: "Factory",
    metric: "Heavy Motor Control & HT/LT Distribution",
    desc: "Total plant electrification, motor control centres (MCC), bus ducting, process automation wiring, and safety earthing for cement, petrochemical, and manufacturing complexes.",
    verifiedReferences: ["Chettinad Cements", "Kothari Petrochemicals", "Bondada AT Pole Factory, Hyderabad", "Modern Feed Mill"]
  },
  {
    id: "railways-metro",
    title: "Railways & Urban Transit",
    icon: "Train",
    metric: "Traction Substation & Power Feeding",
    desc: "Specialized civil foundations and electrical power feeding infrastructure supporting urban transit, metro lines, and utility traction substations.",
    verifiedReferences: ["Documented Industry Sector in Civil & Electrical Brochures"]
  },
  {
    id: "oil-gas",
    title: "Oil & Gas Terminals",
    icon: "Flame",
    metric: "Hazardous Area Compliance & Flameproof Safety",
    desc: "Robust containment works, explosion-proof electrical fittings, and deluge water spray systems engineered for hydrocarbons and fuel storage installations.",
    verifiedReferences: ["Documented Industry Sector in Civil & Electrical Brochures"]
  }
];

export const CONTENT_VERIFICATION_CHECKLIST: VerificationItem[] = [
  {
    id: "ver-1",
    field: "Company Independence vs Ingaran",
    status: "Clarified Relation",
    brochureSource: "Civil Brochure Page 4 & User Brief",
    currentValue: "Moxie Infratech is an independent EPC contractor owned by the client. Ingaran Power Controls Pvt Ltd is a separate panel manufacturing partner.",
    notes: "Ingaran is strictly not presented as a subsidiary, division, or internal arm of Moxie on the public site."
  },
  {
    id: "ver-2",
    field: "Managing Director Qualifications",
    status: "Verified by Brochure",
    brochureSource: "Electrical Brochure Page 2 & Page 8",
    currentValue: "Mr. P. Srinivasa Prakash, B.E. (EEE) — 22+ Years in HV/EHV Substations up to 400kV, led ₹350+ Cr projects in previous organizations.",
    notes: "100% matched to brochure source text."
  },
  {
    id: "ver-3",
    field: "Director (Admin & HR) Credentials",
    status: "Verified by Brochure",
    brochureSource: "Electrical Brochure Page 2 & Page 8",
    currentValue: "Dr. G. Subashini, B.PT., CPC, CPC-H — 21+ Years, Six Sigma Green Belt in Quality.",
    notes: "100% matched to brochure source text."
  },
  {
    id: "ver-4",
    field: "Registered Offices & Contact Numbers",
    status: "Verified by Brochure",
    brochureSource: "Civil Brochure Page 4 & Electrical Brochure Page 9",
    currentValue: "Chennai: 3/485, Mogappair West, 600037 | Coimbatore: 11/91, Kamatchipuram, Ondipudur, 641016 | Phone: +91 8220223232 | Email: moxieinfratech@gmail.com",
    notes: "Both addresses and single official contact phone/email accurately mirrored."
  },
  {
    id: "ver-5",
    field: "Major Projects Data & Costs",
    status: "Verified by Brochure",
    brochureSource: "Electrical Brochure Page 7 (Table of 22 Projects)",
    currentValue: "All 22 project titles, developers, states, costs in Lakhs, years (2024, 2025), and execution statuses preserved.",
    notes: "Exact costs recorded (e.g. ₹272.93L for Mondipatti 33/110kV, ₹201.02L for Sirungattur 33/110kV, ₹117.95L for NLC Feeder Bay)."
  },
  {
    id: "ver-6",
    field: "Substation Capabilities Range",
    status: "Verified by Brochure",
    brochureSource: "Civil Brochure Page 3 ('11kV to 765kV')",
    currentValue: "Substation civil execution solutions from 11kV to 765kV.",
    notes: "Direct claim from civil brochure."
  },
  {
    id: "ver-7",
    field: "Annual Corporate Turnover",
    status: "Client to Confirm",
    brochureSource: "Not provided in brochures",
    currentValue: "[CLIENT TO CONFIRM: ANNUAL TURNOVER / METRIC]",
    notes: "Intentionally excluded from public hero/stats to prevent fictitious claims."
  },
  {
    id: "ver-8",
    field: "ISO / Specific Safety Certifications",
    status: "Client to Confirm",
    brochureSource: "Brochures cite 'Adherence to IS, IEC, and client-specific standards' and 'Six Sigma Green belt certificate in quality'",
    currentValue: "Adherence to IS & IEC technical standards; Six Sigma process governance.",
    notes: "Specific ISO numbers (e.g. ISO 9001:2015, ISO 45001) not claimed until verified."
  }
];

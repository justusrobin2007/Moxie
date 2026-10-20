import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, ShieldCheck, Layers, Sparkles } from 'lucide-react';

interface ProjectCostEstimatorProps {
  onPreFillRFQ: (estimatedScope: {
    category: string;
    voltage: string;
    modules: string[];
    timelineEst: string;
  }) => void;
}

export const ProjectCostEstimator: React.FC<ProjectCostEstimatorProps> = ({ onPreFillRFQ }) => {
  const [selectedCategory, setSelectedCategory] = useState<'civil' | 'electrical' | 'mep' | 'ceig'>('civil');
  const [voltage, setVoltage] = useState('33/110kV');
  const [stateLocation, setStateLocation] = useState('Tamil Nadu');
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'Transformer Plinth & Raft Foundations',
    'RCC Cable Trenches with Precast Slabs'
  ]);

  const categories = [
    { id: 'civil', label: 'Substation Civil Works', sub: '11kV to 765kV Solutions' },
    { id: 'electrical', label: 'Electrical Infrastructure', sub: 'HT/LT & EHV Substation Works' },
    { id: 'mep', label: 'Turnkey MEP & PHE', sub: 'Commercial, Plant & Data Centres' },
    { id: 'ceig', label: 'Statutory CEIG Compliance', sub: 'Testing, Safety & Energization' }
  ];

  const voltageOptions = {
    civil: ['11kV / 22kV', '33/110kV Hybrid GIS / AIS', '110/220kV Grid Bay', '400kV EHV', '765kV Mega Yard'],
    electrical: ['415V LT Distribution', '11kV Industrial Feed', '33kV Substation', '66kV/110kV Switchyard', '400kV Power System'],
    mep: ['Industrial Process Plant', 'Hyperscale Data Centre', 'Commercial Multi-Story', 'Hospital / Critical Care'],
    ceig: ['HT Substation Energization', 'Solar Pooling Station', 'Captive Power / DG Set', 'Annual Multi-City Cluster']
  };

  const moduleOptions = {
    civil: [
      'Site Grading, Excavation & Soil Compaction',
      'Transformer Plinth & Raft Foundations',
      'GIS / Hybrid GIS Hall Levelling',
      'RCC / PEB Control Room Building',
      'RCC Cable Trenches with Precast Slabs',
      'Yard Gravelling (100-150mm Ballast) & Drainage',
      'Oil Containment Pit & Transformer Firewalls',
      'Perimeter Security Fencing, Roads & Guardhouse'
    ],
    electrical: [
      'HT / LT Switchgear & Busbar Trunking',
      'Power Factor Correction (APFC) & Harmonic Filters',
      'Substation Safety Grounding Mat & Clean Earth',
      'Underground XLPE Cabling & Termination Kits',
      'Indoor / Outdoor High-Bay Lighting & Small Power',
      'Captive Diesel Generator & Solar Synchronization',
      'Online Redundant UPS & Emergency Normal Segregation',
      'Motor Control Centres (MCC) & Plant Automation'
    ],
    mep: [
      'Internal & External Plumbing Networks',
      'Storm Water Drainage & Rainwater Harvesting',
      'Water Treatment (WTP) & Sewage Treatment (STP/ETP)',
      'Hydro-Pneumatic Booster Water Distribution',
      'Fire Hydrant & Wet Riser Network',
      'Automatic High Velocity Transformer Deluge System',
      'Addressable Fire Alarm & Smoke Detection Array',
      'Building Management System (BMS) Telemetry'
    ],
    ceig: [
      'Preparation of CEIG Single Line Diagram (SLD) Dossier',
      'Pre-Commissioning Megger & Insulation Resistance Testing',
      'Earth Pit Dissipation & Resistance Audit',
      'Transformer Ratio, Vector & Oil BDV Testing',
      'High Potential (Hi-Pot) Withstand Cable Testing',
      'Protection Relay Secondary Injection Calibration',
      'Inspectorate Official Walkthrough & Liaison Support'
    ]
  };

  const handleModuleToggle = (moduleName: string) => {
    if (selectedModules.includes(moduleName)) {
      setSelectedModules(selectedModules.filter((m) => m !== moduleName));
    } else {
      setSelectedModules([...selectedModules, moduleName]);
    }
  };

  const calculateTimeline = () => {
    const count = selectedModules.length;
    if (selectedCategory === 'ceig') {
      return count <= 2 ? '2 - 3 Weeks' : '3 - 6 Weeks (Including Liaison)';
    }
    if (count <= 2) return '4 - 8 Weeks';
    if (count <= 5) return '8 - 16 Weeks';
    return '16 - 28 Weeks';
  };

  const handlePreFill = () => {
    const categoryLabel = categories.find((c) => c.id === selectedCategory)?.label || 'General Scope';
    onPreFillRFQ({
      category: categoryLabel,
      voltage: voltage,
      modules: selectedModules,
      timelineEst: calculateTimeline()
    });
  };

  return (
    <div className="rounded-2xl bg-[#0e141f] border border-cyan-500/30 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
      {/* Background CAD Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-300 mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE TENDER SCOPE CONFIGURATOR</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
            Plan Your Infrastructure Scope & Timeline
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Configure technical parameters for EHV civil foundations, electrical turnkey networks, or CEIG compliance. Generate a structured RFP specification tailored to Moxie's verified engineering workflows.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
          <ShieldCheck className="w-4 h-4" />
          <span>IS / IEC / CBIP Standards Aligned</span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 my-6">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id as any);
                setVoltage(voltageOptions[cat.id as keyof typeof voltageOptions][0]);
                setSelectedModules(moduleOptions[cat.id as keyof typeof moduleOptions].slice(0, 3));
              }}
              className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                isActive
                  ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_15px_rgba(2,132,199,0.3)]'
                  : 'bg-[#141b25] border-white/5 text-slate-300 hover:border-white/20'
              }`}
            >
              <div className="font-display font-bold text-xs sm:text-sm">{cat.label}</div>
              <div className="text-[10px] font-mono text-cyan-400 mt-1">{cat.sub}</div>
            </button>
          );
        })}
      </div>

      {/* Scope Parameter Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
            Voltage Rating / Facility Scale:
          </label>
          <select
            value={voltage}
            onChange={(e) => setVoltage(e.target.value)}
            className="w-full bg-[#141b25] border border-white/10 rounded-lg p-3 text-xs font-mono text-white focus:border-cyan-400 outline-none"
          >
            {voltageOptions[selectedCategory].map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
            Target Project State:
          </label>
          <select
            value={stateLocation}
            onChange={(e) => setStateLocation(e.target.value)}
            className="w-full bg-[#141b25] border border-white/10 rounded-lg p-3 text-xs font-mono text-white focus:border-cyan-400 outline-none"
          >
            <option value="Tamil Nadu">Tamil Nadu (Primary Operational Hub)</option>
            <option value="Telangana">Telangana (Active Projects)</option>
            <option value="Andhra Pradesh">Andhra Pradesh (Active Projects)</option>
            <option value="Andaman & Nicobar">Andaman & Nicobar Islands (Specialized Remote)</option>
            <option value="Other Pan-India">Other Pan-India Site</option>
          </select>
        </div>
      </div>

      {/* Modules Checklist */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Select Required Engineering Scope Packages ({selectedModules.length} selected):</span>
          </label>
          <span className="text-[11px] font-mono text-slate-400">Click to add/remove packages</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {moduleOptions[selectedCategory].map((mod) => {
            const isChecked = selectedModules.includes(mod);
            return (
              <div
                key={mod}
                onClick={() => handleModuleToggle(mod)}
                className={`p-3 rounded-lg border text-xs cursor-pointer flex items-center gap-3 transition-all ${
                  isChecked
                    ? 'bg-cyan-950/40 border-cyan-500/50 text-white font-medium shadow-sm'
                    : 'bg-[#121822] border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/10'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                    isChecked ? 'bg-cyan-500 border-cyan-400 text-black' : 'border-slate-600'
                  }`}
                >
                  {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-black" />}
                </div>
                <span>{mod}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary Box & Pre-fill CTA */}
      <div className="p-4 sm:p-5 rounded-xl bg-[#090d14] border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
            Estimated Engineering Horizon
          </div>
          <div className="text-lg font-mono font-bold text-cyan-300">
            {calculateTimeline()} • {stateLocation}
          </div>
          <div className="text-xs text-slate-400">
            Turnkey mobilization supported from Chennai & Coimbatore engineering hubs.
          </div>
        </div>

        <button
          onClick={handlePreFill}
          className="btn-copper w-full sm:w-auto py-3 px-6 text-xs font-bold tracking-wider flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>TRANSFER SCOPE TO RFQ</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

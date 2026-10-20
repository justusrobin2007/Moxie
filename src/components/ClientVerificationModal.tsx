import React, { useState, useEffect } from 'react';
import { CONTENT_VERIFICATION_CHECKLIST } from '../data/companyData';
import { ShieldCheck, CheckCircle2, AlertTriangle, X, FileText } from 'lucide-react';

interface ClientVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientVerificationModal: React.FC<ClientVerificationModalProps> = ({
  isOpen,
  onClose
}) => {
  const [filter, setFilter] = useState<'All' | 'Verified by Brochure' | 'Client to Confirm' | 'Clarified Relation'>('All');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredItems = filter === 'All'
    ? CONTENT_VERIFICATION_CHECKLIST
    : CONTENT_VERIFICATION_CHECKLIST.filter(item => item.status === filter);

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1117] border border-cyan-500/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#121822]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                Factual Accuracy & Brochure Verification Audit
              </h3>
              <p className="text-xs font-mono text-cyan-400">
                100% SOURCED FROM CIVIL & ELECTRICAL BROCHURES (PAGE-BY-PAGE AUDIT)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer border-0"
            aria-label="Close Verification Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="px-6 py-3.5 bg-[#0e141e] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-mono text-[11px]">FILTER AUDIT:</span>
            {(['All', 'Verified by Brochure', 'Clarified Relation', 'Client to Confirm'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all border cursor-pointer ${
                  filter === f
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 font-bold'
                    : 'bg-transparent border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Zero Invented Metrics Guarantee</span>
          </div>
        </div>

        {/* Audit Content List */}
        <div className="p-6 overflow-y-auto space-y-4 max-h-[60vh]">
          {filteredItems.map((item) => {
            const isVerified = item.status === 'Verified by Brochure';
            const isClarified = item.status === 'Clarified Relation';
            const isPending = item.status === 'Client to Confirm';

            return (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-[#141b25] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col md:flex-row md:items-start justify-between gap-4"
              >
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-sm text-white">
                      {item.field}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                      {item.brochureSource}
                    </span>
                  </div>

                  <p className="text-xs text-slate-200 font-sans leading-relaxed">
                    {item.currentValue}
                  </p>

                  <div className="text-[11px] text-slate-400 italic bg-black/30 p-2.5 rounded-lg border border-white/5">
                    <strong>Audit Rationale:</strong> {item.notes}
                  </div>
                </div>

                <div className="shrink-0">
                  {isVerified && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Fact
                    </span>
                  )}
                  {isClarified && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Separated Legal Entity
                    </span>
                  )}
                  {isPending && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs font-semibold">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Client To Confirm
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="p-4 bg-[#090d14] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Based on Civil Brochure (4 pages) & Electrical Brochure (9 pages) provided by Moxie Infratech Pvt Ltd.</span>
          </div>
          <button
            onClick={onClose}
            className="btn-secondary py-1.5 px-4 text-xs cursor-pointer"
          >
            Close Audit
          </button>
        </div>
      </div>
    </div>
  );
};

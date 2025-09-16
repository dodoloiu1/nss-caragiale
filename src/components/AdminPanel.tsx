import React, { useEffect, useMemo, useState } from 'react';
import { useTeams } from './TeamsContext';
import type { TeamsData } from '../data/teams';

type Props = { open: boolean; onClose: () => void };

const AdminPanel: React.FC<Props> = ({ open, onClose }) => {
  const { teams, setTeams, resetToDefault } = useTeams();
  const [text, setText] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setText(JSON.stringify(teams, null, 2));
      setError(null);
    }
  }, [open, teams]);

  const canSave = useMemo(() => {
    try {
      const parsed = JSON.parse(text);
      return Array.isArray(parsed);
    } catch {
      return false;
    }
  }, [text]);

  const handleSave = () => {
    try {
      const parsed = JSON.parse(text) as TeamsData;
      setTeams(parsed);
      setError(null);
      onClose();
    } catch (e) {
      setError('Invalid JSON');
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative bg-space-dark glass-effect border border-white/10 rounded-2xl w-[95vw] max-w-4xl max-h-[85vh] p-4 overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white text-xl font-semibold">Admin — Teams Editor</h2>
          <button onClick={onClose} className="text-gray-300 hover:text-white">✕</button>
        </div>
        <p className="text-gray-400 text-sm mb-3">Editați structura JSON a echipelor și membrilor. Schimbările se salvează în localStorage.</p>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          spellCheck={false}
          className="w-full h-[55vh] rounded-lg bg-black/40 text-gray-100 p-3 font-mono text-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-space-blue"
        />
        {error && <div className="text-red-400 text-sm mt-2">{error}</div>}
        <div className="flex items-center justify-between mt-4">
          <button onClick={resetToDefault} className="px-3 py-2 text-sm rounded-md bg-white/10 text-gray-200 hover:bg-white/20">Reset la implicit</button>
          <div className="space-x-2">
            <button onClick={onClose} className="px-4 py-2 rounded-md bg-white/10 text-gray-200 hover:bg-white/20">Anulează</button>
            <button onClick={handleSave} disabled={!canSave} className={`px-4 py-2 rounded-md ${canSave ? 'bg-space-blue text-white hover:opacity-90' : 'bg-gray-600 text-gray-300 cursor-not-allowed'}`}>Salvează</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;



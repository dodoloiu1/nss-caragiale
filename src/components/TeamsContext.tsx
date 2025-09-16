import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { defaultTeams, type TeamsData } from '../data/teams';

type TeamsContextValue = {
  teams: TeamsData;
  setTeams: (data: TeamsData) => void;
  resetToDefault: () => void;
};

const TeamsContext = createContext<TeamsContextValue | undefined>(undefined);

const STORAGE_KEY = 'nss_teams_data_v1';

export const TeamsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [teams, setTeamsState] = useState<TeamsData>(defaultTeams);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as TeamsData;
        if (Array.isArray(parsed)) setTeamsState(parsed);
      }
    } catch {}
  }, []);

  const setTeams = (data: TeamsData) => {
    setTeamsState(data);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {}
  };

  const resetToDefault = () => setTeams(defaultTeams);

  const value = useMemo(() => ({ teams, setTeams, resetToDefault }), [teams]);

  return <TeamsContext.Provider value={value}>{children}</TeamsContext.Provider>;
};

export const useTeams = (): TeamsContextValue => {
  const ctx = useContext(TeamsContext);
  if (!ctx) throw new Error('useTeams must be used within TeamsProvider');
  return ctx;
};



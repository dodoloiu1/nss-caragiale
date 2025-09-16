import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTeams } from './TeamsContext';

const MembersPage: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const { teams } = useTeams();
  const team = teams.find((t) => t.id === teamId);

  if (!team) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-3xl text-white font-bold mb-4">Echipă necunoscută</h1>
        <p className="text-gray-300 mb-6">Nu am găsit această echipă.</p>
        <Link to="/" className="text-space-blue underline">Înapoi la pagina principală</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-8">
        <Link to="/" className="text-space-blue underline">← Înapoi</Link>
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{team.name}</h1>
      <p className="text-gray-300 text-lg mb-10">{team.description}</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.members.map((member) => (
          <div key={member.name} className="glass-effect p-6 rounded-2xl text-center hover:space-glow transition">
            <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto border-4 border-space-blue object-cover mb-4" />
            <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-space-blue font-semibold mb-1">{member.role}{member.grade ? ` — ${member.grade}` : ''}</p>
            <p className="text-gray-300 text-sm">{member.bio}</p>
          </div>
        ))}
        {team.members.length === 0 && (
          <div className="text-gray-300">Membrii vor fi adăugați în curând.</div>
        )}
      </div>

      {teamId === 'arkadia-11' && (
        <div className="glass-effect rounded-2xl p-6 mt-10">
          <h2 className="text-2xl font-bold text-white mb-3">Proiect</h2>
          <p className="text-gray-300 mb-4">Descarcă documentul proiectului ARKADIA.</p>
          <a
            href="/files/ARKADIA-10-FINAL_250216_100837.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-space-blue text-white rounded-md hover:opacity-90 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 14a2 2 0 012-2h2v2H5v2h10v-2h-2v-2h2a2 2 0 012 2v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm6-12a1 1 0 011 1v7.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 115.293 8.293L7.586 10.586V3a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Descarcă PDF ARKADIA
          </a>
        </div>
      )}
    </div>
  );
};

export default MembersPage;



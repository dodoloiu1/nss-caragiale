export type Member = {
  name: string;
  role: string;
  grade?: string;
  bio: string;
  imageUrl: string;
};

export type Team = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  members: Member[];
};

export type TeamsData = Team[];

export const defaultTeams: TeamsData = [
  {
    id: 'arkadia-11',
    name: 'ARKADIA 11',
    description: 'Echipă de clasa a XI-a implicată în proiectul ARKADIA.',
    imageUrl: 'https://via.placeholder.com/640x360?text=ARKADIA+11',
    members: [
      {
        name: 'Lungu Răzvan Tudor',
        role: 'Membru',
        grade: 'Clasa a XI-a',
        bio: 'Participant în echipa ARKADIA 11.',
        imageUrl: 'https://i.pravatar.cc/256?img=11'
      },
      {
        name: 'Radu Vlad Alexandru',
        role: 'Membru',
        grade: 'Clasa a XI-a',
        bio: 'Participant în echipa ARKADIA 11.',
        imageUrl: 'https://i.pravatar.cc/256?img=12'
      },
      {
        name: 'Șerban Lara Isabela',
        role: 'Membru',
        grade: 'Clasa a XI-a',
        bio: 'Participant în echipa ARKADIA 11.',
        imageUrl: 'https://i.pravatar.cc/256?img=13'
      },
      {
        name: 'Turcan Eric Octavian',
        role: 'Membru',
        grade: 'Clasa a XI-a',
        bio: 'Participant în echipa ARKADIA 11.',
        imageUrl: 'https://i.pravatar.cc/256?img=14'
      },
      {
        name: 'Blana Matei',
        role: 'Membru',
        grade: 'Clasa a XI-a',
        bio: 'Participant în echipa ARKADIA 11.',
        imageUrl: 'https://i.pravatar.cc/256?img=15'
      },
      {
        name: 'Armin',
        role: 'Membru',
        grade: 'Clasa a XI-a',
        bio: 'Participant în echipa ARKADIA 11.',
        imageUrl: 'https://i.pravatar.cc/256?img=16'
      }
    ]
  },
  {
    id: 'bioma',
    name: 'BioMa',
    description: 'Echipă axată pe biologie și mediu în spațiu.',
    imageUrl: 'https://via.placeholder.com/640x360?text=BioMa',
    members: []
  },
  {
    id: 'demetra-vii',
    name: 'Demetra VII',
    description: 'Echipă concentrată pe agricultură spațială.',
    imageUrl: 'https://via.placeholder.com/640x360?text=Demetra+VII',
    members: []
  }
];



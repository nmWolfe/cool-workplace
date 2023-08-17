type Team = {
  id: number;
  name: string;
  role: string;
  profile: Profile;
};

type Profile = {
  experience: string;
  department: string;
  techstack: string[];
  profilePicture: string;
};

export default Team;

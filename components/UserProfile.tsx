import Image from "next/image";

interface User {
  name: string;
  email: string;
  avatar: string;
  username: string;
  phone: string;
  website: string;
  company: string;
}

interface UserProfileProps {
  user: User;
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="bg-zinc-800 rounded-lg p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <Image
          width={128}
          height={128}
          src={user.avatar}
          alt={user.name}
          className="w-32 h-32 rounded-full object-cover bg-zinc-700"
        />
        <div className="space-y-4 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-bold">{user.name}</h2>
            <p className="text-zinc-400">@{user.username}</p>
          </div>
          
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <span className="text-zinc-400">Email:</span>
              <a href={`mailto:${user.email}`} className="text-blue-400 hover:underline">
                {user.email}
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-zinc-400">Phone:</span>
              <a href={`tel:${user.phone}`} className="text-blue-400 hover:underline">
                {user.phone}
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-zinc-400">API Website:</span>
              <a href={`https://enriquedonaire.github.io/PicFinder-App`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                PicFinder
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-zinc-400">Portfolio:</span>
              <a 
                href="https://enriquedonaire.github.io/Portfolio-Web-Dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:underline"
              >
                enriquedonaire.github.io/Portfolio-Web-Dev
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-zinc-400">Company:</span>
              <span>PrisMatter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
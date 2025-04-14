import { UserProfile } from '@/components/UserProfile';
import { getUserProfile } from '@/lib/actions';

export default async function ProfilePage() {
  const user = await getUserProfile();

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 text-white">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">User Profile</h1>
        <UserProfile user={user} />
      </div>
    </div>
  );
}
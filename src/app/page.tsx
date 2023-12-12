import { redirect } from "next/navigation";
import { auth } from "~/server/auth";

export default async function HomePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("api/auth/signin?callbackUrl=/");
  }

  return (
    <main>
      <p>{session.user.name}</p>
    </main>
  );
}

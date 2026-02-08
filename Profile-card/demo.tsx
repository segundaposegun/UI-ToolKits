import ProfileCard from "@/components/ui/profile-card";

export default function DemoOne() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white text-gray-900 dark:bg-black">
      
      <ProfileCard
        imageSrc="https://ik.imagekit.io/kqmrslzuq/21st.dev%20Components/ProfileCard/logo.png"
        name="Daiwiik Harihar"
        role="Full Stack Developer"
        socials={{
          github: "https://github.com/daiv09",
        }}
      />

    </main>
  );
}

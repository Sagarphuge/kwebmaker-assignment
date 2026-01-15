import Button from "@/components/Button";
import OurProfessionalsCard from "@/components/OurProfessionalsCard";
const teamMembers = [
  {
    profileName: "Craig Tiley",
    profileDescription: "CEO Tennis Australia & Australian Open",
    imgUrl: "/images/profiles/profile-1.png",
  },
  {
    profileName: "Stephen Farrow",
    profileDescription:
      "Director - Tournament, Players & International Relations",
    imgUrl: "/images/profiles/profile-2.png",
  },
  {
    profileName: "Cameron Pearson",
    profileDescription: "Head Major Events - Tennis Australia",
    imgUrl: "/images/profiles/profile-3.png",
  },
];
export default function OurProfessionals() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div className="container relative z-10 mx-auto px-5">
        <header className="grid gap-6 md:flex md:items-end md:justify-between">
          <div className="space-y-5">
            <h2 className="relative inline-block text-3xl font-semibold md:text-4xl">
              Meet Our Professionals
              <span className="absolute top-0 -right-3 h-2 w-2 rounded-full bg-primary" />
            </h2>
            <p className="max-w-sm text-gray-600">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>
          <Button text="View All" />
        </header>

        <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <OurProfessionalsCard
              key={member.profileName}
              profileName={member.profileName}
              profileDescription={member.profileDescription}
              imgUrl={member.imgUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

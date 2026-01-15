import Button from "@/components/Button";
import ProgramsCard from "@/components/ProgramsCard";

const programs = [
  {
    programName: "Academy",
    programDescription: "Live and train with us",
    imgUrl: "/images/programs/program-1.png",
  },
  {
    programName: "Campus",
    programDescription: "Train like pro with us",
    imgUrl: "/images/programs/program-2.png",
  },
  {
    programName: "Performance",
    programDescription: "Elevate your game with us",
    imgUrl: "/images/programs/program-3.png",
  },
];

function Programs() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div className="container relative z-10 mx-auto px-5">
        <header className="grid gap-6 md:flex md:items-end md:justify-between">
          <div className="space-y-5">
            <h2 className="relative inline-block text-3xl font-semibold md:text-4xl">
              Programs
              <span className="absolute top-0 -right-3 h-2 w-2 rounded-full bg-primary" />
            </h2>
            <p className="max-w-lg text-gray-600">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>

          <Button text="Register Now" />
        </header>
        <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramsCard
              key={program.programName}
              programName={program.programName}
              programDescription={program.programDescription}
              imgUrl={program.imgUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;

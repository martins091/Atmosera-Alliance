import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollReveal } from "@/components/scroll-reveal";

export function TeamMembers() {
  const members = [
    {
      name: "Jake Slams",
      title: "Founder & Executive Director",
      initials: "JS",
    },
    {
      name: "Peter Hagreaves",
      title: "Director of Climate Program",
      initials: "PH",
    },
    {
      name: "John Griffin",
      title: "Director of Operations & Communication",
      initials: "JG",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003D73] mb-4 text-balance">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The people leading our mission — experienced, passionate, and
              committed to climate action.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((m, i) => (
            <ScrollReveal key={i} delay={i * 120} className="h-full">
              <div className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100 h-full">
                <div className="flex items-center mb-6">
                  <Avatar className="w-14 h-14 mr-4">
                    <AvatarFallback className="text-sm font-semibold">
                      {m.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-[#003D73]">
                      {m.name}
                    </h3>
                    <p className="text-sm text-gray-600">{m.title}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {`Committed to driving measurable climate impact through strategic leadership, partnerships, and community-focused programs.`}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamMembers;
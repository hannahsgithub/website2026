const EXPERIENCES = [
    {
        company: "Shopify",
        url: "https://shopify.com",
        role: "Software Engineer Intern",
        location: "Toronto",
        highlight: "building high traffic pages that support billions in merchant financing",
        current: true,
    },
    {
        company: "Voxer",
        url: "https://voxer.com",
        role: "Software Engineer Intern",
        location: "San Francisco",
        highlight: "architected end to end messaging features and integrations used daily by thousands of teams",
    },
    {
        company: "Tamvoes",
        url: "https://tamvoes.com",
        role: "Software Engineer Intern",
        location: "Toronto",
        highlight: "modernized a legacy platform across frontend and backend",
    },
    {
        company: "Radish Cooperative",
        url: "https://radish.coop",
        role: "Software Engineer Intern",
        location: "Montreal",
        highlight: "created internal CRM platform and automated ETL pipelines to help manage partnerships",
    },
];

const ExperiencesSection = () => {
    return (
        <section
            id="experiences"
            className="min-w-[700px] h-full flex flex-col justify-center px-12 pb-8"
        >
            <h2 className="font-handwritten text-4xl text-foreground mb-8">
                where i've been as an intern engineer
            </h2>

            <div className="space-y-6 max-w-[580px]">
                {EXPERIENCES.map((exp, index) => (
                    <div
                        key={exp.company}
                        className="group relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-300"
                    >
                        {/* Dot on timeline */}
                        <div className={`absolute -left-[7px] top-1 w-3 h-3 rounded-full border-2 transition-colors duration-300
              ${exp.current
                                ? 'bg-primary border-primary'
                                : 'bg-background border-border group-hover:border-primary group-hover:bg-primary/20'
                            }`}
                        />

                        <div className="flex items-baseline gap-3 flex-wrap">
                            <a
                                href={exp.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-handwritten text-2xl text-foreground hover:text-primary transition-colors"
                            >
                                {exp.company}
                            </a>
                            <span className="font-sketch text-sm text-muted-foreground">
                                {exp.location}
                            </span>
                            {exp.current && (
                                <span className="text-xs font-sketch px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                                    now
                                </span>
                            )}
                        </div>

                        <p className="font-sketch text-foreground/70 mt-1 leading-relaxed">
                            {exp.highlight}
                        </p>
                    </div>
                ))}
            </div>

            {/* Footer note */}
            <div className="text-right">
                <p className="font-handwritten text-xl text-foreground mb-2 mt-8 italic">beyond the code...</p>
                <ul className="space-y-3 pl-2">
                    <li className="font-sketch text-foreground/80">
                        <span>⚝ expanding my "been to" list of restaurants</span>
                    </li>
                    <li className="font-sketch text-foreground/80">
                        <span>⚝ honing my bouldering skills</span>
                    </li>
                    <li className="font-sketch text-foreground/80">
                        <span>⚝ catching up to the 1100+ One Piece episodes</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ExperiencesSection;
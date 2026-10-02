type PageHeroProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  variant?: "light" | "dark";
};

export function PageHero({
  title,
  description,
  eyebrow,
  variant = "light",
}: PageHeroProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={
        isDark
          ? "relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light"
          : "relative overflow-hidden border-b border-line bg-white"
      }
    >
      {/* Dekorasi orb */}
      <div
        aria-hidden="true"
        className={
          isDark
            ? "glow-orb -right-20 -top-20 h-72 w-72 bg-gold"
            : "glow-orb -right-16 -top-24 h-72 w-72 bg-gold/25"
        }
      />
      {/* Dot grid */}
      <div
        aria-hidden="true"
        className={`absolute inset-y-0 right-0 w-1/2 opacity-[0.06] ${
          isDark
            ? "bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)]"
            : "bg-[radial-gradient(circle_at_center,#064f46_1px,transparent_1px)]"
        }`}
        style={{ backgroundSize: "24px 24px" }}
      />

      <div className="container-site relative py-14 lg:py-20">
        <div
          className="max-w-3xl"
          style={{ animation: "fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          {eyebrow ? (
            <p className={`eyebrow mb-3 flex items-center gap-3 ${isDark ? "text-gold-light" : ""}`}>
              <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={`font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${
              isDark ? "text-white" : "text-primary-dark"
            }`}
          >
            {title}
          </h1>
          <span aria-hidden="true" className="gold-line mt-5 block" />
          {description ? (
            <p
              className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
                isDark ? "text-white/80" : "text-muted"
              }`}
            >
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

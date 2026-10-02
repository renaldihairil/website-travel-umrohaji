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
          ? "bg-primary-dark"
          : "border-b border-line bg-white"
      }
    >
      <div className="container-site py-14 lg:py-20">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className={`eyebrow mb-3 ${isDark ? "text-gold-light" : ""}`}>
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${
              isDark ? "text-white" : "text-primary-dark"
            }`}
          >
            {title}
          </h1>
          {description ? (
            <p
              className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
                isDark ? "text-white/75" : "text-muted"
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

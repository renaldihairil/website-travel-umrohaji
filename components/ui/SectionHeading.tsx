type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** ID untuk aria-labelledby pada section induk */
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  id,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow ? (
        <p className={`eyebrow mb-3 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          {align !== "center" ? (
            <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
          ) : null}
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      <span
        aria-hidden="true"
        className={`gold-line mt-4 block ${align === "center" ? "mx-auto origin-center" : ""}`}
      />
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}

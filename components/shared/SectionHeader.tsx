interface SectionHeaderProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  id,
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
            light ? "text-bwp-blue-light" : "text-bwp-blue"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`font-heading text-3xl sm:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-bwp-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-3xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-blue-100" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

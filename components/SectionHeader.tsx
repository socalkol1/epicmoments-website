// components/SectionHeader.tsx
interface SectionHeaderProps {
  preTitle?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  showLine?: boolean;
  className?: string;
}

export default function SectionHeader({
  preTitle,
  title,
  subtitle,
  centered = true,
  showLine = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""} ${className}`}>
      {preTitle && (
        <span className="text-[#00d4aa] text-sm uppercase tracking-[0.3em] font-medium">
          {preTitle}
        </span>
      )}
      <h2 className="text-white text-3xl md:text-5xl font-bold mt-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#a0a0b0] text-lg mt-4">{subtitle}</p>
      )}
      {showLine && (
        <div
          className={`w-24 h-1 bg-gradient-to-r from-[#00d4aa] to-[#4ade80] mt-6 ${
            centered ? "mx-auto" : ""
          }`}
        />
      )}
    </div>
  );
}

// components/FeatureCard.jsx
import { Check } from "lucide-react";

export default function FeatureCard({
  icon: Icon = Check,
  title,
  description,
  className = "",
}) {
  return (
    <div className={`glass rounded-2xl p-6 hover-lift ${className}`}>
      <div className="w-12 h-12 rounded-full bg-[#00d4aa]/20 border border-[#00d4aa]/30 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-[#00d4aa]" />
      </div>
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      {description && <p className="text-[#a0a0b0]">{description}</p>}
    </div>
  );
}

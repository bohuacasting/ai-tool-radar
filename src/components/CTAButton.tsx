import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'white' | 'outline';
  isAffiliate?: boolean;
}

export default function CTAButton({ 
  href, 
  children, 
  variant = 'primary',
  isAffiliate = false 
}: CTAButtonProps) {
  const baseClasses = "inline-block px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105";
  
  const variantClasses = {
    primary: "bg-[#7C3AED] text-white hover:bg-[#6D28D9]",
    white: "bg-white text-[#7C3AED] hover:bg-gray-100",
    outline: "border-2 border-white text-white hover:bg-white hover:text-[#7C3AED]"
  };

  const className = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <Link 
      href={href} 
      className={className}
      rel={isAffiliate ? "nofollow sponsored" : undefined}
      target={isAffiliate ? "_blank" : undefined}
    >
      {children}
    </Link>
  );
}

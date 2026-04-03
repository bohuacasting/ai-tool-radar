import StarRating from './StarRating';
import CTAButton from './CTAButton';

interface ReviewCardProps {
  name: string;
  rating: number;
  price: string;
  summary: string;
  pros: string[];
  cons: string[];
  affiliateLink: string;
}

export default function ReviewCard({
  name,
  rating,
  price,
  summary,
  pros,
  cons,
  affiliateLink
}: ReviewCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition border-l-4 border-[#7C3AED]">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
          <StarRating rating={rating} />
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">From</p>
          <p className="text-2xl font-bold text-[#7C3AED]">{price}</p>
        </div>
      </div>

      <p className="text-gray-700 mb-4">{summary}</p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="font-semibold text-green-600 mb-2">✓ Pros</h4>
          <ul className="text-sm space-y-1 text-gray-700">
            {pros.map((pro, index) => (
              <li key={index}>• {pro}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-red-600 mb-2">✗ Cons</h4>
          <ul className="text-sm space-y-1 text-gray-700">
            {cons.map((con, index) => (
              <li key={index}>• {con}</li>
            ))}
          </ul>
        </div>
      </div>

      <CTAButton href={affiliateLink} variant="primary" isAffiliate>
        Try {name}
      </CTAButton>
    </div>
  );
}

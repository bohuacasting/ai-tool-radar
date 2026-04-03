interface StarRatingProps {
  rating: number;
  maxRating?: number;
  showNumber?: boolean;
}

export default function StarRating({ 
  rating, 
  maxRating = 5, 
  showNumber = true 
}: StarRatingProps) {
  const stars = [];
  
  for (let i = 1; i <= maxRating; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <span key={i} className="text-yellow-400">★</span>
      );
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <span key={i} className="text-yellow-400">⯨</span>
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-300">★</span>
      );
    }
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex text-xl">
        {stars}
      </div>
      {showNumber && (
        <span className="text-sm text-gray-600 font-medium">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';
import StarRating from './StarRating';
import CTAButton from './CTAButton';

interface ComparisonItem {
  name: string;
  rating: number;
  price: string;
  features: string[];
  affiliateLink: string;
}

interface ComparisonTableProps {
  items: ComparisonItem[];
}

export default function ComparisonTable({ items }: ComparisonTableProps) {
  const [selectedItems, setSelectedItems] = useState<number[]>([0, 1]);

  const displayedItems = items.filter((_, index) => selectedItems.includes(index));

  return (
    <div className="space-y-6">
      {/* Selection Controls */}
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <label key={index} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedItems.includes(index)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedItems([...selectedItems, index]);
                } else {
                  setSelectedItems(selectedItems.filter(i => i !== index));
                }
              }}
              className="w-4 h-4 text-[#7C3AED] rounded"
            />
            <span className="text-sm font-medium">{item.name}</span>
          </label>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-purple-50">
              <th className="p-4 text-left font-semibold text-gray-700 border-b">Feature</th>
              {displayedItems.map((item, index) => (
                <th key={index} className="p-4 text-center font-semibold text-gray-700 border-b">
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4 font-medium">Rating</td>
              {displayedItems.map((item, index) => (
                <td key={index} className="p-4 text-center">
                  <div className="flex justify-center">
                    <StarRating rating={item.rating} />
                  </div>
                </td>
              ))}
            </tr>
            <tr className="border-b bg-purple-50">
              <td className="p-4 font-medium">Price</td>
              {displayedItems.map((item, index) => (
                <td key={index} className="p-4 text-center font-bold text-[#7C3AED]">
                  {item.price}
                </td>
              ))}
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium">Features</td>
              {displayedItems.map((item, index) => (
                <td key={index} className="p-4">
                  <ul className="text-sm space-y-1">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center justify-center">
                        <span className="text-green-500 mr-1">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium">Action</td>
              {displayedItems.map((item, index) => (
                <td key={index} className="p-4 text-center">
                  <CTAButton href={item.affiliateLink} variant="primary" isAffiliate>
                    Try Now
                  </CTAButton>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

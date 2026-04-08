'use client';

import { Tariff } from '@/types';
import { calculateDiscount, getTariffDisplayPrice } from '@/utils/tariffHelpers';

interface TariffBestCardProps {
  tariff: Tariff;
  isSelected: boolean;
  isEnded: boolean;
  onSelect: (id: string) => void;
}

export const TariffBestCard = ({
  tariff,
  isSelected,
  isEnded,
  onSelect,
}: TariffBestCardProps) => {
  const discount = calculateDiscount(tariff.full_price, tariff.price);
  const displayPrice = getTariffDisplayPrice(tariff, isEnded);

  return (
    <div
      onClick={() => onSelect(tariff.id)}
      className={`relative w-full lg:w-[748px] h-auto lg:h-[190px] bg-[#313637] rounded-[34px] border-2 transition-all duration-300 cursor-pointer p-4 sm:p-6 lg:p-[30px] ${
        isSelected ? 'border-accent' : 'border-[#484d4e]'
      }`}>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10">
        <div className="flex flex-col items-center gap-4">
          <div className="font-montserrat font-medium text-white text-[20px] sm:text-[22px] lg:text-[26px]">
            {tariff.period}
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`font-montserrat font-semibold text-[36px] sm:text-[40px] lg:text-[50px] leading-[50px] transition-colors duration-300 ${
                isSelected ? 'text-accent' : 'text-white'
              }`}>
              {displayPrice}
            </div>
            {!isEnded && (
              <div className="font-montserrat font-normal text-[#919191] text-xl lg:text-2xl line-through">
                {tariff.full_price} ₽
              </div>
            )}
          </div>
        </div>
        <div className="max-w-[328px] text-center md:text-left">
          <p className="font-montserrat font-normal text-white text-sm sm:text-base leading-[20.8px]">
            {tariff.text}
          </p>
        </div>
      </div>

      {!isEnded && (
        <div className="absolute top-0 left-[50px] inline-flex items-center justify-center px-2 py-[5px] bg-[#fd5656] rounded-[0px_0px_8px_8px]">
          <div className="font-gilroy font-medium text-white text-[18px] sm:text-[20px] lg:text-[22px]">
            -{discount}%
          </div>
        </div>
      )}

      {tariff.is_best && (
        <div className="absolute top-2.5 right-[30px] font-montserrat font-medium text-accent text-[18px] sm:text-[20px] lg:text-[22px]">
          хит!
        </div>
      )}
    </div>
  );
};

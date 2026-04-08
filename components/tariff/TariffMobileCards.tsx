'use client';

import { Tariff } from '@/types';
import { calculateDiscount, getTariffDisplayPrice } from '@/utils/tariffHelpers';

interface TariffMobileCardsProps {
  bestTariff: Tariff | undefined;
  otherTariffs: Tariff[];
  selectedTariffId: string;
  isEnded: boolean;
  onSelect: (id: string) => void;
}

export const TariffMobileCards = ({
  bestTariff,
  otherTariffs,
  selectedTariffId,
  isEnded,
  onSelect,
}: TariffMobileCardsProps) => {
  return (
    <div className="block lg:hidden w-full max-[1024px]:flex max-[1024px]:justify-center">
      <div
        className="flex flex-col gap-2 max-[1024px]:gap-2 max-[1024px]:items-center"
        style={{ width: 'min(100%, 343px)', maxWidth: '343px', minWidth: '288px' }}>
        
        {bestTariff && (
          <TariffMobileCard
            tariff={bestTariff}
            isSelected={selectedTariffId === bestTariff.id}
            isEnded={isEnded}
            onSelect={onSelect}
            isBest
          />
        )}

        {otherTariffs.map((tariff) => (
          <TariffMobileCard
            key={tariff.id}
            tariff={tariff}
            isSelected={selectedTariffId === tariff.id}
            isEnded={isEnded}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

interface TariffMobileCardProps {
  tariff: Tariff;
  isSelected: boolean;
  isEnded: boolean;
  onSelect: (id: string) => void;
  isBest?: boolean;
}

const TariffMobileCard = ({
  tariff,
  isSelected,
  isEnded,
  onSelect,
  isBest,
}: TariffMobileCardProps) => {
  const discount = calculateDiscount(tariff.full_price, tariff.price);
  const displayPrice = getTariffDisplayPrice(tariff, isEnded);

  return (
    <div
      onClick={() => onSelect(tariff.id)}
      className={`relative w-full min-h-[131px] bg-[#313637] border-2 transition-all duration-300 cursor-pointer rounded-[20px] p-[20px_16px_20px_30px] ${
        isSelected ? 'border-accent' : 'border-[#484d4e]'
      }`}>
      
      <div className="flex flex-row justify-between items-center w-full h-full">
        <div className="flex flex-col justify-center items-start gap-4">
          <div className="font-montserrat font-medium text-white text-[18px] leading-[22px] whitespace-nowrap">
            {tariff.period}
          </div>
          <div className="flex flex-col items-end">
            <div
              className={`font-montserrat font-semibold text-[34px] leading-[34px] transition-colors duration-300 ${
                isSelected ? 'text-accent' : 'text-white'
              }`}>
              {displayPrice}
            </div>
            {!isEnded && (
              <div className="relative mt-1">
                <div className="font-montserrat font-normal text-[#919191] text-[16px] leading-[19px] whitespace-nowrap text-right">
                  {tariff.full_price} ₽
                </div>
                <div className="absolute w-full h-[1px] bg-[#919191] left-0 top-1/2 transform -translate-y-1/2" />
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-end max-w-[120px] h-full">
          <p className="font-montserrat font-normal text-white text-[14px] leading-[18px] text-left">
            {tariff.text}
          </p>
        </div>
      </div>

      {!isEnded && (
        <div className={`absolute flex justify-center items-center px-[6px] py-[3px] gap-2.5 w-[48px] h-[27px] top-0 bg-[#fd5656] rounded-[0px_0px_8px_8px] ${
          isBest ? 'left-[233px]' : 'right-[30px]'
        }`}>
          <div className="font-gilroy font-medium text-white text-[16px] leading-[21px]">
            -{discount}%
          </div>
        </div>
      )}

      {isBest && (
        <div className="absolute font-montserrat font-medium text-accent text-[16px] leading-[21px] tracking-[0.03em] right-[16px] top-[6px]">
          хит!
        </div>
      )}
    </div>
  );
};

'use client';

import { Tariff } from '@/types';
import { TariffCard } from './TariffCard';
import { calculateDiscount } from '@/utils/tariffHelpers';

interface TariffGridProps {
  tariffs: Tariff[];
  selectedTariffId: string;
  isEnded: boolean;
  isCheckboxAccepted: boolean;
  onSelect: (id: string) => void;
  onBuy: (id: string) => void;
  onCheckboxError: () => void;
}

export const TariffGrid = ({
  tariffs,
  selectedTariffId,
  isEnded,
  isCheckboxAccepted,
  onSelect,
  onBuy,
  onCheckboxError,
}: TariffGridProps) => {
  return (
    <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-[14px]">
      {tariffs.map((tariff) => (
        <TariffCard
          key={tariff.id}
          tariff={tariff}
          isSelected={selectedTariffId === tariff.id}
          discountPercentage={calculateDiscount(tariff.full_price, tariff.price)}
          onSelect={onSelect}
          onBuy={onBuy}
          isTimerEnded={isEnded}
          isCheckboxAccepted={isCheckboxAccepted}
          onCheckboxError={onCheckboxError}
        />
      ))}
    </div>
  );
};

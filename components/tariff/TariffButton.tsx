'use client';

import { Tariff } from '@/types';

interface TariffButtonProps {
  tariff: Tariff | undefined;
  isCheckboxAccepted: boolean;
  onBuy: (id: string) => void;
}

export const TariffButton = ({
  tariff,
  isCheckboxAccepted,
  onBuy,
}: TariffButtonProps) => {
  return (
    <button
      onClick={() => tariff && onBuy(tariff.id)}
      className={`bg-accent rounded-[20px] font-montserrat font-bold text-[#191e1f] transition-all mt-5 flex items-center justify-center ${
        !isCheckboxAccepted ? 'animate-pulse-glow' : 'hover:scale-105'
      }`}
      style={{
        maxWidth: 'min(100%, 499px)',
        width: '100%',
        height: 'min(63px)',
        fontSize: 'clamp(14px, 4vw, 18px)',
      }}>
      Купить
    </button>
  );
};

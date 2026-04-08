import { Tariff } from '@/types';

export const normalizeTariffs = (tariffs: Tariff[]): Tariff[] => {
  return tariffs.map((item) => {
    if (item.period === 'Навсегда') {
      return { ...item, id: `${item.id}_forever` };
    }
    return item;
  });
};

export const sortTariffs = (tariffs: Tariff[]): Tariff[] => {
  const order: { [key: string]: number } = {
    '3 месяца': 3,
    '1 месяц': 2,
    '1 неделя': 1,
  };

  return tariffs.sort((a, b) => (order[b.period] || 0) - (order[a.period] || 0));
};

export const calculateDiscount = (fullPrice: number, price: number): number => {
  return Math.round(((fullPrice - price) / fullPrice) * 100);
};

export const getTariffDisplayPrice = (
  tariff: Tariff,
  isEnded: boolean
): string => {
  return isEnded ? `${tariff.full_price} ₽` : `${tariff.price} ₽`;
};

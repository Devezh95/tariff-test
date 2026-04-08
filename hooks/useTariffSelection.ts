import { useState, useEffect } from 'react';
import { Tariff } from '@/types';
import { fetchTariffs } from '@/services/api';
import { normalizeTariffs, sortTariffs } from '@/utils/tariffHelpers';

export const useTariffSelection = () => {
  const [tariffs, setTariffs] = useState<Tariff[]>([]);
  const [selectedTariffId, setSelectedTariffId] = useState<string>('');
  const [isCheckboxAccepted, setIsCheckboxAccepted] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTariffs = async () => {
      const data = await fetchTariffs();
      const normalized = normalizeTariffs(data);
      setTariffs(normalized);

      const defaultTariff = normalized.find((t) => t.is_best);
      setSelectedTariffId(defaultTariff?.id || normalized[0]?.id || '');
      setIsLoading(false);
    };

    loadTariffs();
  }, []);

  const bestTariff = tariffs.find((t) => t.is_best);
  const otherTariffs = sortTariffs(
    tariffs.filter((t) => !t.is_best && t.id !== bestTariff?.id)
  );
  const selectedTariff = tariffs.find((t) => t.id === selectedTariffId);

  return {
    tariffs,
    selectedTariffId,
    setSelectedTariffId,
    isCheckboxAccepted,
    setIsCheckboxAccepted,
    checkboxError,
    setCheckboxError,
    isLoading,
    bestTariff,
    otherTariffs,
    selectedTariff,
  };
};

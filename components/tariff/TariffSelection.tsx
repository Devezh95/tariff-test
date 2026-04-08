'use client';

import { useTimer } from '@/hooks/useTimer';
import { useTariffSelection } from '@/hooks/useTariffSelection';
import { useResponsiveScale } from '@/hooks/useResponsiveScale';
import { TariffHeader } from './TariffHeader';
import { TariffBestCard } from './TariffBestCard';
import { TariffMobileCards } from './TariffMobileCards';
import { TariffGrid } from './TariffGrid';
import { TariffInfo } from './TariffInfo';
import { TariffCheckbox } from './TariffCheckbox';
import { TariffButton } from './TariffButton';
import { TariffGuarantee } from './TariffGuarantee';

const HEADER_HEIGHT = 70;

export const TariffSelection = () => {
  const { isEnded } = useTimer(2);
  const scale = useResponsiveScale();
  
  const {
    selectedTariffId,
    setSelectedTariffId,
    isCheckboxAccepted,
    setIsCheckboxAccepted,
    checkboxError,
    setCheckboxError,
    bestTariff,
    otherTariffs,
    selectedTariff,
  } = useTariffSelection();

  const handleBuy = (tariffId: string) => {
    if (!isCheckboxAccepted) {
      setCheckboxError(true);
      setTimeout(() => setCheckboxError(false), 2000);
      return;
    }
    const tariff = selectedTariff;
    alert('Покупка тарифа: ' + tariff?.period);
  };

  const handleCheckboxChange = () => {
    setIsCheckboxAccepted(!isCheckboxAccepted);
    setCheckboxError(false);
  };

  const shouldScale = scale < 1 && typeof window !== 'undefined' && 
    window.innerWidth >= 1024 && window.innerWidth <= 1920;

  return (
    <div className="relative w-full min-h-screen bg-[#232829] overflow-x-hidden">
      <TariffHeader headerHeight={HEADER_HEIGHT} />

      <div
        className="transition-all duration-300 ease-out min-w-[320px]"
        style={{
          transform: shouldScale ? `scale(${scale})` : 'none',
          transformOrigin: 'top center',
          width: shouldScale ? '1920px' : '100%',
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: shouldScale ? `${HEADER_HEIGHT * (1 / scale - 1)}px` : '0px',
        }}>
        
        <div
          className="pb-[18px] px-4 sm:px-6 lg:px-8 max-[1024px]:px-4"
          style={{ paddingTop: `${HEADER_HEIGHT}px` }}>
          
          {/* Title */}
          <div className="w-full max-w-[1216px] mx-auto mb-[110px] mt-[81px] max-[1024px]:mb-0 max-[1024px]:mt-[35px]">
            <p className="font-montserrat font-bold text-transparent text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] tracking-[0.40px] leading-[44.0px] text-left max-[1024px]:text-center max-[1024px]:text-[20px] max-[1024px]:leading-[1.3] max-[1024px]:w-full">
              <span className="text-white tracking-[0.16px]">Выбери подходящий для себя </span>
              <span className="text-accent tracking-[0.16px]">тариф</span>
            </p>
          </div>

          {/* Main container */}
          <div className="w-full max-w-[1216px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 w-full max-[1024px]:gap-0 max-[1024px]:items-center">
              
              {/* Left Image */}
              <div className="w-full lg:w-[381px] flex-shrink-0 relative max-[1024px]:flex max-[1024px]:justify-center max-[1024px]:mb-4 max-[1024px]:mt-[20px]">
                <div
                  className="w-[381px] h-[767px] bg-cover bg-center bg-no-repeat rounded-[60px] max-[1024px]:w-[100px] max-[1024px]:h-[200px] max-[1024px]:rounded-[20px]"
                  style={{
                    backgroundImage:
                      'url(https://c.animaapp.com/xZME2bu5/img/freepik-export-20240531103402aths-1.png)',
                    backgroundSize: '100% 100%',
                  }}
                />
              </div>

              {/* Right Content */}
              <div className="flex-1 w-full lg:max-w-[748px] max-[1024px]:max-w-full max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:items-center">
                
                {/* Desktop Best Card */}
                {bestTariff && (
                  <div className="hidden lg:block">
                    <TariffBestCard
                      tariff={bestTariff}
                      isSelected={selectedTariffId === bestTariff.id}
                      isEnded={isEnded}
                      onSelect={setSelectedTariffId}
                    />
                  </div>
                )}

                {/* Mobile Cards */}
                <TariffMobileCards
                  bestTariff={bestTariff}
                  otherTariffs={otherTariffs}
                  selectedTariffId={selectedTariffId}
                  isEnded={isEnded}
                  onSelect={setSelectedTariffId}
                />

                {/* Desktop Grid */}
                <TariffGrid
                  tariffs={otherTariffs}
                  selectedTariffId={selectedTariffId}
                  isEnded={isEnded}
                  isCheckboxAccepted={isCheckboxAccepted}
                  onSelect={setSelectedTariffId}
                  onBuy={handleBuy}
                  onCheckboxError={() => setCheckboxError(true)}
                />

                {/* Info Box */}
                <TariffInfo />

                {/* Checkbox */}
                <TariffCheckbox
                  isAccepted={isCheckboxAccepted}
                  hasError={checkboxError}
                  onChange={handleCheckboxChange}
                />

                {/* Buy Button */}
                <TariffButton
                  tariff={selectedTariff}
                  isCheckboxAccepted={isCheckboxAccepted}
                  onBuy={handleBuy}
                />

                {/* Description Text */}
                <p className="font-montserrat font-normal text-[#9a9a9a] text-xs sm:text-sm leading-[1.3] mt-5 max-w-3xl max-[1024px]:text-[10px] max-[1024px]:leading-[1.3] max-[1024px]:mt-5 max-[1024px]:text-center"
                  style={{ maxWidth: 'min(100%, 499px)', width: '100%' }}>
                  Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению. Пользователь соглашается, что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <TariffGuarantee />
      </div>
    </div>
  );
};

'use client';

import { useTimer } from '@/hooks/useTimer';

interface TariffHeaderProps {
  headerHeight: number;
}

export const TariffHeader = ({ headerHeight }: TariffHeaderProps) => {
  const { formatTime, isEnded } = useTimer(2);
  const { minutes, seconds, isBlinking } = formatTime();

  return (
    <div className="fixed top-0 left-0 w-full z-50 min-w-[320px]">
      <div 
        className="flex flex-col w-full items-center gap-1 bg-[#1d5b43] transition-all duration-300 max-[1024px]:h-[74px] max-[1024px]:justify-center"
        style={{ height: `${headerHeight}px` }}>
        
        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] max-[1024px]:mt-[8px]">
          <div className="relative w-fit font-montserrat font-semibold text-white text-sm sm:text-base md:text-xl lg:text-2xl text-center tracking-[0] leading-[31.2px] whitespace-nowrap max-[1024px]:text-[14px] max-[1024px]:leading-[1.2]">
            {isEnded ? 'Акция завершена!' : 'Успейте открыть пробную неделю'}
          </div>
        </div>

        {!isEnded && (
          <div className="inline-flex items-center justify-center gap-1 sm:gap-2 relative flex-[0_0_auto] max-[1024px]:mt-[4px] max-[1024px]:mb-[8px]">
            <StarIcon />
            <div className="inline-flex items-center gap-1 sm:gap-1.5">
              <TimerDigit value={minutes} isBlinking={isBlinking} />
              <TimerSeparator isBlinking={isBlinking} />
              <TimerDigit value={seconds} isBlinking={isBlinking} />
            </div>
            <StarIcon />
          </div>
        )}
      </div>
    </div>
  );
};

const StarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
    <path
      d="M4.99781 0.463683C5.22659 -0.154582 6.10105 -0.15458 6.32983 0.463685L7.44113 3.46694C7.51306 3.66132 7.66632 3.81458 7.8607 3.8865L10.864 4.99781C11.4822 5.22659 11.4822 6.10105 10.864 6.32983L7.8607 7.44113C7.66632 7.51306 7.51306 7.66632 7.44113 7.8607L6.32983 10.864C6.10105 11.4822 5.22659 11.4822 4.99781 10.864L3.8865 7.8607C3.81458 7.66632 3.66132 7.51306 3.46694 7.44113L0.463683 6.32983C-0.154582 6.10105 -0.15458 5.22659 0.463685 4.99781L3.46694 3.8865C3.66132 3.81458 3.81458 3.66132 3.8865 3.46694L4.99781 0.463683Z"
      fill="#FFBB00"
    />
  </svg>
);

interface TimerDigitProps {
  value: string;
  isBlinking: boolean;
}

const TimerDigit = ({ value, isBlinking }: TimerDigitProps) => (
  <div
    className={`relative w-fit font-raleway font-bold text-[32px] tracking-[0] leading-[1.2] whitespace-nowrap transition-colors duration-300 max-[1024px]:text-[28px] ${
      isBlinking ? 'text-red-500' : 'text-[#ffba00]'
    }`}>
    {value}
  </div>
);

interface TimerSeparatorProps {
  isBlinking: boolean;
}

const TimerSeparator = ({ isBlinking }: TimerSeparatorProps) => (
  <div
    className={`relative w-fit font-raleway font-bold text-[32px] tracking-[0] leading-[1.2] whitespace-nowrap transition-colors duration-300 max-[1024px]:text-[28px] ${
      isBlinking ? 'text-red-500' : 'text-[#ffba00]'
    }`}>
    :
  </div>
);

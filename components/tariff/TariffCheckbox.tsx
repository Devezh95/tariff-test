'use client';

interface TariffCheckboxProps {
  isAccepted: boolean;
  hasError: boolean;
  onChange: () => void;
}

export const TariffCheckbox = ({
  isAccepted,
  hasError,
  onChange,
}: TariffCheckboxProps) => {
  return (
    <div 
      className="flex flex-col items-start gap-5 sm:gap-6 mt-6 max-[1024px]:mt-6 max-[1024px]:items-center"
      style={{ maxWidth: 'min(100%, 499px)', width: '100%' }}>
      
      <div className="inline-flex items-start sm:items-center gap-3">
        <button
          onClick={onChange}
          className="relative w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 focus:outline-none mt-1 sm:mt-0 max-[1024px]:w-5 max-[1024px]:h-5"
          aria-label="Согласие с условиями">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              stroke={hasError ? '#FD5656' : '#D4D4D4'}
              strokeWidth="1"
              fill="none"
            />
            {isAccepted && (
              <path
                d="M8 16L14 24L24 8"
                stroke="#FDB056"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            )}
          </svg>
        </button>

        <p className="font-montserrat font-normal text-[14px] sm:text-[16px] text-txtgray tracking-[0] leading-[17.6px] max-w-[513px] max-[1024px]:text-[12px] max-[1024px]:text-center">
          <span className="text-[#cdcdcd]">Я согласен с </span>
          <span className="underline">офертой рекуррентных платежей</span>
          <span className="text-[#cdcdcd]"> и </span>
          <span className="underline">Политикой конфиденциальности</span>
        </p>
      </div>

      {hasError && (
        <div className="text-red-500 text-sm animate-slide-down max-[1024px]:text-xs">
          Пожалуйста, примите условия перед покупкой
        </div>
      )}
    </div>
  );
};

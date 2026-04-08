'use client';

export const TariffInfo = () => {
  return (
    <div 
      className="w-full bg-[#2d3233] rounded-[20px] p-4 sm:p-5 mt-3 max-[1024px]:mt-3"
      style={{ maxWidth: 'min(100%, 499px)', width: '100%' }}>
      <div className="flex items-start gap-3">
        <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1 flex items-center justify-center">
          <span className="text-[#fdb056] text-xl sm:text-2xl font-bold">!</span>
        </div>
        <p className="font-montserrat font-light text-white text-[14px] sm:text-[16px] leading-[20.8px] tracking-[-0.01em] max-[1024px]:text-[12px]">
          Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц
        </p>
      </div>
    </div>
  );
};

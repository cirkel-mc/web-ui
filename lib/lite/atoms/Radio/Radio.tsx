import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export type RadioProps = InputHTMLAttributes<HTMLInputElement> &
  Partial<{
    label: ReactNode;
    wrapperClassName: string;
  }>;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, wrapperClassName, label, ...rest }, ref) => {
    return (
      <label
        className={twMerge(
          'flex items-center gap-[8px] cursor-pointer w-fit',
          wrapperClassName
        )}
      >
        <input
          type="radio"
          className={twMerge(
            'w-[20px] h-[20px] focus:outline-none hover:outline-none accent-primary-main',
            className
          )}
          ref={ref}
          {...rest}
        />
        {label}
      </label>
    );
  }
);

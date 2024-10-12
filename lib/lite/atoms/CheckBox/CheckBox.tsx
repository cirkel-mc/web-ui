/* eslint-disable react/require-default-props */
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxProps,
} from '@radix-ui/react-checkbox';
import { FiCheck } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';

export function CheckBox({ checked, className, ...rest }: CheckboxProps) {
  return (
    <Checkbox
      role="checkbox"
      className={twMerge(
        className,
        `flex justify-center items-center bg-neutral-10 !w-[20px] !h-[20px] border-neutral-400 border-[1px] rounded-md `,
        checked ? 'bg-primary-30 text-white' : 'bg-red'
      )}
      checked={checked}
      {...rest}
    >
      <CheckboxIndicator>
        <FiCheck className="text-white " />
      </CheckboxIndicator>
    </Checkbox >
  );
}

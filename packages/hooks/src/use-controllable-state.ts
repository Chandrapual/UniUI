import { useCallback, useState, type Dispatch, type SetStateAction } from "react";

export interface UseControllableStateOptions<T> {
  defaultValue?: T;
  onChange?: (nextValue: T) => void;
  value?: T;
}

export function useControllableState<T>({
  defaultValue,
  onChange,
  value
}: UseControllableStateOptions<T>) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : uncontrolledValue;

  const setValue = useCallback<Dispatch<SetStateAction<T | undefined>>>(
    (nextValue) => {
      const resolvedValue =
        typeof nextValue === "function"
          ? (nextValue as (previousState: T | undefined) => T | undefined)(currentValue)
          : nextValue;

      if (!isControlled) {
        setUncontrolledValue(resolvedValue);
      }

      if (resolvedValue !== undefined && resolvedValue !== currentValue) {
        onChange?.(resolvedValue);
      }
    },
    [currentValue, isControlled, onChange]
  );

  return [currentValue, setValue] as const;
}


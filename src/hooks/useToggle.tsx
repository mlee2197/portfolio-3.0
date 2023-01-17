import { useState } from "react";

export function useToggle(defaultState: boolean = false) {
  const [value, setValue] = useState(defaultState);

  const toggle = (newValue?: boolean) => setValue(newValue ?? !value);

  return { value, toggle };
}

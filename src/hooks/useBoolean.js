import { useCallback, useState } from "react";

//  this hook will be used for boolean state like loader and any other state if handling only boolean valeues
export default function useBoolean(defaultValue = false) {
  const [state, setState] = useState(defaultValue);
  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);
  const setToggle = useCallback(() => setState((prev) => !prev), []);

  return [state, setTrue, setFalse, setToggle];
}

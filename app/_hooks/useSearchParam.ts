"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type SearchParamFunction = (param: string, fallbackParam: string) => any;
type SetSearchParamsFunction = (value: string) => void;

interface IReturnValues {
  activeParam: string;
  setParam: SetSearchParamsFunction;
}

const useSearchParam: SearchParamFunction = (
  param,
  fallbackParam,
): IReturnValues => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeParam = searchParams.get(param) ?? fallbackParam;

  const setParam: SetSearchParamsFunction = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(param, value);
    router.push(`${pathname}?${params}`, { scroll: false });
  };

  return { activeParam, setParam };
};

export default useSearchParam;

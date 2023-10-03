import { useState } from "react";
import { convertFactorial } from "../utils/ConvertFactorial";
import GlobalButtons from "../components/GlobalButtons/GlobalButtons";

export function useCommonImports() {
  return { useState, convertFactorial, GlobalButtons };
}

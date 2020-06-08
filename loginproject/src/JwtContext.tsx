import { createContext } from "react";
export default createContext<JwtInfo | null>(null);
export interface JwtInfo {
         id: string;
         email: string;
}
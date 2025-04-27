import { getCookie, setCookie } from "./useCookies";

type Theme = 'light' | 'dark' | 'system';

export const getTheme = (): Theme => {
    return getCookie('theme') as Theme || 'system';
}

export const setTheme = (theme: Theme): void => {
    setCookie('theme', theme, 365);
}

export const useTheme = (): Theme => {
    return getCookie('theme') as Theme || 'system';
}


import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import i18next from 'i18next';

dayjs.locale('ja');

export const YYYYMMDD_JP = 'YYYY年MM月DD日';
export const YYYYMMDD = 'YYYY/MM/DD';
export const DDMM = 'DD/MM';

export const changeLocale = (locale: string): void => {
    dayjs.locale(locale);
};
export const toLocalStringTime = (date: Date): string => {
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};

export const requireField = (field: string) => {
    return i18next.t('error.require', { field }) || '';
};

export const formatDate = (date: Date | string | number, defaultFormat = YYYYMMDD) => {
    if (!date) return '';
    return `${dayjs(date).format(defaultFormat)}`;
};

export const getCurrentTime = (): string => {
    const referenceDate: Date = new Date("2021-01-05");
    const currentDate: Date = new Date();

    const timeDifference: number = currentDate.getTime() - referenceDate.getTime();

    const seconds: number = Math.floor(timeDifference / 1000);
    const minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);
    const days: number = Math.floor(hours / 24);

    const formattedTime: string[] = [];
    if (days > 0) {
        formattedTime.push(`${days} day${days > 1 ? 's' : ''}`);
    }
    if (hours % 24 > 0) {
        formattedTime.push(`${hours % 24} hour${hours % 24 > 1 ? 's' : ''}`);
    }
    if (minutes % 60 > 0) {
        formattedTime.push(`${minutes % 60} minute${minutes % 60 > 1 ? 's' : ''}`);
    }

    return formattedTime.join(', ');
}
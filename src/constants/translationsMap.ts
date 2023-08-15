import enJson from 'locales/en.json';
import enJsonDocs from '@steroidsjs/core/en.json';
import LanguageEnum from 'enums/LanguageEnum';

export const translationsMap = {
    [LanguageEnum.EN]: {
        ...enJson,
        ...enJsonDocs,
    },
    [LanguageEnum.RU]: {},
};

import Enum from '@steroidsjs/core/base/Enum';

export enum LanguageEnumTs {
    RU = 'ru',
    EN = 'en',
}

export default class LanguageEnum extends Enum {
    static RU = LanguageEnumTs.RU;

    static EN = LanguageEnumTs.EN;

    static getLabels() {
        return {
            [this.RU]: 'Ru',
            [this.EN]: 'En',
        };
    }

    static detectFromNavigator(): LanguageEnumTs {
        if (!window || !window.navigator) {
            return this.EN;
        }

        const language = String(navigator.language).substr(0, 2).toLowerCase();
        return this.getKeys().includes(language)
            ? language as unknown as LanguageEnumTs
            : this.EN;
    }
}

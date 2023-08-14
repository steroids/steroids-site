import {useSelector} from '@steroidsjs/core/hooks';
import {getRoute, getRouteParams, buildUrl} from '@steroidsjs/core/reducers/router';
import LanguageEnum, {LanguageEnumTs} from '../enums/LanguageEnum';

/**
 * @todo move to steroids
 */
export default function useAppLanguage() {
    const route = useSelector(state => getRoute(state));
    const routeParams = useSelector(state => getRouteParams(state));

    // Build URL for the new language and load this page
    const setLanguage = (newLanguage) => {
        if (routeParams.language !== newLanguage) {
            window.location.href = buildUrl(route.path, {...routeParams, language: newLanguage});
        }
    };
    return {setLanguage};
}

/**
 * @todo move to the LocaleComponent
 */
export function detectLanguage(urlPathname: string): LanguageEnumTs {
    const languages = LanguageEnum.getKeys().join('|');

    // Matches strings like '/ru/foo' or '/en'
    const urlLanguageRegexp = new RegExp(`^/(${languages})(/)?`);
    const locationLanguageMatch = urlLanguageRegexp.exec(urlPathname);

    return locationLanguageMatch
        ? locationLanguageMatch[1] as unknown as LanguageEnumTs
        : LanguageEnum.detectFromNavigator();
}

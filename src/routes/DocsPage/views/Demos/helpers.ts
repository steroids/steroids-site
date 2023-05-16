import _upperFirst from 'lodash-es/upperFirst';
import _last from 'lodash-es/last';
import {IEntityInfo} from 'types/IEntityInfo';
import {checkAndRemoveArraySign} from 'helpers/apiTable';

const toDemoFormat = ([title, component]) => ({
    title: _upperFirst(title.replaceAll('-', ' ')),
    component,
});

export const getDemosByRouteParam = (
    demos: Record<string, any>,
    routeParam: string,
) => Object
    .entries(demos[routeParam] || {})
    .map(toDemoFormat);

export const getComponentNameByRouteParam = (routeParam: string) => _last(routeParam?.split('-'));

export const getNestedInterfaces = (mainInterface: IEntityInfo, allInterfaces: IEntityInfo[]) => {
    if (!mainInterface) {
        return [];
    }

    const nestedInterfaces = [];

    const interfacePattern = /^I\w+$/;
    const interfacePresencePattern = /I.*/;

    const typesSeparator = ' | ';

    const checkAndAddNestedInterface = (type: string) => {
        const normalizedType = checkAndRemoveArraySign(type);

        if (interfacePattern.test(normalizedType)) {
            const nestedInterface = allInterfaces[normalizedType];

            if (!nestedInterface) {
                console.warn(`Interface ${normalizedType} not exist in docs interfaces`);
                return;
            }

            nestedInterfaces.push(nestedInterface);
        }
    };

    mainInterface.properties.forEach(property => {
        const propertyType = property.type;

        if (interfacePresencePattern.test(propertyType)) {
            checkAndAddNestedInterface(propertyType);

            if (propertyType.includes(typesSeparator)) {
                propertyType.split(typesSeparator).forEach(checkAndAddNestedInterface);
            }
        }
    });

    return nestedInterfaces;
};

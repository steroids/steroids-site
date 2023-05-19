import Link from '@steroidsjs/core/ui/nav/Link';
import {ROUTE_DOCS} from 'constants/routes';
import React from 'react';
import {IEntityInfo} from 'types/IEntityInfo';
import autoDocs from '@steroidsjs/core/docs-autogen-result.json';

const INTERFACE_PATTERN = /^I\w+/;
const INTERFACE_PRESENCE_PATTERN = /I.*/;
const PROPS_INTERFACE_PATTERN = /^I\w+Props$/;

export const checkAndRemoveArraySign = (type: string) => {
    const arraySign = '[]';

    if (type?.includes(arraySign)) {
        return type.replace(arraySign, '');
    }

    return type;
};

const normalizeType = (type: string): string[] => {
    const typesSeparator = ' | ';
    const typeWithoutArraySign = checkAndRemoveArraySign(type);

    if (typeWithoutArraySign.includes(typesSeparator)) {
        return typeWithoutArraySign.split(typesSeparator);
    }

    return [typeWithoutArraySign];
};

export const getInterfaceFromType = (type: string) => type.split(' ').find(typeItem => INTERFACE_PATTERN.test(typeItem));

export const getRouteParamsByModuleName = (moduleName: string) => {
    const separator = '/';
    const moduleNameParts = moduleName.split(separator);

    return {
        category: moduleNameParts[0],
        path: `${moduleNameParts[1]}-${moduleNameParts[2]}`,
    };
};

export const getNestedInterfaces = (mainInterface: IEntityInfo, allInterfaces: IEntityInfo[], nestedInterfaces = []) => {
    if (!mainInterface) {
        return [];
    }

    const checkAndAddNestedInterface = (type: string) => {
        if (INTERFACE_PATTERN.test(type) && !PROPS_INTERFACE_PATTERN.test(type)) {
            const nestedInterface = allInterfaces[type];

            if (!nestedInterface) {
                console.warn(`Interface ${type} not exist in docs interfaces`);
                return;
            }

            if (nestedInterfaces.includes(nestedInterface)) {
                return;
            }

            nestedInterfaces.push(nestedInterface);
            getNestedInterfaces(nestedInterface, allInterfaces, nestedInterfaces);
        }
    };

    mainInterface.properties.forEach(property => {
        const normalizedType = normalizeType(property.type);
        normalizedType.forEach(checkAndAddNestedInterface);
    });

    return nestedInterfaces;
};

export const checkAndCreateTypeLink = (type: string, onClick: any) => {
    if (INTERFACE_PRESENCE_PATTERN.test(type)) {
        const interfaceName = getInterfaceFromType(type);
        const interfaceWithoutArraySign = checkAndRemoveArraySign(interfaceName);
        const otherType = type.split(interfaceName)[0];

        const renderLink = () => {
            if (PROPS_INTERFACE_PATTERN.test(interfaceWithoutArraySign)) {
                const moduleName = autoDocs.interfaces[interfaceWithoutArraySign].moduleName;

                return (
                    <Link
                        onClick={() => onClick(
                            ROUTE_DOCS,
                            getRouteParamsByModuleName(moduleName),
                        )}
                        label={interfaceName}
                        color='purple'
                    />
                );
            }

            return (
                <a href={`#${interfaceWithoutArraySign}`}>
                    {interfaceName}
                </a>
            );
        };

        return (
            <span>
                {otherType}
                {renderLink()}
            </span>
        );
    }

    return type;
};

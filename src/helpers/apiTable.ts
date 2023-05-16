export const checkAndRemoveArraySign = (type: string) => {
    const arraySign = '[]';

    if (type?.includes(arraySign)) {
        return type.replace(arraySign, '');
    }

    return type;
};

export const getInterfaceFromType = (
    type: string,
    interfacePattern: RegExp,
) => checkAndRemoveArraySign(
    type
        .split(' ')
        .find(typeItem => interfacePattern.test(checkAndRemoveArraySign(typeItem))),
);

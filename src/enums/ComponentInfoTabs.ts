import Enum from '@steroidsjs/core/base/Enum';

export default class ComponentInfoTabs extends Enum {
    static DESCRIPTION = 'description';

    static PROPERTIES = 'properties';

    static getDefaultTab() {
        return this.DESCRIPTION;
    }

    static getLabels() {
        return {
            [this.DESCRIPTION]: 'bookmark',
            [this.PROPERTIES]: 'file',
        };
    }
}

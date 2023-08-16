import Enum from '@steroidsjs/core/base/Enum';

export default class TabType extends Enum {
    static DESCRIPTION = 'description';

    static PROPERTIES = 'properties';

    static getLabels() {
        return {
            [this.DESCRIPTION]: 'description',
            [this.PROPERTIES]: 'properties',
        };
    }
}

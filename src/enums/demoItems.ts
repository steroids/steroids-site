import Enum from '@steroidsjs/core/base/Enum';

export default class DemoItems extends Enum {
    static FIRST = 'first';

    static SECOND = 'second';

    static getLabels() {
        return {
            [this.SECOND]: 'First',
            [this.FIRST]: 'Second',
        };
    }
}

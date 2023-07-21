import Enum from '@steroidsjs/core/base/Enum';

export default class Themes extends Enum {
    static LIGHT = 'light';

    static DARK = 'dark';

    static getLabels() {
        return {
            [this.LIGHT]: 'light',
            [this.DARK]: 'dark',
        };
    }
}

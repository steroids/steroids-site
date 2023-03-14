import Enum from '@steroidsjs/core/base/Enum';

export default class Themes extends Enum {
    static LIGHT = 'light';

    static DARK = 'dark';

    static getLabels() {
        return {
            [this.DARK]: __('Светлая тема'),
            [this.LIGHT]: __('Темная тема'),
        };
    }
}

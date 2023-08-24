import Enum from '@steroidsjs/core/base/Enum';

export default class GettingStartedArticles extends Enum {
    static OVERVIEW = 'overview';

    static INSTALLATION = 'installation';

    static ARCHITECTURE = 'architecture';

    static UI_ARCHITECTURE = 'ui-architecture';

    static ROUTING = 'routing';

    static SSR = 'ssr';

    static getLabels() {
        return {
            [this.OVERVIEW]: __('Обзор'),
            [this.INSTALLATION]: __('Установка'),
            [this.ARCHITECTURE]: __('Архитектура'),
            [this.UI_ARCHITECTURE]: __('Архитектура UI'),
            [this.ROUTING]: __('Роутинг'),
            [this.SSR]: __('Использование SSR'),
        };
    }

    static getItems() {
        return this.getDropdownItems();
    }
}

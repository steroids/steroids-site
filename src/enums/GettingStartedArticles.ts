import Enum from '@steroidsjs/core/base/Enum';

export default class GettingStartedArticles extends Enum {
    static OVERVIEW = 'overview';

    static INSTALLATION = 'installation';

    static ARCHITECTURE = 'architecture';

    static UI_ARCHITECTURE = 'ui-architecture';

    static ROUTING = 'routing';

    static SSR = 'ssr';

    static getStyles() {
        return {
            [this.OVERVIEW]: {
                backgroundColor: '#651FFF',
                icon: 'getting-started-overview',
            },
            [this.INSTALLATION]: {
                backgroundColor: '#F90',
                icon: 'getting-started-installation',
            },
            [this.ARCHITECTURE]: {
                backgroundColor: '#0084FF',
                icon: 'getting-started-architecture',
            },
            [this.UI_ARCHITECTURE]: {
                backgroundColor: '#272A37',
                icon: 'getting-started-ui-architecture',
            },
            [this.ROUTING]: {
                backgroundColor: '#272A37',
                icon: 'getting-started-routing',
            },
            [this.SSR]: {
                backgroundColor: '#EA8888',
                icon: 'getting-started-ssr',
            },
        };
    }

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

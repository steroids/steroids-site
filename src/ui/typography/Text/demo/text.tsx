import React from 'react';
import {Text} from '@steroidsjs/core/ui/typography';

/**
 * Simple text
 */

// eslint-disable-next-line max-len
const TEXT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, odio iusto. Inventore delectus impedit officiis excepturi aut deserunt quaerat! Aperiam accusamus unde officiis recusandae repudiandae reprehenderit dolorem quia doloremque exercitationem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum facilis placeat quia architecto necessitatibus sed possimus quas, porro earum omnis ea assumenda, incidunt ut! Dolorem pariatur qui molestias consectetur commodi!';

export default () => (
    <div>
        <Text
            type='body'
            content={TEXT}
        />
        <Text
            type='span'
            content='Span'
            style={{marginRight: '10px'}}
        />
        <Text
            type='boldSpan'
            content='Bold span'
        />
    </div>
);

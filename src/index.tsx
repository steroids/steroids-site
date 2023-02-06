/// <reference types="@steroidsjs/core/index" />

import * as React from 'react';
import Application from './Application';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<Application />);

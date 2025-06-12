import type { OrderContextValue } from '../type';

import { createContext } from 'react';

export const OrderContext = createContext<OrderContextValue | undefined>(undefined);

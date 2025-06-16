import { Navigate, useLocation } from 'react-router';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';
import { ORDER_STATUS } from 'src/consts';
import { useOrderContext } from 'src/libs/Order/Context/useOrderContext';

interface Props {
  children: React.ReactNode;
}

export default function OrderWrapper({ children }: Props) {
  const { order } = useOrderContext();

  const { pathname } = useLocation();
  const status = pathname.split('/')[3];

  const orderRoot = `${paths.pages.order.root}/${order.id}`;

  if (Object.keys(ORDER_STATUS).includes(order.status) && status !== ORDER_STATUS[order.status]) {
    return (
      <Navigate
        to={`${orderRoot}/${ORDER_STATUS[order.status]}`}
        state={{ status: order.status }}
        replace
      />
    );
  }

  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Order`}</title>

      {children}
    </>
  );
}

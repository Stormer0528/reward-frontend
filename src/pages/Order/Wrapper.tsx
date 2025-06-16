import { Navigate, useMatch } from 'react-router';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';
import { ORDER_STATUS } from 'src/consts';
import { useOrderContext } from 'src/libs/Order/Context/useOrderContext';

interface Props {
  children: React.ReactNode;
}

export default function OrderWrapper({ children }: Props) {
  const { order } = useOrderContext();
  const match = useMatch(`${paths.pages.order.root}/:orderId/:status`);

  const status = match?.params.status ?? '';

  const orderRoot = `${paths.pages.order.root}/${order.id}`;

  if (status !== ORDER_STATUS[order.status]) {
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

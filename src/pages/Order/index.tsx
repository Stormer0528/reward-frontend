// ----------------------------------------------------------------------

import { OrderStatus } from 'src/__generated__/graphql';

import Detail from 'src/sections/Order/Detail';
import Payment from 'src/sections/Order/Payment';
import PaymentStatus from 'src/sections/Order/PaymentStatus';

interface Props {
  status: OrderStatus;
}

export default function Page({ status }: Props) {
  if (status === OrderStatus.New) {
    return <Payment />;
  }

  if (status === OrderStatus.Pending) {
    return <Detail />;
  }

  return <PaymentStatus status={status} />;
}

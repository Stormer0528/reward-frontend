import { TXC_WALLET, OTHER_WALLET } from 'src/consts';

export const getWallets = (memberWallets: any) => {
  if (!Array.isArray(memberWallets)) return [[], []];

  const txcWallets: any[] = memberWallets
    .filter((mw) => TXC_WALLET.findIndex((txcWallet) => txcWallet.id === mw.payout.id) !== -1)
    .map((mw) => ({
      id: mw.id,
      payoutId: mw.payout.id,
      address: mw.address,
      note: mw.note,
      percent: mw.percent,
      isDefault: mw.isDefault,
    }));

  const otherWallets: any = memberWallets
    .filter((mw) => OTHER_WALLET.findIndex((otherWallet) => otherWallet.id === mw.payout.id) !== -1)
    .map((mw) => ({
      id: mw.id,
      payoutId: mw.payout.id,
      address: mw.address,
      note: mw.note,
      percent: mw.percent,
      isDefault: mw.isDefault,
    }));

  return [txcWallets, otherWallets];
};

export const hasDuplicates = (arr: any[]) => {
  const seen = new Set();

  return arr.some((item: any) => {
    if (seen.has(item.address)) {
      return true;
    }

    seen.add(item.address);

    return false;
  });
};

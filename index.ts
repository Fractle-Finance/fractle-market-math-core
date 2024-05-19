import BigNumber from "bignumber.js";
export interface MarketState {
  totalPt: BigNumber;
  totalSy: BigNumber;
  totalLp: BigNumber;
  treasury: `0x${string}`;
  scalarRoot: BigNumber;
  expiry: BigNumber;
  lnFeeRateRoot: BigNumber;
  reserveFeePercent: BigNumber;
  lastLnImpliedRate: BigNumber;
  lifecircle: BigNumber;
  sAPR: BigNumber;
}
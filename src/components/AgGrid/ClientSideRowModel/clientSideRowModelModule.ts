import type { _ClientSideRowModelGridApi } from '@ag-grid-community/core';

import {
  ModuleNames,
  _defineModule,
  RowModelHelperService,
  _CsrmSsrmSharedApiModule,
} from '@ag-grid-community/core';

import { VERSION } from './version';
import { SortStage } from './clientSideRowModel/sortStage';
import { FilterStage } from './clientSideRowModel/filterStage';
import { SortService } from './clientSideRowModel/sortService';
import { FlattenStage } from './clientSideRowModel/flattenStage';
import { ImmutableService } from './clientSideRowModel/immutableService';
import { ClientSideRowModel } from './clientSideRowModel/clientSideRowModel';
import {
  isRowDataEmpty,
  forEachLeafNode,
  resetRowHeights,
  applyTransaction,
  applyTransactionAsync,
  flushAsyncTransactions,
  forEachNodeAfterFilter,
  getBestCostNodeSelection,
  refreshClientSideRowModel,
  onGroupExpandedOrCollapsed,
  forEachNodeAfterFilterAndSort,
} from './clientSideRowModel/clientSideRowModelApi';

export const ClientSideRowModelCoreModule = _defineModule({
  version: VERSION,
  moduleName: `${ModuleNames.ClientSideRowModelModule}-core`,
  rowModel: 'clientSide',
  beans: [ClientSideRowModel, FilterStage, SortStage, FlattenStage, SortService, ImmutableService],
});

export const ClientSideRowModelApiModule = _defineModule<_ClientSideRowModelGridApi<any>>({
  version: VERSION,
  moduleName: `${ModuleNames.ClientSideRowModelModule}-api`,
  beans: [RowModelHelperService],
  apiFunctions: {
    onGroupExpandedOrCollapsed,
    refreshClientSideRowModel,
    isRowDataEmpty,
    forEachLeafNode,
    forEachNodeAfterFilter,
    forEachNodeAfterFilterAndSort,
    resetRowHeights,
    applyTransaction,
    applyTransactionAsync,
    flushAsyncTransactions,
    getBestCostNodeSelection,
  },
  dependantModules: [ClientSideRowModelCoreModule, _CsrmSsrmSharedApiModule],
});

export const ClientSideRowModelModule = _defineModule({
  version: VERSION,
  moduleName: ModuleNames.ClientSideRowModelModule,
  dependantModules: [ClientSideRowModelCoreModule, ClientSideRowModelApiModule],
});

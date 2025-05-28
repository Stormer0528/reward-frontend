import type {
  NamedBean,
  SortOption,
  IRowNodeStage,
  BeanCollection,
  SortController,
  StageExecuteParams,
} from '@ag-grid-community/core';
import type { SortService } from './sortService';

import { _exists, BeanStub } from '@ag-grid-community/core';

export class SortStage extends BeanStub implements NamedBean, IRowNodeStage {
  beanName = 'sortStage' as const;

  private sortService: SortService;

  private sortController: SortController;

  public wireBeans(beans: BeanCollection): void {
    this.sortService = beans.sortService as SortService;
    this.sortController = beans.sortController;
  }

  public execute(params: StageExecuteParams): void {
    const sortOptions: SortOption[] = this.sortController.getSortOptions();

    const sortActive = _exists(sortOptions) && sortOptions.length > 0;

    this.sortService.sort(sortActive, params.changedPath);
  }
}

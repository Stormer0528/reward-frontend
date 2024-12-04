import type {
  RowNode,
  NamedBean,
  ChangedPath,
  FilterManager,
  IRowNodeStage,
  BeanCollection,
  StageExecuteParams,
} from '@ag-grid-community/core';

import { BeanStub } from '@ag-grid-community/core';

export class FilterStage extends BeanStub implements IRowNodeStage, NamedBean {
  beanName = 'filterStage' as const;

  private filterManager?: FilterManager;

  public wireBeans(beans: BeanCollection): void {
    this.filterManager = beans.filterManager;
  }

  public execute(params: StageExecuteParams): void {
    const { changedPath } = params;
    this.filter(changedPath!);
  }

  private filter(changedPath: ChangedPath): void {
    this.filterNodes(changedPath);
  }

  private filterNodes(changedPath: ChangedPath): void {
    const filterCallback = (rowNode: RowNode) => {
      rowNode.childrenAfterFilter = rowNode.childrenAfterGroup;

      if (rowNode.sibling) {
        rowNode.sibling.childrenAfterFilter = rowNode.childrenAfterFilter;
      }
    };

    changedPath.forEachChangedNodeDepthFirst(filterCallback, true);
  }

  private doingTreeDataFiltering() {
    return this.gos.get('treeData') && !this.gos.get('excludeChildrenWhenTreeDataFiltering');
  }
}

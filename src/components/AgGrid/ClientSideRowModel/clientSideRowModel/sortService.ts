import type {
  RowNode,
  NamedBean,
  ChangedPath,
  WithoutGridCommon,
  PostSortRowsParams,
} from '@ag-grid-community/core';

import { BeanStub } from '@ag-grid-community/core';

export class SortService extends BeanStub implements NamedBean {
  beanName = 'sortService' as const;

  public sort(sortActive: boolean, changedPath: ChangedPath | undefined): void {
    // @ts-ignore
    const postSortFunc = this.gos.getCallback('postSortRows');

    const callback = (rowNode: RowNode) => {
      if (sortActive) {
        // Skip
        rowNode.childrenAfterSort = rowNode.childrenAfterAggFilter!;
      } else {
        // if there's no sort to make, skip this step
        rowNode.childrenAfterSort = rowNode.childrenAfterAggFilter!.slice(0);
      }

      if (rowNode.sibling) {
        rowNode.sibling.childrenAfterSort = rowNode.childrenAfterSort;
      }

      // this.updateChildIndexes(rowNode);

      if (postSortFunc) {
        const params: WithoutGridCommon<PostSortRowsParams> = { nodes: rowNode.childrenAfterSort };
        postSortFunc(params);
      }
    };

    if (changedPath) {
      changedPath.forEachChangedNodeDepthFirst(callback);
    }
  }
}

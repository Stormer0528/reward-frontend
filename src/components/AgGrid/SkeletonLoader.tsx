import type { CustomLoadingOverlayProps } from '@ag-grid-community/react';

import { useMemo, type RefObject } from 'react';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';

// Pseudo random number. See https://stackoverflow.com/a/47593316
function mulberry32(a: number): () => number {
  return () => {
    /* eslint-disable */
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    /* eslint-enable */
  };
}

function randomBetween(seed: number, min: number, max: number): () => number {
  const random = mulberry32(seed);
  return () => min + (max - min) * random();
}

const SkeletonCell = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderBottom: `1px dashed ${theme.palette.divider}`,
}));

export const SkeletonLoader = ({
  api,
  gridWrapperRef,
}: CustomLoadingOverlayProps & { gridWrapperRef: RefObject<HTMLDivElement> }) => {
  const columns = api.getAllDisplayedVirtualColumns();
  const { headerHeight, rowHeight } = api.getSizesForCurrentTheme();
  const wrapperHeight = gridWrapperRef.current?.clientHeight ?? 0;
  const skeletonRowsCount = Math.floor((wrapperHeight - headerHeight) / rowHeight);

  const children = useMemo(() => {
    // reseed random number generator to create stable lines between renders
    const random = randomBetween(12345, 25, 75);
    const array: React.ReactNode[] = [];

    for (let i = 0; i < skeletonRowsCount; i += 1) {
      columns.forEach((column) => {
        const width = Math.round(random());
        array.push(
          <SkeletonCell
            key={`col-${column.getColId()}-${i}`}
            className={column.getColDef().cellClass as string}
          >
            <Skeleton sx={{ mx: 1 }} width={`${width}%`} />
          </SkeletonCell>
        );
      });
      array.push(<SkeletonCell key={`fill-${i}`} />);
    }
    return array;
  }, [skeletonRowsCount, columns]);

  return (
    <>
      <div style={{ height: headerHeight + 1, width: '100%' }} />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `${columns
            .map((column) => `${column.getActualWidth()}px`)
            .join(' ')} 1fr`,
          gridAutoRows: `${rowHeight}px`,
          overflowX: 'hidden',
        }}
      >
        {children}
      </div>
    </>
  );
};

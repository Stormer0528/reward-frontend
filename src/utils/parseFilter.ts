import type { GridFilterModel } from '@mui/x-data-grid';
import type {
  FilterModel,
  SetFilterModel,
  TextFilterModel,
  DateFilterModel,
  NumberFilterModel,
  ICombinedSimpleModel,
} from '@ag-grid-community/core';

import dayjs from 'dayjs';

import { processInput } from './formatNumber';

export function parseFilterModel(curFilter: any = {}, filter?: FilterModel) {
  const filterObj: any[] = [];

  if (filter) {
    Object.entries(filter).forEach(([field, value]) => {
      if (value.filterType === 'text') {
        if ('operator' in value) {
          const typedModel = value as ICombinedSimpleModel<TextFilterModel>;
          const parsedFilters = typedModel.conditions.map((model) => parseTextFilter(model));

          // If field is like firstName_lastName, then query should run for both first and last name column
          if (field.includes('_')) {
            filterObj.push({
              OR: field.split('_').map((eachField) => ({
                [typedModel.operator]: parsedFilters.map((operation) => ({
                  [eachField]: operation,
                })),
              })),
            });
          } else {
            filterObj.push({
              [typedModel.operator]: parsedFilters.map((operation) => ({
                [field]: operation,
              })),
            });
          }
        } else {
          const operation = parseTextFilter(value);
          if (field.includes('_')) {
            filterObj.push({
              OR: field.split('_').map((eachField) => ({
                [eachField]: operation,
              })),
            });
          } else {
            filterObj.push({ [field]: operation });
          }
        }
      } else if (value.filterType === 'set') {
        filterObj.push({ [field]: parseSetFilter(value as SetFilterModel) });
      } else if (value.filterType === 'date') {
        if ('operator' in value) {
          const typedModel = value as ICombinedSimpleModel<DateFilterModel>;
          const parsedFilters = typedModel.conditions.map((model) => parseDateFilter(model));
          filterObj.push({
            [typedModel.operator]: parsedFilters.map((operation) => ({
              [field]: operation,
            })),
          });
        } else {
          filterObj.push({ [field]: parseDateFilter(value) });
        }
      } else if (value.filterType === 'number') {
        if ('operator' in value) {
          const typedModel = value as ICombinedSimpleModel<NumberFilterModel>;
          const parsedFilters = typedModel.conditions.map((model) => parseNumberFilter(model));
          filterObj.push({
            [typedModel.operator]: parsedFilters.map((operation) => ({
              [field]: operation,
            })),
          });
        } else {
          filterObj.push({ [field]: parseNumberFilter(value) });
        }
      } else {
        filterObj.push({ [field]: value });
      }
    });
  }

  return { ...curFilter, ...(filterObj.length > 0 && { AND: filterObj }) };
}

function parseNumberFilter({ type, filter, filterTo }: NumberFilterModel) {
  const from = processInput(filter);
  const to = processInput(filterTo);
  switch (type) {
    case 'equals':
      return from;
    case 'notEqual':
      return { ne: from };
    case 'greaterThan':
      return { gt: from };
    case 'greaterThanOrEqual':
      return { gte: from };
    case 'lessThan':
      return { lt: from };
    case 'lessThanOrEqual':
      return { lte: from };
    case 'inRange':
      return { gte: from, lte: to };
    default:
      console.log(`unknown number filter type: ${type}`);
      return null;
  }
}

function parseTextFilter({ type, filter }: TextFilterModel) {
  switch (type) {
    case 'equals':
      return { equals: filter };
    case 'notEqual':
      return { not: { equals: filter } };
    case 'contains':
      return { contains: `${filter}`, mode: 'insensitive' };
    case 'notContains':
      return { not: { contains: `${filter}`, mode: 'insensitive' } };
    case 'startsWith':
      return { startsWith: filter, mode: 'insensitive' };
    case 'endsWith':
      return { endsWith: filter, mode: 'insensitive' };
    case 'blank':
      return null;
    case 'notBlank':
      return { not: null };
    default:
      console.log(`unknown text filter type: ${type}`);
      return null;
  }
}

function parseSetFilter({ values }: SetFilterModel) {
  return { in: values };
}

function parseDateFilter({ type, dateFrom, dateTo }: DateFilterModel) {
  const from = dayjs(dateFrom, 'YYYY-MM-DD').toISOString();
  const to = dateTo && dayjs(dateTo, 'YYYY-MM-DD').toISOString();
  switch (type) {
    case 'equals':
      return from;
    case 'notEqual':
      return { ne: from };
    case 'greaterThan':
      return { gt: from };
    case 'greaterThanOrEqual':
      return { gte: from };
    case 'lessThan':
      return { lt: from };
    case 'lessThanOrEqual':
      return { lte: from };
    case 'inRange':
      return { gte: from, lte: to };
    default:
      console.log(`unknown date filter type: ${type}`);
      return null;
  }
}

export function parseFilter(curFilter: any = {}, filter?: GridFilterModel) {
  const filterObj: any = { ...curFilter };

  (filter?.items ?? []).forEach((item) => {
    const { value, field, operator } = item;

    if (operator === 'isEmpty') {
      filterObj[field] = null;
    } else if (operator === 'isNotEmpty') {
      filterObj[field] = { not: null };
    } else if (value !== undefined) {
      if (operator === '=' || operator === 'equals') {
        filterObj[field] = value;
      } else if (operator === 'is') {
        filterObj[field] = value === 'true';
      } else if (operator === '>') {
        filterObj[field] = { gt: value };
      } else if (operator === '>=') {
        filterObj[field] = { gte: value };
      } else if (operator === '<=') {
        filterObj[field] = { lte: value };
      } else if (operator === '<') {
        filterObj[field] = { lt: value };
      } else if (operator === '!=') {
        filterObj[field] = { ne: value };
      } else if (operator === 'isAnyOf') {
        filterObj[field] = { in: value };
      } else if (operator === 'contains') {
        filterObj[field] = { contains: `${value}`, mode: 'insensitive' };
      } else if (operator === 'startsWith') {
        filterObj[field] = { startsWith: value, mode: 'insensitive' };
      } else if (operator === 'endsWith') {
        filterObj[field] = { endsWith: value, mode: 'insensitive' };
      } else if (operator === 'blank') {
        filterObj[field] = null;
      } else if (operator === 'notBlank') {
        filterObj[field] = { not: null };
      }
    }
  });
  return filterObj;
}

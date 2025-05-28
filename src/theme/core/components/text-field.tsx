import type { Theme, Components } from '@mui/material/styles';

import { varAlpha } from 'minimal-shared/utils';

import { inputBaseClasses } from '@mui/material/InputBase';
import { filledInputClasses } from '@mui/material/FilledInput';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

// ----------------------------------------------------------------------

const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  // ▼▼▼▼▼▼▼▼ 🎨 STYLE ▼▼▼▼▼▼▼▼
  styleOverrides: {
    root: ({ theme }) => ({
      [`&.${inputBaseClasses.disabled}`]: {
        '& svg': { color: theme.vars.palette.text.disabled },
      },
      [`& .${inputBaseClasses.input}:focus`]: {
        borderRadius: 'inherit',
      },
    }),
    input: ({ theme }) => ({
      fontSize: theme.typography.pxToRem(15),
      [theme.breakpoints.down('sm')]: {
        // This will prevent zoom in Safari min font size ~ 16px
        fontSize: theme.typography.pxToRem(16),
      },
      '&::placeholder': { opacity: 1, color: theme.vars.palette.text.disabled },
    }),
  },
};

const MuiInput: Components<Theme>['MuiInput'] = {
  // ▼▼▼▼▼▼▼▼ 🎨 STYLE ▼▼▼▼▼▼▼▼
  styleOverrides: {
    underline: ({ theme }) => ({
      '&::before': {
        borderBottomColor: theme.vars.palette.shared.inputUnderline,
      },
      '&::after': {
        borderBottomColor: theme.vars.palette.text.primary,
      },
    }),
  },
};

const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  // ▼▼▼▼▼▼▼▼ 🎨 STYLE ▼▼▼▼▼▼▼▼
  styleOverrides: {
    root: ({ theme }) => ({
      [`&.${outlinedInputClasses.focused}`]: {
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: theme.vars.palette.text.primary,
        },
      },
      [`&.${outlinedInputClasses.error}`]: {
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: theme.vars.palette.error.main,
        },
      },
      [`&.${outlinedInputClasses.disabled}`]: {
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: theme.vars.palette.action.disabledBackground,
        },
      },
    }),
    notchedOutline: ({ theme }) => ({
      borderColor: theme.vars.palette.shared.inputOutlined,
      transition: theme.transitions.create(['border-color'], {
        duration: theme.transitions.duration.shortest,
      }),
    }),
  },
};

const MuiFilledInput: Components<Theme>['MuiFilledInput'] = {
  // ▼▼▼▼▼▼▼▼ ⚙️ PROPS ▼▼▼▼▼▼▼▼
  defaultProps: {
    disableUnderline: true,
  },
  // ▼▼▼▼▼▼▼▼ 🎨 STYLE ▼▼▼▼▼▼▼▼
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius,
      backgroundColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
      '&:hover': {
        backgroundColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.16),
      },
      [`&.${filledInputClasses.focused}`]: {
        backgroundColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.16),
      },
      [`&.${filledInputClasses.error}`]: {
        backgroundColor: varAlpha(theme.vars.palette.error.mainChannel, 0.08),
        [`&.${filledInputClasses.focused}`]: {
          backgroundColor: varAlpha(theme.vars.palette.error.mainChannel, 0.16),
        },
      },
      [`&.${filledInputClasses.disabled}`]: {
        backgroundColor: theme.vars.palette.action.disabledBackground,
      },
    }),
  },
};

const MuiTextField: Components<Theme>['MuiTextField'] = {
  // ▼▼▼▼▼▼▼▼ ⚙️ PROPS ▼▼▼▼▼▼▼▼
  defaultProps: {
    variant: 'outlined',
  },
};

/* **********************************************************************
 * 🚀 Export
 * **********************************************************************/
export const textField: Components<Theme> = {
  MuiInput,
  MuiInputBase,
  MuiTextField,
  MuiFilledInput,
  MuiOutlinedInput,
};

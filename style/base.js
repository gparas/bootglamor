import { css } from 'glamor';
import {
  color,
  fontSize,
} from './constants';

css.global('*', { boxSizing: 'border-box' });

css.global('html', {
  fontSize: 16,
  lineHeight: 1.15,
  WebkitTextSizeAdjust: '100%',
});

css.global('body', {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontSize: fontSize.base,
  lineHeight: 1.5,
  color: color.grayDark,
  backgroundColor: '#fff',
  margin: 0,
});

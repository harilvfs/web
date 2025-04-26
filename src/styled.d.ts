import 'styled-components';
import { ThemeType } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    // This extends DefaultTheme with all properties from ThemeType
  }
} 
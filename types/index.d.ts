import { CSSProperties, ReactNode } from 'react';

export interface AISummaryWidgetProps {
  /**
   * Your website URL
   * @default window.location.origin
   */
  siteUrl?: string;

  /**
   * Your website or company name
   * @default "this website"
   */
  siteName?: string;

  /**
   * Custom prompt to use (overrides auto-generated prompt)
   */
  prompt?: string;

  /**
   * Founder's name to include in the auto-generated prompt
   */
  founderName?: string;

  /**
   * Founder's LinkedIn URL
   */
  founderLinkedIn?: string;

  /**
   * Widget color theme
   * @default "light"
   */
  theme?: 'light' | 'dark';

  /**
   * Show "Powered by Realmonkey" footer
   * @default true
   */
  showFooter?: boolean;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Additional inline styles
   */
  style?: CSSProperties;
}

/**
 * AI Summary Widget - React Component
 * 
 * Let visitors get an AI-powered summary of your website with one click.
 * Supports ChatGPT, Claude, Perplexity, Gemini, and Grok.
 * 
 * @example
 * ```tsx
 * import { AISummaryWidget } from '@realmonkey/ai-summary-widget';
 * 
 * function Footer() {
 *   return (
 *     <AISummaryWidget
 *       siteUrl="https://yoursite.com"
 *       siteName="Your Company"
 *       founderName="John Doe"
 *       theme="light"
 *     />
 *   );
 * }
 * ```
 */
export function AISummaryWidget(props: AISummaryWidgetProps): JSX.Element;

export default AISummaryWidget;

// Web Component global declaration
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ai-summary-widget': {
        'site-url'?: string;
        'site-name'?: string;
        'prompt'?: string;
        'founder-name'?: string;
        'founder-linkedin'?: string;
        'theme'?: 'light' | 'dark';
      };
    }
  }
}

/**
 * AI Summary Widget - Web Component
 * Created by Realmonkey (https://realmonkey.co/in)
 * 
 * Usage:
 * 1. Add the script: <script src="https://cdn.jsdelivr.net/gh/YOUR_GITHUB/ai-summary-widget/ai-summary-widget.js"></script>
 * 2. Use the component: <ai-summary-widget site-url="https://yoursite.com" site-name="Your Site" prompt="Your custom prompt"></ai-summary-widget>
 */

class AISummaryWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['site-url', 'site-name', 'prompt', 'theme', 'founder-name', 'founder-linkedin'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  getPrompt() {
    const customPrompt = this.getAttribute('prompt');
    if (customPrompt) return customPrompt;

    const siteName = this.getAttribute('site-name') || 'this website';
    const siteUrl = this.getAttribute('site-url') || window.location.origin;
    const founderName = this.getAttribute('founder-name');
    const founderLinkedIn = this.getAttribute('founder-linkedin');

    let prompt = `Review ${siteName} (${siteUrl}). Tell me about their services, what they do, and how they can help clients.`;
    
    if (founderName) {
      prompt += ` Also find the founder ${founderName}'s LinkedIn profile.`;
    }

    return prompt;
  }

  getEncodedPrompt() {
    return encodeURIComponent(this.getPrompt());
  }

  render() {
    const siteName = this.getAttribute('site-name') || 'this website';
    const theme = this.getAttribute('theme') || 'light';
    const encodedPrompt = this.getEncodedPrompt();

    const aiPlatforms = [
      {
        name: 'ChatGPT',
        url: `https://chat.openai.com/?q=${encodedPrompt}`,
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>`
      },
      {
        name: 'Claude',
        url: `https://claude.ai/new?q=${encodedPrompt}`,
        icon: `<svg viewBox="0 0 100 103" fill="currentColor"><path d="M20.2278 67.3844L39.5053 56.5688L39.8278 55.6262L39.5053 55.1052H38.5625L35.3372 54.9068L24.3215 54.6091L14.7696 54.2122L5.51544 53.7161L3.18329 53.22L1 50.3424L1.22329 48.9037L3.18329 47.5889L5.98684 47.837L12.1894 48.2587L21.4932 48.9037L28.2415 49.3006L38.24 50.3424H39.8278L40.0511 49.6975L39.5053 49.3006L39.0835 48.9037L29.4572 42.3796L19.037 35.4834L13.5787 31.5144L10.6263 29.5051L9.13772 27.6198L8.49266 23.502L11.1722 20.55L14.7696 20.7981L15.6876 21.0462L19.3347 23.8493L27.1251 29.8772L37.2972 37.3687L38.7858 38.609L39.3813 38.1873L39.4557 37.8896L38.7858 36.7734L33.2532 26.7764L27.3484 16.6058L24.7185 12.3888L24.0238 9.85851C23.7757 8.81665 23.602 7.94842 23.602 6.88175L26.6537 2.7391L28.3408 2.19336L32.4096 2.7391L34.1215 4.22748L36.6522 10.0073L40.7458 19.1113L47.0972 31.4896L48.958 35.161L49.9504 38.5594L50.3225 39.6013H50.9676V39.0059L51.4886 32.0354L52.4562 23.4772L53.399 12.4632L53.7215 9.36238L55.2597 5.64144L58.3114 3.63213L60.6932 4.77322L62.6532 7.57633L62.3803 9.38719L61.2142 16.9531L58.9316 28.8105L57.443 36.7486H58.3114L59.3038 35.7563L63.323 30.4229L70.0714 21.9888L73.0486 18.6399L76.522 14.9438L78.7549 13.1826H82.9727L86.0739 17.7965L84.6846 22.5593L80.3428 28.0663L76.7453 32.7299L71.5848 39.6757L68.3595 45.2323L68.6572 45.6788L69.4263 45.6044L81.0871 43.1238L87.3889 41.9827L94.9063 40.6928L98.3053 42.2804L98.6775 43.8928L97.3377 47.192L89.2992 49.1765L79.8714 51.0618L65.8289 54.3859L65.6552 54.5099L65.8537 54.7579L72.1803 55.3533L74.8846 55.5021H81.5089L93.8395 56.42L97.0648 58.5533L99 61.158L98.6775 63.1425L93.7154 65.6727L87.0167 64.0851L71.3863 60.3642L66.0273 59.0246H65.283V59.4711L69.7489 63.8371L77.9362 71.2293L88.1828 80.755L88.7038 83.1116L87.3889 84.972L85.9995 84.7736L76.9934 78.0015L73.52 74.9503L65.6552 68.327H65.1342V69.0216L66.9453 71.6759L76.522 86.0635L77.0182 90.479L76.3235 91.9178L73.8425 92.786L71.1134 92.2899L65.5063 84.4263L59.7256 75.5704L55.0613 67.6324L54.4906 67.9549L51.7367 97.5984L50.4466 99.1116L47.4694 100.253L44.9884 98.3674L43.6734 95.3163L44.9884 89.2883L46.5762 81.4247L47.8663 75.1735L49.0324 67.4092L49.7271 64.8293L49.6775 64.6557L49.1068 64.7301L43.2516 72.7673L34.3448 84.7984L27.2987 92.3395L25.6116 93.0093L22.684 91.4961L22.957 88.7922L24.5944 86.386L34.3448 73.9828L40.2248 66.2929L44.0208 61.8526L43.9959 61.2076H43.7727L17.8709 78.0263L13.2562 78.6216L11.2714 76.7611L11.5195 73.71L12.4623 72.7177L20.2527 67.3596L20.2278 67.3844Z"/></svg>`
      },
      {
        name: 'Perplexity',
        url: `https://www.perplexity.ai/search?q=${encodedPrompt}`,
        icon: `<svg viewBox="0 0 100 103" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.9732 0L47.085 26.8222V26.8161V0.061891H52.7519V26.9422L81.9941 0V30.5813H94V74.6919H82.031V101.923L52.7519 76.1993V102.218H47.085V76.6234L18.0062 102.235V74.6919H6V30.5813H17.9732V0ZM42.8128 36.179H11.6669V69.0942H17.9991V58.7115L42.8128 36.179ZM23.6728 61.1953V89.7445L47.085 69.1237V39.9303L23.6728 61.1953ZM52.915 68.8509V39.9028L76.334 61.1691V74.6919H76.3641V89.453L52.915 68.8509ZM82.031 69.0942H88.3331V36.179H57.4192L82.031 58.4783V69.0942ZM76.3272 30.5813V12.8759L57.1102 30.5813H76.3272ZM42.8568 30.5813H23.6401V12.8759L42.8568 30.5813Z"/></svg>`
      },
      {
        name: 'Gemini',
        url: `https://gemini.google.com/app?q=${encodedPrompt}`,
        icon: `<svg viewBox="0 0 100 103" fill="currentColor"><path d="M99.0397 41.5941H51.0651V61.2283H78.6315C78.1884 64.007 77.1934 66.7406 75.7362 69.2331C74.0667 72.0888 72.0028 74.2629 69.8873 75.9186C63.5504 80.8782 56.1625 81.8923 51.0316 81.8923C38.0704 81.8923 26.996 73.3363 22.7088 61.7102C22.5358 61.2884 22.4209 60.8525 22.281 60.4217C21.3336 57.4628 20.816 54.3289 20.816 51.0718C20.816 47.6819 21.3765 44.437 22.3986 41.3723C26.43 29.2853 37.7541 20.2574 51.041 20.2574C53.7134 20.2574 56.287 20.5823 58.7276 21.2304C64.3052 22.7115 68.2506 25.6284 70.6681 27.9357L85.2553 13.3449C76.382 5.03522 64.8147 0 51.0167 0C39.9861 0 29.8021 3.51003 21.4567 9.4425C14.6888 14.2536 9.13818 20.695 5.39219 28.176C1.90788 35.1124 0 42.7993 0 51.0641C0 59.3293 1.91079 67.096 5.39512 73.9683V74.0146C9.07541 81.3104 14.4573 87.5923 20.9984 92.3813C26.7127 96.565 36.959 102.137 51.0167 102.137C59.1009 102.137 66.2657 100.648 72.5844 97.8585C77.1427 95.8459 81.1814 93.221 84.8379 89.8473C89.6693 85.3896 93.4531 79.8759 96.0358 73.5322C98.6185 67.1885 100 60.0149 100 52.2374C100 48.6154 99.6438 44.9369 99.0397 41.5937V41.5941Z"/></svg>`
      },
      {
        name: 'Grok',
        url: `https://grok.com/?q=${encodedPrompt}`,
        icon: `<svg viewBox="0 0 100 103" fill="currentColor"><path d="M38.6208 64.8356L71.866 40.2829C73.4959 39.0793 75.8254 39.5488 76.6021 41.4185C80.6894 51.2787 78.8633 63.1283 70.731 71.2641C62.5991 79.3997 51.2841 81.184 40.942 77.1204L29.644 82.3537C45.8486 93.4347 65.5259 90.6943 77.8223 78.384C87.5758 68.626 90.5965 55.3252 87.772 43.3308L87.7975 43.3563C83.7015 25.7359 88.8046 18.6928 99.2577 4.2908C99.5049 3.94932 99.7524 3.60783 99.9999 3.25781L86.2443 17.0195V16.9769L38.6124 64.8442"/><path d="M31.7606 70.803C20.1298 59.6876 22.1351 42.4854 32.0591 32.5655C39.3975 25.2236 51.4209 22.2271 61.9166 26.6322L73.189 21.4246C71.1583 19.9562 68.5554 18.3769 65.5688 17.267C52.0695 11.7094 35.9076 14.4754 24.9339 25.4455C14.3784 36.0058 11.059 52.2433 16.7592 66.0991C21.0172 76.4545 14.0371 83.7791 7.00573 91.1724C4.51404 93.7931 2.01382 96.4141 0 99.1886L31.7519 70.8114"/></svg>`
      }
    ];

    const isDark = theme === 'dark';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
        }

        .widget {
          text-align: center;
          padding: 32px 24px;
          border-radius: 16px;
          background: ${isDark ? '#0a0a0a' : '#ffffff'};
          ${isDark ? '' : 'box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);'}
        }

        .title {
          font-size: 15px;
          font-weight: 500;
          color: ${isDark ? '#e5e5e5' : '#1a1a1a'};
          margin: 0 0 24px 0;
          letter-spacing: -0.01em;
        }

        .icons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .icon-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          transition: all 0.2s ease;
          color: ${isDark ? '#e5e5e5' : '#1a1a1a'};
          text-decoration: none;
          position: relative;
        }

        .icon-link:hover {
          background: ${isDark ? 'rgba(255,255,255,0.1)' : '#f5f5f5'};
          transform: translateY(-2px);
        }

        .icon-link svg {
          width: 26px;
          height: 26px;
        }

        .icon-link::after {
          content: attr(data-tooltip);
          position: absolute;
          bottom: -28px;
          left: 50%;
          transform: translateX(-50%);
          background: ${isDark ? '#333' : '#1a1a1a'};
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
        }

        .icon-link:hover::after {
          opacity: 1;
        }

        .footer {
          margin-top: 24px;
          font-size: 11px;
          color: ${isDark ? '#666' : '#999'};
        }

        .footer a {
          color: inherit;
          text-decoration: none;
        }

        .footer a:hover {
          text-decoration: underline;
        }
      </style>

      <div class="widget">
        <p class="title">Request an AI summary of ${siteName}</p>
        <div class="icons">
          ${aiPlatforms.map(platform => `
            <a href="${platform.url}" 
               class="icon-link" 
               target="_blank" 
               rel="noopener noreferrer"
               data-tooltip="${platform.name}">
              ${platform.icon}
            </a>
          `).join('')}
        </div>
        <p class="footer">Powered by <a href="https://realmonkey.co/in" target="_blank">Realmonkey</a></p>
      </div>
    `;
  }
}

// Register the custom element
customElements.define('ai-summary-widget', AISummaryWidget);

# AI Summary Widget 🤖

Let visitors get an AI-powered summary of your website with one click. Supports ChatGPT, Claude, Perplexity, Gemini, and Grok.

![AI Summary Widget Preview](preview.png)

Created by [Realmonkey](https://realmonkey.in) - Design & AI Consultancy

---

## 🚀 Quick Start (Copy & Paste)

### Option 1: Script Tag (Works Everywhere)

Add this to your HTML - works on any website, Webflow, WordPress, Squarespace, etc:

```html
<!-- Add the widget script -->
<script src="https://cdn.jsdelivr.net/gh/realmonkey/ai-summary-widget@latest/ai-summary-widget.js"></script>

<!-- Use the widget -->
<ai-summary-widget
  site-url="https://yoursite.com"
  site-name="Your Company"
  founder-name="John Doe"
  theme="light"
></ai-summary-widget>
```

### Option 2: React/Next.js

```bash
npm install @realmonkey/ai-summary-widget
```

```jsx
import { AISummaryWidget } from '@realmonkey/ai-summary-widget';

function Footer() {
  return (
    <AISummaryWidget
      siteUrl="https://yoursite.com"
      siteName="Your Company"
      founderName="John Doe"
      theme="light"
    />
  );
}
```

### Option 3: Pure HTML Embed

Copy and paste this entire block:

```html
<style>
.ai-summary-widget {
  text-align: center;
  padding: 32px 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.ai-summary-widget__title {
  font-size: 15px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 24px;
}
.ai-summary-widget__icons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}
.ai-summary-widget__link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  transition: all 0.2s ease;
  color: #1a1a1a;
  text-decoration: none;
}
.ai-summary-widget__link:hover {
  background: #f5f5f5;
  transform: translateY(-2px);
}
.ai-summary-widget__link svg {
  width: 26px;
  height: 26px;
}
</style>

<div class="ai-summary-widget">
  <p class="ai-summary-widget__title">Request an AI summary of Your Company</p>
  <div class="ai-summary-widget__icons">
    <a href="https://chat.openai.com/?q=YOUR_ENCODED_PROMPT" class="ai-summary-widget__link" target="_blank" title="ChatGPT">
      <!-- ChatGPT SVG icon here -->
    </a>
    <!-- More icons... -->
  </div>
</div>
```

---

## ⚙️ Configuration Options

### Web Component Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `site-url` | string | current URL | Your website URL |
| `site-name` | string | "this website" | Your company/site name |
| `prompt` | string | auto-generated | Custom prompt (overrides auto) |
| `founder-name` | string | - | Include founder's name in prompt |
| `founder-linkedin` | string | - | Founder's LinkedIn URL |
| `theme` | "light" \| "dark" | "light" | Widget color theme |

### React Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `siteUrl` | string | window.location | Your website URL |
| `siteName` | string | "this website" | Your company/site name |
| `prompt` | string | auto-generated | Custom prompt |
| `founderName` | string | - | Founder's name |
| `founderLinkedIn` | string | - | Founder's LinkedIn |
| `theme` | "light" \| "dark" | "light" | Color theme |
| `showFooter` | boolean | true | Show "Powered by" footer |
| `className` | string | - | Additional CSS class |
| `style` | object | - | Inline styles |

---

## 🎨 Customization

### Custom Prompt

```html
<ai-summary-widget
  prompt="Tell me everything about ACME Corp at https://acme.com - their products, pricing, and why I should choose them over competitors."
></ai-summary-widget>
```

### Dark Theme

```html
<ai-summary-widget
  site-name="My Site"
  theme="dark"
></ai-summary-widget>
```

### Custom Styling (CSS)

```css
ai-summary-widget {
  --widget-bg: #ffffff;
  --widget-text: #1a1a1a;
  --widget-hover: #f5f5f5;
  --widget-radius: 16px;
  --icon-size: 26px;
}
```

---

## 🔗 How It Works

The widget creates deep links to AI platforms with your prompt pre-filled:

| Platform | URL Pattern |
|----------|-------------|
| ChatGPT | `https://chat.openai.com/?q={prompt}` |
| Claude | `https://claude.ai/new?q={prompt}` |
| Perplexity | `https://www.perplexity.ai/search?q={prompt}` |
| Gemini | `https://gemini.google.com/app?q={prompt}` |
| Grok | `https://grok.com/?q={prompt}` |

---

## 📦 Installation Methods

### CDN (Recommended)

```html
<script src="https://cdn.jsdelivr.net/gh/realmonkey/ai-summary-widget@latest/ai-summary-widget.js"></script>
```

### NPM

```bash
npm install @realmonkey/ai-summary-widget
```

### Download

Download `ai-summary-widget.js` and include it locally:

```html
<script src="/js/ai-summary-widget.js"></script>
```

---

## 🛠️ Platform Support

| Platform | Works? | Notes |
|----------|--------|-------|
| HTML/CSS | ✅ | Copy & paste |
| Webflow | ✅ | Use Embed element |
| WordPress | ✅ | Use Custom HTML block |
| Squarespace | ✅ | Use Code Block |
| Wix | ✅ | Use HTML iframe |
| Shopify | ✅ | Add to theme liquid |
| React | ✅ | Import component |
| Next.js | ✅ | Import component |
| Vue | ✅ | Use web component |
| Angular | ✅ | Use web component |

---

## 🎯 Use Cases

- **Agency websites** - Let potential clients research you via AI
- **SaaS products** - Help users understand your offering
- **Portfolio sites** - Make it easy for recruiters to learn about you
- **E-commerce** - Let shoppers ask AI about your products
- **Documentation** - Quick AI-powered search for docs

---

## 📄 License

MIT License - Free for personal and commercial use.

---

## 🙏 Credits

Created with ❤️ by [Realmonkey](https://realmonkey.in)

- Design & AI Consultancy
- Founder: [Aroon](https://linkedin.com/in/aroon)

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/cool-feature`)
3. Commit changes (`git commit -am 'Add cool feature'`)
4. Push (`git push origin feature/cool-feature`)
5. Open a Pull Request

---

## 📞 Support

- 🐛 [Report bugs](https://github.com/realmonkey/ai-summary-widget/issues)
- 💡 [Request features](https://github.com/realmonkey/ai-summary-widget/issues)
- 📧 [Contact](https://realmonkey.in/contact)

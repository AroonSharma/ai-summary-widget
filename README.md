# Ask AI 🤖

Let visitors ask AI about your website with one click.

Supports: **ChatGPT, Claude, Perplexity, Gemini, Grok**

---

## 🔴 Live Preview

See it in action on **[realmonkey.co](https://www.realmonkey.co)** (Just below the banner)

![Ask AI Preview](preview.png)

---

## Add to Your Website

Copy this code and paste it where you want the buttons to appear:

```html
<div id="ask-ai"></div>
<script src="https://cdn.jsdelivr.net/gh/AroonSharma/ai-summary-widget@latest/ask-ai.min.js"></script>

<script>
  AskAI.render('#ask-ai', {
    
    // ⬇️ CHANGE THIS - Put your question here ⬇️
    prompt: 'Tell me about Acme Corp and what services they offer',
    
    // ⬇️ OPTIONAL - Remove any AI you don't want ⬇️
    services: ['chatgpt', 'claude', 'perplexity', 'gemini', 'grok']
    
  });
</script>
```

**Done!** ✅

---

## Customization

### Change the prompt

Just edit the text inside the quotes:

```javascript
prompt: 'What does Nike sell and who founded it?'
```

### Show only some AI services

Remove the ones you don't want:

```javascript
// Only ChatGPT and Claude
services: ['chatgpt', 'claude']

// Only Perplexity
services: ['perplexity']
```

### Available services

- `chatgpt` - ChatGPT
- `claude` - Claude  
- `perplexity` - Perplexity
- `gemini` - Gemini
- `grok` - Grok

### Add heading and description

```javascript
AskAI.render('#ask-ai', {
  prompt: 'Tell me about this company',
  services: ['chatgpt', 'claude', 'perplexity', 'gemini', 'grok'],
  heading: 'Request an AI summary of Acme Corp',
  description: 'Click any AI to learn about our services instantly'
});
```

### Center align

```javascript
AskAI.render('#ask-ai', {
  prompt: 'Tell me about this company',
  services: ['chatgpt', 'claude'],
  align: 'center'
});
```

### Dark theme

Add `theme: 'dark'` for dark backgrounds:

```javascript
AskAI.render('#ask-ai', {
  prompt: 'Tell me about this company',
  services: ['chatgpt', 'claude'],
  theme: 'dark'
});
```

### Button sizes

```javascript
size: 'sm'      // Small
size: 'default' // Normal (default)
size: 'lg'      // Large
```

---

## Works On

✅ Webflow  
✅ WordPress  
✅ Squarespace  
✅ Wix  
✅ Shopify  
✅ Any HTML website

---

## License

MIT - Free for everyone.

---

Created by [Realmonkey](https://www.realmonkey.co) • [Aroon](https://linkedin.com/in/aroons)

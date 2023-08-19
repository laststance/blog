---
title: What is font-family?
published_at: 2023-08-19T15:51:37Z
snippet: explains the font-family property in CSS.
---

Hey there! Let's talk about the `font-family` property in CSS. It's like the wardrobe of your webpage, letting you dress up your text in different styles. 🎨

### What is `font-family`?

The `font-family` property lets you choose the font for your text. You can list specific font names or general font family names, separated by commas.

#### Specific Font Names

- **Names like**: `"Times New Roman"`, `Arial`, etc. If the name has spaces, wrap it in quotes!

#### General Font Family Names

- **`serif`**: Fonts with little feet, called serifs.
- **`sans-serif`**: Fonts without those little feet.
- **`monospace`**: Fonts where every character takes up the same space.
- **`cursive`**: Fonts that look like handwriting.
- **`fantasy`**: Decorative fonts for special occasions.

### How to Use It

```css
font-family: "Times New Roman", Times, serif;
```

Here, the browser will try `"Times New Roman"` first, then `Times`, and finally, if neither is available, it'll use a general `serif` font.

### What If None of the Fonts Are Available?

Great question! If none of the fonts you listed are available, the browser will use the default font set in the user's browser or operating system. So, even if the exact style isn't there, your text will still look good. 😊

### Inheritance

The `font-family` is like a family heirloom; it gets passed down to child elements from their parent.

### Some Tips

- If a font name has more than one word, wrap it in quotes.
- If the font isn't on the user's system, it won't be used. That's why it's common to list fallback fonts.
- If you're using web fonts, you'll need to define them with the `@font-face` rule.

The `font-family` property is a fantastic way to give your site personality and make it more engaging. It's like picking the perfect outfit for your text, making sure it looks just right for the occasion! 🌟
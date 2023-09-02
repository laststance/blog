---
title: Access nested class with `modules.scss` file
published_at: 2023-08-21T08:16:37Z
snippet: way to reach nested selector via `styles` object.
---

In a CSS module, you can access the nested classes using camelCase notation. In your case, you can access the `.item` class inside the `.row` class inside the `.container` class by using `styles.containerRowItem`. Here's how you can modify your `index.jsx` file to apply the `.item` class:

```jsx
import React from 'react'
import styles from './index.modules.scss'

const Foo = () => <div className={styles.containerRowItem}>text</div>

export default Foo
```

Make sure that your SCSS file is properly configured to work with CSS modules in your project. If you're using Create React App or a similar setup, it should work out of the box. If not, you may need to configure your build system (such as Webpack) to handle SCSS files as CSS modules.

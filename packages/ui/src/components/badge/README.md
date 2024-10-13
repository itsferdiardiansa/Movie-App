# @pomy/ui - Badge

This directory contains a highly customizable and accessible badge component built with Vue 3 and TypeScript for dynamic styling. The project also includes unit tests powered by **Vitest** and follows a well-structured component and prop management system.

## Features

- **Highly Customizable**: Easily configure badge size, variant, shape, and loading state.
- **Unit Testing**: Comprehensive unit tests using **Vitest** and **Vue Test Utils**.
- **Dynamic Class Management**: Utilizes `custom-class` to apply styles based on prop combinations.
- **TypeScript Support**: Strongly typed props and event handling.
- **Responsive & Accessible**: Supports block-level badges, keyboard focus management.

### Component Usage

```js
<template>
  <Badge
    :variant="variant"
    :size="size"
    label="Paid"
  />
</template>

<script setup lang="ts">
import { Badge } from '@pomy/ui';
</script>
```

### Props

| Prop      | Type      | Default       | Description                                                                                 |
| --------- | --------- | ------------- | ------------------------------------------------------------------------------------------- |
| `label`   | `string`  | `'Click me!'` | Text label inside the badge.                                                                |
| `variant` | `string`  | `'primary'`   | Variant of the badge. Options: `primary`, `danger`, `warning`, `dark`, `success`, `orange`. |
| `size`    | `string`  | `'md'`        | Size of the badge. Options: `xs`, `sm`, `md`, `lg`, `xl`.                                   |
| `shape`   | `string`  | `'rounded'`   | Shape of the badge. Options: `rounded`, `pill`, `square`.                                   |
| `dot`     | `boolean` | `false`       | Set the full circle without label.                                                          |
| `inverse` | `boolean` | `false`       | Inverts the variant colors for contrast.                                                    |

### Customizing Styles

The badge styles are separated into different SCSS modules:

- **`variant.scss`**: Contains styles for badge variants (e.g., `primary`, `light`, `dark`).
- **`size.scss`**: Contains styles for badge sizes (`xs`, `sm`, `md`, `lg`, `xl`).

### Test Cases

- **Snapshot Testing**: Ensures that the badge’s structure doesn’t change unexpectedly.
- **Event Emission**: Verifies that the badge emits a `click` event and handles `disabled` state correctly.
- **Prop Validation\*\***: Tests various combinations of props, including `variant`, `size`.

---

**©** by Ferdi Ardiansa

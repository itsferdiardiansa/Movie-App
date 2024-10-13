# @pomy/ui - Button

This directory contains a highly customizable and accessible button component built with Vue 3 and TypeScript for dynamic styling. The project also includes unit tests powered by **Vitest** and follows a well-structured component and prop management system.

## Features

- **Highly Customizable**: Easily configure button size, variant, shape, and loading state.
- **Responsive & Accessible**: Supports block-level buttons, keyboard focus management, and ARIA attributes for accessibility.
- **Dynamic Class Management**: Utilizes `class-variance-authority` to apply styles based on prop combinations.
- **TypeScript Support**: Strongly typed props and event handling.
- **Unit Testing**: Comprehensive unit tests using **Vitest** and **Vue Test Utils**.
-

### Component Usage

```js
<template>
  <Button
    :variant="variant"
    :size="size"
    :disabled="isDisabled"
    :block="true"
    @click="handleClick"
  >
    Custom Button Label
  </Button>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';
</script>
```

### Props

| Prop        | Type      | Default       | Description                                                                                  |
| ----------- | --------- | ------------- | -------------------------------------------------------------------------------------------- |
| `label`     | `string`  | `'Click me!'` | Text label inside the button.                                                                |
| `variant`   | `string`  | `'primary'`   | Variant of the button. Options: `primary`, `danger`, `warning`, `dark`, `success`, `orange`. |
| `size`      | `string`  | `'md'`        | Size of the button. Options: `xs`, `sm`, `md`, `lg`, `xl`.                                   |
| `disabled`  | `boolean` | `false`       | Disable the button. Prevents click events.                                                   |
| `block`     | `boolean` | `false`       | Makes the button take full width of its container.                                           |
| `shape`     | `string`  | `'rounded'`   | Shape of the button. Options: `rounded`, `pill`, `square`.                                   |
| `isLoading` | `boolean` | `false`       | Shows a loading spinner instead of the label when true.                                      |
| `inverse`   | `boolean` | `false`       | Inverts the variant colors for contrast.                                                     |

### Customizing Styles

The button styles are separated into different SCSS modules:

- **`variant.scss`**: Contains styles for button variants (e.g., `primary`, `light`, `dark`).
- **`size.scss`**: Contains styles for button sizes (`xs`, `sm`, `md`, `lg`, `xl`).

### Test Cases

- **Snapshot Testing**: Ensures that the button’s structure doesn’t change unexpectedly.
- **Event Emission**: Verifies that the button emits a `click` event and handles `disabled` state correctly.
- **Prop Validation\*\***: Tests various combinations of props, including `variant`, `size`, `isLoading`, and `block`.
- **Slot Content**: Ensures that custom content is rendered via slots.

---

**©** by Ferdi Ardiansa

# @pomy/ui - Skeleton

The SkeletonRect component is used to display a skeleton placeholder, typically used when content is being loaded.

## Props

- **width** (string): The width of the skeleton rectangle. Default is '100%' if not specified.
- **height** (string): The height of the skeleton rectangle. Default is '100%' if not specified.
- **rounded** (boolean): If true, applies rounded corners to the rectangle.

## Usage

```vue
<template>
  <Rect width="100px" height="50px" :rounded="true" />
</template>

<script setup>
import { Rect } from '@pomy/ui'
</script>
```

---

**©** by Ferdi Ardiansa

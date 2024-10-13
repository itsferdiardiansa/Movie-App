# @pomy/ui - Textarea

## Props

- **modelValue** (string): The textarea's bound value.
- **disabled** (boolean): Whether the textarea is disabled.
- **maxlength** (number): The maximum length allowed for the textarea input.

## Usage

```vue
<template>
  <Textarea v-model="textareaValue" :maxlength="200" :disabled="false" />
</template>

<script setup>
import { Textarea } from '@pomy/ui'
</script>
```

---

**©** by Ferdi Ardiansa

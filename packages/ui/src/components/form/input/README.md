# @pomy/ui - Input

## Props

- **modelValue** (string): The input's bound value.
- **disabled** (boolean): Whether the input is disabled.
- **validate** (function): A function to validate the input's value.

## Usage

```vue
<template>
  <Input v-model="inputValue" :validate="validateInput" :disabled="false" />
</template>

<script setup>
import { Input } from '@pomy/ui'
</script>
```

---

**©** by Ferdi Ardiansa

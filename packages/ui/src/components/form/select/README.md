# @pomy/ui - Select

## Props

- **modelValue** (string): The select's bound value.
- **options** (array): The list of options to display in the dropdown.
- **disabled** (boolean): Whether the select is disabled.

## Usage

```vue
<template>
  <Select
    v-model="selectedOption"
    :options="['option1', 'option2', 'option3']"
    :disabled="false"
  />
</template>

<script setup>
import { Select } from '@pomy/ui'
</script>
```

---

**©** by Ferdi Ardiansa

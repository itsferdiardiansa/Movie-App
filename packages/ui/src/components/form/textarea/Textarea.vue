<template>
  <div :class="`${prefixClass}-control--textarea`">
    <editor
      ref="editorEl"
      model-events="change keydown blur focus paste"
      v-model="content"
      @selectionChange="handleChange"
      @init="editorInit"
      :initialValue="modelValue"
      :apiKey="API_KEY"
      :init="{
        height: 200,
        menubar: false,
        plugins: plugins,
        toolbar: toolbar,
      }"
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, unref, watch } from 'vue'
import Editor from '@tinymce/tinymce-vue'
import defaultProps from './props'
import type { TextareaTypes } from './props'

const prefixClass = 'tx'
const props = withDefaults(defineProps<TextareaTypes>(), defaultProps)
const emit = defineEmits(['update:modelValue'])
const content = ref('')
const API_KEY = ref('4fps7l3e12h316mv46qecgynui0rh6wjtzc9nffq3lxl9047')
const editorEl = ref()
const plugins = reactive([
  'advlist autolink lists link image charmap print preview anchor',
  'searchreplace visualblocks code fullscreen',
  'insertdatetime media table paste code help wordcount',
])

const toolbar = ref(`
  undo redo | formatselect | bold italic backcolor | \
  alignleft aligncenter alignright alignjustify | \
  bullist numlist outdent indent | removeformat | help
`)

const handleChange = (_, el) => {
  emit('update:modelValue', el.getContent())
}

const editorInit = (_, editor) => {
  editor.on('input', e => {
    if (e.inputType === 'deleteContentBackward')
      emit('update:modelValue', editor.getContent())
  })
}

onMounted(() => {
  const editorInstance = unref(editorEl)

  editorInstance.$.emitsOptions = {
    'update:modelValue': null,
  }

  content.value = props.modelValue as any
})

watch(
  () => props.modelValue,
  val => {
    content.value = val as any
  }
)
</script>

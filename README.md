# click-outside-element-typescript

Execute the function passed as an argument when clicking outside the element.

## install

`npm i click-outside-element-typescript`

## usage

The function named `addClickOutsideEvent` is called when the instance is mounted on the DOM element.
The function named `removeClickOutsideEvent` is called when the instance is destroyed.

When using with vue

```vue
<script setup lang="ts">
import { addClickOutsideEvent, removeClickOutsideEvent } from 'click-outside-element-typescript'
import { ref, onBeforeMount, onBeforeUnmount } from 'vue'

const shownPop = ref(false)
const openPop = () => (shownPop.value = true)
const closePop = () => (shownPop.value = false)

onBeforeMount(() => addClickOutsideEvent('.pop', closePop))
onBeforeUnmount(() => removeClickOutsideEvent('.pop', closePop))
</script>
<template>
  <button class="button" type="button" @click.stop="openPop">OPEN</button>
  <div class="pop" v-if="shownPop">This is POP!</div>
</template>
<style scoped>
.button {
  margin-bottom: 20px;
}
.pop {
  width: 200px;
  height: 200px;
  border: 1px solid blue;
  background: skyblue;
}
</style>
```

**_DEMO_**

![demo](https://github.com/mogataro/click-outside-element-typescript/blob/master/public/click-outside.gif)

<template>
  <svg  :class="`icon ${className}`" aria-hidden="true" @click="clickIcon">
    <use :xlink:href="'#'+svgName"/>
  </svg>
</template>


<script>
const importAll = (requireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('@/assets/icons', true, /\.svg$/));
} catch (error) {
  console.log(error,1);
}

export default {
  name:'Icon',
  props:[
      'svgName',
      'className',
      'tagsSource'
  ],
  methods:{
    clickIcon(){
      this.$emit('iconToggle')
    }
  }

}
</script>
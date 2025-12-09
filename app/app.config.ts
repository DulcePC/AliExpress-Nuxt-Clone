export default defineAppConfig({
  css: ['~/assets/css/main.css'],
  ui: {
    button: {
      slots: {
        base: 'rounded-none cursor-pointer'
      }
    },
    input: {
      slots: {
        base: ' inset-ring-1',
      },
      variants: {
        variant: {
          outline: 'inset-ring-black',
        },
      }
    }
  }
})
const MuiAlertCustom = {
  variants: [
    {
      props: { color: 'warning' },
      style: {
        borderRadius: 10,
        border: '1px solid #747473',
        fontSize: 12
      }
    },
    {
      props: { color: 'info' },
      style: {
        borderRadius: 10,
        border: '1px solid #1844B4',
        fontSize: 12
      }
    },
    {
      props: { color: 'error' },
      style: {
        borderRadius: 10,
        border: '1px solid #AB1A1A',
        fontSize: 12
      }
    },
    {
      props: { color: 'success' },
      style: {
        borderRadius: 10,
        border: '1px solid #036642',
        fontSize: 12
      }
    }
  ]
}

export { MuiAlertCustom }

const MuiSvgIconCustom = {
  variants: [
    {
      props: { color: 'primary' },
      style: {
        width: 24,
        height: 24,
        color: '#008080'
      }
    },
    {
      props: { color: 'secondary' },
      style: {
        width: 16,
        height: 16,
        color: '#FFFFFF'
      }
    },
    {
      props: { color: 'info' },
      style: {
        width: 32,
        height: 32,
        color: '#1844B4',
        background: '#BAC7E9',
        borderRadius: '4px',
        padding: 4
      }
    },
    {
      props: { color: 'success' },
      style: {
        width: 32,
        height: 32,
        color: '#036642',
        background: '#B3D1C7',
        borderRadius: '4px',
        padding: 4
      }
    },
    {
      props: { color: 'warning' },
      style: {
        width: 32,
        height: 32,
        color: '#E1CF28',
        background: '#F5EEB4',
        borderRadius: '4px',
        padding: 4
      }
    },
    {
      props: { color: 'error' },
      style: {
        width: 32,
        height: 32,
        color: '#AB1A1A',
        background: '#E5B1B1',
        borderRadius: '4px',
        padding: 4
      }
    }
  ]
}

export { MuiSvgIconCustom }

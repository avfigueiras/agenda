const MuiButtonCustom = {
  variants: [
    {
      props: { variant: 'primary' },
      style: {
        borderRadius: '100px',
        background: '#99CC00',
        fontWeight: '600',
        maxHeight: '48px',
        '&:hover': {
          background: '#004D4D',
          color: '#FFFFFF'
        },
        '&:focus': {
          background: '#006B6B',
          color: '#FFFFFF',
          boxShadow: 'inset 0 0 0 2px #99CC00'
        },
        '&:active': {
          background: '#008A8A',
          color: '#FFFFFF',
          boxShadow: 'inset 0 0 0 2px #008A8A'
        },
        ':disabled': {
          background: '#D5D5D5',
          color: '#9E9E9D'
        }
      }
    },
    {
      props: { variant: 'primary', size: 'medium' },
      style: {
        maxHeight: '40px',
        fontSize: 18
      }
    },
    {
      props: { variant: 'primary', size: 'small' },
      style: {
        maxHeight: '24px',
        fontSize: 12
      }
    },
    {
      props: { variant: 'secondary' },
      style: {
        borderRadius: '100px',
        background: '#FFFFFF',
        color: '#006B6B',
        fontWeight: '600',
        maxHeight: '48px',
        border: '2px solid #1AA3A3',
        '&:hover': {
          background: '#CCE680'
        },
        '&:focus': {
          background: '#008A8A',
          color: '#FFFFFF',
          border: '2px solid #99CC00'
        },
        '&:active': {
          background: '#B3E0E0',
          color: '#004D4D',
          border: '2px solid #1AA3A3'
        },
        ':disabled': {
          background: '#F1F1F1',
          color: '#9E9E9D',
          border: '2px solid #BABAB9'
        }
      }
    },
    {
      props: { variant: 'secondary', size: 'medium' },
      style: {
        maxHeight: '40px',
        fontSize: 18
      }
    },
    {
      props: { variant: 'secondary', size: 'small' },
      style: {
        maxHeight: '24px',
        fontSize: 12
      }
    },
    {
      props: { variant: 'textCustom' },
      style: {
        borderRadius: '100px',
        background: '#FFFFFF',
        color: '#0F0F0F',
        maxHeight: '32px',
        '&:hover': {
          color: '#006B6B',
          background: '#FFFFFF'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px #99CC00'
        },
        '&:active': {
          background: '#CCE680',
          color: '#006B6B'
        },
        ':disabled': {
          color: '#9E9E9D'
        }
      }
    },
    {
      props: { variant: 'textCustom', size: 'medium' },
      style: {
        maxHeight: '40px',
        fontSize: 18
      }
    },
    {
      props: { variant: 'textCustom', size: 'small' },
      style: {
        maxHeight: '24px',
        fontSize: 12
      }
    }
  ]
}

export { MuiButtonCustom }

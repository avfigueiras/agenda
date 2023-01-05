const MuiTextCustom = {
    variants: [
      {
        props: { variat: 'title' },
        style: {
          '& label': {
            padding: '10px 0px 0px',
            color: '#01635e',
            fontWeight: '800',
            fontSize:'24px',
          },
        }
      },
      {
        props: { color: 'error' },
        style: {
          '& input[type="password"]': {
            color: '#AB1A1A'
          },
          '& .MuiFormHelperText-root': {
            borderRadius: '10px',
            color: '#AB1A1A'
          },
          '& label.Mui-focused': {
            borderRadius: '10px',
            color: '#AB1A1A'
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderRadius: '10px',
              borderColor: '#AB1A1A'
            },
            '&:hover fieldset': {
              borderColor: '#AB1A1A'
            },
            '&.Mui-focused fieldset': {
              borderColor: '#AB1A1A'
            }
          }
        }
      }
    ]
  }
  
  export { MuiTextCustom }
  
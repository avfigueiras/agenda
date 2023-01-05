const MuiTextFieldCustom = {
  variants: [
    {
      props: { color: 'primary' },
      style: {
        '& input[type="password"]': {
          color: '#009999'
        },
        '& label': {
          borderRadius: '10px',
          color: '#006B6B',
          fontWeight: '600'
        },
        '& label.Mui-focused': {
          borderRadius: '10px',
          color: '#006B6B',
          fontWeight: '600'
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderRadius: '10px',
            borderColor: '#3A3A3A'
          },
          '&:hover fieldset': {
            borderRadius: '10px',
            borderColor: '#3A3A3A'
          },
          '&.Mui-focused fieldset': {
            borderRadius: '10px',
            border: '1px solid #3A3A3A'
          }
        }
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

export { MuiTextFieldCustom }

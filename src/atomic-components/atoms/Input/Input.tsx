import React from 'react'
import PropTypes from 'prop-types';

const Input = (props) => {
  const { value,isValid,message,showMessage,onChange,onBlur}: this.props.value || '',
    isValid: false,
    message: this.props.message.error || '',
    showMessage: false
}
  return (
    
  )
}
Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  validate: PropTypes.func,
  className: PropTypes.string,
  onChange: PropTypes.func,
  message: PropTypes.object,
  validateForm: PropTypes.func
}

export default Input


/* class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || '',
            isValid: false,
            message: this.props.message.error || '',
            showMessage: false
        }; 
        this._onChange = this._onChange.bind(this);
        this._onBlur = this._onBlur.bind(this);
    }

    _onChange(event) {
        this.setState({
            value: event.target.value,
            showMessage: true,
            isValid: this.props.onChange ? this.props.onChange(event.target.value) : this.state.isValid
        }, () => this.props.validateForm());
    }

    _onBlur() {
        if (!this.props.validate) return false;
        this.setState({
            showMessage: true,
            isValid: this.props.validate(this.state.value)
        }, () => {
            this.props.validateForm();
        });
    }

    componentDidMount(){
        if(this.state.value && this.state.value.trim()){
            this._onBlur();
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.value !== this.props.value){
            this.setState({
                value: this.props.value
            });
        }
    }

    render() {
        return (
            <div className={"input-wrapper short " + (!this.state.isValid && this.state.showMessage ? 'is-error' : '')}>
                <div className={this.props.className}>
                    <div className = 'label'>
                        {this.props.label}
                    </div>
                    <input
                        className="input"
                        type={this.props.type}
                        value={this.state.value}
                        name={this.props.name}
                        onChange={this._onChange}
                        onBlur={this._onBlur}
                        placeholder={this.props.placeholder}
                    />
                </div>
                <p className='error'>{this.state.message} </p>
            </div>
        )
    }
} */



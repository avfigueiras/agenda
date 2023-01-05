import { TextField, InputAdornment, IconButton } from "@mui/material";
import React, { FunctionComponent, useState, useRef, ChangeEvent } from "react";
import KeyboardWrapper from "./KeyboardWrapper";

const MyComponent: FunctionComponent = () => {
    const [input, setInput] = useState("");
    const keyboard = useRef(null);

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const input = event.target.value;
        setInput(input);
        keyboard.current.setInput(input);
    };

    return (
        <div className="widthFill">
            <TextField
                color={'primary'}
                margin="normal"
                fullWidth
                id="rut"
                label="Ingresa tu Rut"
                name="documentNumber"
                autoComplete="rut"
                autoFocus
                value={input}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton edge="end">
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            <KeyboardWrapper keyboardRef={keyboard} onChange={setInput} />
        </div>
    );
};

export default MyComponent;

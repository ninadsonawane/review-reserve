import React from 'react'
import { TextField , Grid , InputAdornment , IconButton} from '@material-ui/core'
import  Visibility from "@material-ui/icons/Visibility";
import  VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = ({name , value , label , type , autoFocus , handleChange , half , handleShowPassword}) => {
    return (
        <>
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField 
            name={name} 
            type={type} 
            fullWidth 
            label={label} 
            variant="outlined"
            required  
            autoComplete="none"
            onChange={handleChange}
            autoFocus={autoFocus}
            InputProps={name === 'password' ? {
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                            { type === 'password' ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )
            } : null}
            >

            </TextField>
        </Grid>
        </>
    )
}
export default Input;

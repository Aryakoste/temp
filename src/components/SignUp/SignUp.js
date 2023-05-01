import React, { useReducer, useState } from "react";
import  classes from './signup.module.css';
import Login from "../LogIn/Login";

const SignUp = () => {

    const initialState = {
         hospitalAddress: '',
         fatherName: '',
         motherName: '',
         babyName: '',
         birthDate: '',
         birthTime: '',
         gender: '',
         PermanentAddress: '',
         IssuingDoctor: '',
         RegistarAddress: ''
    };

    const reducer = (state, action) => {
        switch(action.type){
            case 'hospitalAddress':
                return {
                    ...state,
                    hospitalAddress: action.value
                }
            case 'Permanent Address':
                return {
                    ...state,
                    PermanentAddress: action.value
                }
            case 'Issuing Doctor':
                return {
                    ...state,
                    IssuingDoctor: action.value
                }
            case 'Registar Address':
                return {
                    ...state,
                    RegistarAddress: action.value
                }
            case 'Father Name':
                return {
                    ...state,
                    fatherName: action.value
                }
            case 'Mother Name':
                return {
                    ...state,
                    motherName: action.value
                }
            case 'Baby Name':
                return {
                    ...state,
                    babyName: action.value
                }
            default:
                return state
        }
    }
    const [certificateNo, setCertificateNo] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);

    const inputArr1 = ['Father Name', 'Mother Name', 'Baby Name'];
    const inputArr = ['Permanent Address', "Issuing Doctor", "Resgistar Address"];
    return (
        <div className={classes.signUpContainer}>
            
            <div className={classes.container}>
            Certificate No: {certificateNo}
            <div className={classes.inputFields}>
                <div>Hospital Address: </div><input onChange={(e) => {
                    dispatch({type: 'hospitalAddress', value: e.target.value})
                    console.log(state.hospitalAddress);
                }}/>
            </div>
            {
                inputArr1.map(d => {
                    return <div className={classes.inputFields}>
                        <div>{d}: </div> <input onChange={(e) => {
                            dispatch({type: d, value: e.target.value});
                        }}/>
                    </div>
                })
            }
            <div>
                Birth Date: <input type="date"/>
            </div>
            <div>
                Birth Time: <input type="time"/>
            </div>
            {
                inputArr.map(d => {
                    return <div className={classes.inputFields}>
                        <div>{d}: </div> <input onChange={(e) => {
                            dispatch({type: d, value: e.target.value});
                        }}/>
                    </div>
                })
            }
            </div>
        </div>
    );
}

export default SignUp;
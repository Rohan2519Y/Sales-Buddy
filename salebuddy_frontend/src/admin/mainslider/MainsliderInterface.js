import { useStyles } from "./MainsliderInterfaceCss"
import { Button, FormControl, Grid2, InputLabel, MenuItem, Select, TextField, FormHelperText } from "@mui/material"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { postData, getData } from "../../backendservices/FetchNodeServices"
import Swal from "sweetalert2"

export default function MainsliderInterface() {
    const classes = useStyles()
    const navigate = useNavigate()
    const [image, setImage] = useState([])
    const [error, setError] = useState({})

    const handleErrorMessage = (label, errorMessage) => {
        setError((prev) => ({ ...prev, [label]: errorMessage }))
    }

    const handleReset = () => {
        setImage([])
    }

    const handleClick = async () => {
        var err = false
        if (image?.length == 0) {
            err = true
            handleErrorMessage('image', 'Please Choose Image...')
        }
        if (err == false) {
            var formData = new FormData()
            image?.map((item,i)=>{
                formData.append(`images${i}`,item)
            })

            var result = await postData('mainslider/insert_mainslider', formData)
            if (result.status) {
                Swal.fire({
                    icon: "success",
                    title: "Mainslider Register",
                    text: result.message,
                    toast: true
                });
                handleReset()
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Mainslider Register",
                    text: result.message,
                    toast: true
                });
            }
        }
    }

    const showImage = () => {
        return (image?.map((item)=>{
        return(<div style={{margin:2}}>
            <img src={`${URL.createObjectURL(item)}`} style={{width:30,height:30}}/>
        </div>)}))
    }

    const handleImageChange = (e) => {
        var images=Object.values(e.target.files)
        setImage(images)

    }

    return (
        <div className={classes.root}>
            <div className={classes.box}>
                <div className={classes.title}>
                    <div>
                        <img src="/logo.png" className={classes.logo_style} />
                    </div>
                    <div className={classes.title_style}>
                        Add New MainSlider
                    </div>
                    <div style={{ cursor: 'pointer' }} onClick={() => navigate("/dashboard/displayallmainslider")}>
                        <img src="/report.png" className={classes.report_style} />
                    </div>
                </div>
                <div style={{ margin: 8 }}>
                    <Grid2 container spacing={1}>
                        <Grid2 size={4} className={classes.center}>
                          <div style={{display:'flex',flexWrap:'wrap'}}>
                            {showImage()}
                          </div>
                        </Grid2>
                        <Grid2 size={8}  >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 60, flexDirection: 'column' }}>
                                <Button fullWidth component="label" variant="outlined">
                                    Upload Images
                                    <input onFocus={() => handleErrorMessage(image, '')} onChange={handleImageChange} type="file" accept="image/*" hidden multiple />
                                </Button>
                                <div className={classes.helperTextStyle}>{error.image}</div>
                            </div>
                        </Grid2>
                        <Grid2 size={6} className={classes.center} >
                            <Button fullWidth className={classes.button_style} variant="contained" onClick={handleClick}>Save</Button>
                        </Grid2>
                        <Grid2 size={6} className={classes.center} >
                            <Button fullWidth className={classes.button_style} variant="contained" onClick={handleReset}>Reset</Button>
                        </Grid2>
                    </Grid2>
                </div>
            </div>
        </div>
    )
}
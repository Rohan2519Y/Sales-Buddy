import MaterialTable from "@material-table/core";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { getData, serverURL } from "../../backendservices/FetchNodeServices";
import { useStyles } from "./DisplayAllMainsliderCss";

export default function DisplayAllMainslider() {
    const classes = useStyles()
    const navigate = useNavigate()
    const [listMorePicture, setListMainslider] = useState([])

    const fetchAllMainslider = async () => {
        var response = await getData('mainslider/fetch_mainslider')
        if (response.status) {
            setListMainslider(response.data)
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Mainslider Register",
                text: response.message,
                toast: true
            });
        }
    }
    useEffect(function () {
        fetchAllMainslider()
    }, [])

    function displayAll() {
        return (
            <MaterialTable
                title="List Of Product Pictures"
                columns={[
                    { title: 'ID', field: 'pictureid' },
                    { title: 'Images', render: (rowData) => <div ><img src={`${serverURL}/images/${rowData.images}`} style={{ width: 60, height: 50, borderRadius: 15 }} /></div> }
                ]}
                data={listMorePicture}
                actions={[
                    {
                        icon: 'add',
                        tooltip: 'Add More Mainslider',
                        isFreeAction: true,
                        onClick: (event) => navigate("/dashboard/mainsliderinterface")
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Delete Mainslider',
                        isFreeAction: true,
                        onClick: (event) => navigate("/dashboard/mainsliderinterface")
                    }
                ]}
            />
        )
    }
    return (<div className={classes.root}>
        <div className={classes.box}>
            {displayAll()}
        </div>
    </div>)
}
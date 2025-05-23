import MaterialTable from "@material-table/core";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { getData, serverURL, postData } from "../../backendservices/FetchNodeServices";
import { useStyles } from "./DisplayAllMainsliderCss";

export default function DisplayAllMainslider() {
    const classes = useStyles()
    const navigate = useNavigate()
    const [mainsliderId, setMainsliderId] = useState('')
    const [listMainslider, setListMainslider] = useState([])

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

    const handleDelete = async (id) => {
        {
            var body = { 'mainsliderid': id }
            var result = await postData('mainslider/delete_mainslider', body)
            if (result.status) {
                Swal.fire({
                    icon: "success",
                    title: "Mainslider Register",
                    text: result.message,
                    toast: true
                });
                fetchAllMainslider()
            }
        }
    }
    const deleteUsingIcon = (rowData) => {
        setMainsliderId(rowData.mainsliderid)
        Swal.fire({
            title: "Are you sure to delete selected Mainslider",
            showCancelButton: true,
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(rowData.mainsliderid)
            }
        })
    }

    function displayAll() {
        return (
            <MaterialTable
                title="List Of Product Pictures"
                columns={[
                    { title: 'ID', field: 'mainsliderid' },
                    {
                        title: 'Images',
                        render: (rowData) => {
                            return (
                                <div style={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                    {rowData.images.split(',').map(item => item.trim()).map((item) => (
                                        <img
                                            src={`${serverURL}/images/${item}`}
                                            style={{ width: 40, height: 40, borderRadius: 10 }}
                                        />
                                    ))}
                                </div>

                            );
                        }
                    }
                ]}
                data={listMainslider}
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
                        onClick: (event,rowData) =>deleteUsingIcon(rowData) 
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
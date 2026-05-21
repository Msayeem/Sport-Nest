"use client";
import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";
import React from 'react';
import { toast } from "react-toastify";

const DeleteBtn = ({data}) => {

  const router=useRouter();

const handleDelete=async()=>{
    const res=await fetch(`http://localhost:5000/facilities/${data._id}`, {
        method:'DELETE',
        headers:{
             'content-type':'application/json'
        }
    });

    const result=await res.json();
    toast.warning('Facility deleted.');
    router.refresh()
}

    return (
        <div>
              <AlertDialog>
      <Button variant="danger">Delete Facility</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Facility permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{data.facilityName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Facility
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
        </div>
    );
};

export default DeleteBtn;
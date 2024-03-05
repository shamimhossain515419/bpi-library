import { Button, Modal } from 'keep-react';
import React, { useState } from 'react';
import { CloudArrowUp } from "phosphor-react";
import Image from 'next/image';
import toast from 'react-hot-toast';
const ModalApplyBooks = ({ setShowModal, refetch, setActiveData, activeData, showModal, onClickTwo }) => {

    const { user, book } = activeData || {};
    const [loading, setLoading] = useState(false)
    const handleSubmit = async () => {

        try {
            setLoading(true)
            const res = await fetch(`http://localhost:3000/api/managebook/editmanagebook?id=${activeData?.id}`, {
                method: "PUT"
            });
            const data = await res.json();
            if (data?.data) {
                toast.success(data?.message)
                setLoading(false);
                refetch()
                setShowModal(false);
                setActiveData({})
            }
        } catch (e) {
            setLoading(false)
        }

    }


    return (
        <div>
            <Modal
                icon={<CloudArrowUp size={28} color="#1B4DFF" />}
                size="2xl"
                show={showModal}
                onClose={onClickTwo}
            >
                <Modal.Header>Please Accept Requast </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className='grid  gap-3 sm:grid-cols-2'>
                            <div className=' h-[250px]  w-[250px]'>
                                <Image className=' w-full object-fill h-full' width={30} height={250} src={book?.image1} alt='image' />
                            </div>
                            <div>
                                <h1> {book?.name} </h1>
                                <h1> {book?.writer_name} </h1>
                                <h1> {book?.category} </h1>
                            </div>
                        </div>
                        <div className=' pt-4'>
                            <span>User: </span>
                            <h1 className='text-[20px] capitalize font-medium pt-0'> Name: {user?.name} </h1>
                            <h1 className='text-[20px] capitalize font-medium pt-0'> Roll: {user?.roll} </h1>
                            <h1 className='text-[20px] capitalize font-medium pt-0'> Department: {user?.department} </h1>
                            <h1 className='text-[20px] capitalize font-medium pt-0'>Semester: {user?.semester} </h1>
                            <h1 className='text-[20px] capitalize font-medium pt-0'>shift: {user?.shift} </h1>
                        </div>
                        {/* actions  */}
                        <div className=' flex items-center gap-5'>
                            <Button onClick={() => { setShowModal(false), setActiveData({}) }} size="md" color="error">Cancel </Button>
                            <Button onClick={handleSubmit} size="md" color="success">{loading ? "loading..." : "Accept"}</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ModalApplyBooks;
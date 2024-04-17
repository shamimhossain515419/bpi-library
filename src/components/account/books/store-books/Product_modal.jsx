"use client";

import { useAddnewbookMutation } from "@/redux/features/books/BooksAPI";
import { department } from "@/utility/sidebaritems";
import { Modal, Label, TextInput, Textarea, Spinner, Button } from "keep-react";
import { CloudArrowUp } from "phosphor-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import firebase storage
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from "firebase/storage";

import app from "../../../../../firebase/firebase.config";
import { firebaseStroageURL } from "@/utility/uploadImage";

const storage = getStorage(app, firebaseStroageURL);

const createUniqueFileName = (getFile) => {
    const timeStamp = Date.now();
    const randomStringValue = Math.random().toString(36).substring(2, 12);
    return `${getFile.name}-${timeStamp}-${randomStringValue}`;
};
// helperForUPloadingImageToFirebase
async function helperForUPloadingImageToFirebase(file) {
    const getFileName = createUniqueFileName(file);
    const storageReference = ref(storage, `books/${getFileName}`);
    const uploadImage = uploadBytesResumable(storageReference, file);

    return new Promise((resolve, reject) => {
        uploadImage.on(
            "state_changed",
            (snapshot) => { },
            (error) => {
                console.log(error);
                reject(error);
            },
            () => {
                getDownloadURL(uploadImage.snapshot.ref)
                    .then((downloadUrl) => resolve(downloadUrl))
                    .catch((error) => reject(error));
            }
        );
    });
}

export const Product_modal = ({ onClickTwo, setShowModal, showModal }) => {
    const [imageLoader, setimageLoader] = useState(false);
    const [image1, setImage1] = useState("");
    const [error, setError] = useState("");
    const [
        addnewbook,
        { isLoading, data: resultAddnewbooks, isSuccess, error: uploadError },
    ] = useAddnewbookMutation();

    const AddProductHandler = (e) => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const price = parseFloat(from.price.value);
        const title = from.title.value;
        const writer_name = from.writer_name.value;
        const category = from.category.value;
        const quantity = parseInt(from.quantity.value);
        const department = from.department.value;
        const description = from.description.value;
        const data = {
            name,
            image1,
            title,
            price,
            writer_name,
            category,
            quantity,
            department,
            description,
        };
        if (image1) {
            addnewbook(data);
        }
        setError("Image Not Found");
    };
    useEffect(() => {
        if (resultAddnewbooks?.success && isSuccess) {
            toast.success("Added new books successfully");
            setShowModal(false)
        }
    }, [resultAddnewbooks, setShowModal, isSuccess]);

    const handleImage = async (event) => {
        setimageLoader(true);
        const extractImageUrl = await helperForUPloadingImageToFirebase(
            event.target.files[0]
        );
        if (extractImageUrl) {
            setImage1(extractImageUrl);
            setimageLoader(false);
        }
    };



    return (
        <>
            <div>
                <Modal
                    icon={<CloudArrowUp size={28} color="#1B4DFF" />}
                    size="2xl"
                    show={showModal}
                    onClose={onClickTwo}
                >
                    <Modal.Header>Add New Books</Modal.Header>
                    <Modal.Body>
                        <div className="overflow-scroll max-h-[70vh]	 p-4">
                            <form onSubmit={AddProductHandler} enctype="multipart/form-data">
                                {/* name  */}
                                <div className="from_group py-1">
                                    <Label htmlFor="#id-8" value=" Book Name" />
                                    <TextInput
                                        id="#id-8"
                                        placeholder="Default Input Field"
                                        color="info"
                                        name="name"
                                        required
                                    />
                                </div>
                                {/* title */}
                                <div className="from_group py-1">
                                    <Label htmlFor="#id-9" value=" Title" />
                                    <TextInput
                                        id="#id-9"
                                        placeholder=" title"
                                        color="info"
                                        type="text"
                                        name="title"
                                        required
                                    />
                                </div>

                                {/* price */}
                                <div className="from_group py-1">
                                    <Label htmlFor="#id-9" value=" Books price (Optional)" />
                                    <TextInput
                                        id="#id-9"
                                        placeholder="Sale price"
                                        color="info"
                                        type="number"
                                        name="price"
                                    />
                                </div>
                                {/* writer_name */}
                                <div className="from_group py-1">
                                    <Label htmlFor="#id-9" value=" Writer_name" />
                                    <TextInput
                                        id="#id-9"
                                        placeholder="writer_name"
                                        color="info"
                                        type="text"
                                        name="writer_name"
                                        required
                                    />
                                </div>
                                {/* category */}
                                <div className="from_group py-1">
                                    <Label htmlFor="#id-9" value=" Category" />
                                    <TextInput
                                        id="#id-9"
                                        placeholder="category"
                                        color="info"
                                        type="text"
                                        name="category"
                                        required
                                    />
                                </div>
                                {/* quantity */}
                                <div className="from_group py-1">
                                    <Label htmlFor="#id-9" value=" Quantity" />
                                    <TextInput
                                        id="#id-9"
                                        placeholder="quantity"
                                        color="info"
                                        type="number"
                                        name="quantity"
                                        required
                                    />
                                </div>
                                {/* department */}
                                <div className="from_group py-1">
                                    <Label htmlFor="#id-9" value="Department" />
                                    <select
                                        name="department"
                                        className="block w-full p-2 focus:outline-none border border-[#1b4dff] rounded-md"
                                    >
                                        <option selected>Select Department</option>
                                        {department?.map((dep) => (
                                            <option key={dep?.id} value={dep?.name}>
                                                {dep?.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Image1  */}
                                <div>
                                    {
                                        image1 && <div>
                                            <h1 className="text-[15px]   text-primary py-2"> Upload image success</h1>
                                        </div>
                                    }
                                    {imageLoader ? (
                                        <>
                                            <Button type="" size="md">
                                                <span className="pr-2">
                                                    <Spinner color="info" size="md" />
                                                </span>
                                                Loading...
                                            </Button>
                                        </>
                                    ) : (
                                        <div>
                                            {!image1 &&
                                                <div className="from_group py-1">
                                                    <Label htmlFor="#id-9" value=" Image Book " />
                                                    <input
                                                        className=" block  py-2 rounded px-3 border w-full border-gray-700"
                                                        onChange={handleImage}
                                                        type="file"
                                                        name="image1"
                                                    />
                                                </div>
                                            }
                                        </div>

                                    )}
                                </div>

                                {/* description  */}
                                <div className="from_group py-1">
                                    <Label htmlFor="#id-9" value=" Description " />
                                    <Textarea
                                        id="description"
                                        placeholder="description..."
                                        withBg={true}
                                        name="description"
                                        color="gray"
                                        border={true}
                                        rows={4}
                                        required
                                    />
                                </div>
                                <div className="from_group py-1">
                                    <p className="text-red-500"> {error}</p>
                                </div>

                                <div>
                                    <button
                                        disabled={!image1}
                                        type="submit"
                                        className="border hover:bg-primary hover:text-white p-2 px-4 mt-2 rounded-sm"
                                    >
                                        {
                                            isLoading ? <> <Spinner color="info" size="md" /></> : "SAVE"
                                        }

                                    </button>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
};

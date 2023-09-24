import { useState } from 'react';
import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import uploadProfilePhoto from "@/lib/register/UploadProfilePhoto";

const getSrcFromFile = (file) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
    });
};


export const ImagePicker = (email) => {

    const [fileList, setFileList] = useState([],
    );
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async (file) => {
        const src = file.url || (await getSrcFromFile(file));
        const imgWindow = window.open(src);

        if (imgWindow) {
            const image = new Image();
            image.src = src;
            imgWindow.document.write(image.outerHTML);
        } else {
            window.location.href = src;
        }
    };

    return (
        <ImgCrop showGrid rotationSlider showReset cropShape='round'
                 onModalOk={async () => {
                     try {
                         await uploadProfilePhoto(fileList, email);
                     } catch (error) {
                         // Handle the error here
                         console.error("An error occurred while uploading:", error);
                         // Optionally, you can display an error message to the user
                     }
                 }}
                 modalProps={{okButtonProps:{type:"default"}}}
                 modalOk={"Upload"}>
            <Upload
                method={"POST"}
                action={"http://localhost:5000/api/fillDetails/individual"}
                data={{profilePhoto : fileList}}
                headers={{
                    'email': "techdazex@gmail.com" ,
                    contentType : 'application/json'
                }}
                style={{background:'#F1F1F1', color:'#F1F1F1', text:'#000000'}}
                listType="picture-circle"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
            >
                {fileList.length < 1 && '+ Upload'}
            </Upload>
        </ImgCrop>
    );
};

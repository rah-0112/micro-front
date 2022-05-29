import React, { useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user",
};

export const WebcamCapture = () => {
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [blob1, setblob1] = useState("");
    const [blob2, setblob2] = useState("");
    const [blob3, setblob3] = useState("");
    const [label, setLabel] = useState("");
    const [name, setName] = useState("");

    const webcamRef1 = React.useRef(null);
    const webcamRef2 = React.useRef(null);
    const webcamRef3 = React.useRef(null);

    const dataURLtoBlob = (dataurl) => {
        var arr = dataurl.split(","),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append("File1", blob1);
        formData.append("File2", blob2);
        formData.append("File3", blob3);
        formData.append("label", label);

        // Details of the uploaded file
        console.log(formData);
        console.log(blob1);
        console.log(blob2);
        console.log(blob3);
        console.log(label);

        // Request made to the backend api
        // Send formData object
        const result = await axios.post(
            "http://localhost:5000/post-face",
            formData
        );

        console.log(result.data.result);
    };

    const submitForm1 = async (e) => {
        e.preventDefault();
        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append("File1", blob1);

        // Details of the uploaded file
        console.log(formData);
        console.log(blob1);

        // Request made to the backend api
        // Send formData object
        const result = await axios.post(
            "http://localhost:5000/check-face",
            formData
        );

        console.log(result.data.result);
        setName(result.data.result);
    };

    const capture1 = React.useCallback(() => {
        const imageSrc = webcamRef1.current.getScreenshot();
        const blob = dataURLtoBlob(imageSrc);
        setImage1(imageSrc);
        setblob1(blob);
    });

    const capture2 = React.useCallback(() => {
        const imageSrc = webcamRef2.current.getScreenshot();
        const blob = dataURLtoBlob(imageSrc);
        setImage2(imageSrc);
        setblob2(blob);
    });

    const capture3 = React.useCallback(() => {
        const imageSrc = webcamRef3.current.getScreenshot();
        const blob = dataURLtoBlob(imageSrc);
        setImage3(imageSrc);
        setblob3(blob);
    });

    return (
        <div className="webcam-container">
            <div className="webcam-img">
                {image1 === "" ? (
                    <Webcam
                        audio={false}
                        height={200}
                        ref={webcamRef1}
                        screenshotFormat="image/jpeg"
                        width={220}
                        videoConstraints={videoConstraints}
                    />
                ) : (
                    <img src={image1} alt="img" />
                )}
            </div>
            <div>
                {image1 !== "" ? (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setImage1("");
                        }}
                        className="webcam-btn"
                    >
                        Retake Image
                    </button>
                ) : (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            capture1();
                        }}
                        className="webcam-btn"
                    >
                        Capture
                    </button>
                )}
            </div>
            <div className="webcam-img">
                {image2 === "" ? (
                    <Webcam
                        audio={false}
                        height={200}
                        ref={webcamRef2}
                        screenshotFormat="image/jpeg"
                        width={220}
                        videoConstraints={videoConstraints}
                    />
                ) : (
                    <img src={image2} alt="img" />
                )}
            </div>
            <div>
                {image2 !== "" ? (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setImage2("");
                        }}
                        className="webcam-btn"
                    >
                        Retake Image
                    </button>
                ) : (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            capture2();
                        }}
                        className="webcam-btn"
                    >
                        Capture
                    </button>
                )}
            </div>
            <div className="webcam-img">
                {image3 === "" ? (
                    <Webcam
                        audio={false}
                        height={200}
                        ref={webcamRef3}
                        screenshotFormat="image/jpeg"
                        width={220}
                        videoConstraints={videoConstraints}
                    />
                ) : (
                    <img src={image3} alt="img" />
                )}
            </div>
            <div>
                {image3 !== "" ? (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setImage3("");
                        }}
                        className="webcam-btn"
                    >
                        Retake Image
                    </button>
                ) : (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            capture3();
                        }}
                        className="webcam-btn"
                    >
                        Capture
                    </button>
                )}
            </div>
            <input
                type="text"
                placeholder="Label"
                onChange={(e) => setLabel(e.target.value)}
            />
            <button
                type="submit"
                id="login-button"
                onClick={(e) => submitForm(e)}
            >
                Submit
            </button>
            <button
                type="submit"
                id="login-button"
                onClick={(e) => submitForm1(e)}
            >
                Check
            </button>

            {name.length !== 0 ? (
                name.map((name, i) => <div key={i}>{name._label}</div>)
            ) : (
                <div>No One</div>
            )}
        </div>
    );
};

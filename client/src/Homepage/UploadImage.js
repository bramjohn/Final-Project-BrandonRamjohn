import { useState, useContext } from "react";
import axios from "axios";
import { Image } from "cloudinary-react";
import Button from "@material-ui/core/Button";
import { UsersContext } from "../Context/UsersContext";
import styled from "styled-components";
const UploadImage = () => {
  const { setImgUrl } = useContext(UsersContext);
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageData, setImageData] = useState(null);

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", selectedImages);
    formData.append("upload_preset", "a6e0exfh");
    // Replace YOUR_UPLOAD_PRESET with your cloudinary upload_preset which looks something like this: sdfmpeitro

    const postImage = async () => {
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/project-data-upload/image/upload",
          formData
          // Replace YOUR_CLOUD_NAME with your cloudName which you can find in your Dashboard
        );
        setImageData(response.data);
        setImgUrl(response.data.secure_url);
      } catch (error) {
        console.error(error);
      }
    };

    postImage();
  };

  return (
    <>
      <Div className="wrapper">
        <h1 className="heading">Cloudinary Image Upload</h1>
        <article className="article">
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setSelectedImages(e.target.files[0])}
            className="input"
          />
          <Button
            onClick={uploadImage}
            className="button"
            color="primary"
            variant="contained"
          >
            Upload Image
          </Button>
        </article>

        <article className="image-container">
          {imageData && (
            <Picture
              cloudName="project-data-upload"
              publicId={`https://res.cloudinary.com/project-data-upload/image/upload/v1649427526/${imageData.public_id}`}
              // Replace YOUR_CLOUD_NAME with your cloudName which you can find in your Dashboard. NOTE: Your publicId link might be different.
            />
          )}
        </article>
      </Div>
    </>
  );
};

const Picture = styled(Image)`
  width: 250px;
`;

const Div = styled.div`
  margin-left: 45px;
`;

export default UploadImage;

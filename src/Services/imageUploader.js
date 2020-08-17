import axios from "axios";

const upload = async (photo) => {
  const formData = new FormData();
  formData.append("file", photo[0]);
  const uploadResponse = await axios.post(
    "https://api.anonymousfiles.io/?expires=1w",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return `https://anonymousfiles.io/f/${uploadResponse.data.name}`;
};

export default upload;

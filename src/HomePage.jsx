import React, { useEffect, useState } from "react";

import styles from "./homePage.module.css";
import defaultImg from "./default-img.png";

const HomePage = () => {
  const [file, setFile] = useState([]);
  const [imgSrc, setImgSrc] = useState(defaultImg);

  useEffect(() => {
    const update = async () => {
      let image = await getBase64(file.asFile);
      setImgSrc(image);
    };

    update();
  }, [file]);

  function getBase64(file) {
    return new Promise((resolve) => {
      let baseURL = "";
      let reader = new FileReader();

      if (file) {
        reader.readAsDataURL(file);
      }

      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  }

  const handleFileInput = async (e) => {
    setFile({
      asPreview: URL.createObjectURL(e.target.files[0]),
      asFile: e.target.files[0],
    });
  };

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <img className={styles.image} src={imgSrc} alt="default-img.png" />
        <form className={styles.form}>
          <label className={styles.upload_file}>
            <input
              className={styles.input}
              type="file"
              name="fileInput"
              alt="file input"
              onChange={handleFileInput}
              accept=".jpg,.png,.jpeg"
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default HomePage;

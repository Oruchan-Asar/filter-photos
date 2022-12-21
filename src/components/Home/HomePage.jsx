import React, { useEffect, useState } from "react";
import { CFormInput } from "@coreui/react";

import styles from "./homePage.module.css";
import defaultImg from "../../assets/default-img.png";
import Counter from "../Counter/Counter";
import SelectBox from "./SelectBox";
import "@coreui/coreui/dist/css/coreui.min.css";

const HomePage = () => {
  const [file, setFile] = useState([]);
  const [imgSrc, setImgSrc] = useState(defaultImg);
  const [selectedFilters, setSelectedFilters] = useState("");
  const [count, setCount] = useState(0);

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
        <img
          className={[
            imgSrc !== defaultImg ? `${selectedFilters}-${count}` : "",
            styles.image,
          ].join(" ")}
          src={imgSrc}
          alt="img"
        />
        <CFormInput
          className={styles.formFile}
          type="file"
          id="formFile"
          accept=".jpg,.png,.jpeg"
          disabled={selectedFilters ? false : true}
          onChange={handleFileInput}
        />
        <div className={styles.filter}>
          <SelectBox
            setSelectedFilters={setSelectedFilters}
            selectedFilters={selectedFilters}
          />
          <Counter count={count} setCount={setCount} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

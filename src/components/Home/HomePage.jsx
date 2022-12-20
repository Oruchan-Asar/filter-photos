import React, { useEffect, useState } from "react";
import Select from "react-select";

import styles from "./homePage.module.css";
import defaultImg from "../../assets/default-img.png";
import Counter from "../Counter/Counter";
import filters from "./filters";

const HomePage = () => {
  const [file, setFile] = useState([]);
  const [imgSrc, setImgSrc] = useState(defaultImg);
  const [selectedFilters, setSelectedFilters] = useState();
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
          className={[`${selectedFilters?.value}-${count}`, styles.image].join(
            " "
          )}
          src={imgSrc}
          alt="default-img.png"
        />
        <form className={styles.form}>
          <label className={styles.upload_file}>
            <input
              className={styles.input}
              type="file"
              name="fileInput"
              alt="file input"
              onChange={handleFileInput}
              accept=".jpg,.png,.jpeg"
              disabled={selectedFilters ? false : true}
            />
          </label>
          <Select
            defultValue={selectedFilters}
            onChange={setSelectedFilters}
            options={filters}
          />
          <Counter count={count} setCount={setCount} />
        </form>
      </div>
    </div>
  );
};

export default HomePage;

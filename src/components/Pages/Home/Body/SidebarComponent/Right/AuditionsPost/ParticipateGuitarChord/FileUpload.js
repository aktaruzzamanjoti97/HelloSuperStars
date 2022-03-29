import React, { useRef, useState } from "react";
import { FileDrop } from "react-file-drop";
import { AiOutlineCloseCircle, AiOutlineUpload } from "react-icons/ai";
import styles from "./style.module.css";

const FileUpload = () => {
  const [selectFile, setSelectFile] = useState(null);

  const fileInputRef = useRef(null);

  const onFileInputChange = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    setSelectFile(file);
    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg"
    ) {
    } else if (file.type === "text/plain") {
      const text = await file.text();
      console.log(text);
    }
  };

  const onTargetClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <div>
        <div className="container-fluid mt-5 mb-3">
          <div className="row">
            <div className={styles.CardBorder}>
              <div className={styles.fileUploadCard}>
                <input
                  onChange={onFileInputChange}
                  ref={fileInputRef}
                  type="file"
                  className={styles.hidden}
                />
                <div className={styles.text}>
                  <button onClick={onTargetClick} className={styles.uploadBtn}>
                    Upload File
                  </button>
                  <p className="text-center">
                    {selectFile !== null ? (
                      <>
                        {selectFile.name}
                        <span
                          className={styles.x}
                          onClick={() => setSelectFile(null)}
                        >
                          <AiOutlineCloseCircle className="icon" />
                        </span>
                      </>
                    ) : (
                      <div className="text-light">"Choose file..."</div>
                    )}
                  </p>
                </div>
                <FileDrop
                  onDrop={(files, event) => setSelectFile(files[0])}
                  onTargetClick={onTargetClick}
                  targetClassName={styles.target}
                  className={styles.filedrop}
                  draggingOverFrameClassName={styles.filedropDrag}
                >
                  <div className="p-5">
                    <div className="iconCustomized text-center">
                      <AiOutlineUpload className="icon" />
                    </div>
                    <p> Click or Drag and drop file</p>
                  </div>
                </FileDrop>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;

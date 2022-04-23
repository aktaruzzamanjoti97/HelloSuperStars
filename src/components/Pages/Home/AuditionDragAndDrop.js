import React, { useRef, useState } from "react";
import { FileDrop } from "react-file-drop";
import { AiOutlineCloseCircle, AiOutlineUpload } from "react-icons/ai";
import "./AuditionDragAndDrop.css";

const AuditionDragAndDrop = () => {
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
            <div className="col-md-3">
              <div className="CardBorder">
                <div className="fileUploadCard">
                  <input
                    onChange={onFileInputChange}
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                  />
                  <div className="text">
                    <button onClick={onTargetClick} className="uploadBtn">
                      Upload File
                    </button>
                    <p className="text-center">
                      {selectFile !== null ? (
                        <>
                          {selectFile.name}
                          <span
                            className="x"
                            onClick={() => setSelectFile(null)}
                          >
                            <AiOutlineCloseCircle className="icon" />
                          </span>
                        </>
                      ) : (
                        "Choose file..."
                      )}
                    </p>
                  </div>
                  <FileDrop
                    onDrop={(files, event) => setSelectFile(files[0])}
                    onTargetClick={onTargetClick}
                    targetClassName="target"
                    className="filedrop"
                    draggingOverFrameClassName="filedropDrag"
                  >
                    <div>
                      <div className="iconCustomized text-center">
                        <AiOutlineUpload className="icon" />
                      </div>
                      <p className="p-2">Click or Drag and drop file</p>
                    </div>
                  </FileDrop>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="CardBorder">
                <div className="fileUploadCard">
                  <input
                    onChange={onFileInputChange}
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                  />
                  <div className="text">
                    <button onClick={onTargetClick} className="uploadBtn">
                      Upload File
                    </button>
                    <p className="text-center">
                      {selectFile !== null ? (
                        <>
                          {selectFile.name}
                          <span
                            className="x"
                            onClick={() => setSelectFile(null)}
                          >
                            <AiOutlineCloseCircle className="icon" />
                          </span>
                        </>
                      ) : (
                        "Choose file..."
                      )}
                    </p>
                  </div>
                  <FileDrop
                    onDrop={(files, event) => setSelectFile(files[0])}
                    onTargetClick={onTargetClick}
                    targetClassName="target"
                    className="filedrop"
                    draggingOverFrameClassName="filedropDrag"
                  >
                    <div>
                      <div className="iconCustomized text-center">
                        <AiOutlineUpload className="icon" />
                      </div>
                      <p className="p-2">Click or Drag and drop file</p>
                    </div>
                  </FileDrop>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="CardBorder">
                <div className="fileUploadCard">
                  <input
                    onChange={onFileInputChange}
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                  />
                  <div className="text">
                    <button onClick={onTargetClick} className="uploadBtn">
                      Upload File
                    </button>
                    <p className="text-center">
                      {selectFile !== null ? (
                        <>
                          {selectFile.name}
                          <span
                            className="x"
                            onClick={() => setSelectFile(null)}
                          >
                            <AiOutlineCloseCircle className="icon" />
                          </span>
                        </>
                      ) : (
                        "Choose file..."
                      )}
                    </p>
                  </div>
                  <FileDrop
                    onDrop={(files, event) => setSelectFile(files[0])}
                    onTargetClick={onTargetClick}
                    targetClassName="target"
                    className="filedrop"
                    draggingOverFrameClassName="filedropDrag"
                  >
                    <div>
                      <div className="iconCustomized text-center">
                        <AiOutlineUpload className="icon" />
                      </div>
                      <p className="p-2">Click or Drag and drop file</p>
                    </div>
                  </FileDrop>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="CardBorder">
                <div className="fileUploadCard">
                  <input
                    onChange={onFileInputChange}
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                  />
                  <div className="text">
                    <button onClick={onTargetClick} className="uploadBtn">
                      Upload File
                    </button>
                    <p className="text-center">
                      {selectFile !== null ? (
                        <>
                          {selectFile.name}
                          <span
                            className="x"
                            onClick={() => setSelectFile(null)}
                          >
                            <AiOutlineCloseCircle className="icon" />
                          </span>
                        </>
                      ) : (
                        "Choose file..."
                      )}
                    </p>
                  </div>
                  <FileDrop
                    onDrop={(files, event) => setSelectFile(files[0])}
                    onTargetClick={onTargetClick}
                    targetClassName="target"
                    className="filedrop"
                    draggingOverFrameClassName="filedropDrag"
                  >
                    <div>
                      <div className="iconCustomized text-center">
                        <AiOutlineUpload className="icon" />
                      </div>
                      <p className="p-2">Click or Drag and drop file</p>
                    </div>
                  </FileDrop>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditionDragAndDrop;

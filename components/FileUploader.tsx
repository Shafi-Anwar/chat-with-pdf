"use client";

import { useCallback } from "react"
import { useDropzone } from "react-dropzone";
import 
{
  CheckCircleIcon,
  CircleArrowDown,
  HammerIcon,
  RocketIcon,
  SaveIcon
} from "lucide-react"
function FileUploader() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    
  },[]);
  const {getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } = useDropzone({ onDrop, });

  return (
    <div className="flex  flex-col gap-4 items-center max-w-7xl mx-auto">
      {/* Loading tomorro */}
    <div {...getRootProps()}
    className={`p-10 border-2 border-dashed border-green-600 text-green-600 mt-10 w-[90%] rounded-lg h-96 flex items-center justify-center ${isFocused || isDragAccept ? "bg-green-300" : "bg-green-100"}`}
    >
      <input {...getInputProps()} />
      <div className="flex items-center justify-center flex-col">
      {
        isDragActive ?
        <>
        <RocketIcon className="h-20 w-20 animate-ping"/>
        <p>Drop the files here ...</p> 
        </>        :(
          <>
          <CircleArrowDown className="h-20 w-20 animate-bounce" />
          <p>Drag n drop some files here, or click to select files</p>
          </>
          
        )
      }
      </div>
    </div>
    </div>
  )
}

export default FileUploader
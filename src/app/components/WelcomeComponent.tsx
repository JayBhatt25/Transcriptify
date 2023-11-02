"use client"

import React, {useEffect, useRef, useState} from 'react'
import {FiUploadCloud} from 'react-icons/fi'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "./ui/dialog"
  
import {BiChevronDown} from 'react-icons/bi'
import Dropzone from 'react-dropzone'
import {GrFormClose} from 'react-icons/gr'

 function WelcomeComponent() {
    const [Uploadedfiles, setUploadedfiles] = useState(Array<File>)
    const handleFileDrop = (files: Array<File>) => {
        setUploadedfiles(files)
        
    }

    const handleCancel = () => {
        setUploadedfiles([])
    }

    const handleCloseModal = (isOpen: boolean) => {
        if(!isOpen) setUploadedfiles([])
    }
    useEffect(() => {

    }, [Uploadedfiles])

    const fileTypes: Array<string> = ['.mp3','.mp4','.wav','.caf','.aiff','.avi','.rmvb', '.flv', '.m4a', '.mov', '.wmv', '.wma']  
  return (
    <div className='w-[1096px] h-[56px] mt-[30px] ml-[36px] flex justify-between items-center'>
        <div className="text__container w-[345px] gap-1 flex flex-col">
            <h5 className='w-[300px] h-[29px] text-2xl font-semibold leading-[28.8px] font-Inter'>Welcome Shakirat</h5>
            <span className='w-[345px] h-[23px] font-Inter text-sm '>Upload your audio and video to convert to text</span>
        </div>
        <Dialog modal={true} onOpenChange={(open: boolean) => handleCloseModal(open)}>
            <DialogTrigger className='w-[163px] h-[55px] rounded-[6px] px-[24px] py-[16px] gap-[10px] bg-[#0048AD] text-white'>Transcribe File</DialogTrigger>
            <DialogContent className='min-w-[800px] h-[745px] rounded flex flex-col justify-between opacity-100'>
                <DialogHeader className=''>
                <DialogTitle>Transcribe File</DialogTitle>
                </DialogHeader>
                <div className="langueageInput__container flex flex-col w-[700px] h-[80px] gap-2">
                    <span className='w-[159px] h-[20px] font-Inter font-medium text-sm leading-[20.3px] text-center'>Transcription Language</span>
                    <div className="input__container w-[700px] h-[52px] rounded-[8px] border flex justify-between p-4 items-center">
                        <span>Default</span>
                        <BiChevronDown className='w-4 h-4' />
                    </div>
                </div>
                <div className='w-[700px] h-[200px] rounded-[8px] border px-[16px] py-[40px] gap-3'>
                    
                    <Dropzone onDrop={(files) => handleFileDrop(files)} accept={{fileTypes}} >
                    {({getRootProps, getInputProps}) => (
                        <section className='w-[668px] h-[120px] gap-4 flex flex-col items-center'>
                            <div className="cloudIcon__container w-12 h-12 rounded-full bg-[#E0EDFF] items-center relative">
                                <FiUploadCloud className='w-[24.55px] h-[24.55px] absolute top-[9.72px] left-[11.72px]' />
                            </div>
                            {Uploadedfiles?.length > 0 ? (
                                <div className='w-[150px] flex justify-between'>
                                    <span>{Uploadedfiles[0].name}</span>
                                    <button onClick={() => handleCancel()}><GrFormClose /></button>
                                </div>
                                

                            ):(
                               
                            <div {...getRootProps()}>
                                <input {...getInputProps()} ></input>
                                <p className='text-center'><span className="text-[#0048AD] cursor-pointer">Click to upload</span> or drag and drop</p>
                                <p className='text-center text-xs leading-[17.4px] text-[#98A2B3]'>The maximum file size is 1GB for audio and 10GB for videos.</p>
                                <p className='text-center text-xs leading-[17.4px] text-[#98A2B3]'>Supported formats: mp3, mp4, wav, caf, aiff, avi, rmvb, flv, m4a, mov, wmv, wma</p>
                            </div>
                                
                                
                            )}
                            
                        
                        </section>
                    )}
                    </Dropzone>
                    
                </div>

                <div className='w-[700px] h-[80px] gap-2 flex flex-col'>
                    <span className='font-medium text-sm leading-[20.3px]'>Import from Link</span>
                    <div className="import-from-link w-[700px] h-[52px] rounded-[8px] border p-4 gap-2">
                        <span className='text-[#98A2B3] text-sm leading-[20.3px]'>Paste a Drobpox, Google Drive or Youtube URL here</span>
                    </div>
                </div>
                
                <div className="speakerIdentification__container w-[700px] h-[23px] gap-2 flex items-center">
                    <input type="checkbox" />
                    <span>Speaker identification</span>
                </div>

                <button className="w-[700px] h-[55px] rounded-[6px] py-4 px-6 gap-[10px]  disabled:bg-[#D0D5DD] text-white bg-[#0048AD]" disabled={Uploadedfiles.length <= 0}>Transcribe File</button>

            </DialogContent>
            
        </Dialog>
    </div>
  )
}

export default WelcomeComponent
"use client"

import React, {useEffect, useMemo, useState} from 'react'
import {FiUploadCloud} from 'react-icons/fi'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "./ui/dialog"
  
import {BiChevronDown} from 'react-icons/bi'
import Dropzone from 'react-dropzone'
import {GrFormClose} from 'react-icons/gr'
import axios from 'axios'


function WelcomeComponent() {
    const [Uploadedfiles, setUploadedfiles] = useState(Array<File>)

    let fileRead: string | ArrayBuffer | null = null
    const [fileReady, setFileReady] = useState(false)

    const [loading, setLoading] = useState(false)

    const [resultText, setResultText] = useState(null)
    interface AcceptTypes {
        [key:string] : string[]
    }
    const fileTypes: AcceptTypes = {
        'audio/video': ['.mp3', '.mp4','.wav', '.caf', '.aiff', '.avi','.rmvb', '.flv', '.m4a', '.mov', '.wmv', '.wma']
    }
        
    
    
    const baseUrl: string  = process.env.NEXT_PUBLIC_ASSEMBLY_URL!

    const headers = {
    authorization: process.env.NEXT_PUBLIC_ASSEMBLY_API_TOKEN
    }

    const handleFileDrop = (files: Array<File>) => {
        if(files[0].size >= 1e+10) {
            window.alert('File size cannot exceed 10GB')
            return
        }
       
        setUploadedfiles(files)
        setFileReady(true)
    }

    
   
    const handleTranscribe = () => {
        setLoading(true)
        axios.post(`${baseUrl}/upload`, Uploadedfiles[0], {
            headers
          }).then(async (response) => {
            const uploadUrl = response.data.upload_url
            const data = {
                audio_url: uploadUrl 
              }
            const url = `${baseUrl}/transcript`
            const transcriberesponse = await axios.post(url, data, { headers: headers })
            const transcriptId = transcriberesponse.data.id
            const pollingEndpoint = `${baseUrl}/transcript/${transcriptId}`
            while (true) {
            const pollingResponse = await axios.get(pollingEndpoint, {
                headers: headers
            })
            const transcriptionResult = pollingResponse.data
            if (transcriptionResult.status === 'completed') {
                setResultText(transcriptionResult.text)
                let utterance = new SpeechSynthesisUtterance(transcriptionResult.text);
                speechSynthesis.speak(utterance);
                handleFileReset()
                break
            } else if (transcriptionResult.status === 'error') {
                handleFileReset()
                throw new Error(`Transcription failed: ${transcriptionResult.error}`)
            } else {
                
                await new Promise((resolve) => setTimeout(resolve, 3000))
                
            }
            }
          } )
          .catch(err => {
            handleFileReset()
          })
        
    }

    const handleCancel = () => {
        handleFileReset()
    }

    const handleFileReset = () => {
            setUploadedfiles([])
            setFileReady(false)
            setResultText(null)
            setLoading(false)
    }

    const handleCloseModal = (isOpen: boolean) => {
        if(!isOpen) {
            handleFileReset()
        }
    }
  

    useEffect(() => {

    }, [Uploadedfiles,fileReady])
  return (
    // 1096
    <div className='w-[90%]  mt-[80px] ml-[36px] md:justify-between lg:items-center flex flex-col lg:flex-row'>
        <div className="text__container w-[80%] gap-1 flex flex-col">
            <h5 className='w-[300px] h-[29px] text-xl md:text-2xl font-semibold leading-[28.8px] font-Inter'>Welcome</h5>
            <span className='w-[310px] h-[23px] font-Inter text-xs md:text-sm'>Upload your audio and video to convert to text</span>
        </div>
        
        <Dialog modal={true}   onOpenChange={(open: boolean) => handleCloseModal(open)}>
            <DialogTrigger className='w-[35%] h-[55px] rounded-[6px] px-[16px] py-[16px]  bg-[#0048AD] text-white text-xs md:text-lg'>Transcribe File</DialogTrigger>
            <DialogContent className='min-w-[60%] h-[745px] rounded flex flex-col justify-between bg-[#FFFFFF] z-[100]'>
                <DialogHeader className=''>
                <DialogTitle>Transcribe File</DialogTitle>
                </DialogHeader>
                <div className="langueageInput__container flex flex-col w-full h-[80px] gap-2">
                    <span className='w-full h-[20px] font-Inter font-medium text-sm leading-[20.3px] text-start'>Transcription Language</span>
                    <div className="input__container w-full h-[52px] rounded-[8px] border flex justify-between p-4 items-center">
                        <span>Default</span>
                        <BiChevronDown className='w-4 h-4' />
                    </div>
                </div>
                <div className='w-full h-[200px] rounded-[8px] border px-[16px] py-[40px] gap-3'>
                    
                    <Dropzone onDrop={(files) => handleFileDrop(files)} accept={fileTypes} >
                    {({getRootProps, getInputProps}) => (
                        <section className='w-full h-[120px] gap-4 flex flex-col items-center'>
                            <div className="cloudIcon__container w-12 h-12 rounded-full bg-[#E0EDFF] items-center relative">
                                <FiUploadCloud className='w-[24.55px] h-[24.55px] absolute top-[9.72px] left-[11.72px]' />
                            </div>
                            {Uploadedfiles?.length > 0 ? (
                                <div className='w-full flex justify-between'>
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

                <div className='w-full h-[80px] gap-2 flex flex-col'>
                    <span className='font-medium text-sm leading-[20.3px]'>Import from Link</span>
                    <div className="import-from-link w-full h-[52px] rounded-[8px] border p-4 gap-2">
                        <span className='text-[#98A2B3] text-sm leading-[20.3px]'>Paste a Drobpox, Google Drive or Youtube URL here</span>
                    </div>
                </div>
                
                <div className="speakerIdentification__container w-[60%] h-[23px] gap-2 flex items-center">
                    <input type="checkbox" />
                    <span>Speaker identification</span>
                </div>
                
                {loading? (<span>loading....</span>):(
                    <button className="w-[90%] h-[55px] rounded-[6px] py-4 px-6 gap-[10px]  disabled:bg-[#D0D5DD] text-white bg-[#0048AD] ml-auto mr-auto" disabled={!fileReady} onClick={() => handleTranscribe()}>Transcribe File</button>
                )}
                
            </DialogContent>
            
        </Dialog>

        
    </div>
  )
}

export default WelcomeComponent
import React from 'react'
import tableContent from '../../../TableData'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "./ui/table"
  
function RecentFiles() {
     
  return (
    <div className="w-[90%] h-[559px] rounded-xl border p-6 gap-6  mt-10 ml-[36px] bg-white flex flex-col">
        <span className="font-Inter font-semibold text-lg leading-[21.6px]">Recent Files</span>
        <hr className="w-[85%] h-[1px]" />
        <Table>
            <TableHeader>
                <TableRow className="border-none bg-[#EBF3FF] hover:bg-[#EBF3FF]">
                    <TableHead className=""><input type="checkbox" /></TableHead>
                    <TableHead className="">Name</TableHead>
                    <TableHead className="">Type</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Date Created</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableContent.map(item => (
                    <TableRow key={item.key} className="border-b-2 border-b-[#EBF3FF]">
                        <TableCell className=""><input type="checkbox" /></TableCell>
                        <TableCell className="">{item.name}</TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>{item.duration}</TableCell>
                        <TableCell className="">{item.dateCreated}</TableCell>
                        <TableCell className="">{item.lastUpdated}</TableCell>
                    </TableRow>
                ))}
                
            </TableBody>
        </Table>

    </div>
  )
}

export default RecentFiles
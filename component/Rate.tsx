import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


import { ThumbsUp, ThumbsDownIcon } from 'lucide-react'
const Rate = () => {
    return (
        <div className='flex justify-start w-full py-10'>
            <div className=" shadow-box bg-gray-800 rounded-md border border-gray-600 p-2 text-gray-400 cursor-pointer">
                <AlertDialog>
                    <AlertDialogTrigger>
                        <p className='p-2 text-gray-400'>How was your experience with us</p>

                        <div className='flex justify-center gap-4 mt-2'>
                            <ThumbsUp size={18} />
                            <ThumbsDownIcon size={18} />
                        </div>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle className='text-gray-800'>Rate your experience with us</AlertDialogTitle>
                            
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            </div>
        </div>
    )
}

export default Rate
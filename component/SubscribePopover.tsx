'use client'

import React, { useEffect, useState, ReactNode } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CheckIcon, ThumbsUp } from "lucide-react";

interface SubscribePopoverProps {
    messages: ReactNode; // Accepts strings, elements, or fragments
}

const SubscribePopover: React.FC<SubscribePopoverProps> = ({ messages }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, []);

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    {messages === "Already subscribed" ? (
                        <div className="flex flex-col gap-8 items-center">
                            <AlertDialogTitle>Already Subscribed!</AlertDialogTitle>
                            <div className="w-full flex justify-center">
                                <div className="p-4 rounded-full bg-yellow-600">
                                    <ThumbsUp size={30} className="text-white" />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-8 items-center">
                            <AlertDialogTitle>Subscribed Successfully!</AlertDialogTitle>
                            <div className="w-full flex justify-center">
                                <div className="p-4 rounded-full bg-green-600">
                                    <CheckIcon size={30} className="text-white" />
                                </div>
                            </div>
                        </div>
                    )}
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={() => setOpen(false)}>OK</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default SubscribePopover;

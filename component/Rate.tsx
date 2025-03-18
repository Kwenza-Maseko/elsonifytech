"use client";

import { useState } from "react";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Popover from "./Popover";


import { ThumbsUp, ThumbsDownIcon } from 'lucide-react'
const Rate = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState<React.ReactNode | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null); // Reset message before sending

        try {
            const res = await fetch("/api/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ firstname, lastname, description }),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage("Thank you for your feedback. Your Response has been recorded!");
                setDescription(""); // Clear input
            }
        } catch (error) {
            setMessage("Something went wrong. Please try again.");
        }
    };

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
                            <div className="flex flex-col gap-2 items-center mb-6">
                                <div>
                                    <AlertDialogTitle className="pacifico-regular text-gray-800">
                                        ElsonifyTech
                                    </AlertDialogTitle>
                                    <p className="text-xs capitalize text-gray-700 text-center">
                                        Innovate Limitless
                                    </p>
                                </div>
                            </div>
                            <AlertDialogDescription>
                                Please tell us your experience with us
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                            <div className="flex md:flex-row flex-col gap-2">
                                <input
                                    type="text"
                                    placeholder="Firstname"
                                    className="p-2 border rounded w-full text-sm"
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Lastname"
                                    className="p-2 border rounded w-full text-sm"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    required
                                />
                            </div>
                            <textarea
                                placeholder="Feedback"
                                className="p-2 border rounded w-full text-sm"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="text-sm font-bold bg-indigo-900 text-white p-2 rounded hover:bg-indigo-800 transition mt-6"
                            >
                                Send Feedback
                            </button>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                        </form>
                    </AlertDialogContent>

                    {/* Show Popover when there's a message */}
                    {message && <Popover messages={message} />}
                </AlertDialog>

            </div>
        </div>
    )
}

export default Rate

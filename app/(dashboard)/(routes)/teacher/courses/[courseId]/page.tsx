import React from 'react';
import {db} from '@/lib/db'
import {auth} from "@clerk/nextjs";
import {redirect} from "next/navigation";
import {IconBadge} from "@/components/icon-badge";
import {LayoutDashboard} from "lucide-react";

async function Page({params}: { params: { courseId: string } }) {
    const {userId} = auth()
    if (!userId) return redirect("/")
    const course = await db.course.findUnique({
        where: {
            id: params.courseId
        }

    })

    if (!course) return redirect("/")

    const requiredFields = [
        course.title,
        course.description,
        course.imageUrl,
        course.price,
        course.categoryId
    ]

    const totalFields = requiredFields.length
    const completedFields = requiredFields.filter(field => field).length
    const completionText = `${completedFields}/${totalFields} fields completed`
    return (
        <div className="p-6">
            <div className={"flex items-center justify-between"}>
                <div className={"flex flex-col gap-y-2"}>
                    <h1 className={"text-2xl font-medium"}>
                        Course setup
                    </h1>
                    <span className={"text-sm text-slate-700"}>
                        Complete all fields: {completionText}
                    </span>

                </div>

            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 "}>
                <div>
                    <div className="flex items-center gap-x-2">
                        <IconBadge icon={LayoutDashboard}/>
                        <h1 className={"text-xl font-medium"}>
                            Customize your course
                        </h1>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page;
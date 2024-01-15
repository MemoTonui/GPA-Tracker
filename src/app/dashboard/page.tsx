"use client";
import CardComponent from "@/components/CardComponent";
import LineChart from "@/components/LineChart";
import ProgressComponent from "@/components/ProgressComponent";

import React from "react";

export default function DashboardPage() {
  return (
    <div>
     
      <div className="grid grid-cols-6 gap-1">
        <div className="col-span-4">
        <h1 className="text-xl font-bold my-3">Units Perfomance Overview</h1>
          <div>
            <LineChart />
          </div>
        </div>
        <div className="col-span-2">
          <h3 className="font-bold text-md my-4">UNITS OVERVIEW</h3>
          <div>
            <div className="bg-white shadow-sm  rounded-lg max-w-sm">
              <div className="p-5">
                <p className="text-xs mb-3">Students Profile</p>

                <div className="mb-2 flex justify-between">
                  <div>
                    <h5 className="text-gray-900 font-bold text-sm tracking-tight ">
                      42 Units
                    </h5>
                    <p className="text-xs">Done</p>
                  </div>
                  <div className="rounded-full border border-1 text-center border-teal-800 bg-teal-100">
                    <span className="px-1 py-0.5 text-teal-800 flex justify-center text-center text-sm">
                      65%
                    </span>
                  </div>
                </div>
                <div className="mb-2 flex justify-between mt-8">
                  <div>
                    <h5 className="text-gray-900 font-bold text-sm tracking-tight ">
                      1.4 GPA
                    </h5>
                    <div className="flex gap-8">
                      <p className="text-xs">Current GPA</p>
                      <span className="text-center  text-yellow-500 text-xs">
                        65%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 my-10 gap-2">
        <div className="col-span-4">
          <h3 className="font-bold text-md my-4">Registered Units</h3>
          <div className="flex  gap-2">
            <CardComponent
              date="2024-01-15"
              course_name="Example Course"
              title="Example Title"
              progress={50}
            />
            <CardComponent
              date="2024-01-15"
              course_name="Example Course"
              title="Example Title"
              progress={50}
            />
            <CardComponent
              date="2024-01-15"
              course_name="Example Course"
              title="Example Title"
              progress={50}
            />
            <CardComponent
              date="2024-01-15"
              course_name="Example Course"
              title="Example Title"
              progress={50}
            />
          </div>
          <div className="flex grid-cols-3 gap-2 mt-5">
            <CardComponent
              date="2024-01-15"
              course_name="Example Course"
              title="Example Title"
              progress={50}
            />
            <CardComponent
              date="2024-01-15"
              course_name="Example Course"
              title="Example Title"
              progress={50}
            />
          </div>
        </div>

        <div className="col-span-2">
          <div>
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
              <div className="p-5">
                <p className="text-xs mb-3">Overal Grade Analysis</p>

                <div>
                  <ProgressComponent title={'No. of As'} progress={74} />
                  <ProgressComponent title={'No. of Bs'} progress={52} />
                  <ProgressComponent title={'No. of Cs'} progress={36} />
                  <ProgressComponent title={'No. of Ds'} progress={15} />
                  <ProgressComponent title={'No. of Es'} progress={4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

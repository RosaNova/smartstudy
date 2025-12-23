import { useState } from "react"
import { Pause, Plus } from "lucide-react"
import { Link } from "react-router-dom"
import AddTimeCountDown from "./TimeManagement/AddTimeCountDown"
import { TimePicker } from "./TimeManagement/TimePicker"

export default function TimerUI() {
  const [selectedDuration, setSelectedDuration] = useState("20")
  const [timeLeft, setTimeLeft] = useState("16:15")
  const [isRunning, setIsRunning] = useState(false)

  const durations = [
    { label: "5 mins", value: "5" },
    { label: "10 mins", value: "10" },
    { label: "20 mins", value: "20" },
  ]

  
  const progress = 65 

  return (
    <div className="flex flex-col h-screen bg-orange justify-center  items-center gap-8">
     <Link to={"/"} className="absolute left-20 top-20 bg-black rounded-xl text-md px-5 py-2 text-white" >Back</Link>
      {/* Time Duration Buttons */}
      <div className="flex gap-4">
        {durations.map((duration) => (
          <button
            key={duration.value}
            onClick={() => setSelectedDuration(duration.value)}
            className={`px-8  py-3 rounded-full font-semibold text-lg transition-all duration-200 ${
              selectedDuration === duration.value
                ? "bg-white text-orange"
                : "bg-black text-white "
            }`}
          >
            {duration.label}
          </button>
        ))}
        <AddTimeCountDown/>
       
      </div>

      {/* Main Timer Container */}
      <div className="border-8 border-black rounded-[80px] overflow-hidden bg-black w-full max-w-3xl shadow-2xl">
        <div className="flex h-96">
          {/* Left Section - Timer Display */}
          <div className="flex-1 bg-black text-white flex flex-col items-center justify-center px-7 py-6">
            <div className="text-4xl font-bold font-bricolage opacity-80 mb-4">Timer</div>
            <div className="text-7xl font-bold tracking-tight font-bricolage">{timeLeft}</div>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="mt-8 px-12 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full font-semibold transition-all duration-200"
            >
              Stop
            </button>
          </div>

          {/* Right Section - Circular Progress Indicator */}
          <div className="flex-1 bg-white  rounded-[70px]  flex items-center justify-center relative">
            {/* Outer circle background */}
            <div className="relative w-64 h-64">
              {/* SVG for circular progress */}
              <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                {/* Background circle */}
                <circle cx="100" cy="100" r="85" fill="none" stroke="#000000" strokeWidth="12" />
                {/* Progress circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke="#ec6426"
                  strokeWidth="12"
                  strokeDasharray={`${(progress / 100) * 534} 534`}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dasharray 0.3s ease" }}
                />
              </svg>

              {/* Center circle with pause icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-black rounded-full flex items-center justify-center">
                  <Pause className="w-16 h-16 text-orange fill-orange" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Indicator */}
      <div className="w-32 h-2 bg-black rounded-full"></div>
    </div>
  )
}

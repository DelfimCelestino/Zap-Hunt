import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Sidebar = () => (
  <div className="flex flex-col h-full">
    <div className="p-4 border-b">
      <Input placeholder="Search" className="w-full" />
    </div>
    <nav className="flex-1 overflow-y-auto">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-red-500">Launches</h3>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <div className="bg-green-100 p-2 rounded">
              <span className="text-green-600">🕒</span>
            </div>
            <div>
              <p className="font-medium">Coming soon</p>
              <p className="text-sm text-gray-500">Upcoming launches to watch</p>
            </div>
          </li>
          <li className="flex items-center space-x-2">
            <div className="bg-red-100 p-2 rounded">
              <span className="text-red-600">🚀</span>
            </div>
            <div>
              <p className="font-medium">Launch archive</p>
              <p className="text-sm text-gray-500">Most-loved launches by the community</p>
            </div>
          </li>
          <li className="flex items-center space-x-2">
            <div className="bg-blue-100 p-2 rounded">
              <span className="text-blue-600">📋</span>
            </div>
            <div>
              <p className="font-medium">Launch Guide</p>
              <p className="text-sm text-gray-500">Checklists and pro tips for launching</p>
            </div>
          </li>
        </ul>
      </div>
      {['Products', 'News', 'Community', 'Advertise'].map((item) => (
        <div key={item} className="p-4 border-t">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{item}</h3>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      ))}
    </nav>
  </div>
)
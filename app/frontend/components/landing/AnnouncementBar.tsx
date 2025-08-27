import { Zap } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4"
      data-aos="fade-down"
      data-aos-duration="600"
    >
      <div className="flex items-center justify-center gap-2 text-sm">
        <Zap className="w-4 h-4" />
        <span>Limited time: 20% off first rental + free delivery</span>
      </div>
    </div>
  );
}

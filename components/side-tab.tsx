import { Button } from "@/components/ui/button";

const SideTab = () => {
  return (
    <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
      <h3 className="text-sm font-semibold mb-4">PRODUCT LANDSCAPES</h3>
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold">Video conferencing &gt;</h4>
          <p className="text-xs text-muted-foreground mt-1">
            Before Product Hunt, I spent several years building a competitor to
            Zoom (not successful, but quite rewarding). I'm left with...
          </p>
          <div className="flex items-center mt-2">
            <img
              src="https://ph-files.imgix.net/dbe86427-675d-414c-89be-b3b0f310d679.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=2"
              alt="Rajiv Ayyangar"
              className="w-6 h-6 rounded-full mr-2"
            />
            <span className="text-xs">Rajiv Ayyangar CEO at Product Hunt</span>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Hiring software &gt;</h4>
          <p className="text-xs text-muted-foreground mt-1">
            If you've run hiring or conducted interviews at your company, you
            likely used an Applicant Tracking System (ATS). Simply put...
          </p>
          <div className="flex items-center mt-2">
            <img
              src="https://ph-files.imgix.net/dbe86427-675d-414c-89be-b3b0f310d679.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=2"
              alt="Max Kolysh"
              className="w-6 h-6 rounded-full mr-2"
            />
            <span className="text-xs">Max Kolysh CEO of Dover</span>
          </div>
        </div>
      </div>
      <Button variant="link" size="sm" className="text-xs mt-4">
        View more articles
      </Button>
    </div>
  );
};

export default SideTab;

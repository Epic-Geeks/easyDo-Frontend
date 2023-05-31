import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ServiceCards from "./ServiceCards";

export default function ServicesTabs() {
  return (
    <Tabs className="sm:mt-0 mt-14">
      <div className="flex items-center sm:justify-between justify-center flex-wrap my-8" id="services">
        <TabList className="flex overflow-auto">
          <Tab className="px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
            All
          </Tab>
          <Tab className="px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
          Carpentry
          </Tab>
          <Tab className="px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
            Construction
          </Tab>
          <Tab className="px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
          Blacksmith
          </Tab>
          <Tab className="px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
          House Painting
          </Tab>
        </TabList>
      </div>
      <TabPanel>
        <ServiceCards />
      </TabPanel>
      <TabPanel>
        <h3>No Data available yet</h3>
      </TabPanel>
      <TabPanel>
        <ServiceCards />
      </TabPanel>
      <TabPanel>
        <h3>No Data available yet</h3>
      </TabPanel>
      <TabPanel>
        <ServiceCards />
      </TabPanel>
    </Tabs>
  );
}

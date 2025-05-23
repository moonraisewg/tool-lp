import { Home, LockIcon, Anvil } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Dashboard",
      icon: Home,
      url: "/",
      isActive: true,
    },
    {
      title: "Lock LP",
      icon: LockIcon,
      url: "/lock-lp",
    },
    {
      title: "Withdraw and Burn LP",
      icon: Anvil,
      url: "/withdraw-and-burn",
    },
  ],
};
export function AppSidebar() {
  return (
    <Sidebar className="border-r border-gray-800">
      <SidebarHeader className="border-b border-gray-800">
        <div className="flex items-center gap-2 px-4 py-2">
          <span className="text-lg">DIPTS TOOL</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive}>
                    <a href={item.url} className="flex items-center">
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

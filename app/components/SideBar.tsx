import SidebarDropDown from "./SidebarDropDown";

export default function SideBar({ isShow }) {
  return (
    <div className={isShow ? "inline-block w-64" : "hidden"}>
      <span className="flex my-8 w-64">
        <input type="checkbox" />
        <p className="px-4">CUSTOMIZABLE</p>
      </span>
      <div className="my-8">
        <SidebarDropDown />
        <SidebarDropDown />
        <SidebarDropDown />
        <SidebarDropDown />
        <SidebarDropDown />
        <SidebarDropDown />
        <SidebarDropDown />
        <SidebarDropDown />
        <SidebarDropDown />
        <SidebarDropDown />
        <SidebarDropDown />
        <SidebarDropDown />
      </div>
    </div>
  );
}

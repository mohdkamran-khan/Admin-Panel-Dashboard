import { Bell, ChevronLeft, ChevronsLeft, Moon, Search, Sun } from "lucide-react";
import PropTypes from "prop-types";
import { useTheme } from "../hooks/use-theme";
import profileImg from "../assets/profile-image.png";

const Header = ({ collapsed, setCollapsed }) => {
    const { theme, setTheme } = useTheme();

    return (
        <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
            <div className="flex items-center gap-x-3">
                <button
                    className="btn-ghost size-10"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <ChevronsLeft className={collapsed && "rotate-180"} />
                </button>
                <div className="input">
                    <Search
                        size={18}
                        className="text-slate-500"
                    />
                    <input
                        type="text"
                        placeholder="Search . . ."
                        name="search"
                        id="search"
                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-500"
                    />
                </div>
            </div>
            <div className="flex items-center gap-x-3">
                <button
                    className="btn-ghost size-10"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                    <Sun
                        size={20}
                        className="dark:hidden"
                    />
                    <Moon
                        size={20}
                        className="hidden dark:block"
                    />
                </button>
                <button className="btn-ghost size-10">
                    <Bell size={20} />
                </button>
                <button className="size-7 overflow-hidden rounded-full">
                    <img
                        src={profileImg}
                        alt="Profile Image"
                        className="size-full object-cover"
                    />
                </button>
            </div>
        </header>
    );
};

Header.propTypes = {
    collapsed: PropTypes.bool,
    setCollapsed: PropTypes.func,
};

export default Header;

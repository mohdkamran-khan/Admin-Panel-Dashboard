export const Footer = () => {
    return (
        <footer className="mt-2 flex flex-wrap items-center justify-between gap-4 border-t p-2 pt-4">
            <p className="text-slate-9-- text-base font-medium dark:text-slate-50">© {new Date().getFullYear()} | Mohd Kamran Khan</p>
            <div className="flex flex-wrap gap-x-2">
                <a
                    href="#"
                    className="link"
                >
                    Contact Us
                </a>
                <a
                    href="#"
                    className="link"
                >
                    Privacy Policy
                </a>
                <a
                    href="#"
                    className="link"
                >
                    Terms of Service
                </a>
            </div>
        </footer>
    );
};

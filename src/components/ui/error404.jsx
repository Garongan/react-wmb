import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <>
            <section className="min-h-screen flex flex-col gap-5 items-center justify-center">
                <img src="src/assets/images/undraw_page_not_found_re_e9o6.svg" alt="error-banner" className="w-50" />
                <Link to="/" className="hover:underline">
                    Go back to Home
                </Link>
            </section>
        </>
    );
};

export default Error404;

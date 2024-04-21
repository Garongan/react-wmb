const Registration = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
                    <div className="md:hidden">
                        <img
                            alt="Authentication"
                            loading="lazy"
                            width="1280"
                            height="843"
                            decoding="async"
                            data-nimg="1"
                            className="block dark:hidden"
                            srcSet="/_next/image?url=%2Fexamples%2Fauthentication-light.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fexamples%2Fauthentication-light.png&amp;w=3840&amp;q=75 2x"
                            src="/_next/image?url=%2Fexamples%2Fauthentication-light.png&amp;w=3840&amp;q=75"
                            style={{ color: "transparent" }}
                        />
                        <img
                            alt="Authentication"
                            loading="lazy"
                            width="1280"
                            height="843"
                            decoding="async"
                            data-nimg="1"
                            className="hidden dark:block"
                            srcSet="/_next/image?url=%2Fexamples%2Fauthentication-dark.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fexamples%2Fauthentication-dark.png&amp;w=3840&amp;q=75 2x"
                            src="/_next/image?url=%2Fexamples%2Fauthentication-dark.png&amp;w=3840&amp;q=75"
                            style={{ color: "transparent" }}
                        />
                    </div>
                    <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                        <a
                            className="outline inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 absolute right-4 top-4 md:right-8 md:top-8"
                            href="/examples/authentication"
                        >
                            Login
                        </a>
                        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                            <div className="absolute inset-0 bg-zinc-900"></div>
                            <div className="relative z-20 flex items-center text-lg font-medium">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-2 h-6 w-6"
                                >
                                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
                                </svg>
                                Acme Inc
                            </div>
                            <div className="relative z-20 mt-auto">
                                <blockquote className="space-y-2">
                                    <p className="text-lg">
                                        “Warung makan Bahari: Nikmatnya hidangan keluarga dalam setiap suapan di tepian pantai.”
                                    </p>
                                    <footer className="text-sm">Founder: Alvindo Tri Jatmiko</footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="lg:p-8">
                            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                                <div className="flex flex-col space-y-2 text-center">
                                    <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
                                    <p className="text-sm text-muted-foreground">Enter your email below to create your account</p>
                                </div>
                                <div className="grid gap-6">
                                    <form>
                                        <div className="grid gap-2">
                                            <div className="grid gap-1">
                                                <label
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                                                    htmlFor="email"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                                    id="email"
                                                    placeholder="name@example.com"
                                                    autoCapitalize="none"
                                                    autoComplete="email"
                                                    autoCorrect="off"
                                                    type="email"
                                                />
                                            </div>
                                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                                                Sign In with Email
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <p className="px-8 text-center text-sm text-muted-foreground">
                                    By clicking continue, you agree to our{" "}
                                    <a className="underline underline-offset-4 hover:text-primary" href="/terms">
                                        Terms of Service
                                    </a>{" "}
                                    and{" "}
                                    <a className="underline underline-offset-4 hover:text-primary" href="/privacy">
                                        Privacy Policy
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;

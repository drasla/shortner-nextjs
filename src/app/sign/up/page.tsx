import { twMerge } from "tailwind-merge";
import { Button, Input } from "@drasla/nextjs-theme-kit";

function SignUpPage() {
    return (
        <form
            className={twMerge(
                ["w-full", "max-w-lg", "p-10"],
                ["flex", "flex-col", "items-center", "gap-5"],
                ["rounded-2xl", "backdrop-blur-lg", "backdrop-brightness-125"],
            )}>
            <div className={twMerge("text-2xl", "font-bold", "mb-10")}>Sign Up</div>
            <Input fullWidth={true} label={"Username"} size={"large"} />
            <Input fullWidth={true} label={"Password"} type={"password"} size={"large"} />
            <Input
                className={twMerge(["mb-10"])}
                fullWidth={true}
                label={"Confirm Password"}
                type={"password"}
                size={"large"}
            />
            <Button size={"large"} className={twMerge("w-full")}>
                SignUp
            </Button>
        </form>
    );
}

export default SignUpPage;

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <SignIn
        appearance={{
          elements: {
            card: "shadow-lg rounded-xl",
          },
        }}
      />
    </div>
  );
}

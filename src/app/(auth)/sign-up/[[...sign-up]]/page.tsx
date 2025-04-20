import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <SignUp
        appearance={{
          elements: {
            card: "shadow-lg rounded-xl",
          },
        }}
      />
    </div>
  );
}

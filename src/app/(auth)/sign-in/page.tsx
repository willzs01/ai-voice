import { GalleryVerticalEnd } from "lucide-react";
import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signInWithGoogle } from "@/app/actions";

export default async function LoginPage(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Voiceprinter AI.
          </a>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <form className="flex flex-col">
              <h1 className="text-2xl font-medium">Sign in</h1>
              <p className="text-sm text-foreground">
                Don&apos;t have an account?{' '}
                <Link className="text-primary font-medium underline" href="/sign-up">
                  Sign up
                </Link>
              </p>

              <div className="flex flex-col gap-4 mt-8">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      className="text-xs text-primary underline"
                      href="/forgot-password"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Your password"
                    required
                    className="mt-2"
                  />
                </div>
                <SubmitButton pendingText="Signing In..." formAction={signInAction}>
                  Sign in
                </SubmitButton>
                <FormMessage message={searchParams} />
              </div>
              <button
  formAction={signInWithGoogle}
  className="flex items-center justify-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
>
  <svg className="h-5 w-5" viewBox="0 0 24 24">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
  Continue with Google
</button>

            </form>
          </div>
        </div>
      </div>

      <div className="relative hidden bg-muted lg:block">
        <img
          src="/placeholder.webp"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

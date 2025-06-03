"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

/* ─────────────────────────  shadcn/ui  ───────────────────────── */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { NeutralLabel } from "../ui/neural-label";

/* ─────────────────────────  Props  ───────────────────────── */
export interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSignUp: () => void;
}

/* ─────────────────────────  Zod schema  ───────────────────────── */
const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Email is not valid"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
type SignInFormValues = z.infer<typeof signInSchema>;

/* ─────────────────────────  Component  ───────────────────────── */
export default function SignInModal({
  isOpen,
  onClose,
  onOpenSignUp,
}: SignInModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
    mode: "onSubmit", 
  });

  /* ───────────────  submit  ─────────────── */
  async function onSubmit(values: SignInFormValues) {
    try {
      setIsLoading(true);

      const res = await signIn("credentials", {
        ...values,      // email & password
        redirect: false,
      });

      if (res?.ok && !res?.error) {
        onClose();      // success
        // OPTIONAL: toast.success("Signed in!");
      } else {
        console.error(res?.error);
        // OPTIONAL: toast.error(res?.error ?? "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      // OPTIONAL: toast.error("Unexpected error, please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Welcome back</DialogTitle>
          <DialogDescription>
            Sign in to your account to continue
          </DialogDescription>
        </DialogHeader>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 py-4"
          >
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <NeutralLabel>Mail</NeutralLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in…
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
        </Form>

        {/* Footer */}
        <div className="text-center text-sm">
          <span className="text-muted-foreground">
            Don&#39;t have an account?{" "}
          </span>
          <Button
            variant="link"
            className="p-0"
            onClick={() => {
              onClose();
              onOpenSignUp();
            }}
          >
            Sign up
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

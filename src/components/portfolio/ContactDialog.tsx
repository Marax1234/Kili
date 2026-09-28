// src/components/portfolio/ContactDialog.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { siteConfig } from "@/content/config";
import { Mail, Send, Check, X } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactDialog = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Contact form submitted:", data);
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Message Sent Successfully! 🎉</h3>
        <p className="text-muted-foreground mb-6">
          Thanks for reaching out! I'll get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle className="flex items-center space-x-2">
          <Mail className="w-5 h-5 text-primary" />
          <span>Get in Touch</span>
        </DialogTitle>
        <DialogDescription>
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              placeholder="Your name"
              {...form.register("name")}
              className={form.formState.errors.name ? "border-red-500" : ""}
            />
            {form.formState.errors.name && (
              <p className="text-xs text-red-500">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              {...form.register("email")}
              className={form.formState.errors.email ? "border-red-500" : ""}
            />
            {form.formState.errors.email && (
              <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <Label htmlFor="subject">Subject *</Label>
          <Input
            id="subject"
            placeholder="What's this about?"
            {...form.register("subject")}
            className={form.formState.errors.subject ? "border-red-500" : ""}
          />
          {form.formState.errors.subject && (
            <p className="text-xs text-red-500">{form.formState.errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            placeholder="Tell me about your project, ideas, or just say hello..."
            className={`min-h-[120px] ${form.formState.errors.message ? "border-red-500" : ""}`}
            {...form.register("message")}
          />
          {form.formState.errors.message && (
            <p className="text-xs text-red-500">{form.formState.errors.message.message}</p>
          )}
        </div>

        {/* Project Type Suggestions */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Project Ideas (optional)</Label>
          <div className="flex flex-wrap gap-2">
            {[
              "Portrait Session",
              "Event Photography", 
              "Creative Collaboration",
              "Product Photography",
              "Just Saying Hi"
            ].map((type) => (
              <Button
                key={type}
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  const currentSubject = form.getValues("subject");
                  if (!currentSubject) {
                    form.setValue("subject", type);
                  }
                }}
                className="text-xs"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>

        {/* Additional Info */}
        <div className="text-center text-xs text-muted-foreground border-t pt-4">
          <p>
            I typically respond within 24 hours. You can also reach me directly at{" "}
            <a 
              href={`mailto:${siteConfig.author.email}`}
              className="text-primary hover:underline"
            >
              {siteConfig.author.email}
            </a>
          </p>
        </div>
      </form>
    </>
  );
};

export default ContactDialog;
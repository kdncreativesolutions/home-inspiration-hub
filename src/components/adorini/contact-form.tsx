import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight, Check, LoaderCircle, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/adorini-content";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  phone: z.string().trim().regex(/^[+\d\s()-]{8,18}$/, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address."),
  project: z.enum(["New Home", "Renovation or Extension", "Carpentry", "Other"], { errorMap: () => ({ message: "Please choose a project type." }) }),
  suburb: z.string().trim().min(2, "Please enter your suburb."),
  message: z.string().trim().min(10, "Please tell us a little more (at least 10 characters).").max(3000, "Please keep your message under 3,000 characters."),
});
type Enquiry = z.infer<typeof enquirySchema>;

export function ContactForm() {
  const [preview, setPreview] = useState<Enquiry | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Enquiry>({ resolver: zodResolver(enquirySchema) });
  async function submitEnquiry(values: Enquiry) {
    // Demonstration handler: no request is sent or stored.
    // TODO: connect verified email delivery to adorinihomes@gmail.com.
    await new Promise<void>((resolve) => window.setTimeout(resolve, 700));
    setPreview(values);
    toast.success("Your enquiry is ready to email.", { description: "Preview only — nothing has been sent. Use the email button to contact Adorini Homes." });
  }
  const emailBody = preview ? `Name: ${preview.name}\nPhone: ${preview.phone}\nEmail: ${preview.email}\nProject: ${preview.project}\nSuburb: ${preview.suburb}\n\n${preview.message}` : "";
  return <div className="contact-form">
    <h3 className="text-3xl">Let’s bring your ideas to life.</h3>
    <p className="mt-2 text-xs text-muted-foreground">A great home starts with a conversation.</p>
    <form className="mt-7" onSubmit={handleSubmit(submitEnquiry)} noValidate>
      <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
        {([{ name: "name", label: "Full name", type: "text", placeholder: "Your full name", autoComplete: "name" }, { name: "phone", label: "Phone", type: "tel", placeholder: "Your phone number", autoComplete: "tel" }, { name: "email", label: "Email address", type: "email", placeholder: "you@example.com", autoComplete: "email" }] as const).map((field) => <div key={field.name} className={field.name === "email" ? "sm:col-span-2" : ""}>
          <label className="field-label" htmlFor={field.name}>{field.label} <span className="text-primary">*</span></label>
          <input id={field.name} type={field.type} placeholder={field.placeholder} autoComplete={field.autoComplete} className="field-control" {...register(field.name)} aria-invalid={Boolean(errors[field.name])} aria-describedby={errors[field.name] ? `${field.name}-error` : undefined} />
          {errors[field.name] && <p id={`${field.name}-error`} className="field-error" role="alert">{errors[field.name]?.message}</p>}
        </div>)}
        <div>
          <label className="field-label" htmlFor="project">Project type <span className="text-primary">*</span></label>
          <select id="project" defaultValue="" className="field-control" {...register("project")} aria-invalid={Boolean(errors.project)} aria-describedby={errors.project ? "project-error" : undefined}>
            <option value="" disabled>Select your project</option>
            <option>New Home</option><option>Renovation or Extension</option><option>Carpentry</option><option>Other</option>
          </select>
          {errors.project && <p id="project-error" className="field-error" role="alert">{errors.project.message}</p>}
        </div>
        <div>
          <label className="field-label" htmlFor="suburb">Suburb <span className="text-primary">*</span></label>
          <input id="suburb" placeholder="Your suburb" autoComplete="address-level2" className="field-control" {...register("suburb")} aria-invalid={Boolean(errors.suburb)} aria-describedby={errors.suburb ? "suburb-error" : undefined} />
          {errors.suburb && <p id="suburb-error" className="field-error" role="alert">{errors.suburb.message}</p>}
        </div>
        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="message">Tell us about your project <span className="text-primary">*</span></label>
          <textarea id="message" rows={4} placeholder="Your ideas, your plans, what you’re hoping to create…" className="field-control h-28 resize-y" {...register("message")} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
          {errors.message && <p id="message-error" className="field-error" role="alert">{errors.message.message}</p>}
        </div>
      </div>
      <Button variant="timber" size="editorial" type="submit" disabled={isSubmitting} className="mt-6 w-full justify-between">{isSubmitting ? <>Preparing your enquiry <LoaderCircle className="animate-spin" /></> : <>Request a Free Quote <ArrowUpRight /></>}</Button>
      <p className="mt-3 text-center text-[10px] text-muted-foreground">Enquiry preview only. Email delivery is not connected yet.</p>
    </form>
    {preview && <div className="mt-5 border-t border-border pt-5" role="status">
      <p className="flex items-center gap-2 text-sm font-medium"><Check className="size-4 text-primary" /> Your enquiry is ready, {preview.name.split(" ")[0]}.</p>
      <p className="mt-2 text-xs text-muted-foreground">Nothing has been sent. Open your email app to send your details directly to Adorini Homes.</p>
      <Button asChild variant="editorial" className="mt-4 w-full"><a href={`mailto:${business.email}?subject=${encodeURIComponent(`Enquiry: ${preview.project} in ${preview.suburb}`)}&body=${encodeURIComponent(emailBody)}`}><Mail /> Email my enquiry</a></Button>
    </div>}
  </div>;
}
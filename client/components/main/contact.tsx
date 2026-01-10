import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Let's Get In Touch</h2>
          <p className="max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className=" p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div>rovineshutabarat23@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div>+62 85158838022</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <div>Kota Medan, Sumatera Utara</div>
                </div>
              </div>
            </div>
          </div>

          <div className=" p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
              </div>

              <div>
                <Input placeholder="Subject" />
              </div>

              <div>
                <Textarea placeholder="Your Message" rows={5} />
              </div>

              <Button className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

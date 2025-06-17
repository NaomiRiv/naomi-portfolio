import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-purple-400/5 via-blue-500/5 to-purple-500/5 border-purple-400/10">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-center">
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in discussing new opportunities,
                  challenging projects, and innovative ideas. Whether you're
                  looking for someone to join your team or collaborate on
                  research, I'd love to hear from you.
                </p>

                <Button size="lg" className=" group" asChild>
                  <a href="mailto:naomi@dotcore.co.il">
                    <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Send me an email
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

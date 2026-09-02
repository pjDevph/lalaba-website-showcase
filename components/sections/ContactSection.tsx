import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { contact } from "@/content/contact";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  const hasDirectContact = Boolean(contact.supportEmail || contact.partnershipEmail || contact.phone);
  const socials = [
    { label: "Facebook", url: contact.facebook, Icon: FaFacebookF },
    { label: "Instagram", url: contact.instagram, Icon: FaInstagram },
    { label: "TikTok", url: contact.tiktok, Icon: FaTiktok },
  ].filter((item) => item.url);

  return (
    <section id="contact" className="site-section section-anchor surface-section">
      <Container>
        <SectionHeading
          eyebrow="Contact & support"
          title="Need help with Lalaba?"
          description="This static website only displays verified contact methods that have been configured."
          align="center"
        />

        {hasDirectContact || socials.length ? (
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Support</h3>
              {contact.supportEmail ? <a href={`mailto:${contact.supportEmail}`}><Mail aria-hidden="true" />{contact.supportEmail}</a> : null}
              {contact.phone ? <a href={`tel:${contact.phone}`}><Phone aria-hidden="true" />{contact.phone}</a> : null}
              {!contact.supportEmail && !contact.phone ? <p>No verified support contact is configured yet.</p> : null}
            </div>

            <div className="contact-card">
              <h3>Business & partnerships</h3>
              {contact.partnershipEmail ? <a href={`mailto:${contact.partnershipEmail}`}><Mail aria-hidden="true" />{contact.partnershipEmail}</a> : <p>No verified partnership contact is configured yet.</p>}
            </div>

            {socials.length ? (
              <div className="contact-card">
                <h3>Social</h3>
                <div className="contact-socials">
                  {socials.map(({ label, url, Icon }) => (
                    <a href={url} key={label} target="_blank" rel="noopener noreferrer"><Icon aria-hidden="true" />{label}</a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="configured-empty-state contact-empty-state">
            Verified support, partnership, phone, and social details are not configured yet. Add them once the production contact information is confirmed.
          </div>
        )}
      </Container>
    </section>
  );
}

import { ContactCard } from "@/components/ContactCard";
import { ContactForm } from "@/components/ContactForm";
import { HeroSection } from "@/components/HeroSection";
import Image from "next/image";
import AbujaMap from "@/app/assets/images/abuja-map.webp"

export default function ContactUsPage() {
    return (
        <div className="bg-grey-800">
            <HeroSection
                eyebrow="Get In Touch"
                mainText="Contact"
                subText="Us"
                description="Have questions? Want to partner with us? Reach out"
                descriptionSubText="to the Abuja Blazers team."
            />
            <section className="min-h-dvh px-16 lg:px-45 py-30 lg:py-60">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div className="flex flex-col gap-10">
                        <p className="font-caption text-stc-200 uppercase">Send Us a Message</p>
                        <ContactForm />
                    </div>
                    <div className="flex flex-col gap-20">
                        <ContactCard>
                            <ContactCard.Title>EMAIL & PHONE</ContactCard.Title>
                            <ContactCard.Items>
                                <div className="py-18">
                                    <p className="font-title font-satoshi text-grey-250">General Inquiries & Sponsorship:<span>&nbsp;<a className="text-stc-200 hover:text-stc-200/70" href="mailto:contact@abujablazers.com">contact@abujablazers.com</a></span></p>
                                </div>
                                <div className="py-10 flex flex-col gap-7">
                                    <a href="tel:+2348034567890"
                                        className="font-title font-satoshi text-stc-200 hover:text-stc-200/70 transition-colors duration-150"
                                    >
                                        +234 803 456 7890
                                    </a>
                                    <p className="font-title font-satoshi text-grey-250">Mon – Fri, 9AM – 5PM WAT</p>
                                </div>
                            </ContactCard.Items>
                        </ContactCard>
                        <ContactCard>
                            <ContactCard.Title>Social Media</ContactCard.Title>
                            <ContactCard.Items>
                                <ContactCard.Link platform="Facebook" handle="@abujablazersff" href="https://www.facebook.com/people/Abujablazersff/61576337445464/#" />
                                <ContactCard.Link platform="Instagram" handle="@abujablazersff" href="https://instagram.com/abujablazersff" />
                                <ContactCard.Link platform="TikTok" handle="@abujablazersff" href="https://www.tiktok.com/@abujablazersff" />
                                <ContactCard.Link platform="Youtube" handle="@abujablazersff" href="https://www.youtube.com/@AbujaBlazersff" />
                            </ContactCard.Items>
                        </ContactCard>
                        <Image
                            src={AbujaMap}
                            alt="Map highlighting Abuja"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-320 object-cover rounded-2xs border-[0.5px] border-stc-200"
                        />
                    </div>
                </div>

            </section>
        </div>
    )
}
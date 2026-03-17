export function ContactCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-[0.5px] border-grey-400 bg-grey-400 py-31 px-16 lg:px-34">
      {children}
    </div>
  );
}

export function ContactCardTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-title uppercase text-grey-200">
      {children}
    </p>
  );
}

export function ContactCardItems({ children }: { children: React.ReactNode }) {
  return (
    <div className="divide-y-[0.6px] divide-grey-300">
      {children}
    </div>
  );
}

export function ContactCardItem({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-center gap-12 py-16">
      <Icon className="size-16 text-icon-active shrink-0" />
      <div className="flex flex-col gap-2">
        <span className="font-caption text-grey-300 uppercase">{label}</span>
        <span className="font-copy text-grey-100">{value}</span>
      </div>
    </div>
  );
}

export function ContactCardLink({ platform, handle, href }: { platform: string; handle: string; href: string }) {
  return (
    <p className="py-24 font-title font-satoshi text-grey-250">
      {platform}
      <span>
        &nbsp;
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-stc-200 hover:text-stc-200/70 transition-colors duration-150">
          {handle}
        </a>
      </span>
    </p>
  );
}



ContactCard.Title = ContactCardTitle;
ContactCard.Items = ContactCardItems;
ContactCard.Item = ContactCardItem;
ContactCard.Link = ContactCardLink;
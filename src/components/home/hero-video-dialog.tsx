import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block "
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/MbXpRTWCuJE?si=M2QtEgA4svPB1R2d"
        thumbnailSrc="/image.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block "
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/MbXpRTWCuJE?si=M2QtEgA4svPB1R2d"
        thumbnailSrc="/image.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}

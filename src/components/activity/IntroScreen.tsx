import { Button } from "@/components/ui/button";

interface Props {
  onNext: () => void;
}

const IntroScreen = ({ onNext }: Props) => (
  <div className="animate-fade-in-up space-y-8">
    <div className="space-y-2">
      <h1 className="text-[22px] font-heading font-medium text-foreground">
        Activities You Enjoy
      </h1>
      <p className="text-muted-foreground font-heading text-lg">
        Rediscovering Joyful Moments
      </p>
    </div>

    <div className="space-y-5 text-justified text-foreground font-body leading-relaxed">
      <p>
        When you're feeling low, anxious, or overwhelmed, it can be hard to remember what brings you joy.
      </p>
      <p>
        This activity is not about doing more. It is about noticing small moments that feel light, calm, or meaningful.
      </p>
      <p>
        There is no pressure to feel happy. We are simply exploring what feels even slightly good.
      </p>
    </div>

    <Button variant="calm" size="lg" onClick={onNext}>
      Begin
    </Button>
  </div>
);

export default IntroScreen;

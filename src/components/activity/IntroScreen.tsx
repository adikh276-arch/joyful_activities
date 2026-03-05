import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface Props {
  onNext: () => void;
}

const IntroScreen = ({ onNext }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="animate-fade-in-up space-y-8">
      <div className="space-y-2">
        <h1 className="text-[22px] font-heading font-semibold text-foreground text-center">
          {t('intro.title')}
        </h1>
        <p className="text-muted-foreground font-heading text-lg text-center">
          {t('intro.subtitle')}
        </p>
      </div>

      <div className="space-y-5 text-justified text-foreground font-body leading-relaxed">
        <p>
          {t('intro.p1')}
        </p>
        <p>
          {t('intro.p2')}
        </p>
        <p>
          {t('intro.p3')}
        </p>
      </div>

      <Button variant="calm" size="lg" onClick={onNext}>
        {t('intro.button')}
      </Button>
    </div>
  );
};

export default IntroScreen;

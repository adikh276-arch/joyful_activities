import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface Props {
  onGoHome: () => void;
}

const AffirmationScreen = ({ onGoHome }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="animate-fade-in-up space-y-8 text-center">
      <div className="space-y-4 py-8">
        <span className="text-5xl">🌸</span>
        <h1 className="text-[22px] font-heading font-semibold text-foreground">
          {t('affirmation.title')}
        </h1>
      </div>

      <div className="space-y-5 text-foreground font-body leading-relaxed px-4">
        <p className="text-lg">
          {t('affirmation.p1')}
        </p>
        <p className="text-muted-foreground">
          {t('affirmation.p2')}
        </p>
      </div>

      <Button variant="calm" size="lg" onClick={onGoHome}>
        {t('affirmation.button')}
      </Button>
    </div>
  );
};

export default AffirmationScreen;

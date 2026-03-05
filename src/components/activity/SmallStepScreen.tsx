import { Button } from "@/components/ui/button";
import ActivityInput from "./ActivityInput";
import type { ActivityData } from "@/pages/Index";
import { useTranslation } from "react-i18next";

interface Props {
  data: ActivityData;
  onChange: (fields: Partial<ActivityData>) => void;
  onGoHome: () => void;
  onSave: () => void;
}

const SmallStepScreen = ({ data, onChange, onGoHome, onSave }: Props) => {
  const { t } = useTranslation();
  const handleSave = () => {
    onSave();
  };

  return (
    <div className="animate-fade-in-up space-y-8">
      <div className="space-y-2">
        <h1 className="text-[22px] font-heading font-semibold text-foreground text-center">
          {t('smallStep.title')}
        </h1>
      </div>

      <div className="space-y-5 text-justified text-foreground font-body leading-relaxed">
        <p>{t('smallStep.p1')}</p>
        <p>{t('smallStep.p2')}</p>
      </div>

      <ActivityInput
        label={t('smallStep.input1_label')}
        value={data.smallStep}
        onChange={(v) => onChange({ smallStep: v })}
        placeholder={t('smallStep.input1_placeholder')}
      />

      <div className="space-y-3">
        <Button variant="calm" size="lg" onClick={handleSave}>
          {t('smallStep.button_save')}
        </Button>
        <Button variant="calmOutline" size="lg" onClick={onGoHome}>
          {t('smallStep.button_home')}
        </Button>
      </div>
    </div>
  );
};

export default SmallStepScreen;

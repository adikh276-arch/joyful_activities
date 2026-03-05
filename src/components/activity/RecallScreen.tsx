import { Button } from "@/components/ui/button";
import ActivityInput from "./ActivityInput";
import type { ActivityData } from "@/pages/Index";
import { useTranslation } from "react-i18next";

interface Props {
  data: ActivityData;
  onChange: (fields: Partial<ActivityData>) => void;
  onNext: () => void;
}

const RecallScreen = ({ data, onChange, onNext }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="animate-fade-in-up space-y-8">
      <div className="space-y-2">
        <h1 className="text-[22px] font-heading font-semibold text-foreground text-center">
          {t('recall.title')}
        </h1>
      </div>

      <p className="text-justified text-foreground font-body leading-relaxed">
        {t('recall.p1')}
      </p>

      <div className="space-y-6">
        <ActivityInput
          label={t('recall.input1_label')}
          value={data.activity}
          onChange={(v) => onChange({ activity: v })}
          placeholder={t('recall.input1_placeholder')}
        />
        <ActivityInput
          label={t('recall.input2_label')}
          value={data.feeling}
          onChange={(v) => onChange({ feeling: v })}
          placeholder={t('recall.input2_placeholder')}
        />
      </div>

      <Button variant="calm" size="lg" onClick={onNext}>
        {t('recall.button')}
      </Button>
    </div>
  );
};

export default RecallScreen;

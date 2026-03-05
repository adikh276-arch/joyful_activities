import { Button } from "@/components/ui/button";
import ActivityInput from "./ActivityInput";
import type { ActivityData } from "@/pages/Index";
import { useTranslation } from "react-i18next";

interface Props {
  data: ActivityData;
  onChange: (fields: Partial<ActivityData>) => void;
  onNext: () => void;
}

const MeaningScreen = ({ data, onChange, onNext }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="animate-fade-in-up space-y-8">
      <div className="space-y-2">
        <h1 className="text-[22px] font-heading font-semibold text-foreground text-center">
          {t('meaning.title')}
        </h1>
      </div>

      <p className="text-justified text-foreground font-body leading-relaxed">
        {t('meaning.p1')}
      </p>

      <div className="space-y-6">
        <ActivityInput
          label={t('meaning.input1_label')}
          value={data.enjoyBecause}
          onChange={(v) => onChange({ enjoyBecause: v })}
          placeholder={t('meaning.input1_placeholder')}
        />
        <ActivityInput
          label={t('meaning.input2_label')}
          value={data.feelsMore}
          onChange={(v) => onChange({ feelsMore: v })}
          placeholder={t('meaning.input2_placeholder')}
        />
        <ActivityInput
          label={t('meaning.input3_label')}
          value={data.remindsOf}
          onChange={(v) => onChange({ remindsOf: v })}
          placeholder={t('meaning.input3_placeholder')}
        />
      </div>

      <Button variant="calm" size="lg" onClick={onNext}>
        {t('meaning.button')}
      </Button>
    </div>
  );
};

export default MeaningScreen;

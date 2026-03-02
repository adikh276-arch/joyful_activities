import { Button } from "@/components/ui/button";
import ActivityInput from "./ActivityInput";
import type { ActivityData } from "@/pages/Index";

interface Props {
  data: ActivityData;
  onChange: (fields: Partial<ActivityData>) => void;
  onGoHome: () => void;
}

const SmallStepScreen = ({ data, onChange, onGoHome }: Props) => {
  const handleSave = () => {
    // Could persist data here
    onGoHome();
  };

  return (
    <div className="animate-fade-in-up space-y-8">
      <div className="space-y-2">
        <h1 className="text-[22px] font-heading font-medium text-foreground">
          A Small Step Forward
        </h1>
      </div>

      <div className="space-y-5 text-justified text-foreground font-body leading-relaxed">
        <p>You do not need to change everything at once.</p>
        <p>Would it feel possible to reconnect with this activity in a small way?</p>
      </div>

      <ActivityInput
        label="One small step I could take this week is..."
        value={data.smallStep}
        onChange={(v) => onChange({ smallStep: v })}
        placeholder="e.g. go for a 10-minute walk"
      />

      <div className="space-y-3">
        <Button variant="calm" size="lg" onClick={handleSave}>
          Save
        </Button>
        <Button variant="calmOutline" size="lg" onClick={onGoHome}>
          Skip for Now
        </Button>
        <Button variant="calmOutline" size="lg" onClick={onGoHome}>
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default SmallStepScreen;

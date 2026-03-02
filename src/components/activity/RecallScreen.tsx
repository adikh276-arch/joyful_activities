import { Button } from "@/components/ui/button";
import ActivityInput from "./ActivityInput";
import type { ActivityData } from "@/pages/Index";

interface Props {
  data: ActivityData;
  onChange: (fields: Partial<ActivityData>) => void;
  onNext: () => void;
}

const RecallScreen = ({ data, onChange, onNext }: Props) => (
  <div className="animate-fade-in-up space-y-8">
    <div className="space-y-2">
      <h1 className="text-[22px] font-heading font-medium text-foreground">
        Think About a Moment
      </h1>
    </div>

    <p className="text-justified text-foreground font-body leading-relaxed">
      Take a moment to remember a time — recent or distant — when you felt even a small sense of enjoyment, peace, or comfort. It does not have to be big.
    </p>

    <div className="space-y-6">
      <ActivityInput
        label="One activity I enjoy (or used to enjoy) is..."
        value={data.activity}
        onChange={(v) => onChange({ activity: v })}
        placeholder="e.g. walking in the park"
      />
      <ActivityInput
        label="When I do this, I usually feel..."
        value={data.feeling}
        onChange={(v) => onChange({ feeling: v })}
        placeholder="e.g. calm and present"
      />
    </div>

    <Button variant="calm" size="lg" onClick={onNext}>
      Continue
    </Button>
  </div>
);

export default RecallScreen;

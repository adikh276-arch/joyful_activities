import { Button } from "@/components/ui/button";
import ActivityInput from "./ActivityInput";
import type { ActivityData } from "@/pages/Index";

interface Props {
  data: ActivityData;
  onChange: (fields: Partial<ActivityData>) => void;
  onNext: () => void;
}

const MeaningScreen = ({ data, onChange, onNext }: Props) => (
  <div className="animate-fade-in-up space-y-8">
    <div className="space-y-2">
      <h1 className="text-[22px] font-heading font-medium text-foreground">
        What Makes It Meaningful?
      </h1>
    </div>

    <p className="text-justified text-foreground font-body leading-relaxed">
      Sometimes the activity itself is not the only source of joy. It may be the feeling, the environment, or the connection around it.
    </p>

    <div className="space-y-6">
      <ActivityInput
        label="I enjoy this because..."
        value={data.enjoyBecause}
        onChange={(v) => onChange({ enjoyBecause: v })}
        placeholder="e.g. it gives me a sense of freedom"
      />
      <ActivityInput
        label="This activity helps me feel more..."
        value={data.feelsMore}
        onChange={(v) => onChange({ feelsMore: v })}
        placeholder="e.g. connected and grounded"
      />
      <ActivityInput
        label="It reminds me of..."
        value={data.remindsOf}
        onChange={(v) => onChange({ remindsOf: v })}
        placeholder="e.g. summers as a child"
      />
    </div>

    <Button variant="calm" size="lg" onClick={onNext}>
      Save My Reflection
    </Button>
  </div>
);

export default MeaningScreen;

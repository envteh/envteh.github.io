import { processSteps } from "../../data/DataHome";
import { InfoCard } from "./InfoCard";

export function ProcessSteps() {
  return (
    <InfoCard title="Proses Pengerjaan">
      <div className="space-y-8">
        {processSteps.map((step) => (
          <div key={step.id} className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
              {step.id}
            </div>
            <div>
              <h4 className="mb-1 text-lg leading-none font-bold">
                {step.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </InfoCard>
  );
}

import { advantages } from "../../data/DataHome";
import { InfoCard } from "./InfoCard";

export function Advantages() {
  return (
    <InfoCard title="Keunggulan" delay={0.1}>
      <div className="space-y-8">
        {advantages.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-start gap-5">
              <div className="mt-0.5 shrink-0">
                <Icon className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h4 className="mb-1 text-lg leading-none font-bold">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </InfoCard>
  );
}

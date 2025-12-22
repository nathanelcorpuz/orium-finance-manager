import { balRangePreference } from "@/utils/mockBalRangePreference";
import { mockForecastData } from "@/utils/mockForecastData";

const low = balRangePreference.low;
const avg = balRangePreference.avg;

let formatter = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export default function Forecast() {
  return (
    <main className="p-8 flex flex-col gap-4 w-full text-xs">
      {mockForecastData.map((year) => {
        return (
          <div
            key={year.year}
            className="flex flex-col bg-blue-100 p-4 rounded-xl w-full gap-2"
          >
            <p className="text-gray-500 font-bold">{year.year}</p>
            <div className="flex justify-between">
              {year.months.map((month) => {
                const isLowestLow = month.lowest < low;
                const isLowestAverage =
                  month.lowest >= low && month.lowest < avg;

                const isHighestLow = month.highest < low;
                const isHighestAverage =
                  month.highest >= low && month.highest < avg;

                return (
                  <div
                    key={month.month + month.highest}
                    className="gap-1 flex flex-col"
                  >
                    <p className="text-gray-500">{month.month}</p>
                    <div
                      className={`p-1 rounded-lg 
                      ${
                        isHighestLow
                          ? "bg-black"
                          : isHighestAverage
                          ? "bg-white"
                          : "bg-green-200"
                      }
                      bg-gray-400`}
                    >
                      <p className="">{formatter.format(month.highest)}</p>
                    </div>
                    <div
                      className={`p-1 rounded-lg 
                      ${
                        isLowestLow
                          ? "bg-black"
                          : isLowestAverage
                          ? "bg-white"
                          : "bg-green-200"
                      }
                      bg-gray-400`}
                    >
                      <p className="">{formatter.format(month.lowest)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
}

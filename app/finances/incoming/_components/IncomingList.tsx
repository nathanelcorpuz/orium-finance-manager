import { Account, Finance } from "@/utils/types";
import { format } from "date-fns";

export default function IncomingList({
  list,
  accounts,
}: {
  list: Finance[];
  accounts: Account[];
}) {
  return (
    <div>
      {list.map((incoming) => {
        return (
          <div key={incoming.id}>
            <p>{incoming.name}</p>
            <p>{incoming.amount}</p>
            <p>
              {accounts.find((a) => incoming.account === a.id)?.name ||
                "No account linked"}
            </p>
            <p>{incoming.frequency}</p>
            <p>{format(incoming.startDate, "MMM dd, yyyy")}</p>
            <p>{format(incoming.endDate, "MMM dd, yyyy")}</p>
            <p>{incoming.daysOfWeek}</p>
            <p>{incoming.dayOfMonth}</p>
            <p>{incoming.customFrequency}</p>
            <p>{incoming.customFrequencyNumber}</p>
            <p>{incoming.ends}</p>
            <p>
              {incoming.endsOnDate !== null
                ? format(incoming.endsOnDate, "MMM dd, yyyy")
                : null}
            </p>
            <p>{incoming.endsAfterOccurrences}</p>
          </div>
        );
      })}
    </div>
  );
}

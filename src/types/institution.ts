export interface Institution {
  id: string;
  name: string;
  district: string;
  type: "Govt. Aided" | "Private Self-Financing" | "Government";
  code: string;
  isNBAAccredited: boolean;
  icon: string;
}

export interface AffiliationNotification {
  id: string;
  title: string;
  date: string;
  isHighlighted: boolean;
}
